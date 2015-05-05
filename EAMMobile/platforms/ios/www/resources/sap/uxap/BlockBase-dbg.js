/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.uxap.BlockBase.
jQuery.sap.declare("sap.uxap.BlockBase");
jQuery.sap.require("sap.uxap.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new BlockBase.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColumnLayout columnLayout} : sap.uxap.BlockBaseColumnLayout (default: 'auto')</li>
 * <li>{@link #getShowSubSectionMore showSubSectionMore} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getMode mode} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMappings mappings} : sap.uxap.ModelMapping[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedView selectedView} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * 
 * A block is the main element that will be displayed, mainly in an object page, but not necessarily
 * only there.
 * 
 * A block is a control that use a view for storing its internal control tree.
 * A block is a control that has modes and a view associated to each modes.
 * At rendering time, the view associated to the mode is rendered.
 * 
 * As any UI5 views, the view can have a controller which automatically comes a this.oParentBlock attribute (so that the controller can interacts with the block).
 * If the controller implements the onParentBlockModeChange method, this method will get called with the sMode parameter when the view is used or re-used by the block.
 * 
 * For the actual properties of this control please see the .js file as we are defining a custom Metadata
 * to be used for this control.
 * @extends sap.ui.core.Control
 *
 * @author SAP SE
 * @version 1.26.6
 *
 * @constructor
 * @public
 * @name sap.uxap.BlockBase
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.uxap.BlockBase", { metadata : {

	publicMethods : [
		// methods
		"getSupportedModes"
	],
	library : "sap.uxap",
	properties : {
		"columnLayout" : {type : "sap.uxap.BlockBaseColumnLayout", group : "Behavior", defaultValue : 'auto'},
		"showSubSectionMore" : {type : "boolean", group : "Behavior", defaultValue : false},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"mode" : {type : "string", group : "", defaultValue : null}
	},
	aggregations : {
		"mappings" : {type : "sap.uxap.ModelMapping", multiple : true, singularName : "mapping"}
	},
	associations : {
		"selectedView" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.uxap.BlockBase with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.uxap.BlockBase.extend
 * @function
 */


/**
 * Getter for property <code>columnLayout</code>.
 * Defines how many columns should it be assigned by the objectPageSubSection
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.uxap.BlockBaseColumnLayout} the value of property <code>columnLayout</code>
 * @public
 * @name sap.uxap.BlockBase#getColumnLayout
 * @function
 */

/**
 * Setter for property <code>columnLayout</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.uxap.BlockBaseColumnLayout} sColumnLayout  new value for property <code>columnLayout</code>
 * @return {sap.uxap.BlockBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.BlockBase#setColumnLayout
 * @function
 */


/**
 * Getter for property <code>showSubSectionMore</code>.
 * Ask the parent sap.uxap.ObjectPageSubSection to show its "see more" button.
 * If at least one block within the ObjectPageSubSection is of type BlockBase and ask for the "see more" button then it would be displayed. Otherwise it's always hidden.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showSubSectionMore</code>
 * @public
 * @name sap.uxap.BlockBase#getShowSubSectionMore
 * @function
 */

/**
 * Setter for property <code>showSubSectionMore</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowSubSectionMore  new value for property <code>showSubSectionMore</code>
 * @return {sap.uxap.BlockBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.BlockBase#setShowSubSectionMore
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible blocks are not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.uxap.BlockBase#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.uxap.BlockBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.BlockBase#setVisible
 * @function
 */


/**
 * Getter for property <code>mode</code>.
 * The mode to use for rendering the block.
 * The mode can be anything as long as the block developer is providing a corresponding view for it.
 * 
 * When running inside of an ObjectPageLayout, the Block is expected to provide a view for the "Collapsed" and "Expanded" modes (which can be the same).
 * views: {
 * 
 * define your views here following the pattern:
 * "yourModeName": {viewName: "your.view.path" , type: "yourUI5ViewType" }
 * 
 * for example:
 * "OneLine": {
 * viewName: "MyBlock.OneLine",
 * type: "XML"
 * },
 * "TwoLine": {
 * viewName: "MyBlock.ViewNameAndModeCanBeDifferent",
 * type: "XML"
 * }
 * 
 * if no views are provided, the blockBase looks for an xml view which name is equal to the block's one in this case MyBlock.view.xml
 * 
 * }
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>mode</code>
 * @public
 * @name sap.uxap.BlockBase#getMode
 * @function
 */

/**
 * Setter for property <code>mode</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sMode  new value for property <code>mode</code>
 * @return {sap.uxap.BlockBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.BlockBase#setMode
 * @function
 */


/**
 * Getter for aggregation <code>mappings</code>.<br/>
 * the model mappings to use at runtime: provide a mapping between the runtime model bindings and the block design time model bindings
 * 
 * @return {sap.uxap.ModelMapping[]}
 * @public
 * @name sap.uxap.BlockBase#getMappings
 * @function
 */


/**
 * Inserts a mapping into the aggregation named <code>mappings</code>.
 *
 * @param {sap.uxap.ModelMapping}
 *          oMapping the mapping to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the mapping should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the mapping is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the mapping is inserted at 
 *             the last position        
 * @return {sap.uxap.BlockBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.BlockBase#insertMapping
 * @function
 */

/**
 * Adds some mapping <code>oMapping</code> 
 * to the aggregation named <code>mappings</code>.
 *
 * @param {sap.uxap.ModelMapping}
 *            oMapping the mapping to add; if empty, nothing is inserted
 * @return {sap.uxap.BlockBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.BlockBase#addMapping
 * @function
 */

/**
 * Removes an mapping from the aggregation named <code>mappings</code>.
 *
 * @param {int | string | sap.uxap.ModelMapping} vMapping the mapping to remove or its index or id
 * @return {sap.uxap.ModelMapping} the removed mapping or null
 * @public
 * @name sap.uxap.BlockBase#removeMapping
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>mappings</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.uxap.ModelMapping[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.uxap.BlockBase#removeAllMappings
 * @function
 */

/**
 * Checks for the provided <code>sap.uxap.ModelMapping</code> in the aggregation named <code>mappings</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.uxap.ModelMapping}
 *            oMapping the mapping whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.uxap.BlockBase#indexOfMapping
 * @function
 */
	

/**
 * Destroys all the mappings in the aggregation 
 * named <code>mappings</code>.
 * @return {sap.uxap.BlockBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.BlockBase#destroyMappings
 * @function
 */


/**
 * The view that is currently being used for rendering the control.
 *
 * @return {string} Id of the element which is the current target of the <code>selectedView</code> association, or null
 * @public
 * @name sap.uxap.BlockBase#getSelectedView
 * @function
 */

/**
 * The view that is currently being used for rendering the control.
 *
 * @param {string | sap.ui.core.Control} vSelectedView 
 *    Id of an element which becomes the new target of this <code>selectedView</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.uxap.BlockBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.BlockBase#setSelectedView
 * @function
 */


	
/**
 * Returns an object containing the supported modes for the block.
 *
 * @name sap.uxap.BlockBase#getSupportedModes
 * @function
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


// Start of sap/uxap/BlockBase.js
jQuery.sap.require("sap.ui.core.CustomData");
jQuery.sap.require("sap.uxap.BlockBaseMetadata");
jQuery.sap.require("sap.uxap.ModelMapping");

sap.ui.core.Control.extend("sap.uxap.BlockBase", {
	metadata: {

		// ---- object ----

		// ---- control specific ----
		library: "sap.uxap",
		publicMethods: ["getSupportedModes"],
		properties: {
			"mode": {type: "string", group: "Appearance"},
			"visible": {type: "boolean", group: "Appearance", defaultValue: true},
			"columnLayout": {type: "sap.uxap.BlockBaseColumnLayout", group: "Behavior", defaultValue: "auto"},
			"showSubSectionMore": {type: "boolean", group: "Behavior", defaultValue: false}
		},
		defaultAggregation: "mappings",
		aggregations: {
			"_views": {type: "sap.ui.core.Control", multiple: true, singularName: "view", visibility: "hidden"},
			"mappings": {type: "sap.uxap.ModelMapping", multiple: true, singularName: "mapping"}
		},
		associations: {
			"selectedView": {type: "sap.ui.core.Control", multiple: false}
		},
		views: {
			/*
			 define your views here following the pattern:
			 "yourModeName": {viewName: "your.view.path" , type: "yourUI5ViewType" }

			 for example:
			 "Collapsed": {
			 viewName: "sap.uxap.testblocks.multiview.MultiViewBlockCollapsed",
			 type: "XML"
			 },
			 "Expanded": {
			 viewName: "sap.uxap.testblocks.multiview.MultiViewBlockExpanded",
			 type: "XML"
			 }

			 if no views are provided, the blockBase looks for an xml view which name is equal to the block's one
			 */
		}
	},
	renderer: "sap.uxap.BlockBaseRenderer"
}, sap.uxap.BlockBaseMetadata);

sap.uxap.BlockBase.prototype.init = function () {

	//convenience mechanism:
	//if there are no views defined by the Block,
	// we look for the default one which would have the same name as the block and type XML
	if (!this.getMetadata().hasViews()) {
		this.getMetadata().setView("defaultXML", {viewName: this.getMetadata().getName(), type: "XML"});
	}

	//for performance optimization
	this._oMappingApplied = {};

	//lazy loading
	this._bLazyLoading = false; //by default, no lazy loading so we can use it out of an objectPageLayout
	this._bConnected = false;   //indicates connectToModels function has been called
	this._oUpdatedModels = {};

	//store the parent objectPageLayout if used within an objectPageLayout
	//this is needed to reflect the state of this block (visible) and benefit from lazy loading features
	this._oParentObjectPageLayout = undefined;
	this._oParentObjectPageSubSection = undefined;
};

/**
 * set the parent control for the current block
 * every time the parent changes, we try to find the parent objectPageLayout in order to determine the lazy loading strategy to apply
 * @param oParent
 * @param sAggregationName
 * @param bSuppressInvalidate
 */
sap.uxap.BlockBase.prototype.setParent = function (oParent, sAggregationName, bSuppressInvalidate) {

	sap.ui.core.Control.prototype.setParent.call(this, oParent, sAggregationName, bSuppressInvalidate);

	if (oParent instanceof sap.uxap.ObjectPageSubSection) {
		this._bLazyLoading = true; //we activate the block lazy loading since we are within an objectPageLayout
		this._oParentObjectPageSubSection = oParent;
	}
};

/*********************************************
 * model mapping management
 * *******************************************/


/**
 * This triggers rerendering of itself and its children.<br/> As <code>sap.ui.base.ManagedObject</code> "bubbles up" the
 * invalidate, changes to child-<code>Elements</code> will also result in rerendering of the whole sub tree.
 * @protected
 * @name sap.ui.base.ManagedObject#invalidate
 * @function
 */
sap.uxap.BlockBase.prototype.invalidate = function (oOrigin) {
	this._applyMapping();
	sap.ui.core.Control.prototype.invalidate.call(this, oOrigin);
};

/**
 * intercept direct setModel calls
 * @param oModel
 * @param sName
 * @returns {sap.ui.base.ManagedObject}
 */
sap.uxap.BlockBase.prototype.setModel = function (oModel, sName) {
	this._applyMapping(sName);
	return sap.ui.core.Control.prototype.setModel.call(this, oModel, sName);
};

/**
 * called for applying the modelmapping once all properties are set
 * @private
 */
sap.uxap.BlockBase.prototype._applyMapping = function () {

	if (this._bLazyLoading && !this._bConnected) {
		jQuery.sap.log.debug("BlockBase ::: Ignoring the _applyMapping as the block is not connected");
	}
	else {
		var that = this;

		jQuery.each(this.getMappings(), function (iIndex, oMapping) {
			var oModel,
				sInternalModelName = oMapping.getInternalModelName(),
				sExternalPath = oMapping.getExternalPath(),
				sExternalModelName = oMapping.getExternalModelName(),
				sPath;

			if (sExternalPath) {
				if (sInternalModelName == "" || sExternalPath == "") {
					throw new Error("BlockBase :: incorrect mapping, one of the modelMapping property is empty");
				}

				//only set this model if it is not set already
				if (!that.getModel(sInternalModelName) && !that._oMappingApplied[sInternalModelName]) {

					jQuery.sap.log.info("BlockBase :: mapping external model " + sExternalModelName + " to " + sInternalModelName);

					oModel = that.getModel(sExternalModelName);

					if (oModel) {
						sPath = oModel.resolve(sExternalPath, that.getBindingContext(sExternalModelName));

						that._oMappingApplied[sInternalModelName] = true;
						that.setBindingContext(new sap.ui.model.Context(oModel, sPath), sInternalModelName);
						sap.ui.core.Control.prototype.setModel.call(that, oModel, sInternalModelName);
					}
				}
			}
		});
	}

};

/**
 * intercept propagated properties
 * @param vName
 * @returns {*}
 */
sap.uxap.BlockBase.prototype.propagateProperties = function (vName) {

	if (this._bLazyLoading && !this._bConnected && !this._oUpdatedModels.hasOwnProperty(vName)) {
		this._oUpdatedModels[vName] = true;
	}
	else {
		this._applyMapping(vName);
	}
	return sap.ui.core.Control.prototype.propagateProperties.call(this, vName);
};

/*********************************************
 * mode vs views management
 * *******************************************/


/**
 * Returns an object containing the supported modes for the block.
 * @returns {sap.ui.core/object}
 */
sap.uxap.BlockBase.prototype.getSupportedModes = function () {
	var oSupportedModes = jQuery.extend({}, this.getMetadata().getViews());
	for (var key in oSupportedModes) {
		oSupportedModes[key] = key; //this is what developers expect, for ex: {Collapsed:"Collapsed"}
	}
	return oSupportedModes;
};

/**
 * Set the view mode for this particular block
 * @param sMode {string} the mode to apply to the control (that should be synchronized with view declared)
 * @public
 */
sap.uxap.BlockBase.prototype.setMode = function (sMode) {
	sMode = this._validateMode(sMode);

	if (this.getMode() !== sMode) {
		this.setProperty("mode", sMode, false);
		//if Lazy loading is enabled, and if the block is not connected
		//delay the view creation (will be done in connectToModels function)
		if (!this._bLazyLoading || this._bConnected) {
			this._initView(sMode);
		}
	}

	return this;
};

/**
 * called after the control is rendered
 */
sap.uxap.BlockBase.prototype.onBeforeRendering = function () {
	if (!this.getMode() || this.getMode() === "") {
		if (this.getMetadata().getView("defaultXML")) {
			this.setMode("defaultXML");
		}
		else {
			jQuery.sap.log.error("BlockBase ::: there is no mode defined for rendering " + this.getMetadata().getName() +
			". You can either set a default mode on the block metadata or set the mode property before rendering the block.");
		}
	}

	if (!this._getObjectPageLayout()) {
		this._findObjectPageLayout();
	}

	if (this._getObjectPageLayout()) {
		this._bLazyLoading = this._getObjectPageLayout().getEnableLazyLoading();
	}
	else {
		this._bLazyLoading = false;
	}
};


/**
 * called after the control is rendered
 */
sap.uxap.BlockBase.prototype.onAfterRendering = function () {
	if (this._getObjectPageLayout()) {
		this._getObjectPageLayout()._adjustLayout();
	}
};

/**
 * provide a clone mechanism: the selectedView needs to point to one of the _views
 * @returns {sap.ui.core.Element}
 */
sap.uxap.BlockBase.prototype.clone = function () {

	var iAssocIndex = -1,
		sAssoc = this.getAssociation("selectedView"),
		aViews = this.getAggregation("_views") || [];

	//find the n-view associated
	if (sAssoc) {
		jQuery.each(aViews, function (iIndex, oView) {

			if (oView.getId() === sAssoc) {
				iAssocIndex = iIndex;
			}

			return iAssocIndex < 0;
		});
	}

	var oNewThis = sap.ui.core.Control.prototype.clone.call(this);
	//we need to maintain the association onto the new object
	if (iAssocIndex >= 0) {
		oNewThis.setAssociation("selectedView", oNewThis.getAggregation("_views")[iAssocIndex]);
	}
	return oNewThis;
};

/**
 * validate that the provided mode has been declared in the metadata views section
 * throw an exception otherwise
 * @param sMode
 * @private
 */
sap.uxap.BlockBase.prototype._validateMode = function (sMode) {

	this.validateProperty("mode", sMode); //type expected as per properties definition

	if (!this.getMetadata().getView(sMode)) {
		var sBlockName = this.getMetadata()._sClassName || this.getId();

		//the view wasn't defined.
		//as a fallback mechanism: we look for the defaultXML one and raise an error before raising an exception
		if (this.getMetadata().getView("defaultXML")) {
			jQuery.sap.log.warning("BlockBase :: no view defined for block " + sBlockName + " for mode " + sMode + ", loading defaultXML instead");
			sMode = "defaultXML";
		}
		else {
			throw new Error("BlockBase :: no view defined for block " + sBlockName + " for mode " + sMode);
		}
	}
	return sMode;
};

/**
 * get the view associated with the selectedView
 * @returns {null}
 * @private
 */
sap.uxap.BlockBase.prototype._getSelectedViewContent = function () {
	var oView = null, sSelectedViewId, aViews;

	sSelectedViewId = this.getAssociation("selectedView");
	aViews = this.getAggregation("_views");

	if (aViews) {
		for (var i = 0; !oView && i < aViews.length; i++) {
			if (aViews[i].getId() === sSelectedViewId) {
				oView = aViews[i];
			}
		}
	}

	return oView;
};

/***
 * Create view
 * @param mParameter
 * @returns {sap.ui.core.mvc.View}
 * @protected
 */
sap.uxap.BlockBase.prototype.createView = function (mParameter) {
	return sap.ui.xmlview(mParameter);
};

/**
 * initialize a view and returns it if it has not been defined already
 * @param sMode the valid mode corresponding to the view to initialize
 * @returns {sap.ui.view}
 * @private
 */
sap.uxap.BlockBase.prototype._initView = function (sMode) {
	var oView, mParameter, aViews;

	mParameter = this.getMetadata().getView(sMode);

	//look for the views if it was already instantiated
	aViews = this.getAggregation("_views") || [];

	for (var i = 0; !oView && i < aViews.length; i++) {
		if (aViews[i].data("layoutMode") === sMode) {
			oView = aViews[i];
		}
	}

	//the view is not instantiated yet, handle a new view scenario
	if (!oView) {

		oView = this._getSelectedViewContent();

		//check if the new view is not the current one (we may want to have the same view for several modes)
		if (!oView || mParameter.viewName != oView.getViewName()) {
			oView = this.createView(mParameter);

			//link to the controller defined in the Block
			if (oView) {

				//inject a reference to this
				if (oView.getController()) {
					oView.getController().oParentBlock = this;
				}

				oView.addCustomData(new sap.ui.core.CustomData({
					"key": "layoutMode",
					"value": sMode
				}));

				this.addAggregation("_views", oView, true);
			}
			else {
				throw new Error("BlockBase :: no view defined in metadata.views for mode " + sMode);
			}
		}
	}

	this.setAssociation("selectedView", oView, true);

	//try to notify the associated controller that the view is being used for this mode
	if (oView.getController() && oView.getController().onParentBlockModeChange) {
		oView.getController().onParentBlockModeChange(sMode);
	}
	else {
		jQuery.sap.log.info("BlockBase ::: could not notify " + mParameter.viewName + " of loading in mode " + sMode + ": missing controller onParentBlockModeChange method");
	}

	return oView;
};

/*************************************************************************************
 * objectPageLayout integration & lazy loading management
 ************************************************************************************/

/**
 * find the parent sap.uxap.ObjectPageLayout in the control tree
 * @private
 */
sap.uxap.BlockBase.prototype._findObjectPageLayout = function () {

	//if we are not even within an subSection we don't need to look for the objectPageLayout
	if (this._oParentObjectPageSubSection) {
		this._oParentObjectPageLayout = this._oParentObjectPageSubSection.getParent();

		while (this._oParentObjectPageLayout && !(this._oParentObjectPageLayout instanceof sap.uxap.ObjectPageLayout)) {
			this._oParentObjectPageLayout = this._oParentObjectPageLayout.getParent();
		}
	}
};

/**
 * getter for the parent object page layout
 * @returns {*}
 * @private
 */
sap.uxap.BlockBase.prototype._getObjectPageLayout = function () {
	return this._oParentObjectPageLayout;
};

sap.uxap.BlockBase.prototype.setVisible = function (bValue, bSuppressInvalidate) {


	if (this._getObjectPageLayout()) {
		this.setProperty("visible", bValue, true) /* handle invalidation ourselves */;
		this._getObjectPageLayout()._adjustLayoutAndUxRules();
		this.invalidate();
	}
	else {
		this.setProperty("visible", bValue, bSuppressInvalidate);
	}


	return this;
};

/**
 * set the showSubSectionMore property
 * ask the parent ObjectPageSubSection to refresh its see more visibility state if present
 * @param bValue
 * @param bInvalidate
 * @returns {*}
 */
sap.uxap.BlockBase.prototype.setShowSubSectionMore = function (bValue, bInvalidate) {

	//suppress invalidate as ShowSubSectionMore has no impact on block itself.
	if (bValue != this.getShowSubSectionMore()) {
		this.setProperty("showSubSectionMore", bValue, true);

		//refresh the parent subsection see more visibility if we have changed it and we are within an objectPageSubSection
		if (this._oParentObjectPageSubSection) {
			this._oParentObjectPageSubSection.refreshSeeMoreVisibility();
		}
	}

	return this;
};

sap.uxap.BlockBase.prototype.connectToModels = function () {
	if (!this._bConnected) {
		jQuery.sap.log.debug("BlockBase :: Connecting block to the UI5 model tree");
		this._bConnected = true;
		if (this._bLazyLoading) {
			//if lazy loading is enabled, the view has not been created during the setMode
			//so create it now
			var sMode = this.getMode();
			if (sMode) {
				this._initView(sMode);
			}
		}

		this.invalidate();
	}
};

/**
 * Override of the default model lifecycle method to disable the automatic binding resolution for lazyloading
 * @override
 * @param bSkipLocal
 * @param bSkipChildren
 * @param sModelName
 * @param bUpdateAll
 * @returns {*}
 */
sap.uxap.BlockBase.prototype.updateBindingContext = function (bSkipLocal, bSkipChildren, sModelName, bUpdateAll) {
	if (!this._bLazyLoading || this._bConnected) {
		return sap.ui.core.Control.prototype.updateBindingContext.call(this, bSkipLocal, bSkipChildren, sModelName, bUpdateAll);
	} else {
		jQuery.sap.log.debug("BlockBase ::: Ignoring the updateBindingContext as the block is not visible for now in the ObjectPageLayout");
	}
};

/**
 * Override of the default model lifecycle method to disable the automatic binding resolution for lazyloading
 * @override
 * @param bUpdateAll
 * @param sModelName
 * @returns {*}
 */
sap.uxap.BlockBase.prototype.updateBindings = function (bUpdateAll, sModelName) {
	if (!this._bLazyLoading || this._bConnected) {
		return sap.ui.core.Control.prototype.updateBindings.call(this, bUpdateAll, sModelName);
	}
	else {
		jQuery.sap.log.debug("BlockBase ::: Ignoring the updateBindingContext as the block is not visible for now in the ObjectPageLayout");
	}
};
