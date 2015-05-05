/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
/*global Promise */

sap.ui.define([ "sap/ui/fl/Utils" ], function(Utils) {
	/**
	 * @constructor
	 * @name sap.ui.fl.Change
	 * @class A change object based on the json data with dirty handling.
	 * @param {object} oFile - file content and admin data
	 * @param {function} fDeleteChange - function callback with the id parameter, for marking the change for deletion
	 *
	 * @author SAP SE
	 * @version ${version}
	 * @experimental Since 1.25.0
	 */
	var Change = function(oFile, fDeleteChange) {
		if (typeof (oFile) !== "object") {
			jQuery.sap.log.error("Constructor : sap.ui.fl.Change : oFile is not defined");
		}
		if (typeof (fDeleteChange) !== "function") {
			jQuery.sap.log.error("Constructor : sap.ui.fl.Change : fDeleteChange is not defined");
		}
		if (!oFile.layer) {
			jQuery.sap.log.error("Constructor : sap.ui.fl.Change : oFile.layer is not defined");
		}

		this._oDefinition = oFile;
		this._oOriginDefinition = JSON.parse(JSON.stringify(oFile));
		this._sRequest = '';
		this._fDelete = fDeleteChange;
		this._bIsDeleted = false;
		this._bUserDependent = (oFile.layer === "USER");
	};

	/**
	 * Returns if the change protocol is valid
	 * @returns {boolean}
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Change#isValid
	 */
	Change.prototype.isValid = function() {
		var bIsValid = true;
		
		if (typeof(this._oDefinition) !== "object") {
			bIsValid = false;
		}
		if (typeof (this._fDelete) !== "function") {
			bIsValid = false;
		}
		if (!this._oDefinition.fileType) {
			bIsValid = false;
		}
		if (!this._oDefinition.fileName) {
			bIsValid = false;
		}
		if (!this._oDefinition.changeType) {
			bIsValid = false;
		}
		if (!this._oDefinition.layer) {
			bIsValid = false;
		}
		if (!this._oDefinition.originalLanguage) {
			bIsValid = false;
		}
		
		return bIsValid;
	};

	/**
	 * Returns if the change is of type variant
	 * @returns {boolean}
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Change#isVariant
	 */
	Change.prototype.isVariant = function() {
		return this._oDefinition.fileType === "variant";
	};

	/**
	 * Returns the change type
	 *
	 * @returns {String}
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Change#getChangeType
	 */
	Change.prototype.getChangeType = function() {
		if (this._oDefinition) {
			if (this._oDefinition.changeType) {
				return this._oDefinition.changeType;
			} else if (this._oDefinition.type) {
				return this._oDefinition.type;
			}
		}

	};

	/**
	 * Returns the the original language in ISO 639-1 format
	 *
	 * @returns {String}
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Change#getOriginalLanguage
	 */
	Change.prototype.getOriginalLanguage = function() {
		if (this._oDefinition && this._oDefinition.originalLanguage) {
			return this._oDefinition.originalLanguage;
		}
		return "";
	};

	/**
	 * Returns the abap package name
	 * @returns {string}
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Change#getPackage
	 */
	Change.prototype.getPackage = function() {
		return this._oDefinition.packageName;
	};

	/**
	 * Returns the namespace. The changes' namespace is
	 * also the namespace of the change file in the repository.
	 *
	 * @returns {String}
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Change#getNamespace
	 */
	Change.prototype.getNamespace = function() {
		return this._oDefinition.namespace;
	};

	/**
	 * Returns the id of the change
	 * @returns {string}
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Change#getId
	 */
	Change.prototype.getId = function() {
		return this._oDefinition.fileName;
	};

	/**
	 * Returns the content section of the change
	 * @returns {string}
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Change#getContent
	 */
	Change.prototype.getContent = function() {
		return this._oDefinition.content;
	};

	/**
	 * Sets the object of the content attribute
	 * 
	 * @param {object} oContent
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Change#setContent
	 */
	Change.prototype.setContent = function(oContent) {
		this._oDefinition.content = oContent;
	};

	/**
	 * Returns the selector from the file content
	 * @returns {object} selector in format selectorPropertyName:selectorPropertyValue
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Change#getSelector
	 */
	Change.prototype.getSelector = function() {
		return this._oDefinition.selector;
	};

	/**
	 * Returns the text in the current language for a given id
	 *
	 * @param {string} sTextId
	 * 				text id which was used as part of the <code>oTexts</code> object
	 * @returns {string}
	 *
	 * @function
	 * @name sap.ui.fl.Change#getText
	 * @public
	 */
	Change.prototype.getText = function(sTextId) {
		if (typeof (sTextId) !== "string") {
			jQuery.sap.log.error("sap.ui.fl.Change.getTexts : sTextId is not defined");
		}
		if (this._oDefinition.texts) {
			if (this._oDefinition.texts[sTextId]) {
				return this._oDefinition.texts[sTextId].value;
			}
		}
		return "";
	};

	/**
	 * Sets the new text for the given text id
	 *
	 * @param {string} sTextId
	 * 				text id which was used as part of the <code>oTexts</code> object
	 * @param {string} sNewText
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Change#setText
	 */
	Change.prototype.setText = function(sTextId, sNewText) {
		if (typeof (sTextId) !== "string") {
			jQuery.sap.log.error("sap.ui.fl.Change.setTexts : sTextId is not defined");
			return;
		}
		if (this._oDefinition.texts) {
			if (this._oDefinition.texts[sTextId]) {
				this._oDefinition.texts[sTextId].value = sNewText;
			}
		}
	};

	/**
	 * Returns true if the current layer is the same as the layer
	 * in which the change was created or the change is from the
	 * end-user layer and for this user created.
	 * @returns {boolean}
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Change#isReadOnly
	 */
	Change.prototype.isReadOnly = function() {	
		var bIsReadOnly = false;
		if ( this._isReadOnlyDueToLayer() ){
			bIsReadOnly = true;
		}else if ( this._isReadOnlyDueToOriginalLanguage() ){
			bIsReadOnly = true;
		}
		return bIsReadOnly;
	};
	
	/**
	 *Returns true if the label is editable because text was created
	 * in the same language as the user is logged in now else false.
	 *
	 * @returns {boolean}
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Change#isLabelEditable
	 */
	Change.prototype.isLabelEditable = function(){
		return this._isReadOnlyDueToOriginalLanguage();
	};
	
	/**
	 * Returns the modification flags of the change
	 * R: read-only, no write and delete possible
	 * RD: read and delete possible, no write
	 * RDW: read/delete/write is possible
	 *
	 * @returns {string}
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Change#getModificationFlags
	 */
	Change.prototype.getModificationFlags = function(){
		var sFlags = 'RDW'; //read/delete/write as the default
		if ( this._isReadOnlyDueToLayer() ){
			sFlags = 'R'; //read-only because the change is not located in the currently writable layer
		}else if ( this._isReadOnlyDueToOriginalLanguage() ){
			sFlags = 'RD'; //read/delete because the original language of the change does not match the current logon language
		}
		return sFlags;
	};

	/**
	 * Checks if the layer allows modifiying the file
	 * @returns {boolean}
	 *
	 * @private
	 */
	Change.prototype._isReadOnlyDueToLayer = function() {
		var sCurrentLayer;
		sCurrentLayer = Utils.getCurrentLayer(this._bUserDependent);
		return (this._oDefinition.layer !== sCurrentLayer);
	};

	/**
	 * A change can only be modified if the current language equals the original language.
	 * Returns false if the current language does not equal the original language of the change file.
	 * Returns false if the original language is initial.
	 *
	 * @returns {boolean}
	 *
	 * @private
	 */
	Change.prototype._isReadOnlyDueToOriginalLanguage = function() {
		var sCurrentLanguage, sOriginalLanguage;

		sOriginalLanguage = this.getOriginalLanguage();
		if (!sOriginalLanguage) {
			return false;
		}

		sCurrentLanguage = Utils.getCurrentLanguage();
		return (sCurrentLanguage !== sOriginalLanguage);
	};

	/**
	 * Deletes the current change and creates a new one in the company wide layer
	 *
	 * @function
	 * @name sap.ui.fl.Change#markForDeletion
	 * @public
	 */
	Change.prototype.markForDeletion = function() {
		this._bIsDeleted = true;
		this._fDelete(this.getId());
	};

	/**
	 * Determines if the Change has to be updated to the backend
	 * @private
	 */
	Change.prototype._isDirty = function() {
		var sCurrentDefinition = JSON.stringify(this._oDefinition);
		var sOriginDefinition = JSON.stringify(this._oOriginDefinition);

		return (sCurrentDefinition !== sOriginDefinition);
	};

	/**
	 * Sets the transport request
	 *
	 * @param {string} sRequest
	 *
	 * @function
	 * @name sap.ui.fl.Change#setRequest
	 * @public
	 */
	Change.prototype.setRequest = function(sRequest) {
		if (typeof (sRequest) !== "string") {
			jQuery.sap.log.error("sap.ui.fl.Change.setRequest : sRequest is not defined");
		}
		this._sRequest = sRequest;
	};

	/**
	 * Gets the transport request
	 *
	 * @function
	 * @name sap.ui.fl.Change#getRequest
	 * @public
	 */
	Change.prototype.getRequest = function() {
		return this._sRequest;
	};

	/**
	 * Gets the layer type for the change
	 *
	 * @function
	 * @name sap.ui.fl.Change#getLayer
	 * @public
	 */
	Change.prototype.getLayer = function() {
		return this._oDefinition.layer;
	};

	/**
	 * Gets the component for the change
	 *
	 * @function
	 * @name sap.ui.fl.Change#getComponent
	 * @public
	 */
	Change.prototype.getComponent = function() {
		return this._oDefinition.component;
	};

	/**
	 * Gets the creation timestamp
	 *
	 * @returns {String} creation timestamp
	 *
	 * @function
	 * @name sap.ui.fl.Change#getCreation
	 * @public
	 */
	Change.prototype.getCreation = function() {
		return this._oDefinition.creation;
	};

	/**
	 * Returns true if the change is user dependent
	 *
	 * @function
	 * @name sap.ui.fl.Change#isUserDependent
	 * @public
	 */
	Change.prototype.isUserDependent = function() {
		return (this._bUserDependent);
	};

	/**
	 * Returns the pending action on the change item
	 *
	 * @function
	 * @name sap.ui.fl.Change#getPendingAction
	 * @public
	 */
	Change.prototype.getPendingAction = function() {
		if (this._bIsDeleted) {
			return "DELETE";
		} else if (!this._oDefinition.creation) {
			return "NEW";
		} else if (this._isDirty() === true) {
			return "UPDATE";
		}
		return "NONE";
	};

	/**
	 * Gets the JSON definition of the change
	 *
	 * @function
	 * @name sap.ui.fl.Change#getDefinition
	 * @public
	 */
	Change.prototype.getDefinition = function() {
		return this._oDefinition;
	};
	
	/**
	 * Set the response from the backend after saving the change
	 *
	 * @function
	 * @name sap.ui.fl.Change#setResponse
	 * @public
	 */
	Change.prototype.setResponse = function(oResponse){		
		var sResponse = JSON.stringify(oResponse);
		if(sResponse){
			this._oDefinition = JSON.parse(sResponse);
			this._oOriginDefinition = JSON.parse(sResponse);
		}		
	};

	/**
	 * Creates and returns a instance of change instance
	 *
	 * @param {Object}  [oPropertyBag]
	 * @param {String}  [oPropertyBag.service] name of the OData service
	 * @param {String}  [oPropertyBag.componentName] name of the component
	 * @param {String}  [oPropertyBag.changeType] type of the change
	 * @param {Object}  [oPropertyBag.texts] map object with all referenced texts within the file
	 *                                      these texts will be connected to the translation process
	 * @param {Object}  [oPropertyBag.content] content of the new change
	 * @param {Boolean} [oPropertyBag.isVariant] variant?
	 * @param {String}  [oPropertyBag.namespace] namespace
	 * @param {String}  [oPropertyBag.packageName] ABAP package name
	 * @param {Object}  [oPropertyBag.selector] name value pair of the attribute and value
	 * @param {String}  [oPropertyBag.id] name/id of the file. if not set implicitly created
	 * @param {Boolean} [oPropertyBag.isVariant] name of the component
	 * @param {Boolean} [oPropertyBag.isUserDependent] true for enduser changes
	 *
	 * @returns {Object} The content of the change file
	 *
	 * @function
	 * @name sap.ui.fl.Change.createInitialFileContent
	 * @public
	 */
	Change.createInitialFileContent = function(oPropertyBag) {
		if (!oPropertyBag) {
			oPropertyBag = {};
		}
		//Change Schema: https://wiki.wdf.sap.corp/wiki/display/UI/Change+Format
		var oNewFile = {
			fileName: oPropertyBag.id || jQuery.sap.uid().replace(/-/g, "_"),
			fileType: (oPropertyBag.isVariant) ? "variant" : "change",
			changeType: oPropertyBag.changeType || "",
			component: oPropertyBag.componentName || "",
			packageName: oPropertyBag.packageName || "",
			content: oPropertyBag.content || {},
			selector: oPropertyBag.selector || {},
			layer: Utils.getCurrentLayer(oPropertyBag.isUserDependent),
			texts: oPropertyBag.texts || {},
			namespace: oPropertyBag.namespace || "",
			creation: "",
			originalLanguage: Utils.getCurrentLanguage(),
			conditions: {},
			support: {
				generator: "Change.createInitialFileContent",
				service: oPropertyBag.service || "",
				user: ""
			}
		};

		return oNewFile;
	};

	return Change;
}, /* bExport= */true);
