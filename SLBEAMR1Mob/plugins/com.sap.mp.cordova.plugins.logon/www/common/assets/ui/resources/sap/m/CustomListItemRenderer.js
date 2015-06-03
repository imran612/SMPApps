/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
jQuery.sap.declare("sap.m.CustomListItemRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.ListItemBaseRenderer");sap.m.CustomListItemRenderer=sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);
sap.m.CustomListItemRenderer.renderLIAttributes=function(r,l){r.addClass("sapMCLI")};
sap.m.CustomListItemRenderer.renderLIContent=function(r,l){var c=l.getContent();var a=c.length;for(var i=0;i<a;i++){r.renderControl(c[i])}};
