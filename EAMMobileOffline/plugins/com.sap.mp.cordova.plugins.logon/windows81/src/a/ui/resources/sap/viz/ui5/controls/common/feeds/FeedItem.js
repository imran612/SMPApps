/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.controls.common.feeds.FeedItem");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.viz.ui5.controls.common.feeds.FeedItem",{metadata:{library:"sap.viz",properties:{"uid":{type:"string",group:"Misc",defaultValue:null},"type":{type:"string",group:"Misc",defaultValue:null},"values":{type:"string[]",group:"Misc",defaultValue:null}}}});jQuery.sap.require("sap.viz.ui5.controls.common.feeds.AnalysisObject");
sap.viz.ui5.controls.common.feeds.FeedItem.prototype._create=function(u,t,v){if(u&&t){var a=[];if(v){v.forEach(function(b,i,v){if(typeof b==='string'){v[i]=new sap.viz.ui5.controls.common.feeds.AnalysisObject({'uid':b,'name':b,'type':t})}}.bind(this));a=sap.viz.ui5.controls.common.feeds.AnalysisObject.toInstances(v)}this._instance=new sap.viz.controls.common.feeds.FeedItem(u,t,a)}else{this._requestedUid=u||this._requestedUid;this._requestedType=t||this._requestedType;this._requestedValues=v||this._requestedValues}};
sap.viz.ui5.controls.common.feeds.FeedItem.prototype.init=function(){this._requestedUid=null;this._requestedType=null;this._requestedValues=null};
sap.viz.ui5.controls.common.feeds.FeedItem.prototype.getUid=function(){return this._instance?this._instance.id():this._requestedUid};
sap.viz.ui5.controls.common.feeds.FeedItem.prototype.setUid=function(u){this._create(u,this.getType(),this.getValues());return this};
sap.viz.ui5.controls.common.feeds.FeedItem.prototype.getType=function(){return this._instance?this._instance.type():this._requestedType};
sap.viz.ui5.controls.common.feeds.FeedItem.prototype.setType=function(t){this._create(this.getUid(),t,this.getValues());return this};
sap.viz.ui5.controls.common.feeds.FeedItem.prototype.getValues=function(){if(this._instance){return sap.viz.ui5.controls.common.feeds.AnalysisObject.toAnalysisObjects(this._instance.values())}else{return this._requestedValues}};
sap.viz.ui5.controls.common.feeds.FeedItem.prototype.setValues=function(v){this._create(this.getUid(),this.getType(),v);return this};
sap.viz.ui5.controls.common.feeds.FeedItem.fromJSON=function(j){return sap.viz.controls.common.feeds.FeedItem.fromJSON(j)};
sap.viz.ui5.controls.common.feeds.FeedItem.toJSON=function(o){return sap.viz.controls.common.feeds.FeedItem.toJSON(o)};
sap.viz.ui5.controls.common.feeds.FeedItem.toFeeds=function(a){return Array.prototype.map.call(a,function(b,i,c){return new sap.viz.ui5.controls.common.feeds.FeedItem({'uid':b.id(),'type':b.type(),'values':sap.viz.ui5.controls.common.feeds.AnalysisObject.toAnalysisObjects(b.values())})})};
sap.viz.ui5.controls.common.feeds.FeedItem.toInstances=function(f){return Array.prototype.map.call(f,function(a,i,b){return a._instance})};
