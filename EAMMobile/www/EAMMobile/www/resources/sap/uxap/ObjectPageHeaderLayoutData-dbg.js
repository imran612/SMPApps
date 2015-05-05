/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.uxap.ObjectPageHeaderLayoutData.
jQuery.sap.declare("sap.uxap.ObjectPageHeaderLayoutData");
jQuery.sap.require("sap.uxap.library");
jQuery.sap.require("sap.ui.core.LayoutData");


/**
 * Constructor for a new ObjectPageHeaderLayoutData.
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
 * <li>{@link #getVisibleS visibleS} : boolean (default: true)</li>
 * <li>{@link #getVisibleM visibleM} : boolean (default: true)</li>
 * <li>{@link #getVisibleL visibleL} : boolean (default: true)</li>
 * <li>{@link #getShowSeparatorBefore showSeparatorBefore} : boolean (default: false)</li>
 * <li>{@link #getShowSeparatorAfter showSeparatorAfter} : boolean (default: false)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 'auto')</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This is a LayoutData Element that can be added to a control if this control is used within an ObjectPage headerContent aggregation
 * @extends sap.ui.core.LayoutData
 *
 * @author SAP SE
 * @version 1.26.6
 *
 * @constructor
 * @public
 * @since 1.16.0
 * @name sap.uxap.ObjectPageHeaderLayoutData
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.LayoutData.extend("sap.uxap.ObjectPageHeaderLayoutData", { metadata : {

	library : "sap.uxap",
	properties : {
		"visibleS" : {type : "boolean", group : "Misc", defaultValue : true},
		"visibleM" : {type : "boolean", group : "Misc", defaultValue : true},
		"visibleL" : {type : "boolean", group : "Misc", defaultValue : true},
		"showSeparatorBefore" : {type : "boolean", group : "Misc", defaultValue : false},
		"showSeparatorAfter" : {type : "boolean", group : "Misc", defaultValue : false},
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : 'auto'}
	}
}});


/**
 * Creates a new subclass of class sap.uxap.ObjectPageHeaderLayoutData with name <code>sClassName</code> 
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
 * @name sap.uxap.ObjectPageHeaderLayoutData.extend
 * @function
 */


/**
 * Getter for property <code>visibleS</code>.
 * If this property is set the control will be visible (or not) in a small sized layout.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visibleS</code>
 * @public
 * @name sap.uxap.ObjectPageHeaderLayoutData#getVisibleS
 * @function
 */

/**
 * Setter for property <code>visibleS</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisibleS  new value for property <code>visibleS</code>
 * @return {sap.uxap.ObjectPageHeaderLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeaderLayoutData#setVisibleS
 * @function
 */


/**
 * Getter for property <code>visibleM</code>.
 * If this property is set the control will be visible (or not) in a medium sized layout.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visibleM</code>
 * @public
 * @name sap.uxap.ObjectPageHeaderLayoutData#getVisibleM
 * @function
 */

/**
 * Setter for property <code>visibleM</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisibleM  new value for property <code>visibleM</code>
 * @return {sap.uxap.ObjectPageHeaderLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeaderLayoutData#setVisibleM
 * @function
 */


/**
 * Getter for property <code>visibleL</code>.
 * If this property is set the control will be visible (or not) in a large sized layout.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visibleL</code>
 * @public
 * @name sap.uxap.ObjectPageHeaderLayoutData#getVisibleL
 * @function
 */

/**
 * Setter for property <code>visibleL</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisibleL  new value for property <code>visibleL</code>
 * @return {sap.uxap.ObjectPageHeaderLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeaderLayoutData#setVisibleL
 * @function
 */


/**
 * Getter for property <code>showSeparatorBefore</code>.
 * If this property is set the control will display a separator before it.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showSeparatorBefore</code>
 * @public
 * @name sap.uxap.ObjectPageHeaderLayoutData#getShowSeparatorBefore
 * @function
 */

/**
 * Setter for property <code>showSeparatorBefore</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowSeparatorBefore  new value for property <code>showSeparatorBefore</code>
 * @return {sap.uxap.ObjectPageHeaderLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeaderLayoutData#setShowSeparatorBefore
 * @function
 */


/**
 * Getter for property <code>showSeparatorAfter</code>.
 * If this property is set the control will display a separator after it.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showSeparatorAfter</code>
 * @public
 * @name sap.uxap.ObjectPageHeaderLayoutData#getShowSeparatorAfter
 * @function
 */

/**
 * Setter for property <code>showSeparatorAfter</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowSeparatorAfter  new value for property <code>showSeparatorAfter</code>
 * @return {sap.uxap.ObjectPageHeaderLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeaderLayoutData#setShowSeparatorAfter
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * If this property is set the control will take the provided size.
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.uxap.ObjectPageHeaderLayoutData#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.uxap.ObjectPageHeaderLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeaderLayoutData#setWidth
 * @function
 */


// Start of sap/uxap/ObjectPageHeaderLayoutData.js
/*!
 * @copyright@
 */