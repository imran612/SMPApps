/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */

jQuery.sap.declare("sap.viz.ui5.controls.VizFrameRenderer");

/**
 * @class VizFrame renderer.
 * @static
 */
sap.viz.ui5.controls.VizFrameRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.viz.ui5.controls.VizFrameRenderer.render = function(oRm, oControl){		
	// write the HTML into the render manager
	oRm.write("<DIV");
	oRm.writeControlData(oControl);
	
	oRm.addClass("sapVizFrame");
	oRm.writeClasses();
	oRm.addStyle("width", oControl.getWidth());
	oRm.addStyle("height", oControl.getHeight());
	oRm.writeStyles();	
	oRm.write(">");
	
	oRm.write("</DIV>");
};
