/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.controls.Popover.
jQuery.sap.declare("sap.viz.ui5.controls.Popover");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.controls.common.BaseControl");


/**
 * Constructor for a new ui5/controls/Popover.
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
 * <li>{@link #getCustomDataControl customDataControl} : any</li>
 * <li>{@link #getActionItems actionItems} : object[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.viz.ui5.controls.common.BaseControl#constructor sap.viz.ui5.controls.common.BaseControl}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Viz Chart Popover
 * @extends sap.viz.ui5.controls.common.BaseControl
 *
 * @author  
 * @version 1.22.10
 *
 * @constructor   
 * @public
 * @since 1.22.0
 * @experimental Since version 1.22.0. 
 * API is not finished yet and might change completely
 * 
 * @name sap.viz.ui5.controls.Popover
 */
sap.viz.ui5.controls.common.BaseControl.extend("sap.viz.ui5.controls.Popover", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"connect"
	],

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"customDataControl" : {type : "any", group : "", defaultValue : null},
		"actionItems" : {type : "object[]", group : "", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.controls.Popover with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.controls.Popover.extend
 * @function
 */


/**
 * Getter for property <code>customDataControl</code>.
 * A callback function let user customize Popover's content panel.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>customDataControl</code>
 * @public
 * @name sap.viz.ui5.controls.Popover#getCustomDataControl
 * @function
 */

/**
 * Setter for property <code>customDataControl</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oCustomDataControl  new value for property <code>customDataControl</code>
 * @return {sap.viz.ui5.controls.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.controls.Popover#setCustomDataControl
 * @function
 */


/**
 * Getter for property <code>actionItems</code>.
 * The items of this list or rows of Action List in Home Page inside the Popover.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object[]} the value of property <code>actionItems</code>
 * @public
 * @name sap.viz.ui5.controls.Popover#getActionItems
 * @function
 */

/**
 * Setter for property <code>actionItems</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object[]} aActionItems  new value for property <code>actionItems</code>
 * @return {sap.viz.ui5.controls.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.controls.Popover#setActionItems
 * @function
 */


/**
 * Connect Chart's Popover with VizFrame.
 *
 * @name sap.viz.ui5.controls.Popover.prototype.connect
 * @function
 * @param {string} 
 *         sVizFrameId
 *         Set Uid of VizFrame.

 * @type void
 * @public
 */


// Start of sap/viz/ui5/controls/Popover.js
jQuery.sap.declare("sap.viz.ui5.controls.Popover");
//jQuery.sap.registerModulePath('sap.viz.chartPopover', './libs')
jQuery.sap.require('sap.viz.chartpopover.ChartPopover');
        
sap.viz.ui5.controls.Popover.prototype.init = function() {
  sap.viz.ui5.controls.common.BaseControl.prototype.init.apply(this, arguments);

  this._Popover = undefined;
  this._uid = undefined;
};

sap.viz.ui5.controls.Popover.prototype.exit = function() {
  sap.viz.ui5.controls.common.BaseControl.prototype.exit.apply(this, arguments);
  this._Popover = undefined;
  this._uid = undefined;
};

sap.viz.ui5.controls.Popover.prototype.connect = function(uid){
  this._uid = uid;
  if(!this._Popover){
    this._Popover = new sap.viz.controls.popover.PopOver({
      actionItems : this.getActionItems(),
      customDataControl : this.getCustomDataControl()
    });
  }
  this._Popover.connect(uid);
};