/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.controls.Popover");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.controls.common.BaseControl");sap.viz.ui5.controls.common.BaseControl.extend("sap.viz.ui5.controls.Popover",{metadata:{publicMethods:["connect"],library:"sap.viz",properties:{"customDataControl":{type:"any",group:"",defaultValue:null},"actionItems":{type:"object[]",group:"",defaultValue:null}}}});jQuery.sap.declare("sap.viz.ui5.controls.Popover");jQuery.sap.require('sap.viz.chartpopover.ChartPopover');
sap.viz.ui5.controls.Popover.prototype.init=function(){sap.viz.ui5.controls.common.BaseControl.prototype.init.apply(this,arguments);this._Popover=undefined;this._uid=undefined};
sap.viz.ui5.controls.Popover.prototype.exit=function(){sap.viz.ui5.controls.common.BaseControl.prototype.exit.apply(this,arguments);this._Popover=undefined;this._uid=undefined};
sap.viz.ui5.controls.Popover.prototype.connect=function(u){this._uid=u;if(!this._Popover){this._Popover=new sap.viz.controls.popover.PopOver({actionItems:this.getActionItems(),customDataControl:this.getCustomDataControl()})}this._Popover.connect(u)};
