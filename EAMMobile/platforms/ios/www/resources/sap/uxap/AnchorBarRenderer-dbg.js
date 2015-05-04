jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ToolbarRenderer");

/**
 * @class ObjectPageRenderer renderer.
 * @static
 */
sap.uxap.AnchorBarRenderer = {};
sap.uxap.AnchorBarRenderer = sap.ui.core.Renderer.extend(sap.m.ToolbarRenderer);

sap.uxap.AnchorBarRenderer.renderBarContent = function (rm, oToolbar) {

	if (oToolbar._bTabletScenario) {
		rm.renderControl(oToolbar._oArrowLeft);

		rm.write("<div");
		rm.writeAttributeEscaped("id", oToolbar.getId() + "-scrollContainer");
		rm.addClass("sapUxAPAnchorBarScrollContainer");
		rm.writeClasses();
		rm.write(">");

		rm.write("<div");
		rm.writeAttributeEscaped("id", oToolbar.getId() + "-scroll");
		rm.write(">");

		sap.m.ToolbarRenderer.renderBarContent.apply(this, arguments);

		rm.write("</div>");

		rm.write("</div>");

		rm.renderControl(oToolbar._oArrowRight);
	}

	//also render the mobile friendly control
	if (oToolbar._bPhoneScenario) {
		sap.m.BarInPageEnabler.addChildClassTo(oToolbar._oPhoneAction, oToolbar);
		rm.renderControl(oToolbar._oPhoneAction);
	}

};