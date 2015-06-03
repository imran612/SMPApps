/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
jQuery.sap.declare("sap.m.ActionListItemRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.ListItemBaseRenderer");sap.m.ActionListItemRenderer=sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);
sap.m.ActionListItemRenderer.renderLIAttributes=function(r,l){r.addClass("sapMALI")};
sap.m.ActionListItemRenderer.renderLIContent=function(r,l){var i=l.getText();if(i){r.write("<div class='sapMALIText'>");r.writeEscaped(i);r.write("</div>")}};
