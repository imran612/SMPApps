/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
jQuery.sap.require("sap.m.SelectRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.declare("sap.m.ActionSelectRenderer");sap.m.ActionSelectRenderer=sap.ui.core.Renderer.extend(sap.m.SelectRenderer);sap.m.ActionSelectRenderer.CSS_CLASS="sapMActionSelect";
sap.m.ActionSelectRenderer.addStyleClass=function(r,a){r.addClass(sap.m.ActionSelectRenderer.CSS_CLASS)};
