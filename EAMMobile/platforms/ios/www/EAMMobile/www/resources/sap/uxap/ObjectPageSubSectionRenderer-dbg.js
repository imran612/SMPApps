jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class Section renderer.
 * @static
 */
sap.uxap.ObjectPageSubSectionRenderer = {};

sap.uxap.ObjectPageSubSectionRenderer.render = function (oRm, oControl) {

	if (!oControl.getVisible() || !oControl._getInternalVisible()) {
		return;
	}

	var aActions = oControl.getActions() || [];
	var bHasTitle = (oControl._getInternalTitleVisible() && (oControl.getTitle().trim() != ""));
	var bHasTitleLine = bHasTitle || aActions.length > 0;


	oRm.write("<div ");
	oRm.writeControlData(oControl);
	oRm.addClass("sapUxAPObjectPageSubSection");
	oRm.writeClasses(oControl);
	oRm.writeClasses();
	oRm.write(">");

	if (bHasTitleLine) {
		oRm.write("<div");
		oRm.addClass("sapUxAPObjectPageSubSectionHeader");
		oRm.writeAttributeEscaped("id", oControl.getId() + "-header");
		oRm.writeClasses();
		oRm.write(">");

		oRm.write("<div");
		oRm.addClass('sapUxAPObjectPageSubSectionHeaderTitle');
		oRm.writeAttributeEscaped("id", oControl.getId() + "-headerTitle");
		oRm.writeClasses();
		oRm.write(">");
		if (bHasTitle) {
			oRm.writeEscaped(oControl.getTitle());
		}
		oRm.write("</div>");

		if (aActions.length > 0) {
			oRm.write("<div");
			oRm.addClass('sapUxAPObjectPageSubSectionHeaderActions');
			oRm.writeClasses();
			oRm.write(">");

			jQuery.each(aActions, function (iIndex, oButton) {
				oRm.renderControl(oButton);
			});

			oRm.write("</div>");
		}

		oRm.write("</div>");
	}

	oRm.write("<div");
	oRm.addClass("sapUxAPBlockContainer");
	oRm.writeClasses();
	oRm.write(">");

	oRm.renderControl(oControl._oGrid);

	oRm.write("</div>");

	oRm.write("<div");
	oRm.addClass("sapUxAPSubSectionSeeMoreContainer");
	oRm.writeClasses();
	oRm.write(">");

	oRm.renderControl(oControl._oSeeMoreButton);

	oRm.write("</div>");


	oRm.write("</div>");
};
