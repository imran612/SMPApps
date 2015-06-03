/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
jQuery.sap.declare("sap.m.ActionSelect");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.Select");sap.m.Select.extend("sap.m.ActionSelect",{metadata:{library:"sap.m",associations:{"buttons":{type:"sap.m.Button",multiple:true,singularName:"button"}}}});
sap.m.ActionSelect.prototype.hasContent=function(){return sap.m.Select.prototype.hasContent.call(this)||!!this.getButtons().length};
sap.m.ActionSelect.prototype.addContent=function(){var c=sap.ui.getCore(),p=this.getPicker();this.getButtons().forEach(function(b){p.addContent(c.byId(b))})};
sap.m.ActionSelect.prototype.onAfterRenderingPicker=function(){sap.m.Select.prototype.onAfterRenderingPicker.call(this);this.getPicker().addStyleClass(sap.m.ActionSelectRenderer.CSS_CLASS+"Picker")};
sap.m.ActionSelect.prototype.removeButton=function(b){var p=this.getPicker();if(p){if(typeof b==="number"){b=this.getButtons()[b]}p.removeContent(b)}return this.removeAssociation("buttons",b)};
sap.m.ActionSelect.prototype.removeAllButtons=function(){var p=this.getPicker();if(p){this.getButtons().forEach(function(b){p.removeContent(b)})}return this.removeAllAssociation("buttons")};
