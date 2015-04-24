/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
sap.ui.define(['jquery.sap.global','./Binding','./Filter','./Sorter'],function(q,B,F,S){"use strict";var L=B.extend("sap.ui.model.ListBinding",{constructor:function(m,p,c,s,f,P){B.call(this,m,p,c,P);this.aSorters=s;if(!q.isArray(this.aSorters)&&this.aSorters instanceof S){this.aSorters=[this.aSorters]}else if(!q.isArray(this.aSorters)){this.aSorters=[]}this.aFilters=[];if(!q.isArray(f)&&f instanceof F){f=[f]}else if(!q.isArray(f)){f=[]}this.aApplicationFilters=f;this.bUseExtendedChangeDetection=false},metadata:{"abstract":true,publicMethods:["getContexts","sort","attachSort","detachSort","filter","attachFilter","detachFilter","getDistinctValues","isGrouped","getLength","isLengthFinal"]}});L.prototype.getLength=function(){return 0};L.prototype.isLengthFinal=function(){return true};L.prototype.getDistinctValues=function(p){return null};L.prototype.attachSort=function(f,l){this.attachEvent("sort",f,l)};L.prototype.detachSort=function(f,l){this.detachEvent("sort",f,l)};L.prototype._fireSort=function(a){this.fireEvent("sort",a)};L.prototype.attachFilter=function(f,l){this.attachEvent("filter",f,l)};L.prototype.detachFilter=function(f,l){this.detachEvent("filter",f,l)};L.prototype._fireFilter=function(a){this.fireEvent("filter",a)};L.prototype.isGrouped=function(){return this.aSorters.length>0&&!!this.aSorters[0].fnGroup};L.prototype.enableExtendedChangeDetection=function(){this.bUseExtendedChangeDetection=true;if(this.update){this.update()}};return L},true);
