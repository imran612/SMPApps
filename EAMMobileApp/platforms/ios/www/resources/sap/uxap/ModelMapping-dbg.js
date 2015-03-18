/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.uxap.ModelMapping.
jQuery.sap.declare("sap.uxap.ModelMapping");
jQuery.sap.require("sap.uxap.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new ModelMapping.
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
 * <li>{@link #getExternalModelName externalModelName} : string</li>
 * <li>{@link #getInternalModelName internalModelName} : string (default: 'Model')</li>
 * <li>{@link #getExternalPath externalPath} : string</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * 
 * Define the entity that will be passed to the ObjectPageLayout.
 * @extends sap.ui.core.Element
 *
 * @author SAP SE
 * @version 1.26.6
 *
 * @constructor
 * @public
 * @name sap.uxap.ModelMapping
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Element.extend("sap.uxap.ModelMapping", { metadata : {

	library : "sap.uxap",
	properties : {
		"externalModelName" : {type : "string", group : "Misc", defaultValue : null},
		"internalModelName" : {type : "string", group : "Misc", defaultValue : 'Model'},
		"externalPath" : {type : "string", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.uxap.ModelMapping with name <code>sClassName</code> 
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
 * @name sap.uxap.ModelMapping.extend
 * @function
 */


/**
 * Getter for property <code>externalModelName</code>.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>externalModelName</code>
 * @public
 * @name sap.uxap.ModelMapping#getExternalModelName
 * @function
 */

/**
 * Setter for property <code>externalModelName</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sExternalModelName  new value for property <code>externalModelName</code>
 * @return {sap.uxap.ModelMapping} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ModelMapping#setExternalModelName
 * @function
 */


/**
 * Getter for property <code>internalModelName</code>.
 *
 * Default value is <code>Model</code>
 *
 * @return {string} the value of property <code>internalModelName</code>
 * @public
 * @name sap.uxap.ModelMapping#getInternalModelName
 * @function
 */

/**
 * Setter for property <code>internalModelName</code>.
 *
 * Default value is <code>Model</code> 
 *
 * @param {string} sInternalModelName  new value for property <code>internalModelName</code>
 * @return {sap.uxap.ModelMapping} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ModelMapping#setInternalModelName
 * @function
 */


/**
 * Getter for property <code>externalPath</code>.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>externalPath</code>
 * @public
 * @name sap.uxap.ModelMapping#getExternalPath
 * @function
 */

/**
 * Setter for property <code>externalPath</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sExternalPath  new value for property <code>externalPath</code>
 * @return {sap.uxap.ModelMapping} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ModelMapping#setExternalPath
 * @function
 */


// Start of sap/uxap/ModelMapping.js
