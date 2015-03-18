/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */
jQuery.sap.require("sap.m.SelectRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.declare("sap.m.ActionSelectRenderer");

sap.m.ActionSelectRenderer = sap.ui.core.Renderer.extend(sap.m.SelectRenderer);

/**
 * CSS class to be applied to the HTML root element of the ActionSelect control.
 *
 * @type {string}
 */
sap.m.ActionSelectRenderer.CSS_CLASS = "sapMActionSelect";

/**
 * Apply a CSS class to the HTML root element of the ActionSelect control.
 *
 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.ui.core.Control} oActionSelect An object representation of the control that should be rendered.
 * @override
 * @protected
 */
sap.m.ActionSelectRenderer.addStyleClass = function(oRm, oActionSelect) {
	oRm.addClass(sap.m.ActionSelectRenderer.CSS_CLASS);
};
