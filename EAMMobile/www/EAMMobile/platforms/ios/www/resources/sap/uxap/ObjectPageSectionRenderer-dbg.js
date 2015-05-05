jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class Section renderer.
 * @static
 */
sap.uxap.ObjectPageSectionRenderer = {};

sap.uxap.ObjectPageSectionRenderer.render = function (oRm, oControl) {

	if (!oControl.getVisible() || !oControl._getInternalVisible()) {
		return;
	}

	oRm.write("<section ");
	oRm.addClass("sapUxAPObjectPageSection");
	oRm.writeClasses();
	oRm.writeControlData(oControl);
	oRm.write(">");

	if (oControl.getShowTitle() && oControl._getInternalTitleVisible()) {
		oRm.write("<div");
		oRm.writeAttributeEscaped("id", oControl.getId() + "-header");
		oRm.addClass("sapUxAPObjectPageSectionHeader");
		oRm.writeClasses();
		oRm.write(">");

		if (oControl._getInternalTitle() != "") {
			oRm.writeEscaped(oControl._getInternalTitle());
		}
		else {
			oRm.writeEscaped(oControl.getTitle());
		}

		oRm.write("</div>");
	}

	oRm.write("<div");
	oRm.addClass("sapUxAPObjectPageSectionContainer");
	oRm.writeClasses();
	oRm.write(">");


	jQuery.each(oControl.getSubSections(), function (iIndex, oSubSection) {
		oRm.renderControl(oSubSection);
	});

	oRm.write("</div>");

	oRm.write("</section>");
};
