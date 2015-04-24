/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
sap.ui.define(['jquery.sap.global','sap/ui/model/Model','./ODataUtils','./CountMode','./ODataContextBinding','./ODataListBinding','./ODataMetadata','./ODataPropertyBinding','./ODataTreeBinding','sap/ui/thirdparty/URI','sap/ui/thirdparty/datajs'],function(q,M,O,C,a,b,c,d,e,U,f){"use strict";var g=M.extend("sap.ui.model.odata.ODataModel",{constructor:function(s,j,u,p,h,t,w,l){M.apply(this,arguments);var i,r,m,A=null,L,k,n,D,S,o,v=this;if(typeof j==="object"){u=j.user;p=j.password;h=j.headers;t=j.tokenHandling;l=j.loadMetadataAsync;w=j.withCredentials;m=j.maxDataServiceVersion;i=j.useBatch;r=j.refreshAfterChange;A=j.annotationURI;L=j.loadAnnotationsJoined;D=j.defaultCountMode;n=j.metadataNamespaces;S=j.serviceUrlParams;o=j.metadataUrlParams;j=j.json}this.sDefaultBindingMode=sap.ui.model.BindingMode.OneWay;this.mSupportedBindingModes={"OneWay":true,"OneTime":true,"TwoWay":true};this.bCountSupported=true;this.bJSON=j;this.bCache=true;this.aPendingRequestHandles=[];this.oRequestQueue={};this.aBatchOperations=[];this.oHandler;this.bTokenHandling=t!==false;this.bWithCredentials=w===true;this.bUseBatch=i===true;this.bRefreshAfterChange=r!==false;this.sMaxDataServiceVersion=m;this.bLoadMetadataAsync=!!l;this.bLoadAnnotationsJoined=L===undefined?true:L;this.sAnnotationURI=A;this.sDefaultCountMode=D||C.Both;this.oMetadataLoadEvent=null;this.oMetadataFailedEvent=null;if(this.sAnnotationURI){q.sap.require("sap.ui.model.odata.ODataAnnotations")}this.oHeaders={};this.setHeaders(h);this.oData={};this.oMetadata=null;this.oAnnotations=null;this.aUrlParams=[];if(s.indexOf("?")==-1){this.sServiceUrl=s}else{var x=s.split("?");this.sServiceUrl=x[0];this.aUrlParams.push(x[1])}if(sap.ui.getCore().getConfiguration().getStatistics()){this.aUrlParams.push("sap-statistics=true")}this.sServiceUrl=this.sServiceUrl.replace(/\/$/,"");this.oServiceData=g.mServiceData[this.sServiceUrl];if(!this.oServiceData){g.mServiceData[this.sServiceUrl]={};this.oServiceData=g.mServiceData[this.sServiceUrl]}if(this.bTokenHandling&&this.oServiceData.securityToken){this.oHeaders["x-csrf-token"]=this.oServiceData.securityToken}this.sUser=u;this.sPassword=p;this.oHeaders["Accept-Language"]=sap.ui.getCore().getConfiguration().getLanguage();if(!this.oServiceData.oMetadata){this.oMetadata=new sap.ui.model.odata.ODataMetadata(this._createRequestUrl("$metadata",undefined,o),{async:this.bLoadMetadataAsync,user:this.sUser,password:this.sPassword,headers:this.mCustomHeaders,namespaces:n,withCredentials:this.bWithCredentials});v.oServiceData.oMetadata=v.oMetadata}else{this.oMetadata=this.oServiceData.oMetadata}if(S){this.aUrlParams=this.aUrlParams.concat(O._createUrlParamsArray(S))}if(!this.oMetadata.isLoaded()){this.oMetadata.attachLoaded(function(E){v._initializeMetadata();v.initialize()},this);this.oMetadata.attachFailed(this.fireMetadataFailed,this)}if(this.sAnnotationURI){this.oAnnotations=new sap.ui.model.odata.ODataAnnotations(this.sAnnotationURI,this.oMetadata,{async:this.bLoadMetadataAsync});this.oAnnotations.attachFailed(this.fireAnnotationsFailed,this);this.oAnnotations.attachLoaded(this.fireAnnotationsLoaded,this)}if(this.oMetadata.isLoaded()){this._initializeMetadata(true)}if(this.bJSON){if(this.sMaxDataServiceVersion==="3.0"){this.oHeaders["Accept"]="application/json;odata=fullmetadata"}else{this.oHeaders["Accept"]="application/json"}this.oHandler=OData.jsonHandler}else{this.oHeaders["Accept"]="application/atom+xml,application/atomsvc+xml,application/xml";this.oHandler=OData.atomHandler}this.oHeaders["MaxDataServiceVersion"]="2.0";if(this.sMaxDataServiceVersion){this.oHeaders["MaxDataServiceVersion"]=this.sMaxDataServiceVersion}this.oHeaders["DataServiceVersion"]="2.0"},metadata:{publicMethods:["create","remove","update","submitChanges","getServiceMetadata","read","hasPendingChanges","refresh","resetChanges","isCountSupported","setCountSupported","setDefaultCountMode","getDefaultCountMode","forceNoCache","setProperty","refreshSecurityToken","setHeaders","getHeaders","setUseBatch"]}});g.M_EVENTS={RejectChange:"rejectChange",MetadataLoaded:"metadataLoaded",MetadataFailed:"metadataFailed",AnnotationsLoaded:"annotationsLoaded",AnnotationsFailed:"annotationsFailed"};g.mServiceData={};g.prototype.fireRejectChange=function(A){this.fireEvent("rejectChange",A);return this};g.prototype.attachRejectChange=function(D,F,l){this.attachEvent("rejectChange",D,F,l);return this};g.prototype.detachRejectChange=function(F,l){this.detachEvent("rejectChange",F,l);return this};g.prototype._initializeMetadata=function(D){var t=this;this.bUseBatch=this.bUseBatch||this.oMetadata.getUseBatch();var h=function(i){if(!!i){t.metadataLoadEvent=q.sap.delayedCall(0,t,h)}else{t.fireMetadataLoaded({metadata:t.oMetadata});q.sap.log.debug("ODataModel fired metadataloaded")}};if(this.bLoadMetadataAsync&&this.sAnnotationURI&&this.bLoadAnnotationsJoined){if(this.oAnnotations&&this.oAnnotations.bInitialized){h()}else{this.oAnnotations.attachLoaded(function(){h()},this)}}else{h(D)}};g.prototype.fireAnnotationsLoaded=function(A){this.fireEvent("annotationsLoaded",A);return this};g.prototype.attachAnnotationsLoaded=function(D,F,l){this.attachEvent("annotationsLoaded",D,F,l);return this};g.prototype.detachAnnotationsLoaded=function(F,l){this.detachEvent("annotationsLoaded",F,l);return this};g.prototype.fireAnnotationsFailed=function(A){this.fireEvent("annotationsFailed",A);q.sap.log.debug("ODataModel fired annotationsfailed");return this};g.prototype.attachAnnotationsFailed=function(D,F,l){this.attachEvent("annotationsFailed",D,F,l);return this};g.prototype.detachAnnotationsFailed=function(F,l){this.detachEvent("annotationsFailed",F,l);return this};g.prototype.fireMetadataLoaded=function(A){this.fireEvent("metadataLoaded",A);return this};g.prototype.attachMetadataLoaded=function(D,F,l){this.attachEvent("metadataLoaded",D,F,l);return this};g.prototype.detachMetadataLoaded=function(F,l){this.detachEvent("metadataLoaded",F,l);return this};g.prototype.fireMetadataFailed=function(A){this.fireEvent("metadataFailed",A);return this};g.prototype.attachMetadataFailed=function(D,F,l){this.attachEvent("metadataFailed",D,F,l);return this};g.prototype.detachMetadataFailed=function(F,l){this.detachEvent("metadataFailed",F,l);return this};g.prototype._createRequestUrl=function(p,o,u,B,h){var i,r,s,j="";if(p&&p.indexOf('?')!=-1){s=p.substr(p.indexOf('?')+1);p=p.substr(0,p.indexOf('?'))}r=this._normalizePath(p,o);if(!B){j=this.sServiceUrl+r}else{j=r.substr(r.indexOf('/')+1)}i=O._createUrlParamsArray(u);if(this.aUrlParams){i=i.concat(this.aUrlParams)}if(s){i.push(s)}if(i.length>0){j+="?"+i.join("&")}if(h===undefined){h=true}if(h===false){var t=q.now();var k=j.replace(/([?&])_=[^&]*/,"$1_="+t);j=k+((k===j)?(/\?/.test(j)?"&":"?")+"_="+t:"")}return j};g.prototype._loadData=function(p,P,s,E,h,H,i){var r,R,o,t=this;function _(D,m){var n=D,v={};if(!n){q.sap.log.fatal("The following problem occurred: No data was retrieved by service: "+m.requestUri);t.fireRequestCompleted({url:o.requestUri,type:"GET",async:o.async,info:"Accept headers:"+t.oHeaders["Accept"],infoObject:{acceptHeaders:t.oHeaders["Accept"]},success:false});return false}if(t.bUseBatch){var w=t._getBatchErrors(D);if(w.length>0){j(w[0]);return false}if(n.__batchResponses&&n.__batchResponses.length>0){n=n.__batchResponses[0].data}else{q.sap.log.fatal("The following problem occurred: No data was retrieved by service: "+m.requestUri)}}l=l.concat(n.results);if(n.__next){var x=new URI(n.__next);o.requestUri=x.absoluteTo(m.requestUri).toString();k(o)}else{q.extend(n.results,l);if(n.results&&!q.isArray(n.results)){n=n.results}t._importData(n,v);if(t.sChangeKey&&v){var y=t.sChangeKey.substr(t.sChangeKey.lastIndexOf('/')+1);if(v[y]){delete t.oRequestQueue[t.sChangeKey];t.sChangeKey=null}}if(s){s(n)}t.checkUpdate(false,v);if(i){i(n)}t.fireRequestCompleted({url:o.requestUri,type:"GET",async:o.async,info:"Accept headers:"+t.oHeaders["Accept"],infoObject:{acceptHeaders:t.oHeaders["Accept"]},success:true})}}function j(m){if(t.bTokenHandling&&m.response){var T=t._getHeader("x-csrf-token",m.response.headers);if(!o.bTokenReset&&m.response.statusCode=='403'&&T&&T.toLowerCase()=="required"){t.resetSecurityToken();o.bTokenReset=true;k();return}}var n=t._handleError(m);if(E){E(m,r&&r.bAborted)}t.fireRequestCompleted({url:o.requestUri,type:"GET",async:o.async,info:"Accept headers:"+t.oHeaders["Accept"],infoObject:{acceptHeaders:t.oHeaders["Accept"]},success:false,errorobject:n});if(!r||!r.bAborted){n.url=o.requestUri;t.fireRequestFailed(n)}}function k(){if(t.bUseBatch){t.updateSecurityToken();var m=URI.parse(o.requestUri).query;var n=t._createRequestUrl(p,null,m,t.bUseBatch);o=t._createRequest(n,"GET",true);var B=t._createBatchRequest([o],true);r=t._request(B,_,j,OData.batchHandler,undefined,t.getServiceMetadata())}else{r=t._request(o,_,j,t.oHandler,undefined,t.getServiceMetadata())}if(H){var w={abort:function(){r.bAborted=true;r.abort()}};H(w)}}var l=[];var u=this._createRequestUrl(p,null,P,null,h||this.bCache);o=this._createRequest(u,"GET",true);this.fireRequestSent({url:o.requestUri,type:"GET",async:o.async,info:"Accept headers:"+this.oHeaders["Accept"],infoObject:{acceptHeaders:this.oHeaders["Accept"]}});k()};g.prototype._importData=function(D,k){var t=this,l,K,r,E;if(D.results){l=[];q.each(D.results,function(i,h){l.push(t._importData(h,k))});return l}else{K=this._getKey(D);E=this.oData[K];if(!E){E=D;this.oData[K]=E}q.each(D,function(n,p){if(p&&(p.__metadata&&p.__metadata.uri||p.results)&&!p.__deferred){r=t._importData(p,k);if(q.isArray(r)){E[n]={__list:r}}else{E[n]={__ref:r}}}else if(!p||!p.__deferred){E[n]=p}});k[K]=true;return K}};g.prototype._removeReferences=function(D){var t=this,l;if(D.results){l=[];q.each(D.results,function(i,h){l.push(t._removeReferences(h))});return l}else{q.each(D,function(p,o){if(o){if(o["__ref"]||o["__list"]){delete D[p]}}});return D}};g.prototype._restoreReferences=function(D){var t=this,o,l,r=[];if(D.results){l=[];q.each(D.results,function(i,h){l.push(t._restoreReferences(h))});return l}else{q.each(D,function(p,o){if(o&&o["__ref"]){var h=t._getObject("/"+o["__ref"]);if(h){delete o["__ref"];D[p]=h;t._restoreReferences(h)}}else if(o&&o["__list"]){q.each(o["__list"],function(j,E){var h=t._getObject("/"+o["__list"][j]);if(h){r.push(h);t._restoreReferences(h)}});delete o["__list"];o.results=r;r=[]}});return D}};g.prototype.removeData=function(){this.oData={}};g.prototype.initialize=function(){var B=this.aBindings.slice(0);q.each(B,function(i,o){o.initialize()})};g.prototype.refresh=function(F,r){if(r){this.removeData()}this._refresh(F)};g.prototype._refresh=function(F,m,E){var B=this.aBindings.slice(0);q.each(B,function(i,o){o.refresh(F,m,E)})};g.prototype.checkUpdate=function(F,m){var B=this.aBindings.slice(0);q.each(B,function(i,o){o.checkUpdate(F,m)})};g.prototype.bindProperty=function(p,o,P){var B=new d(this,p,o,P);return B};g.prototype.bindList=function(p,o,s,F,P){var B=new b(this,p,o,s,F,P);return B};g.prototype.bindTree=function(p,o,F,P){var B=new e(this,p,o,F,P);return B};g.prototype.createBindingContext=function(p,o,P,h,r){var r=!!r,F=this.resolve(p,o);if(typeof o=="function"){h=o;o=null}if(typeof P=="function"){h=P;P=null}var D=this._getObject(p,o),k,n,t=this;if(!r){r=this._isReloadNeeded(F,D,P)}if(!r){k=this._getKey(D);n=this.getContext('/'+k);h(n)}else{var i=!q.sap.startsWith(p,"/");if(F){var j=[],s=this.createCustomParams(P);if(s){j.push(s)}this._loadData(F,j,function(D){k=D?t._getKey(D):undefined;if(k&&o&&i){var l=o.getPath();l=l.substr(1);if(t.oData[l]){t.oData[l][p]={__ref:k}}}n=t.getContext('/'+k);h(n)},function(){h(null)})}else{h(null)}}};g.prototype._isReloadNeeded=function(F,D,p){var n,N=[],h,s,S=[];if(!D){return true}if(p&&p["expand"]){n=p["expand"].replace(/\s/g,"");N=n.split(',')}if(N){for(var i=0;i<N.length;i++){var j=N[i].indexOf("/");if(j!==-1){var k=N[i].slice(0,j);var l=N[i].slice(j+1);N[i]=[k,l]}}}for(var i=0;i<N.length;i++){var m=N[i];if(q.isArray(m)){var o=D[m[0]];var r=m[1];if(!o||(o&&o.__deferred)){return true}else{if(o){if(o.__list&&o.__list.length>0){for(var t=0;t<o.__list.length;t++){var P="/"+o.__list[t];var u=this.getObject(P);var R=this._isReloadNeeded(P,u,{expand:r});if(R){return true}}}else if(o.__ref){var P="/"+o.__ref;var u=this.getObject(P);var R=this._isReloadNeeded(P,u,{expand:r});if(R){return true}}}}}else{if(D[m]===undefined||(D[m]&&D[m].__deferred)){return true}}}if(p&&p["select"]){s=p["select"].replace(/\s/g,"");S=s.split(',')}for(var i=0;i<S.length;i++){if(D[S[i]]===undefined){return true}}if(S.length==0){var E=this.oMetadata._getEntityTypeByPath(F);if(!E){return false}else{for(var i=0;i<E.property.length;i++){if(D[E.property[i].name]===undefined){return true}}}}return false};g.prototype.destroyBindingContext=function(o){};g.prototype.createCustomParams=function(p){var h=[],m,s={expand:true,select:true};for(var n in p){if(n in s){h.push("$"+n+"="+q.sap.encodeURL(p[n]))}if(n=="custom"){m=p[n];for(var n in m){if(n.indexOf("$")==0){q.sap.log.warning("Trying to set OData parameter "+n+" as custom query option!")}else{h.push(n+"="+q.sap.encodeURL(m[n]))}}}}return h.join("&")};g.prototype.bindContext=function(p,o,P){var B=new a(this,p,o,P);return B};g.prototype.setCountSupported=function(h){this.bCountSupported=h};g.prototype.isCountSupported=function(){return this.bCountSupported};g.prototype.setDefaultCountMode=function(s){this.sDefaultCountMode=s};g.prototype.getDefaultCountMode=function(){return this.sDefaultCountMode};g.prototype._getKey=function(o,D){var k,u;if(o instanceof sap.ui.model.Context){k=o.getPath().substr(1)}else if(o&&o.__metadata&&o.__metadata.uri){u=o.__metadata.uri;k=u.substr(u.lastIndexOf("/")+1)}if(D)k=decodeURIComponent(k);return k};g.prototype.getKey=function(o,D){return this._getKey(o,D)};g.prototype.createKey=function(s,k,D){var E=this.oMetadata._getEntityTypeByPath(s),K=s,t=this,h,n,v,p;K+="(";if(E.key.propertyRef.length==1){n=E.key.propertyRef[0].name;p=this.oMetadata._getPropertyMetadata(E,n);v=O.formatValue(k[n],p.type);K+=D?v:encodeURIComponent(v)}else{q.each(E.key.propertyRef,function(i,P){if(i>0)K+=",";n=P.name;p=t.oMetadata._getPropertyMetadata(E,n);v=O.formatValue(k[n],p.type);K+=n;K+="=";K+=D?v:encodeURIComponent(v)})}K+=")";return K};g.prototype.getProperty=function(p,o,i){var v=this._getObject(p,o);if(i==null||i==undefined){return v}if(!q.isPlainObject(v)){return v}v=q.extend(true,{},v);if(i==true){return this._restoreReferences(v)}else{return this._removeReferences(v)}};g.prototype._getObject=function(p,o){var n=this.isLegacySyntax()?this.oData:null,r,k;if(this.oMetadata&&p&&p.indexOf('#')>-1){r=this.resolve(p,o);if(r){n=this.oMetadata._getAnnotation(r)}}else{if(o){k=o.getPath();k=k.substr(1);n=this.oData[k]}if(!p){return n}var P=p.split("/"),i=0;if(!P[0]){n=this.oData;i++}while(n&&P[i]){n=n[P[i]];if(n){if(n.__ref){n=this.oData[n.__ref]}else if(n.__list){n=n.__list}else if(n.__deferred){n=undefined}}i++}}return n};g.prototype.updateSecurityToken=function(){if(this.bTokenHandling){if(!this.oServiceData.securityToken){this.refreshSecurityToken()}if(this.bTokenHandling){this.oHeaders["x-csrf-token"]=this.oServiceData.securityToken}}};g.prototype.resetSecurityToken=function(){delete this.oServiceData.securityToken;delete this.oHeaders["x-csrf-token"]};g.prototype.refreshSecurityToken=function(s,E,A){var t=this,u,T;A=A===true;u=this._createRequestUrl("/");var r=this._createRequest(u,"GET",A);r.headers["x-csrf-token"]="Fetch";function _(D,R){if(R){T=t._getHeader("x-csrf-token",R.headers);if(T){t.oServiceData.securityToken=T;t.oHeaders["x-csrf-token"]=T}else{t.resetSecurityToken();t.bTokenHandling=false}}if(s){s(D,R)}}function h(o){t.resetSecurityToken();t.bTokenHandling=false;t._handleError(o);if(E){E(o)}}return this._request(r,_,h,undefined,undefined,this.getServiceMetadata())};g.prototype._submitRequest=function(r,B,s,E,h,i){var t=this,R,m={};function _(D,o){if(B&&h){var l=t._getBatchErrors(D);if(l.length>0){j(l[0]);return false}if(D.__batchResponses&&D.__batchResponses.length>0){R=D.__batchResponses[0].data;if(!R&&D.__batchResponses[0].__changeResponses){R=D.__batchResponses[0].__changeResponses[0].data}}D=R}if(i){if(D&&D.__batchResponses){q.each(D.__batchResponses,function(I,o){if(o&&o.data){t._importData(o.data,m)}})}}t._handleETag(r,o,B);t._updateRequestQueue(r,B);if(t._isRefreshNeeded(r,o)){t._refresh(false,r.keys,r.entityTypes)}if(s){s(D,o)}}function j(o){if(t.bTokenHandling&&o.response){var T=t._getHeader("x-csrf-token",o.response.headers);if(!r.bTokenReset&&o.response.statusCode=='403'&&T&&T.toLowerCase()=="required"){t.resetSecurityToken();r.bTokenReset=true;k();return}}t._handleError(o);if(E){E(o)}}function k(){if(t.bTokenHandling&&r.method!=="GET"){t.updateSecurityToken();if(t.bTokenHandling){r.headers["x-csrf-token"]=t.oServiceData.securityToken}}if(B){return t._request(r,_,j,OData.batchHandler,undefined,t.getServiceMetadata())}else{return t._request(r,_,j,t.oHandler,undefined,t.getServiceMetadata())}}return k()};g.prototype._createBatchRequest=function(B,A){var u,r,o={},p={},h=[],K={},E={};p.__batchRequests=B;u=this.sServiceUrl+"/$batch";if(this.aUrlParams.length>0){u+="?"+this.aUrlParams.join("&")}q.extend(o,this.mCustomHeaders,this.oHeaders);delete o["Content-Type"];r={headers:o,requestUri:u,method:"POST",data:p,user:this.sUser,password:this.sPassword,async:A};if(A){r.withCredentials=this.bWithCredentials}q.each(B,function(i,m){if(m["__changeRequests"]){q.each(m["__changeRequests"],function(j,n){if(n.keys&&n.method!="POST"){q.each(n.keys,function(k,s){K[k]=s})}else if(n.entityTypes&&n.method=="POST"){q.each(n.entityTypes,function(l,s){E[l]=s})}})}});r.keys=K;r.entityTypes=E;return r};g.prototype._handleETag=function(r,R,B){var u,E,h,k,l,m;if(B){l=r.data.__batchRequests;m=R.data.__batchResponses;if(m&&l){for(var i=0;i<l.length;i++){h=l[i].__changeRequests;if(m[i]){k=m[i].__changeResponses;if(h&&k){for(var j=0;j<h.length;j++){if(h[j].method=="MERGE"||h[j].method=="PUT"){u=h[j].requestUri.replace(this.sServiceUrl+'/','');if(!q.sap.startsWith(u,"/")){u="/"+u}E=this._getObject(u);if(E&&E.__metadata&&k[j].headers&&k[j].headers.ETag){E.__metadata.etag=k[j].headers.ETag}}}}}else{q.sap.log.warning("could not update ETags for batch request: corresponding response for request missing")}}}else{q.sap.log.warning("could not update ETags for batch request: no batch responses/requests available")}}else{u=r.requestUri.replace(this.sServiceUrl+'/','');if(!q.sap.startsWith(u,"/")){u="/"+u}E=this._getObject(u);if(E&&E.__metadata&&R.headers.ETag){E.__metadata.etag=R.headers.ETag}}};g.prototype._handleBatchErrors=function(r,D){var E=[];E=this._getBatchErrors(D);this._handleETag()};g.prototype._getBatchErrors=function(D){var E=[],s;q.each(D.__batchResponses,function(i,o){if(o.message){s="The following problem occurred: "+o.message;if(o.response){s+=o.response.statusCode+","+o.response.statusText+","+o.response.body}E.push(o);q.sap.log.fatal(s)}if(o.__changeResponses){q.each(o.__changeResponses,function(i,h){if(h.message){s="The following problem occurred: "+h.message;if(h.response){s+=h.response.statusCode+","+h.response.statusText+","+h.response.body}E.push(h);q.sap.log.fatal(s)}})}});return E};g.prototype._handleError=function(E){var p={},h,t;var s="The following problem occurred: "+E.message;p.message=E.message;if(E.response){if(this.bTokenHandling){t=this._getHeader("x-csrf-token",E.response.headers);if(E.response.statusCode=='403'&&t&&t.toLowerCase()=="required"){this.resetSecurityToken()}}s+=E.response.statusCode+","+E.response.statusText+","+E.response.body;p.statusCode=E.response.statusCode;p.statusText=E.response.statusText;p.responseText=E.response.body}q.sap.log.fatal(s);return p};g.prototype.getData=function(p,o,i){return this.getProperty(p,o,i)};g.prototype._getETag=function(p,P,E){var s,h,i;if(E){s=E}else{if(P&&P.__metadata){s=P.__metadata.etag}else if(p){h=p.replace(this.sServiceUrl+'/','');i=h.indexOf("?");if(i>-1){h=h.substr(0,i)}if(this.oData.hasOwnProperty(h)){s=this.getProperty('/'+h+'/__metadata/etag')}}}return s};g.prototype._createRequest=function(u,m,A,p,E){var o={},s;q.extend(o,this.mCustomHeaders,this.oHeaders);s=this._getETag(u,p,E);if(s&&m!="GET"){o["If-Match"]=s}if(this.bJSON&&m!="DELETE"&&this.sMaxDataServiceVersion==="2.0"){o["Content-Type"]="application/json"}if(m=="MERGE"&&!this.bUseBatch){o["x-http-method"]="MERGE";m="POST"}var r={headers:o,requestUri:u,method:m,user:this.sUser,password:this.sPassword,async:A};if(p){r.data=p}if(A){r.withCredentials=this.bWithCredentials}return r};g.prototype._isRefreshNeeded=function(r,R){var h=false,E,i=[],t=this;if(!this.bRefreshAfterChange){return h}if(r.data&&q.isArray(r.data.__batchRequests)){if(R){i=t._getBatchErrors(R.data);q.each(i,function(I,o){if(o.response&&o.response.statusCode=="412"){E=o.response.statusCode;return false}});if(!!E){return false}}q.each(r.data.__batchRequests,function(I,B){if(q.isArray(B.__changeRequests)){q.each(B.__changeRequests,function(I,o){h=h||t._isRefreshNeeded(o);return!h})}return!h})}else{if(r.method==="GET"){return false}else{if(R&&R.statusCode=="412"){h=false}else{h=true}}}return h};g.prototype.update=function(p,D,P){var s,E,m,r,u,o,h,R,B,i,S,k,j,A=false;if(P instanceof sap.ui.model.Context||arguments.length>3){o=P;s=arguments[3];E=arguments[4];m=arguments[5]}else{o=P.context||P.oContext;s=P.success||P.fnSuccess;E=P.error||P.fnError;h=P.eTag||P.sETag;m=typeof(P.merge)=="undefined"?P.bMerge===true:P.merge===true;A=typeof(P.async)=="undefined"?P.bAsync===true:P.async===true;j=P.urlParameters}u=this._createRequestUrl(p,o,j,this.bUseBatch);if(m){r=this._createRequest(u,"MERGE",A,D,h)}else{r=this._createRequest(u,"PUT",A,D,h)}p=this._normalizePath(p,o);S=this._getObject(p);r.keys={};if(S){k=this._getKey(S);r.keys[k]=true}if(this.bUseBatch){B=this._createBatchRequest([{__changeRequests:[r]}],A);R=this._submitRequest(B,this.bUseBatch,s,E,true)}else{R=this._submitRequest(r,this.bUseBatch,s,E)}return R};g.prototype.create=function(p,D,P){var r,B,u,R,s,E,o,S,h,A=false,m;if(P&&typeof(P)=="object"&&!(P instanceof sap.ui.model.Context)){o=P.context;S=P.success;m=P.urlParameters;h=P.error;A=P.async===true}else{o=P;S=arguments[3];h=arguments[4]}u=this._createRequestUrl(p,o,m,this.bUseBatch);r=this._createRequest(u,"POST",A,D);p=this._normalizePath(p,o);E=this.oMetadata._getEntityTypeByPath(p);r.entityTypes={};if(E){r.entityTypes[E.entityType]=true}if(this.bUseBatch){B=this._createBatchRequest([{__changeRequests:[r]}],A);R=this._submitRequest(B,this.bUseBatch,S,h,true)}else{R=this._submitRequest(r,this.bUseBatch,S,h)}return R};g.prototype.remove=function(p,P){var o,E,s,S,h,r,u,i,k,j,_,B,R,l,m,A=false,t=this;if((P&&P instanceof sap.ui.model.Context)||arguments[2]){o=P;S=arguments[2];h=arguments[3]}else if(P){o=P.context||P.oContext;S=P.success||P.fnSuccess;h=P.error||P.fnError;i=P.eTag||P.sETag;j=P.payload||P.oPayload;A=typeof(P.async)=="undefined"?P.bAsync===true:P.async===true;m=P.urlParameters}_=function(D,n){E=u.substr(u.lastIndexOf('/')+1);if(E.indexOf('?')!=-1){E=E.substr(0,E.indexOf('?'))}delete t.oData[E];delete t.mContexts["/"+E];if(S){S(D,n)}};u=this._createRequestUrl(p,o,m,this.bUseBatch);r=this._createRequest(u,"DELETE",A,j,i);p=this._normalizePath(p,o);s=this._getObject(p);r.keys={};if(s){k=this._getKey(s);r.keys[k]=true}if(this.bUseBatch){B=this._createBatchRequest([{__changeRequests:[r]}],A);R=this._submitRequest(B,this.bUseBatch,_,h,true)}else{R=this._submitRequest(r,this.bUseBatch,_,h)}return R};g.prototype.callFunction=function(F,p){var r,B,u,R,o,P,h,s,E,A,m="GET",i={},t=this;if(p&&typeof(p)=="object"){m=p.method?p.method:m;P=p.urlParameters;h=p.context;s=p.success;E=p.error;A=p.async===true}else{m=p;P=arguments[2];h=arguments[3];s=arguments[4];E=arguments[5];A=arguments[6]===true}o=this.oMetadata._getFunctionImportMetadata(F,m);if(o){u=this._createRequestUrl(F,h,null,this.bUseBatch);var j=URI(u);if(o.parameter!=null){q.each(P,function(k,l){var n=q.grep(o.parameter,function(w){return w.name==k&&w.mode=="In"});if(n!=null&&n.length>0){var v=n[0];i[k]=O.formatValue(l,v.type)}else{q.sap.log.warning("Parameter "+k+" is not defined for function call "+F+"!")}})}if(m==="GET"){return t.read(F,h,i,true,s,E)}else{q.each(i,function(k,l){j.addQuery(k,l)});r=this._createRequest(j.toString(),m,A);if(this.bUseBatch){B=this._createBatchRequest([{__changeRequests:[r]}],A);R=this._submitRequest(B,this.bUseBatch,s,E,true)}else{R=this._submitRequest(r,this.bUseBatch,s,E)}return R}}};g.prototype.read=function(p,P){var r,u,R,B,o,m,A,s,E,F,S,h,i,j,k,l,t=this;if(P&&typeof(P)=="object"&&!(P instanceof sap.ui.model.Context)){o=P.context;m=P.urlParameters;A=P.async!==false;s=P.success;E=P.error;F=P.filters;S=P.sorters}else{o=P;m=arguments[2];A=arguments[3]!==false;s=arguments[4];E=arguments[5]}A=A!==false;l=O._createUrlParamsArray(m);i=O.createSortParams(S);if(i){l.push(i)};if(F&&!this.oMetadata){q.sap.log.fatal("Tried to use filters in read method before metadata is available.")}else{k=this._normalizePath(p,o);j=this.oMetadata&&this.oMetadata._getEntityTypeByPath(k);h=O.createFilterParams(F,this.oMetadata,j);if(h){l.push(h)}}u=this._createRequestUrl(p,o,l,this.bUseBatch);r=this._createRequest(u,"GET",A);if(this.bUseBatch){B=this._createBatchRequest([r],A);R=this._submitRequest(B,this.bUseBatch,s,E,true)}else{R=this._submitRequest(r,this.bUseBatch,s,E)}return R};g.prototype.createBatchOperation=function(p,m,D,P){var o={},E,s,k,h;q.extend(o,this.mCustomHeaders,this.oHeaders);if(q.sap.startsWith(p,"/")){p=p.substr(1)}if(P){E=P.sETag}if(m!="GET"){E=this._getETag(p,D,E);if(E){o["If-Match"]=E}}if(this.bJSON){if(m!="DELETE"&&m!="GET"&&this.sMaxDataServiceVersion==="2.0"){o["Content-Type"]="application/json"}}else{o["Content-Type"]="application/atom+xml"}var r={requestUri:p,method:m.toUpperCase(),headers:o};if(D){r.data=D}if(m!="GET"&&m!="POST"){if(p&&p.indexOf("/")!=0){p='/'+p}s=this._getObject(p);if(s){k=this._getKey(s);r.keys={};r.keys[k]=true}}else if(m=="POST"){h=this.oMetadata._getEntityTypeByPath(p);if(h){r.entityTypes={};r.entityTypes[h.entityType]=true}}return r};g.prototype.addBatchReadOperations=function(r){if(!q.isArray(r)||r.length<=0){q.sap.log.warning("No array with batch operations provided!");return false}var t=this;q.each(r,function(i,R){if(R.method!="GET"){q.sap.log.warning("Batch operation should be a GET operation!");return false}t.aBatchOperations.push(R)})};g.prototype.addBatchChangeOperations=function(h){if(!q.isArray(h)||h.length<=0){return false}q.each(h,function(i,o){if(o.method!="POST"&&o.method!="PUT"&&o.method!="MERGE"&&o.method!="DELETE"){q.sap.log.warning("Batch operation should be a POST/PUT/MERGE/DELETE operation!");return false}});this.aBatchOperations.push({__changeRequests:h})};g.prototype.clearBatch=function(){this.aBatchOperations=[]};g.prototype.submitBatch=function(s,E,A,i){var r,u,R,t=this;function _(D,j){if(s){s(D,j,t._getBatchErrors(D))}}if(!(typeof(s)=="function")){var o=A;var h=E;A=s;s=h;E=o}A=A!==false;if(this.aBatchOperations.length<=0){q.sap.log.warning("No batch operations in batch. No request will be triggered!");return false}r=this._createBatchRequest(this.aBatchOperations,A);R=this._submitRequest(r,true,_,E,false,i);this.clearBatch();return R};g.prototype.getServiceMetadata=function(){if(this.oMetadata&&this.oMetadata.isLoaded()){return this.oMetadata.getServiceMetadata()}};g.prototype.getServiceAnnotations=function(){if(this.oAnnotations&&this.oAnnotations.getAnnotationsData){return this.oAnnotations.getAnnotationsData()}};g.prototype.submitChanges=function(s,E,p){var r,P,t=this,h,i,T,m,S,k;if(this.sChangeKey){h=this.sChangeKey.replace(this.sServiceUrl,'');S=this._getObject(h);P=S;if(q.isPlainObject(S)){P=q.extend(true,{},S);if(P.__metadata){T=P.__metadata.type;m=P.__metadata.etag;delete P.__metadata;if(T||m){P.__metadata={}}if(T){P.__metadata.type=T}if(!!m){P.__metadata.etag=m}}q.each(P,function(l,u){if(u&&u.__deferred){delete P[l]}});var o=this.oMetadata._getEntityTypeByPath(h);if(o){var n=this.oMetadata._getNavigationPropertyNames(o);q.each(n,function(I,N){delete P[N]})}P=this._removeReferences(P)}if(p&&p.sETag){i=p.sETag}r=this._createRequest(this.sChangeKey,"MERGE",true,P,i);if(this.sUrlParams){r.requestUri+="?"+this.sUrlParams}r.keys={};if(S){k=this._getKey(S);r.keys[k]=true}this.oRequestQueue[this.sChangeKey]=r}if(q.isEmptyObject(this.oRequestQueue)){return undefined}if(this.bUseBatch){var j=[];q.each(this.oRequestQueue,function(k,l){delete l._oRef;var R=q.extend(true,{},l);l._oRef=R;R.requestUri=R.requestUri.replace(t.sServiceUrl+'/','');R.data._bCreate?delete R.data._bCreate:false;j.push(R)});r=this._createBatchRequest([{__changeRequests:j}],true);this._submitRequest(r,this.bUseBatch,s,E,true)}else{q.each(this.oRequestQueue,function(k,l){delete l._oRef;var R=q.extend(true,{},l);l._oRef=R;if(R.data&&R.data._bCreate){delete R.data._bCreate}t._submitRequest(R,this.bUseBatch,s,E,true)})}return undefined};g.prototype._updateRequestQueue=function(r,B){var h,k,o,t=this;if(B){h=r.data.__batchRequests;if(h){for(var i=0;i<h.length;i++){k=h[i].__changeRequests;if(k){for(var j=0;j<k.length;j++){o=k[j];q.each(this.oRequestQueue,function(K,l){if(l._oRef===o&&K!==t.sChangeKey){delete t.oRequestQueue[K];delete t.oData[K];delete t.mContexts["/"+K]}else if(t.sChangeKey&&K===t.sChangeKey){delete t.oRequestQueue[K];t.sChangeKey=null}})}}}}}else{q.each(this.oRequestQueue,function(K,l){if(l._oRef===r&&K!==t.sChangeKey){delete t.oRequestQueue[K];delete t.oData[K];delete t.mContexts["/"+K]}else if(t.sChangeKey&&K===t.sChangeKey){delete t.oRequestQueue[K];t.sChangeKey=null}})}};g.prototype.resetChanges=function(s,E){var p;if(this.sChangeKey){p=this.sChangeKey.replace(this.sServiceUrl,'');this._loadData(p,null,s,E)}};g.prototype.setProperty=function(p,v,o){var P,E={},D={},s=this._createRequestUrl(p,o),h=p.substring(0,p.lastIndexOf("/")),k,j,m={},l=false;if(!this.resolve(p,o)){return false}s=s.replace(this.sServiceUrl+'/','');s=s.substring(0,s.indexOf("/"));s=this.sServiceUrl+'/'+s;P=p.substr(p.lastIndexOf("/")+1);D=this._getObject(h,o);if(!D){return false}j=h.split("/");for(var i=j.length-1;i>=0;i--){E=this._getObject(j.join("/"),o);if(E){k=this._getKey(E);if(k){break}}j.splice(i-1,1)}if(!k){k=this._getKey(o)}if(k){m[k]=true}if(D._bCreate){D[P]=v;l=true;this.checkUpdate(false,m)}else{if(!this.sChangeKey){this.sChangeKey=s}if(this.sChangeKey==s){D[P]=v;l=true;this.checkUpdate(false,m)}else{this.fireRejectChange({rejectedValue:v,oldValue:D[P]})}}return l};g.prototype._isHeaderPrivate=function(h){switch(h.toLowerCase()){case"accept":case"accept-language":case"maxdataserviceversion":case"dataserviceversion":return true;break;case"x-csrf-token":return this.bTokenHandling;break;default:return false}};g.prototype.setHeaders=function(h){var m={},t=this;if(h){q.each(h,function(H,s){if(t._isHeaderPrivate(H)){q.sap.log.warning("Not allowed to modify private header: "+H)}else{m[H]=s}});this.mCustomHeaders=m}else{this.mCustomHeaders={}}};g.prototype.getHeaders=function(){return q.extend({},this.mCustomHeaders,this.oHeaders)};g.prototype._getHeader=function(F,h){var H;for(H in h){if(H.toLowerCase()===F.toLowerCase()){return h[H]}}return null};g.prototype.hasPendingChanges=function(){return this.sChangeKey!=null};g.prototype.updateBindings=function(F){this.checkUpdate(F)};g.prototype.forceNoCache=function(F){this.bCache=!F};g.prototype.setTokenHandlingEnabled=function(t){this.bTokenHandling=t};g.prototype.setUseBatch=function(u){this.bUseBatch=u};g.prototype.formatValue=function(v,t){return O.formatValue(v,t)};g.prototype.deleteCreatedEntry=function(o){if(o){var p=o.getPath();delete this.mContexts[p];if(q.sap.startsWith(p,"/")){p=p.substr(1)}delete this.oRequestQueue[p];delete this.oData[p]}};g.prototype.createEntry=function(p,P){var E={},k,u,r;if(!q.sap.startsWith(p,"/")){p="/"+p}var o=this.oMetadata._getEntityTypeByPath(p);if(!o){return undefined}if(typeof P==="object"&&!q.isArray(P)){E=P}else{for(var i=0;i<o.property.length;i++){var h=o.property[i];var t=h.type.split('.');var j=q.inArray(h.name,P)>-1;if(!P||j){E[h.name]=this._createPropertyValue(t);if(j){P.splice(P.indexOf(h.name),1)}}}if(P){}}E._bCreate=true;k=p.substring(1)+"('"+q.sap.uid()+"')";this.oData[k]=E;E.__metadata={type:""+o.entityType};u=this._createRequestUrl(p);r=this._createRequest(u,"POST",true,E);r.entityTypes={};r.entityTypes[o.entityType]=true;this.oRequestQueue[k]=r;return this.getContext("/"+k)};g.prototype._createPropertyValue=function(t){var n=t[0];var T=t[1];if(n.toUpperCase()!=='EDM'){var o={};var h=this.oMetadata._getObjectMetadata("complexType",T,n);for(var i=0;i<h.property.length;i++){var p=h.property[i];var t=p.type.split('.');o[p.name]=this._createPropertyValue(t)}return o}else{return this._getDefaultPropertyValue(T,n)}};g.prototype._getDefaultPropertyValue=function(t,n){return undefined};g.prototype._normalizePath=function(p,o){if(p&&p.indexOf('?')!=-1){p=p.substr(0,p.indexOf('?'))}if(!o&&!q.sap.startsWith(p,"/")){p='/'+p;q.sap.log.warning("sPath should be absolute if no Context is set")}return this.resolve(p,o)};g.prototype.setRefreshAfterChange=function(r){this.bRefreshAfterChange=r};g.prototype.isList=function(p,o){var p=this.resolve(p,o);return p&&p.substr(p.lastIndexOf("/")).indexOf("(")===-1};g.prototype._request=function(r,s,E,h,H,m){if(this.bDestroyed){return{abort:function(){}}}var t=this;function w(i){return function(){var I=q.inArray(R,t.aPendingRequestHandles);if(I>-1){t.aPendingRequestHandles.splice(I,1)}if(!(R&&R.bSuppressErrorHandlerCall)){i.apply(this,arguments)}}}var R=OData.request(r,w(s||OData.defaultSuccess),w(E||OData.defaultError),h,H,m);if(r.async!==false){this.aPendingRequestHandles.push(R)}return R};g.prototype.destroy=function(){if(this.aPendingRequestHandles){for(var i=this.aPendingRequestHandles.length-1;i>=0;i--){var r=this.aPendingRequestHandles[i];if(r&&r.abort){r.bSuppressErrorHandlerCall=true;r.abort()}}delete this.aPendingRequestHandles}if(!!this.oMetadataLoadEvent){q.sap.clearDelayedCall(this.oMetadataLoadEvent)}if(!!this.oMetadataFailedEvent){q.sap.clearDelayedCall(this.oMetadataFailedEvent)}if(this.oMetadata){this.oMetadata.destroy();delete this.oMetadata}if(this.oAnnotations){this.oAnnotations.destroy();delete this.oAnnotations}M.prototype.destroy.apply(this,arguments)};return g},true);
