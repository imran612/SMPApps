/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */
sap.ui.define(['jquery.sap.global','sap/ui/model/PropertyBinding'],function(q,P){"use strict";var R=P.extend("sap.ui.model.resource.ResourcePropertyBinding",{constructor:function(m,p){P.apply(this,arguments);this.oValue=this.oModel.getProperty(p)}});R.prototype.getValue=function(){return this.oModel.getProperty(this.sPath)};return R},true);
