jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class HeaderBase renderer.
 * @static
 */
sap.uxap.ObjectPageHeaderRenderer = {};

sap.uxap.ObjectPageHeaderRenderer.render = function (oRm, oControl) {

	var oNavigationBar = oControl.getNavigationBar();

	var bTitleVisible = (oControl.getIsObjectIconAlwaysVisible() || oControl.getIsObjectTitleAlwaysVisible() || oControl.getIsObjectSubtitleAlwaysVisible() || oControl.getIsActionAreaAlwaysVisible());

	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass('sapUxAPObjectPageHeader');
	oRm.addClass('sapUxAPObjectPageHeaderDesign-' + oControl.getHeaderDesign());
	oRm.writeClasses();
	oRm.write(">");
	// if an navigationBar has been provided display it

	if (oNavigationBar) {
		oRm.write("<div");
		oRm.addClass('sapUxAPObjectPageHeaderNavigation');
		oRm.writeClasses();
		oRm.write(">");
		oRm.renderControl(oNavigationBar);
		oRm.write("</div>");
	}

	// first line
	oRm.write("<div");
	oRm.writeAttributeEscaped("id", oControl.getId() + "-identifierLine");
	oRm.addClass('sapUxAPObjectPageHeaderIdentifier');
	if (bTitleVisible) {
		oRm.addClass('sapUxAPObjectPageHeaderIdentifierForce');
	}
	oRm.writeClasses();
	oRm.write(">");

	// If picturePath is provided show image
	if (oControl.getObjectImageURI()) {
		oRm.write("<span ");
		oRm.addClass('sapUxAPObjectPageHeaderObjectImageContainer');
		oRm.addClass('sapUxAPObjectPageHeaderObjectImage-' + oControl.getObjectImageShape());
		if (oControl.getIsObjectIconAlwaysVisible()) {
			oRm.addClass('sapUxAPObjectPageHeaderObjectImageForce');
		}
		oRm.writeClasses();
		oRm.write(">")
		oRm.write("<span class='sapUxAPObjectPageHeaderObjectImageContainerSub'>");
		oRm.renderControl(oControl.getAggregation("_objectImage"));
		oRm.write("</span>");
		oRm.write("</span>");
	}
	oRm.write("<span ");
	oRm.writeAttributeEscaped("id", oControl.getId() + "-identifierLineContainer");
	oRm.addClass('sapUxAPObjectPageHeaderIdentifierContainer');
	oRm.writeClasses();
	oRm.write(">");
	oRm.write("<span ");
	oRm.addClass('sapUxAPObjectPageHeaderIdentifierTitle');
	if (oControl.getIsObjectTitleAlwaysVisible()) {
		oRm.addClass('sapUxAPObjectPageHeaderIdentifierTitleForce');
	}
	oRm.writeClasses();
	oRm.write(">");
	oRm.writeEscaped(oControl.getObjectTitle());
	oRm.write("</span>");
	oRm.write("<span");
	oRm.addClass('sapUxAPObjectPageHeaderIdentifierDescription');
	if (oControl.getIsObjectSubtitleAlwaysVisible()) {
		oRm.addClass('sapUxAPObjectPageHeaderIdentifierDescriptionForce');
	}
	oRm.writeClasses();
	oRm.write(">");
	oRm.writeEscaped(oControl.getObjectSubtitle());
	oRm.write("</span>");
	oRm.write("</span>");

	oRm.write("<span");
	oRm.addClass('sapUxAPObjectPageHeaderIdentifierActions');
	if (oControl.getIsActionAreaAlwaysVisible()) {
		oRm.addClass('sapUxAPObjectPageHeaderIdentifierActionsForce');
	}
	oRm.writeClasses();
	oRm.write(">");
	var aActions = oControl.getActions();
	for (var i = 0; i < aActions.length; i++) {
		var oAction = aActions[i];
		oRm.renderControl(oAction);
	}
	var oOverflowButton = oControl.getAggregation("_overflowButton");
	oRm.renderControl(oOverflowButton);
	oRm.write("</span>");

	oRm.write("</div>");

	oRm.write("</div>");
};
