/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.uxap.ObjectPageSectionBase.
jQuery.sap.declare("sap.uxap.ObjectPageSectionBase");
jQuery.sap.require("sap.uxap.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ObjectPageSectionBase.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCustomAnchorBarButton customAnchorBarButton} : sap.m.Button</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
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
 * An abstract container for object page sections and subSections
 * @extends sap.ui.core.Control
 * @version 1.26.6
 *
 * @constructor
 * @public
 * @name sap.uxap.ObjectPageSectionBase
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.uxap.ObjectPageSectionBase", { metadata : {

	"abstract" : true,
	publicMethods : [
		// methods
		"connectToModels"
	],
	library : "sap.uxap",
	properties : {
		"title" : {type : "string", group : "Appearance", defaultValue : null},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true}
	},
	aggregations : {
		"customAnchorBarButton" : {type : "sap.m.Button", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.uxap.ObjectPageSectionBase with name <code>sClassName</code> 
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
 * @name sap.uxap.ObjectPageSectionBase.extend
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Section Title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.uxap.ObjectPageSectionBase#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.uxap.ObjectPageSectionBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSectionBase#setTitle
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible ObjectPageSectionBase are not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.uxap.ObjectPageSectionBase#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.uxap.ObjectPageSectionBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSectionBase#setVisible
 * @function
 */


/**
 * Getter for aggregation <code>customAnchorBarButton</code>.<br/>
 * The custom button that will provide a link to the section in the ObjectPageLayout anchor bar.
 * This button will be used as a custom template to be into the ObjectPageLayout anchorBar area, therefore property changes happening on this button template after the first rendering won't affect the actual button copy used in the anchorBar.
 * 
 * If you want to change some of the button properties, you would need to bind them to a model.
 * 
 * @return {sap.m.Button}
 * @public
 * @name sap.uxap.ObjectPageSectionBase#getCustomAnchorBarButton
 * @function
 */


/**
 * Setter for the aggregated <code>customAnchorBarButton</code>.
 * @param {sap.m.Button} oCustomAnchorBarButton
 * @return {sap.uxap.ObjectPageSectionBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSectionBase#setCustomAnchorBarButton
 * @function
 */
	

/**
 * Destroys the customAnchorBarButton in the aggregation 
 * named <code>customAnchorBarButton</code>.
 * @return {sap.uxap.ObjectPageSectionBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSectionBase#destroyCustomAnchorBarButton
 * @function
 */


/**
 * Explicitly ask to connect to the UI5 model tree
 *
 * @name sap.uxap.ObjectPageSectionBase#connectToModels
 * @function
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


// Start of sap/uxap/ObjectPageSectionBase.js
sap.uxap.ObjectPageSectionBase.prototype.init = function () {

	//handled for ux rules management
	this._bInternalVisible = true;
	this._bInternalTitleVisible = true;
	this._sInternalTitle = "";
	this._bRendered = false;

	this._oParentObjectPageLayout = undefined; //store the parent objectPageLayout
};

sap.uxap.ObjectPageSectionBase.prototype.onBeforeRendering = function () {
	if (!this._getObjectPageLayout()) {
		this._findObjectPageLayout();
	}
};


sap.uxap.ObjectPageSectionBase.prototype.onAfterRendering = function () {
	if (this._getObjectPageLayout()) {
		this._getObjectPageLayout()._adjustLayout();
	}

	this._bRendered = true;
};

/**
 * set the internal visibility of the sectionBase. This is set by the ux rules (for example don't display a section that has no subSections)
 * @param bValue
 * @param bInvalidate if set to true, the sectionBase should be rerendered in order to be added or removed to the dom (similar to what a "real" internalVisibility property would trigger
 * @private
 */
sap.uxap.ObjectPageSectionBase.prototype._setInternalVisible = function (bValue, bInvalidate) {
	if (bValue != this._bInternalVisible) {
		this._bInternalVisible = bValue;
		if (bInvalidate) {
			this.invalidate();
		}
	}
};

sap.uxap.ObjectPageSectionBase.prototype._getInternalVisible = function () {
	return this._bInternalVisible;
};

/**
 * set the internal visibility of the sectionBase title. This is set by the ux rules (for example don't display a subSection title if there are only 1 in the section)
 * @param bValue
 * @param bInvalidate if set to true, the sectionBase should be rerendered in order to be added or removed to the dom (similar to what a "real" internalVisibility property would trigger
 * @private
 */
sap.uxap.ObjectPageSectionBase.prototype._setInternalTitleVisible = function (bValue, bInvalidate) {
	if (bValue != this._bInternalTitleVisible) {
		this._bInternalTitleVisible = bValue;
		if (bInvalidate) {
			this.invalidate();
		}
	}
};

sap.uxap.ObjectPageSectionBase.prototype._getInternalTitleVisible = function () {
	return this._bInternalTitleVisible;
};

/**
 * set the internal title of the sectionBase. This is set by the ux rules (for example the subSection title becomes the section title if there are only 1 subSection in the section)
 * @param sValue
 * @param bInvalidate if set to true, the sectionBase should be rerendered in order to be added or removed to the dom (similar to what a "real" internalVisibility property would trigger
 * @private
 */

sap.uxap.ObjectPageSectionBase.prototype._setInternalTitle = function (sValue, bInvalidate) {
	if (sValue != this._sInternalTitle) {
		this._sInternalTitle = sValue;
		if (bInvalidate) {
			this.invalidate();
		}
	}
};

sap.uxap.ObjectPageSectionBase.prototype._getInternalTitle = function () {
	return this._sInternalTitle;
};

/**
 * find the parent sap.uxap.ObjectPageLayout in the control tree
 * @private
 */
sap.uxap.ObjectPageSectionBase.prototype._findObjectPageLayout = function () {
	this._oParentObjectPageLayout = this.getParent();

	while (this._oParentObjectPageLayout && !(this._oParentObjectPageLayout instanceof sap.uxap.ObjectPageLayout)) {
		this._oParentObjectPageLayout = this._oParentObjectPageLayout.getParent();
	}
};

/**
 * getter for the parent object page layout
 * @returns {*}
 * @private
 */
sap.uxap.ObjectPageSectionBase.prototype._getObjectPageLayout = function () {
	return this._oParentObjectPageLayout;
};


/*************************************************************************************
 *  notify the parent objectPageLayout of structural changes after the first rendering
 ************************************************************************************/
sap.uxap.ObjectPageSectionBase.prototype._notifyObjectPageLayout = function () {
	if (this._bRendered && this._getObjectPageLayout()) {
		this._getObjectPageLayout()._adjustLayoutAndUxRules();
	}
};


sap.uxap.ObjectPageSectionBase.prototype.addAggregation = function (sAggregationName, oObject) {
	var oResult = sap.ui.core.Control.prototype.addAggregation.call(this, sAggregationName, oObject);
	this._notifyObjectPageLayout();
	return oResult;
};

sap.uxap.ObjectPageSectionBase.prototype.insertAggregation = function (sAggregationName, oObject, iIndex) {
	var oResult = sap.ui.core.Control.prototype.insertAggregation.call(this, sAggregationName, oObject, iIndex);
	this._notifyObjectPageLayout();
	return oResult;
};

sap.uxap.ObjectPageSectionBase.prototype.removeAllAggregation = function (sAggregationName) {
	var oResult = sap.ui.core.Control.prototype.removeAllAggregation.call(this, sAggregationName);
	this._notifyObjectPageLayout();
	return oResult;
};

sap.uxap.ObjectPageSectionBase.prototype.removeAggregation = function (sAggregationName, oObject) {
	var oResult = sap.ui.core.Control.prototype.removeAggregation.call(this, sAggregationName, oObject);
	this._notifyObjectPageLayout();
	return oResult;
};

sap.uxap.ObjectPageSectionBase.prototype.destroyAggregation = function (sAggregationName) {
	var oResult = sap.ui.core.Control.prototype.destroyAggregation.call(this, sAggregationName);
	this._notifyObjectPageLayout();
	return oResult;
};


sap.uxap.ObjectPageSectionBase.prototype.setVisible = function (bValue, bSuppressInvalidate) {


	if (this._getObjectPageLayout()) {
		this.setProperty("visible", bValue, true) /* handle invalidation ourselves in adjustLayoutAndUxRules */;
		this._getObjectPageLayout()._adjustLayoutAndUxRules();
		this.invalidate();
	}
	else {
		this.setProperty("visible", bValue, bSuppressInvalidate);
	}


	return this;
};

sap.uxap.ObjectPageSectionBase.prototype.setTitle = function (sValue, bSuppressInvalidate) {

	this.setProperty("title", sValue, bSuppressInvalidate);
	this._notifyObjectPageLayout();

	return this;
};


