/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
/*global Promise */

sap.ui.define([ "sap/ui/fl/Change", "sap/ui/fl/DefaultVariant", "sap/ui/fl/Utils", "jquery.sap.global", "sap/ui/fl/LrepConnector", "sap/ui/fl/Cache" ], function(Change, defaultVariant, Utils, $, LRepConnector, Cache) {

	/**
	 * @constructor
	 * @class Helper object to access a change from the backend. Access helper object for each change (and variant) which was fetched from the backend
	 * @param {sap.ui.core.Control} oControl - the control for which the changes should be fetched
	 * @param {string} [sStableIdPropertyName='id'] the stable id
	 * @experimental Since 1.25.0
	 * @name sap.ui.fl.Persistence
	 *
	 * @author SAP SE
	 * @version ${version}
	 * @experimental Since 1.25.0
	 *
	 */
	var Persistence = function(oControl, sStableIdPropertyName) {
		this._oControl = oControl;
		this._bHasLoadedChangesFromBackend = false;

		this._sStableIdPropertyName = sStableIdPropertyName || 'id';
		this._sStableId = this._getStableId();

		this._sComponentName = Utils.getComponentClassName(oControl);
		if (!this._sComponentName) {
			jQuery.sap.log.error("The Control does not belong to a SAPUI5 component. Variants and Changes for this control might not work as expected.");
		}
		this._oChanges = {};

		this._oConnector = this._createLrepConnector();
	};

	/**
	 * Creates a new instance of the LRepConnector
	 *
	 * @private
	 */
	Persistence.prototype._createLrepConnector = function() {
		var sXsrfToken, mParams;
		sXsrfToken = Utils.getXSRFTokenFromControl(this._oControl);
		mParams = {XsrfToken : sXsrfToken};
		return new LRepConnector(mParams);
	};

	/**
	 * Determines the value of the stable id property of the control
	 * @returns {String} Stable Id
	 * @private
	 */
	Persistence.prototype._getStableId = function() {
		if (!this._oControl){
			return;
		}

		if ((this._sStableIdPropertyName) &&  (this._sStableIdPropertyName !== 'id')) {
			return this._oControl.getProperty(this._sStableIdPropertyName);
		}
		return this._oControl.getId();
	};

	/**
	 * Calls the backend asynchronously and fetches all changes and variants which point to this control
	 * in the same component.
	 *
	 * @see sap.ui.fl.Change
	 * @returns {Promise} with parameter <code>aResults</code> which is a map of sap.ui.fl.Variant and sap.ui.fl.Change
	 *
	 * @public
	 * @name sap.ui.fl.Persistence#getChanges
	 * @function
	 */
	Persistence.prototype.getChanges = function() {
		var that = this;
		var sComponentName = this._sComponentName;
		if (this._bHasLoadedChangesFromBackend === true){
			return Promise.resolve(this._oChanges);
		}
		return Cache.getChangesFillingCache(this._oConnector, sComponentName).then(function(oFile){
			that._fillRelevantChanges(oFile);
			that._bHasLoadedChangesFromBackend = true;
			return that._oChanges;
		});
	};

	/**
	 * Fill the map of <code>sap.ui.fl.Change</code> with all relevant changes
	 *
	 * @param {object} oFile
	 *
	 * @see sap.ui.fl.Change
	 * @private
	 */
	Persistence.prototype._fillRelevantChanges = function(oFile) {
		var aChangeList, len, oChangeContent, oSelector, oChange, j, sChangeId, that;
		that = this;
		if (oFile && oFile.changes && oFile.changes.changes) {
			aChangeList = oFile.changes.changes;
            len = aChangeList.length;
            for (j = 0; j < len; j++) {
				oChangeContent = aChangeList[j];
				oSelector = oChangeContent.selector;
				if (oSelector) {
					// filter out only controls of the current 
					jQuery.each(oSelector, function(id, value) {
						if (that._sStableId === value) {
							oChange = new Change(oChangeContent, jQuery.proxy(that._deleteChange, that));
							sChangeId = oChange.getId();
							if(oChange.isValid()) {
								if(that._oChanges[sChangeId]){
									jQuery.sap.log.error("Id collision - two or more change files having the same id detected: " + sChangeId);
									jQuery.each(oChange.getDefinition().texts, function(key, text) {
										jQuery.sap.log.error("key : " + key + " and text : " + text.value);
									});
									jQuery.sap.log.error("already exists in change : ");
									jQuery.each(that._oChanges[sChangeId].getDefinition().texts, function(key, text) {
										jQuery.sap.log.error("key : " + key + " and text : " + text.value);
									});
								}
								that._oChanges[sChangeId] = oChange;
							}
							return false;
						}
					});
				}
			}
		}
	};

	/**
	 * Returns the change for the provided id.
	 *
	 * @see sap.ui.fl.Change
	 * @param {string} sId - the id of the change to get
	 * @returns {sap.ui.fl.Change} the found change
	 * @public
	 * @function
	 * @name sap.ui.fl.Persistence#getChange
	 */
	Persistence.prototype.getChange = function(sId) {
		if (!sId) {
			jQuery.sap.log.error("sap.ui.fl.Persistence.getChange : sId is not defined");
		}

		return this._oChanges[sId];
	};

	/**
	 * Adds a new change (could be variant as well) and returns the id of the new change.
	 *
	 * @param {object} mParameters map of parameters, see below
	 * @param {string} mParameters.type - type <filterVariant, tableVariant, etc>
	 * @param {string} mParameters.ODataService - name of the OData service --> can be null
	 * @param {object} mParameters.texts - map object with all referenced texts within the file these texts will be connected to the translation process
	 * @param {object} mParameters.content - content of the new change
	 * @param {boolean} mParameters.isVariant - indicates if the change is a variant
	 * @param {string} mParameters.packageName - <optional> package name for the new entity <default> is $tmp
	 * @param {boolean} mParameters.isUserDependent - indicates if a change is only valid for the current user
	 * @returns {string}
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Persistence#addChange
	 */
	Persistence.prototype.addChange = function(mParameters) {
		var oFile, oInfo, oChange, mInternalTexts;

		if (!mParameters) {
			return;
		}
		if (!mParameters.type) {
			jQuery.sap.log.error("sap.ui.fl.Persistence.addChange : type is not defined");
		}
		if (!mParameters.ODataService) {
			jQuery.sap.log.error("sap.ui.fl.Persistence.addChange : ODataService is not defined");
		}
		var sContentType = jQuery.type(mParameters.content);
		if (sContentType !== 'object' && sContentType !== 'array' ) {
			jQuery.sap.log.error("mParameters.content is not of expected type object or array, but is: " + sContentType, "sap.ui.fl.Persistence#addChange");
		}
		// convert the text object to the internal structure
		mInternalTexts = {};
		if (typeof (mParameters.texts) === "object") {
			jQuery.each(mParameters.texts, function(id, text) {
				mInternalTexts[id] = {
					value: text,
					type: "XFLD"
				};
			});
		}

		oInfo = {
			changeType: mParameters.type,
			service: mParameters.ODataService,
			texts: mInternalTexts,
			content: mParameters.content,
			componentName: this._sComponentName,
			isVariant: mParameters.isVariant,
			namespace: this._sComponentName,
			packageName: mParameters.packageName,
			isUserDependent: mParameters.isUserDependent
		};

		oInfo.selector = this._getSelector();
		oFile = Change.createInitialFileContent(oInfo);

		oChange = new Change(oFile, jQuery.proxy(this._deleteChange, this));
		this._oChanges[oChange.getId()] = oChange;

		return oChange.getId();
	};

	/**
	 * Returns a selector filled with the stableIdPropertyName and its value.
	 *
	 * @returns {Object} selector
	 * @private
	 */
	Persistence.prototype._getSelector = function() {
		var mSelector;
		mSelector = {};
		if (this._sStableIdPropertyName) {
			mSelector[this._sStableIdPropertyName] = this._sStableId;
		}
		return mSelector;
	};

	/**
	 * Retrieves the default variant for the current control
	 *
	 * @returns {String} id of the default variant
	 * @function
	 * @public
	 * @name sap.ui.fl.Persistence#getDefaultVariantId
	 */
	Persistence.prototype.getDefaultVariantId = function() {
		return this.getChanges().then(function(oChanges) {
			return defaultVariant.getDefaultVariantId(oChanges);
		});
	};

	/**
	 * Retrieves the default variant for the current control synchronously. WARNING: It is the responsibility of the consumer to make sure, that the
	 * changes have already been retrieved with getChanges. It's recommended to use the async API getDefaultVariantId which works regardless of any
	 * preconditions.
	 *
	 * @returns {String} id of the default variant
	 * @public
	 * @name sap.ui.fl.Persistence#getDefaultVariantIdSync
	 * @function
	 */
	Persistence.prototype.getDefaultVariantIdSync = function() {
		return defaultVariant.getDefaultVariantId(this._oChanges);
	};

	/**
	 * Sets the default variant for the current control. A new change object is created or an existing is updated. This change object is kept in memory
	 * and can be flushed using saveAll. WARNING: It is the responsibility of the consumer to make sure, that the changes have already been retrieved
	 * with getChanges. It's recommended to use the async API setDefaultVariantIdId which works regardless of any preconditions.
	 *
	 * @param {string} sDefaultVariantId - the ID of the new default variant
	 *
	 * @returns {Object} the default variant change
	 *
	 * @public
	 * @name sap.ui.fl.Persistence#setDefaultVariantIdSync
	 * @function
	 */
	Persistence.prototype.setDefaultVariantIdSync = function(sDefaultVariantId) {
		var mParameters, oChange;

		var selector = {};
		selector[this._sStableIdPropertyName] = this._sStableId;

		mParameters = {
			defaultVariantId: sDefaultVariantId,
			component: this._sComponentName,
			selector: selector
		};

		oChange = defaultVariant.updateDefaultVariantId(this._oChanges, sDefaultVariantId);

		if (oChange) {
			return oChange;
		}

		oChange = defaultVariant.createChangeObject(mParameters, this._deleteChange.bind(this));
		this._oChanges[oChange.getId()] = oChange;
		return oChange;
	};

	/**
	 * Sets the default variant for the current control. A new change object is created or an existing is updated. This change object is kept in memory
	 * and can be flushed using saveAll.
	 *
	 * @param {string} sDefaultVariantId - the ID of the new default variant
	 *
	 * @returns {Promise} the default variant change
	 *
	 * @public
	 * @name sap.ui.fl.Persistence#setDefaultVariantId
	 * @function
	 */
	Persistence.prototype.setDefaultVariantId = function(sDefaultVariantId) {
		var mParameters, oChange;
		var that = this;

		return this.getChanges().then(function(oChanges) {
			var selector = {};
			selector[that._sStableIdPropertyName] = that._sStableId;

			mParameters = {
				defaultVariantId: sDefaultVariantId,
				component: that._sComponentName,
				selector: selector
			};

			oChange = defaultVariant.updateDefaultVariantId(oChanges, sDefaultVariantId);

			if (oChange) {
				return oChange;
			}

			oChange = defaultVariant.createChangeObject(mParameters, that._deleteChange.bind(that));
			oChanges[oChange.getId()] = oChange;
			return oChange;
		});
	};

	/**
	 * Saves/flushes all current changes to the backend.
	 *
	 * @returns {Promise} resolving with an array of responses or rejecting with the first error
	 *
	 * @public
	 * @name sap.ui.fl.Persistence#saveAll
	 * @function
	 */
	Persistence.prototype.saveAll = function() {
		var aPromises = [];
		var that = this;
		jQuery.each(this._oChanges, function(id, oChange) {
			switch (oChange.getPendingAction()) {
				case "NEW":
					aPromises.push(that._oConnector.create(oChange.getDefinition(), oChange.getRequest(), oChange.isVariant())
							.then(function(result) {
								oChange.setResponse(result.response);
								if(Cache.isActive()) {
									Cache.addChange(oChange.getComponent(), result.response);
								}
								return result;
					}));
					break;
				case "UPDATE":
					aPromises.push(that._oConnector.update(oChange.getDefinition(), oChange.getId(), oChange.getRequest(), oChange.isVariant())
							.then(function(result) {
								oChange.setResponse(result.response);
								if(Cache.isActive()) {
									Cache.updateChange(oChange.getComponent(), result.response);
								}
								return result;
					}));
					break;
				case "DELETE":
					aPromises.push(that._oConnector.deleteChange({
						sChangeName: oChange.getId(),
						sLayer: oChange.getLayer(),
						sNamespace: oChange.getNamespace(),
						sChangelist: oChange.getRequest()
					}, oChange.isVariant()).then(function(result) {
						delete that._oChanges[oChange.getId()];
						if(Cache.isActive()) {
							Cache.deleteChange(oChange.getComponent(), oChange.getDefinition());
						}
						return result;
					}));
					break;
				default:
					break;
			}
		});

		// TODO Consider not rejecting with first error, but wait for all promises and collect the results
		return Promise.all(aPromises);
	};

	/**
	 * Removes the change from the internal changes map
	 *
	 * @param sId - the change to remove
	 * @private
	 */
	Persistence.prototype._deleteChange = function(sId) {
		var oChange = this.getChange(sId);
		if (oChange.getPendingAction() === "NEW") {
			delete this._oChanges[sId];
		}
	};

	return Persistence;
}, /* bExport= */true);
