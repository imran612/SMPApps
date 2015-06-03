/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.m.DisplayListItem.
sap.ui.define(['jquery.sap.global', './ListItemBase', './library'],
	function(jQuery, ListItemBase, library) {
	"use strict";


	/**
	 * Constructor for a new DisplayListItem.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given 
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * The display list item consists of a label and a value.
	 * @extends sap.m.ListItemBase
	 *
	 * @author SAP SE
	 * @version 1.26.6
	 *
	 * @constructor
	 * @public
	 * @alias sap.m.DisplayListItem
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var DisplayListItem = ListItemBase.extend("sap.m.DisplayListItem", /** @lends sap.m.DisplayListItem.prototype */ { metadata : {
	
		library : "sap.m",
		properties : {
	
			/**
			 * List item label
			 */
			label : {type : "string", group : "Misc", defaultValue : null},
	
			/**
			 * List item value
			 */
			value : {type : "string", group : "Data", defaultValue : null}
		}
	}});

	return DisplayListItem;

}, /* bExport= */ true);
