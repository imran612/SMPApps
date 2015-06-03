/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.Background");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Background",{metadata:{library:"sap.viz",properties:{"visible":{type:"boolean",group:"",defaultValue:true},"drawingEffect":{type:"sap.viz.ui5.types.Background_drawingEffect",group:"",defaultValue:sap.viz.ui5.types.Background_drawingEffect.normal},"direction":{type:"sap.viz.ui5.types.Background_direction",group:"",defaultValue:sap.viz.ui5.types.Background_direction.vertical},"color":{type:"string",group:"",defaultValue:'transparent',deprecated:true}},aggregations:{"border":{type:"sap.viz.ui5.types.Background_border",multiple:false}}}});
sap.viz.ui5.types.Background.prototype.getBorder=function(){return this._getOrCreate("border")}
