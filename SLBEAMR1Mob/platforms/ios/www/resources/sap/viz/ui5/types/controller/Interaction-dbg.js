/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.controller.Interaction.
jQuery.sap.declare("sap.viz.ui5.types.controller.Interaction");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/controller/Interaction.
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
 * <li>{@link #getSupportedEventNames supportedEventNames} : string[] (default: ['mouseup','mousedown','mousemove','mouseout','mouseover','touchstart'])</li>
 * <li>{@link #getEnableMouseMove enableMouseMove} : boolean (default: true)</li>
 * <li>{@link #getEnableMouseOver enableMouseOver} : boolean (default: true)</li>
 * <li>{@link #getEnableMouseOut enableMouseOut} : boolean (default: true)</li>
 * <li>{@link #getSupportLassoEvent supportLassoEvent} : boolean (default: true)</li>
 * <li>{@link #getHoldSelection holdSelection} : boolean (default: false)</li>
 * <li>{@link #getPreserveSelectionWhenDragging preserveSelectionWhenDragging} : boolean (default: false)</li>
 * <li>{@link #getDecorations decorations} : any</li>
 * <li>{@link #getTriggers triggers} : any</li>
 * <li>{@link #getHandlers handlers} : any</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSelectability selectability} : sap.viz.ui5.types.controller.Interaction_selectability</li>
 * <li>{@link #getPan pan} : sap.viz.ui5.types.controller.Interaction_pan</li></ul>
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
 * Module ui5/types/controller/Interaction
 * @extends sap.viz.ui5.core.BaseStructuredType
 * @version 1.26.6
 *
 * @constructor
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 * @name sap.viz.ui5.types.controller.Interaction
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.controller.Interaction", { metadata : {

	library : "sap.viz",
	properties : {
		"supportedEventNames" : {type : "string[]", group : "", defaultValue : ['mouseup','mousedown','mousemove','mouseout','mouseover','touchstart'], deprecated: true},
		"enableMouseMove" : {type : "boolean", group : "", defaultValue : true, deprecated: true},
		"enableMouseOver" : {type : "boolean", group : "", defaultValue : true, deprecated: true},
		"enableMouseOut" : {type : "boolean", group : "", defaultValue : true, deprecated: true},
		"supportLassoEvent" : {type : "boolean", group : "", defaultValue : true, deprecated: true},
		"holdSelection" : {type : "boolean", group : "", defaultValue : false, deprecated: true},
		"preserveSelectionWhenDragging" : {type : "boolean", group : "", defaultValue : false, deprecated: true},
		"decorations" : {type : "any", group : "", defaultValue : null},
		"triggers" : {type : "any", group : "", defaultValue : null, deprecated: true},
		"handlers" : {type : "any", group : "", defaultValue : null, deprecated: true}
	},
	aggregations : {
		"selectability" : {type : "sap.viz.ui5.types.controller.Interaction_selectability", multiple : false}, 
		"pan" : {type : "sap.viz.ui5.types.controller.Interaction_pan", multiple : false, deprecated: true}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.controller.Interaction with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.controller.Interaction.extend
 * @function
 */


/**
 * Getter for property <code>supportedEventNames</code>.
 * Set supported event names
 *
 * Default value is <code>mouseup,mousedown,mousemove,mouseout,mouseover,touchstart</code>
 *
 * @return {string[]} the value of property <code>supportedEventNames</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#getSupportedEventNames
 * @function
 */

/**
 * Setter for property <code>supportedEventNames</code>.
 *
 * Default value is <code>mouseup,mousedown,mousemove,mouseout,mouseover,touchstart</code> 
 *
 * @param {string[]} aSupportedEventNames  new value for property <code>supportedEventNames</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#setSupportedEventNames
 * @function
 */


/**
 * Getter for property <code>enableMouseMove</code>.
 * Set whether mouse move is enabled
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableMouseMove</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#getEnableMouseMove
 * @function
 */

/**
 * Setter for property <code>enableMouseMove</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableMouseMove  new value for property <code>enableMouseMove</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#setEnableMouseMove
 * @function
 */


/**
 * Getter for property <code>enableMouseOver</code>.
 * Set whether mouse over is enabled
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableMouseOver</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#getEnableMouseOver
 * @function
 */

/**
 * Setter for property <code>enableMouseOver</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableMouseOver  new value for property <code>enableMouseOver</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#setEnableMouseOver
 * @function
 */


/**
 * Getter for property <code>enableMouseOut</code>.
 * Set whether mouse out is enabled
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableMouseOut</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#getEnableMouseOut
 * @function
 */

/**
 * Setter for property <code>enableMouseOut</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableMouseOut  new value for property <code>enableMouseOut</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#setEnableMouseOut
 * @function
 */


/**
 * Getter for property <code>supportLassoEvent</code>.
 * Set whether support lasso event is enabled
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>supportLassoEvent</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#getSupportLassoEvent
 * @function
 */

/**
 * Setter for property <code>supportLassoEvent</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bSupportLassoEvent  new value for property <code>supportLassoEvent</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#setSupportLassoEvent
 * @function
 */


/**
 * Getter for property <code>holdSelection</code>.
 * Set whether hold selection is enabled
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>holdSelection</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#getHoldSelection
 * @function
 */

/**
 * Setter for property <code>holdSelection</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bHoldSelection  new value for property <code>holdSelection</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#setHoldSelection
 * @function
 */


/**
 * Getter for property <code>preserveSelectionWhenDragging</code>.
 * Set whether preserve selection when dragging is enabled
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>preserveSelectionWhenDragging</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#getPreserveSelectionWhenDragging
 * @function
 */

/**
 * Setter for property <code>preserveSelectionWhenDragging</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bPreserveSelectionWhenDragging  new value for property <code>preserveSelectionWhenDragging</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#setPreserveSelectionWhenDragging
 * @function
 */


/**
 * Getter for property <code>decorations</code>.
 * Set decorations relating to interaction. Each item
 * that is an object of {name: 'decoration name', fn: 'decoration callback function'} is a decoration.
 * Currently two decorations are supported: showDetail and hideDetail.
 * These two decorations can be used to create a user-defined tooltip.
 * 
 * If these 2 decorations are used, the default tooltip is not used,
 * and the user should implement a custom tooltip.
 * The showDetail decoration is called when the tooltip is shown,
 * and the hideDetail decoration is called when the tooltip is hidden.
 * 
 * The arguments of showDetail are one object of {mode: 'tooltip mode',
 * data: 'data of hovering selected data point', position: 'mouse position',
 * container: 'chart container dom element', selectedNumber: 'number of selected data points'}.
 * 'tooltip mode' is either 'infoMode' or 'actionMode'. Hovering over an unselected data point displays the infoMode tooltip,
 * while hovering over a selected data point displays the actionMode tooltip.
 * 'data' is an array of dimensions and measures, where each item is an object of
 * {name: 'dimension name or measure name', value: 'dimension member or measure value',
 * type: 'literal string of dimension or measure'}. For instance,
 * {name: 'Country', value: 'China', type: 'dimension'}, or
 * {name: 'Profit', value: 159, type: 'measure'}.
 * 
 * The arguments of hideDetail are a string representing tooltip mode,
 * i.e. what kind of tooltip should be hidden.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>decorations</code>
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#getDecorations
 * @function
 */

/**
 * Setter for property <code>decorations</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oDecorations  new value for property <code>decorations</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#setDecorations
 * @function
 */


/**
 * Getter for property <code>triggers</code>.
 * Set triggers for behavior decration.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>triggers</code>
 * @public
 * @deprecated Since version 1.20. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#getTriggers
 * @function
 */

/**
 * Setter for property <code>triggers</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oTriggers  new value for property <code>triggers</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.20. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#setTriggers
 * @function
 */


/**
 * Getter for property <code>handlers</code>.
 * Set handlers for behavior decration.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>handlers</code>
 * @public
 * @deprecated Since version 1.20. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#getHandlers
 * @function
 */

/**
 * Setter for property <code>handlers</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oHandlers  new value for property <code>handlers</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.20. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#setHandlers
 * @function
 */


/**
 * Getter for aggregation <code>selectability</code>.<br/>
 * Settings for selectability
 * 
 * @return {sap.viz.ui5.types.controller.Interaction_selectability}
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#getSelectability
 * @function
 */


/**
 * Setter for the aggregated <code>selectability</code>.
 * @param {sap.viz.ui5.types.controller.Interaction_selectability} oSelectability
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#setSelectability
 * @function
 */
	

/**
 * Destroys the selectability in the aggregation 
 * named <code>selectability</code>.
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#destroySelectability
 * @function
 */


/**
 * Getter for aggregation <code>pan</code>.<br/>
 * add documentation for aggregation pan
 * 
 * @return {sap.viz.ui5.types.controller.Interaction_pan}
 * @public
 * @deprecated Since version 1.19. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#getPan
 * @function
 */


/**
 * Setter for the aggregated <code>pan</code>.
 * @param {sap.viz.ui5.types.controller.Interaction_pan} oPan
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.19. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#setPan
 * @function
 */
	

/**
 * Destroys the pan in the aggregation 
 * named <code>pan</code>.
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.19. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction#destroyPan
 * @function
 */


// Start of sap/viz/ui5/types/controller/Interaction.js
sap.viz.ui5.types.controller.Interaction.prototype.getSelectability = function() {
  return this._getOrCreate("selectability");
}
sap.viz.ui5.types.controller.Interaction.prototype.getPan = function() {
  return this._getOrCreate("pan");
}
