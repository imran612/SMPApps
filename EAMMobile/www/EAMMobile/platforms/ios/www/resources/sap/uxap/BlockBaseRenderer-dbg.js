/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

jQuery.sap.declare("sap.uxap.BlockBaseRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

sap.uxap.BlockBaseRenderer = {};

sap.uxap.BlockBaseRenderer.render = function (oRm, oControl) {

	if (!oControl.getVisible()) {
		return;
	}

	oRm.write("<div");
	oRm.writeControlData(oControl);
	if (oControl._getSelectedViewContent()) {
		oRm.addClass('sapUxAPBlockBase');
		oRm.addClass("sapUxAPBlockBase" + oControl.getMode());
	}
	else {
		var sClassShortName = oControl.getMetadata().getName().split(".").pop();

		oRm.addClass('sapUxAPBlockBaseDefaultSize');
		oRm.addClass('sapUxAPBlockBaseDefaultSize' + sClassShortName + oControl.getMode());
	}
	oRm.writeClasses();
	oRm.write(">");

	if (oControl._getSelectedViewContent()) {
		oRm.renderControl(oControl._getSelectedViewContent());
	}
	oRm.write("</div>");
};