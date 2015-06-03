/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.commons.Togglebutton
sap.ui.define(['jquery.sap.global', './ButtonRenderer', 'sap/ui/core/Renderer'],
	function(jQuery, ButtonRenderer, Renderer) {
	"use strict";


	/**
	 * ToggleButton renderer.
	 * @namespace
	 */
	
	var ToggleButtonRenderer = Renderer.extend(ButtonRenderer);
	
	/**
	 * Hint: "renderButtonAttributes" is a reserved/hard-coded Button extending function!
	 *       It is used to allow extensions to display content after the actual button content.
	 *
	 * @param {sap.ui.core.RenderManager}
	 *            rm the RenderManager currently rendering this control
	 * @param {sap.m.ToggleButton}
	 *            oToggleButton the ToggleButton that should be rendered
	 * @private
	 */
	ToggleButtonRenderer.renderButtonAttributes = function(rm, oToggleButton) {
		var bPressed = oToggleButton.getPressed();
	
		if (bPressed) {
			rm.addClass("sapMToggleBtnPressed");
		}
	
		rm.writeAttribute('pressed', bPressed);
	};
	

	return ToggleButtonRenderer;

}, /* bExport= */ true);
