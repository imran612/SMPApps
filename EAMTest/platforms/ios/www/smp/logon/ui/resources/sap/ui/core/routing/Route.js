/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/EventProvider','sap/ui/thirdparty/crossroads','sap/ui/thirdparty/signals'],function(q,E,c,s){"use strict";var R=E.extend("sap.ui.core.routing.Route",{constructor:function(r,C,p){if(!C.name){q.sap.log.error("A name has to be specified for every route")}var t=this,v=C.pattern;if(!q.isArray(v)){v=[v]}if(q.isArray(C.subroutes)){var S=C.subroutes;C.subroutes={};q.each(S,function(i,o){C.subroutes[o.name]=o})}this._aPattern=[];this._aRoutes=[];this._oParent=p;this._oConfig=C;if(C.subroutes){q.each(C.subroutes,function(a,o){if(o.name==undefined){o.name=a}r.addRoute(o,t)})}if(C.pattern===undefined){return}q.each(v,function(i,a){t._aPattern[i]=a;t._aRoutes[i]=r._oRouter.addRoute(a);t._aRoutes[i].matched.add(function(){var A={};q.each(arguments,function(b,d){A[t._aRoutes[i]._paramsIds[b]]=d});t._routeMatched(r,A,true)})})},metadata:{publicMethods:["getURL","getPattern"]}});R.prototype.getURL=function(p){return this._aRoutes[0].interpolate(p)};R.prototype.getPattern=function(){return this._aPattern[0]};R.prototype._routeMatched=function(r,a,i){var v,p,t,T;if(this._oParent){p=this._oParent._routeMatched(r,a);t=p.oTargetParent;T=p.oTargetControl}var C=q.extend({},r._oConfig,this._oConfig);if((T||C.targetControl)&&C.targetAggregation){if(!t){if(C.targetParent){T=sap.ui.getCore().byId(C.targetParent).byId(C.targetControl)}}else{if(C.targetControl){T=t.byId(C.targetControl)}}if(!T){T=sap.ui.getCore().byId(C.targetControl)}if(T){var A=T.getMetadata().getJSONKeys()[C.targetAggregation];if(A){var V=C.view;if(C.viewPath){V=C.viewPath+"."+V}v=r.getView(V,C.viewType,C.viewId);if(C.clearTarget===true){T[A._sRemoveAllMutator]()}T[A._sMutator](v)}else{q.sap.log.error("Control "+C.targetControl+" does not has an aggregation called "+C.targetAggregation)}}else{q.sap.log.error("Control with ID "+C.targetControl+" could not be found")}}if(C.callback){C.callback(this,a,C,T,v)}r.fireRouteMatched({name:C.name,arguments:a,targetControl:T,view:v,config:C});if(i){r.fireRoutePatternMatched({name:C.name,arguments:a,targetControl:T,view:v,config:C})}return{oTargetParent:v,oTargetControl:T}};return R},true);
