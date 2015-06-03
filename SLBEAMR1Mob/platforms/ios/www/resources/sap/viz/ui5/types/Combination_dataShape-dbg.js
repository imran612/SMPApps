/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Combination_dataShape.
jQuery.sap.declare("sap.viz.ui5.types.Combination_dataShape");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/Combination_dataShape.
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
 * <li>{@link #getPrimaryAxis primaryAxis} : string[] (default: ['bar','line','line'])</li>
 * <li>{@link #getSecondaryAxis secondaryAxis} : string[] (default: ['line','line','line'])</li>
 * <li>{@link #getSecondAxis secondAxis} : string[] (default: ['line','line','line'])</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.viz.ui5.core.BaseStructuredType#constructor sap.viz.ui5.core.BaseStructuredType}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Settings for the shape of data series
 * @extends sap.viz.ui5.core.BaseStructuredType
 * @version 1.26.6
 *
 * @constructor
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 * @name sap.viz.ui5.types.Combination_dataShape
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Combination_dataShape", { metadata : {

	library : "sap.viz",
	properties : {
		"primaryAxis" : {type : "string[]", group : "", defaultValue : ['bar','line','line']},
		"secondaryAxis" : {type : "string[]", group : "", defaultValue : ['line','line','line']},
		"secondAxis" : {type : "string[]", group : "", defaultValue : ['line','line','line'], deprecated: true}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Combination_dataShape with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Combination_dataShape.extend
 * @function
 */


/**
 * Getter for property <code>primaryAxis</code>.
 * Set the shape of data series on the primary axis
 *
 * Default value is <code>bar,line,line</code>
 *
 * @return {string[]} the value of property <code>primaryAxis</code>
 * @public
 * @name sap.viz.ui5.types.Combination_dataShape#getPrimaryAxis
 * @function
 */

/**
 * Setter for property <code>primaryAxis</code>.
 *
 * Default value is <code>bar,line,line</code> 
 *
 * @param {string[]} aPrimaryAxis  new value for property <code>primaryAxis</code>
 * @return {sap.viz.ui5.types.Combination_dataShape} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Combination_dataShape#setPrimaryAxis
 * @function
 */


/**
 * Getter for property <code>secondaryAxis</code>.
 * Set the shape of data series on the secondary axis
 *
 * Default value is <code>line,line,line</code>
 *
 * @return {string[]} the value of property <code>secondaryAxis</code>
 * @public
 * @name sap.viz.ui5.types.Combination_dataShape#getSecondaryAxis
 * @function
 */

/**
 * Setter for property <code>secondaryAxis</code>.
 *
 * Default value is <code>line,line,line</code> 
 *
 * @param {string[]} aSecondaryAxis  new value for property <code>secondaryAxis</code>
 * @return {sap.viz.ui5.types.Combination_dataShape} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Combination_dataShape#setSecondaryAxis
 * @function
 */


/**
 * Getter for property <code>secondAxis</code>.
 * Set the shape of data series on the secondary axis (Old version; still works)
 *
 * Default value is <code>line,line,line</code>
 *
 * @return {string[]} the value of property <code>secondAxis</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Combination_dataShape#getSecondAxis
 * @function
 */

/**
 * Setter for property <code>secondAxis</code>.
 *
 * Default value is <code>line,line,line</code> 
 *
 * @param {string[]} aSecondAxis  new value for property <code>secondAxis</code>
 * @return {sap.viz.ui5.types.Combination_dataShape} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Combination_dataShape#setSecondAxis
 * @function
 */


// Start of sap/viz/ui5/types/Combination_dataShape.js
