/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.uxap.ObjectPageSection.
jQuery.sap.declare("sap.uxap.ObjectPageSection");
jQuery.sap.require("sap.uxap.library");
jQuery.sap.require("sap.uxap.ObjectPageSectionBase");


/**
 * Constructor for a new ObjectPageSection.
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
 * <li>{@link #getShowTitle showTitle} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSubSections subSections} <strong>(default aggregation)</strong> : sap.uxap.ObjectPageSubSection[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.uxap.ObjectPageSectionBase#constructor sap.uxap.ObjectPageSectionBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A Section in the ObjectPage layout is a container for Objectpage Subsections
 * @extends sap.uxap.ObjectPageSectionBase
 * @version 1.26.6
 *
 * @constructor
 * @public
 * @name sap.uxap.ObjectPageSection
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageSectionBase.extend("sap.uxap.ObjectPageSection", { metadata : {

	library : "sap.uxap",
	properties : {
		"showTitle" : {type : "boolean", group : "Appearance", defaultValue : true}
	},
	defaultAggregation : "subSections",
	aggregations : {
		"subSections" : {type : "sap.uxap.ObjectPageSubSection", multiple : true, singularName : "subSection"}
	}
}});


/**
 * Creates a new subclass of class sap.uxap.ObjectPageSection with name <code>sClassName</code> 
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
 * @name sap.uxap.ObjectPageSection.extend
 * @function
 */


/**
 * Getter for property <code>showTitle</code>.
 * Display the section title or not.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showTitle</code>
 * @public
 * @name sap.uxap.ObjectPageSection#getShowTitle
 * @function
 */

/**
 * Setter for property <code>showTitle</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowTitle  new value for property <code>showTitle</code>
 * @return {sap.uxap.ObjectPageSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSection#setShowTitle
 * @function
 */


/**
 * Getter for aggregation <code>subSections</code>.<br/>
 * 
 * <strong>Note</strong>: this is the default aggregation for ObjectPageSection.
 * @return {sap.uxap.ObjectPageSubSection[]}
 * @public
 * @name sap.uxap.ObjectPageSection#getSubSections
 * @function
 */


/**
 * Inserts a subSection into the aggregation named <code>subSections</code>.
 *
 * @param {sap.uxap.ObjectPageSubSection}
 *          oSubSection the subSection to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the subSection should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the subSection is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the subSection is inserted at 
 *             the last position        
 * @return {sap.uxap.ObjectPageSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSection#insertSubSection
 * @function
 */

/**
 * Adds some subSection <code>oSubSection</code> 
 * to the aggregation named <code>subSections</code>.
 *
 * @param {sap.uxap.ObjectPageSubSection}
 *            oSubSection the subSection to add; if empty, nothing is inserted
 * @return {sap.uxap.ObjectPageSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSection#addSubSection
 * @function
 */

/**
 * Removes an subSection from the aggregation named <code>subSections</code>.
 *
 * @param {int | string | sap.uxap.ObjectPageSubSection} vSubSection the subSection to remove or its index or id
 * @return {sap.uxap.ObjectPageSubSection} the removed subSection or null
 * @public
 * @name sap.uxap.ObjectPageSection#removeSubSection
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>subSections</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.uxap.ObjectPageSubSection[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.uxap.ObjectPageSection#removeAllSubSections
 * @function
 */

/**
 * Checks for the provided <code>sap.uxap.ObjectPageSubSection</code> in the aggregation named <code>subSections</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.uxap.ObjectPageSubSection}
 *            oSubSection the subSection whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.uxap.ObjectPageSection#indexOfSubSection
 * @function
 */
	

/**
 * Destroys all the subSections in the aggregation 
 * named <code>subSections</code>.
 * @return {sap.uxap.ObjectPageSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSection#destroySubSections
 * @function
 */


// Start of sap/uxap/ObjectPageSection.js
sap.uxap.ObjectPageSection.prototype.connectToModels = function () {
	var aSubSections = this.getSubSections();
	if (aSubSections != null) {
		jQuery.each(aSubSections, function (iSubSectionIdx, oSubSection) {
			oSubSection.connectToModels();
		});
	}
};