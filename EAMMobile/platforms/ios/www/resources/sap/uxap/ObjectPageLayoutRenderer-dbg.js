/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class ObjectPageRenderer renderer.
 * @static
 */
sap.uxap.ObjectPageLayoutRenderer = {};

sap.uxap.ObjectPageLayoutRenderer.render = function (oRm, oControl) {
	var aSections,
		oHeader = oControl.getHeaderTitle(),
		oAnchorBar = null,
		aHeaderContent = oControl.getHeaderContent();

	if (oControl.getShowAnchorBar() && oControl._getInternalAnchorBarVisible()) {
		oAnchorBar = oControl.getAggregation("_anchorBar");
	}

	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass('sapUxAPObjectPageLayout');
	oRm.writeClasses();
	oRm.addStyle("height", oControl.getHeight());
	oRm.writeStyles();
	oRm.write(">");

	// Header
	oRm.write("<header ");
	oRm.writeAttributeEscaped("id", oControl.getId() + "-headerTitle");
	oRm.addClass('sapUxAPObjectPageHeaderTitle');
	oRm.writeClasses();
	oRm.write(">");
	if (oHeader) {
		oRm.renderControl(oHeader);
	}
	// Sticky anchorBar placeholder
	oRm.write("<div ");
	oRm.writeAttributeEscaped("id", oControl.getId() + "-stickyAnchorBar");
	oRm.addClass('sapUxAPObjectPageStickyAnchorBar');
	oRm.writeClasses();
	oRm.write(">");
	oRm.write("</div>");
	oRm.write("</header>");


	oRm.write("<div ");
	oRm.writeAttributeEscaped("id", oControl.getId() + "-opwrapper");
	oRm.addClass('sapUxAPObjectPageWrapper');
	oRm.writeClasses();
	oRm.write(">");

	oRm.write("<div ");
	oRm.writeAttributeEscaped("id", oControl.getId() + "-scroll");
	oRm.addClass('sapUxAPObjectPageScroll');
	oRm.writeClasses();
	oRm.write(">");

	// Header Content
	oRm.write("<header ");
	oRm.writeAttributeEscaped("id", oControl.getId() + "-headerContent");
	oRm.addClass('sapUxAPObjectPageHeaderDetails');
	oRm.addClass('sapUxAPObjectPageHeaderDetailsDesign-' + oControl._getHeaderDesign());
	oRm.writeClasses();
	oRm.write(">");

	if (aHeaderContent) {
		oRm.write("<div ");
		oRm.addClass('sapUxAPObjectPageHeaderContent');
		oRm.writeClasses();
		oRm.write(">");

		for (var i = 0; i < aHeaderContent.length; i++) {
			var oHeaderContent = aHeaderContent[i];
			var oLayoutData = oControl._getLayoutDataForControl(oHeaderContent);
			var bHasSeparatorBefore = false;
			var bHasSeparatorAfter = false;

			if (oLayoutData) {

				bHasSeparatorBefore = oLayoutData.getShowSeparatorBefore();
				bHasSeparatorAfter = oLayoutData.getShowSeparatorAfter();

				oRm.write("<span ");
				oRm.addClass('sapUxAPObjectPageHeaderWidthContainer');
				oRm.addClass('sapUxAPObjectPageHeaderContentItem');
				oRm.addStyle("width", oLayoutData.getWidth());
				oRm.writeStyles();

				if (bHasSeparatorAfter || bHasSeparatorBefore) {
					oRm.addClass('sapUxAPObjectPageHeaderSeparatorContainer');
				}

				if (!oLayoutData.getVisibleL()) {
					oRm.addClass('sapUxAPObjectPageHeaderLayoutHiddenL');
				}
				if (!oLayoutData.getVisibleM()) {
					oRm.addClass('sapUxAPObjectPageHeaderLayoutHiddenM');
				}
				if (!oLayoutData.getVisibleS()) {
					oRm.addClass('sapUxAPObjectPageHeaderLayoutHiddenS');
				}

				oRm.writeClasses();
				oRm.write('>');

				if (bHasSeparatorBefore) {
					oRm.write("<span class='sapUxAPObjectPageHeaderSeparatorBefore'/>");
				}
			}
			else {
				oHeaderContent.addStyleClass("sapUxAPObjectPageHeaderContentItem");
			}

			oRm.renderControl(oHeaderContent);

			if (bHasSeparatorAfter) {
				oRm.write("<span class='sapUxAPObjectPageHeaderSeparatorAfter'/>");
			}

			if (oLayoutData) {
				oRm.write("</span>");
			}
		}

		oRm.write("</div>");
	}
	oRm.write("</header>");

	// Anchor Bar
	oRm.write("<section ");
	oRm.writeAttributeEscaped("id", oControl.getId() + "-anchorBar");
	oRm.write(">");
	if (oAnchorBar) {
		oRm.renderControl(oAnchorBar);
	}
	oRm.write("</section>");

	// Content section
	oRm.write("<section");
	oRm.addClass('sapUxAPObjectPageContainer');
	if (!oAnchorBar) {
		oRm.addClass('sapUxAPObjectPageContainerNoBar');
	}
	oRm.writeClasses();
	oRm.write(">");
	aSections = oControl.getAggregation("sections");
	if (jQuery.isArray(aSections)) {
		jQuery.each(aSections, function (iIndex, oSection) {
			oRm.renderControl(oSection);
		});
	}
	oRm.write("</section>");

	oRm.write("<div");
	oRm.writeAttributeEscaped("id", oControl.getId() + "-spacer");
	oRm.write(">");

	oRm.write("</div>");  // END scroll

	// run hook method
	this.renderFooterContent(oRm, oControl);

	oRm.write("</div>"); // END wrapper

	oRm.write("</div>"); // END page
};

/**
 * This hook method is called to render objectpagelayout footer content
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.uxap.ObjectPageLayoutRenderer.renderFooterContent = function (oRm, oControl) {
};