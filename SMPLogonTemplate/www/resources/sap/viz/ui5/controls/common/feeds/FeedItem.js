/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.controls.common.feeds.FeedItem");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.viz.ui5.controls.common.feeds.FeedItem",{metadata:{library:"sap.viz",properties:{"uid":{type:"string",group:"Misc",defaultValue:null},"type":{type:"string",group:"Misc",defaultValue:null},"values":{type:"string[]",group:"Misc",defaultValue:null}}}});jQuery.sap.require("sap.viz.ui5.controls.common.feeds.AnalysisObject");
sap.viz.ui5.controls.common.feeds.FeedItem.prototype._toInstance=function(){var u=this.getProperty('uid');var t=this.getProperty('type');var v=this.getProperty('values');if(u&&t){var a=[];this._analysisObjects=[];if(v){v.forEach(function(b,i,v){if(typeof b==='string'){this._analysisObjects[i]=new sap.viz.ui5.controls.common.feeds.AnalysisObject({'uid':b,'name':b,'type':t})}else{this._analysisObjects[i]=b}}.bind(this));a=sap.viz.ui5.controls.common.feeds.AnalysisObject.toInstances(this._analysisObjects)}return new sap.viz.controls.common.feeds.FeedItem(u,t,a)}};
sap.viz.ui5.controls.common.feeds.FeedItem.prototype.setUid=function(u){this.setProperty('uid',u);return this};
sap.viz.ui5.controls.common.feeds.FeedItem.prototype.getAnalysisObjects=function(){this._toInstance();return this._analysisObjects};
sap.viz.ui5.controls.common.feeds.FeedItem.fromJSON=function(j){return sap.viz.controls.common.feeds.FeedItem.fromJSON(j)};
sap.viz.ui5.controls.common.feeds.FeedItem.toJSON=function(o){return sap.viz.controls.common.feeds.FeedItem.toJSON(o)};
sap.viz.ui5.controls.common.feeds.FeedItem.toFeeds=function(a){return Array.prototype.map.call(a,function(b,i,c){return new sap.viz.ui5.controls.common.feeds.FeedItem({'uid':b.id(),'type':b.type(),'values':sap.viz.ui5.controls.common.feeds.AnalysisObject.toAnalysisObjects(b.values())})})};
sap.viz.ui5.controls.common.feeds.FeedItem.toInstances=function(f){return Array.prototype.map.call(f,function(a,i,b){return a._toInstance()})};
