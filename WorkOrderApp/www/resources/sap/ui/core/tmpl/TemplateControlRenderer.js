/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var T={};T.render=function(r,c){var i=c.isInline();if(!i){r.write("<div");r.writeControlData(c);r.writeStyles();r.writeClasses();r.write(">")}var R=this.renderTemplate||c.getTemplateRenderer();if(R){R.apply(this,arguments)}if(!i){r.write("</div>")}};return T},true);
