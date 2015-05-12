/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.uxap.ObjectPageHeaderActionButton.
jQuery.sap.declare("sap.uxap.ObjectPageHeaderActionButton");
jQuery.sap.require("sap.uxap.library");
jQuery.sap.require("sap.m.Button");


/**
 * Constructor for a new ObjectPageHeaderActionButton.
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
 * <li>{@link #getHideText hideText} : boolean (default: true)</li>
 * <li>{@link #getHideIcon hideIcon} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Button#constructor sap.m.Button}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * 
 * Button that can be used in the ObjectPageHeader action aggregation.
 * @extends sap.m.Button
 *
 * @author SAP SE
 * @version 1.26.6
 *
 * @constructor
 * @public
 * @name sap.uxap.ObjectPageHeaderActionButton
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.m.Button.extend("sap.uxap.ObjectPageHeaderActionButton", { metadata : {

	library : "sap.uxap",
	properties : {
		"hideText" : {type : "boolean", group : "", defaultValue : true},
		"hideIcon" : {type : "boolean", group : "", defaultValue : false}
	}
}});


/**
 * Creates a new subclass of class sap.uxap.ObjectPageHeaderActionButton with name <code>sClassName</code> 
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
 * @name sap.uxap.ObjectPageHeaderActionButton.extend
 * @function
 */


/**
 * Getter for property <code>hideText</code>.
 * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout.
 * This is useful if you want to display icons only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>hideText</code>
 * @public
 * @name sap.uxap.ObjectPageHeaderActionButton#getHideText
 * @function
 */

/**
 * Setter for property <code>hideText</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bHideText  new value for property <code>hideText</code>
 * @return {sap.uxap.ObjectPageHeaderActionButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeaderActionButton#setHideText
 * @function
 */


/**
 * Getter for property <code>hideIcon</code>.
 * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout.
 * This is useful if you want to display texts only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>hideIcon</code>
 * @public
 * @name sap.uxap.ObjectPageHeaderActionButton#getHideIcon
 * @function
 */

/**
 * Setter for property <code>hideIcon</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bHideIcon  new value for property <code>hideIcon</code>
 * @return {sap.uxap.ObjectPageHeaderActionButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeaderActionButton#setHideIcon
 * @function
 */


// Start of sap/uxap/ObjectPageHeaderActionButton.js
jQuery.sap.require("sap.m.Button");

sap.uxap.ObjectPageHeaderActionButton.prototype.applySettings = function (mSettings, oScope) {

	if (sap.m.Button.prototype.applySettings) {
		sap.m.Button.prototype.applySettings.call(this, mSettings, oScope);
	}

	this.toggleStyleClass("sapUxAPObjectPageHeaderActionButtonHideText", this.getHideText());
	this.toggleStyleClass("sapUxAPObjectPageHeaderActionButtonHideIcon", this.getHideIcon());
};

sap.uxap.ObjectPageHeaderActionButton.prototype.setHideText = function (bValue, bInvalidate) {

	this.toggleStyleClass("sapUxAPObjectPageHeaderActionButtonHideText", bValue);

	return this.setProperty("hideText", bValue, bInvalidate);
};


sap.uxap.ObjectPageHeaderActionButton.prototype.setHideIcon = function (bValue, bInvalidate) {

	this.toggleStyleClass("sapUxAPObjectPageHeaderActionButtonHideIcon", bValue);

	return this.setProperty("hideIcon", bValue, bInvalidate);
};