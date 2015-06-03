/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['jquery.sap.global', './ListItemBaseRenderer', 'sap/ui/core/Renderer'],
	function(jQuery, ListItemBaseRenderer, Renderer) {
	"use strict";


	/**
	 * GroupHeaderListItem renderer.
	 * @namespace
	 */
	var GroupHeaderListItemRenderer = Renderer.extend(ListItemBaseRenderer);
	
	/**
	 * Renders the attributes for the given list item, using the provided
	 * {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager}
	 *          rm the RenderManager that can be used for writing to the
	 *          Render-Output-Buffer
	 * @param {sap.ui.core.Control}
	 *          oLI an object representation of the list item that should be
	 *          rendered
	 */
	GroupHeaderListItemRenderer.renderLIAttributes = function(rm, oLI) {
		rm.addClass("sapMGHLI");
		if (oLI.getUpperCase()) {
			rm.addClass("sapMGHLIUpperCase");
		}
	};
	
	
	/**
	 * Renders the List item content
	 *
	 * @param {sap.ui.core.RenderManager}
	 *          rm the RenderManager that can be used for writing to the
	 *          Render-Output-Buffer
	 * @param {sap.ui.core.Control}
	 *          oLI an object representation of the list item that should be
	 *          rendered
	 * @param {sap.m.Table} [oTable]
	 *          If this control is inside the table then this param can be used for col spanning
	 */
	GroupHeaderListItemRenderer.renderLIContent = function(rm, oLI, oTable) {
		var sTitle = oLI.getTitle();
		oTable && rm.write("<td class='sapMGHLICell' colspan='" + (oTable.getColSpan()) + "'>");
	
		// List item label
		if (sTitle) {
			oTable && rm.write("<div class='sapMLIBContent sapMLIBContentMargin'>");
			rm.write("<label for='" + oLI.getId() + "-value' class='sapMGHLITitle'>");
			rm.writeEscaped(sTitle);
	
			var iCount = oLI.getCount();
			if (iCount !== undefined && iCount !== "") {
				rm.writeEscaped(" (" + iCount + ")");
			}
	
			rm.write("</label>");
			oTable && rm.write("</div>");
		}
	
		oTable && rm.write("</td>");
	};
	

	return GroupHeaderListItemRenderer;

}, /* bExport= */ true);
