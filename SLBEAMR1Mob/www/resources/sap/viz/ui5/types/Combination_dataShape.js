/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.Combination_dataShape");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Combination_dataShape",{metadata:{library:"sap.viz",properties:{"primaryAxis":{type:"string[]",group:"",defaultValue:['bar','line','line']},"secondaryAxis":{type:"string[]",group:"",defaultValue:['line','line','line']},"secondAxis":{type:"string[]",group:"",defaultValue:['line','line','line'],deprecated:true}}}});
