/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.controls.common.feeds.AnalysisObject");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.viz.ui5.controls.common.feeds.AnalysisObject",{metadata:{library:"sap.viz",properties:{"uid":{type:"string",group:"Misc",defaultValue:null},"name":{type:"string",group:"Misc",defaultValue:null},"type":{type:"string",group:"Misc",defaultValue:null}}}});
sap.viz.ui5.controls.common.feeds.AnalysisObject.prototype._toInstance=function(){var u=this.getProperty('uid');var n=this.getProperty('name');var t=this.getProperty('type');if(u&&t){return new sap.viz.controls.common.feeds.AnalysisObject(u,n,t)}};
sap.viz.ui5.controls.common.feeds.AnalysisObject.prototype.setType=function(t){if(t){t=t.toLowerCase()}this.setProperty('type',t);return this};
sap.viz.ui5.controls.common.feeds.AnalysisObject.fromJSON=function(j){var i=sap.viz.controls.common.feeds.AnalysisObject.fromJSON(j);return new sap.viz.ui5.controls.common.feeds.AnalysisObject({'uid':i.id(),'name':i.name(),'type':i.type(),})};
sap.viz.ui5.controls.common.feeds.AnalysisObject.toJSON=function(a){var i=a?a._toInstance():null;return sap.viz.controls.common.feeds.AnalysisObject.toJSON(i)};
sap.viz.ui5.controls.common.feeds.AnalysisObject.toAnalysisObjects=function(a){return Array.prototype.map.call(a,function(b,i,c){return new sap.viz.ui5.controls.common.feeds.AnalysisObject({'uid':b.id(),'name':b.name(),'type':b.type()})})};
sap.viz.ui5.controls.common.feeds.AnalysisObject.toInstances=function(a){return Array.prototype.map.call(a,function(b,i,c){return b._toInstance()})};
