/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.makit.Chart.
jQuery.sap.declare("sap.makit.Chart");
jQuery.sap.require("sap.makit.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Chart.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getType type} : sap.makit.ChartType (default: sap.makit.ChartType.Column)</li>
 * <li>{@link #getCategoryAxis categoryAxis} : object</li>
 * <li>{@link #getValueAxis valueAxis} : object</li>
 * <li>{@link #getValueBubble valueBubble} : object</li>
 * <li>{@link #getShowRangeSelector showRangeSelector} : boolean (default: true)</li>
 * <li>{@link #getShowTableView showTableView} : boolean (default: false)</li>
 * <li>{@link #getLegendPosition legendPosition} : sap.makit.LegendPosition</li>
 * <li>{@link #getLineThickness lineThickness} : float (default: 1)</li>
 * <li>{@link #getShowTableValue showTableValue} : boolean (default: true)</li>
 * <li>{@link #getMaxSliceCount maxSliceCount} : int (default: 12)</li>
 * <li>{@link #getPrimaryColorPalette primaryColorPalette} : any</li>
 * <li>{@link #getShowTotalValue showTotalValue} : boolean (default: false)</li>
 * <li>{@link #getNumberOfVisibleCategories numberOfVisibleCategories} : int</li>
 * <li>{@link #getRangeSelectorStartPosition rangeSelectorStartPosition} : int (default: 0)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getRows rows} : sap.makit.Row[]</li>
 * <li>{@link #getColumns columns} : sap.makit.Column[]</li>
 * <li>{@link #getSeries series} : sap.makit.Series</li>
 * <li>{@link #getValues values} : sap.makit.Value[]</li>
 * <li>{@link #getCategoryRegions categoryRegions} : sap.makit.Category[]</li>
 * <li>{@link #getCategory category} : sap.makit.Category</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.makit.Chart#event:doubletap doubletap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.makit.Chart#event:tap tap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.makit.Chart#event:longpress longpress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The Chart control.
 * @extends sap.ui.core.Control
 *
 * @author SAP SE
 * @version 1.26.6
 *
 * @constructor
 * @public
 * @since 1.8
 * @name sap.makit.Chart
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.makit.Chart", { metadata : {

	publicMethods : [
		// methods
		"getSelectedCategory", "getSelectedSeries", "getNumberOfCategories", "getSelectedCategoryGroup"
	],
	library : "sap.makit",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"type" : {type : "sap.makit.ChartType", group : "Appearance", defaultValue : sap.makit.ChartType.Column},
		"categoryAxis" : {type : "object", group : "Misc", defaultValue : null},
		"valueAxis" : {type : "object", group : "Misc", defaultValue : null},
		"valueBubble" : {type : "object", group : "Misc", defaultValue : null},
		"showRangeSelector" : {type : "boolean", group : "Appearance", defaultValue : true},
		"showTableView" : {type : "boolean", group : "Misc", defaultValue : false},
		"legendPosition" : {type : "sap.makit.LegendPosition", group : "Misc", defaultValue : null},
		"lineThickness" : {type : "float", group : "Misc", defaultValue : 1},
		"showTableValue" : {type : "boolean", group : "Misc", defaultValue : true},
		"maxSliceCount" : {type : "int", group : "Misc", defaultValue : 12},
		"primaryColorPalette" : {type : "any", group : "Misc", defaultValue : null},
		"showTotalValue" : {type : "boolean", group : "Misc", defaultValue : false},
		"numberOfVisibleCategories" : {type : "int", group : "Misc", defaultValue : null},
		"rangeSelectorStartPosition" : {type : "int", group : "Misc", defaultValue : 0}
	},
	aggregations : {
		"rows" : {type : "sap.makit.Row", multiple : true, singularName : "row", bindable : "bindable"}, 
		"columns" : {type : "sap.makit.Column", multiple : true, singularName : "column", bindable : "bindable"}, 
		"series" : {type : "sap.makit.Series", multiple : false}, 
		"values" : {type : "sap.makit.Value", multiple : true, singularName : "value"}, 
		"categoryRegions" : {type : "sap.makit.Category", multiple : true, singularName : "categoryRegion"}, 
		"category" : {type : "sap.makit.Category", multiple : false, deprecated: true}
	},
	events : {
		"doubletap" : {}, 
		"tap" : {}, 
		"longpress" : {}
	}
}});


/**
 * Creates a new subclass of class sap.makit.Chart with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.makit.Chart.extend
 * @function
 */

sap.makit.Chart.M_EVENTS = {'doubletap':'doubletap','tap':'tap','longpress':'longpress'};


/**
 * Getter for property <code>width</code>.
 * The width of the Chart
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.makit.Chart#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * The height of the Chart
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.makit.Chart#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setHeight
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Chart type
 *
 * Default value is <code>Column</code>
 *
 * @return {sap.makit.ChartType} the value of property <code>type</code>
 * @public
 * @name sap.makit.Chart#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>Column</code> 
 *
 * @param {sap.makit.ChartType} oType  new value for property <code>type</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setType
 * @function
 */


/**
 * Getter for property <code>categoryAxis</code>.
 * Category Axis property of the Chart. Accepts only an instance of CategoryAxis element.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>categoryAxis</code>
 * @public
 * @name sap.makit.Chart#getCategoryAxis
 * @function
 */

/**
 * Setter for property <code>categoryAxis</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oCategoryAxis  new value for property <code>categoryAxis</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setCategoryAxis
 * @function
 */


/**
 * Getter for property <code>valueAxis</code>.
 * Value Axis property of the Chart. Accept only an instance of ValueAxis element.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>valueAxis</code>
 * @public
 * @name sap.makit.Chart#getValueAxis
 * @function
 */

/**
 * Setter for property <code>valueAxis</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oValueAxis  new value for property <code>valueAxis</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setValueAxis
 * @function
 */


/**
 * Getter for property <code>valueBubble</code>.
 * Value Bubble property of the Chart. Accept only an instance of ValueBubble element.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>valueBubble</code>
 * @public
 * @name sap.makit.Chart#getValueBubble
 * @function
 */

/**
 * Setter for property <code>valueBubble</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oValueBubble  new value for property <code>valueBubble</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setValueBubble
 * @function
 */


/**
 * Getter for property <code>showRangeSelector</code>.
 * Specify whether the range selector should be visible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showRangeSelector</code>
 * @public
 * @name sap.makit.Chart#getShowRangeSelector
 * @function
 */

/**
 * Setter for property <code>showRangeSelector</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowRangeSelector  new value for property <code>showRangeSelector</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setShowRangeSelector
 * @function
 */


/**
 * Getter for property <code>showTableView</code>.
 * Toggle to display table view
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showTableView</code>
 * @public
 * @name sap.makit.Chart#getShowTableView
 * @function
 */

/**
 * Setter for property <code>showTableView</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowTableView  new value for property <code>showTableView</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setShowTableView
 * @function
 */


/**
 * Getter for property <code>legendPosition</code>.
 * Legend position all chart types except Bar chart.
 * Default position for Pie/Donut chart is Left. All other chart's default position is None. Note: the default legend position is set when the chart type is set first time, subsequent change to the chart type will keep using initial legend position unless it is changed explicitly by user.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.makit.LegendPosition} the value of property <code>legendPosition</code>
 * @public
 * @name sap.makit.Chart#getLegendPosition
 * @function
 */

/**
 * Setter for property <code>legendPosition</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.makit.LegendPosition} oLegendPosition  new value for property <code>legendPosition</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setLegendPosition
 * @function
 */


/**
 * Getter for property <code>lineThickness</code>.
 * Specify the line thickness of the line graph. Only applies to Line chart type.
 *
 * Default value is <code>1</code>
 *
 * @return {float} the value of property <code>lineThickness</code>
 * @public
 * @name sap.makit.Chart#getLineThickness
 * @function
 */

/**
 * Setter for property <code>lineThickness</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {float} fLineThickness  new value for property <code>lineThickness</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setLineThickness
 * @function
 */


/**
 * Getter for property <code>showTableValue</code>.
 * Toggle to display the table value on a Bar chart. Only applies to Bar chart.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showTableValue</code>
 * @public
 * @name sap.makit.Chart#getShowTableValue
 * @function
 */

/**
 * Setter for property <code>showTableValue</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowTableValue  new value for property <code>showTableValue</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setShowTableValue
 * @function
 */


/**
 * Getter for property <code>maxSliceCount</code>.
 * Set the maximum number of slices in a Pie/Donut chart. If exceeding the specified value, the rest will be categorised into a single slice. Only applies to Pie/Donut.
 *
 * Default value is <code>12</code>
 *
 * @return {int} the value of property <code>maxSliceCount</code>
 * @public
 * @name sap.makit.Chart#getMaxSliceCount
 * @function
 */

/**
 * Setter for property <code>maxSliceCount</code>.
 *
 * Default value is <code>12</code> 
 *
 * @param {int} iMaxSliceCount  new value for property <code>maxSliceCount</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setMaxSliceCount
 * @function
 */


/**
 * Getter for property <code>primaryColorPalette</code>.
 * Allow a chart’s color palette to be modified without affecting the other charts' color palette. If not set, the chart will use the default color palette defined in the theme.
 * Accept an array of color in string format or hex format. e.g.
 * 0xff0000
 * "red"
 * "rgb(255,0,0)"
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>primaryColorPalette</code>
 * @public
 * @name sap.makit.Chart#getPrimaryColorPalette
 * @function
 */

/**
 * Setter for property <code>primaryColorPalette</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oPrimaryColorPalette  new value for property <code>primaryColorPalette</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setPrimaryColorPalette
 * @function
 */


/**
 * Getter for property <code>showTotalValue</code>.
 * Specify whether to show the sum of the value for Waterfall/Waterfall Bar chart. Only applies to Waterfall/WaterfallBar chart.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showTotalValue</code>
 * @public
 * @name sap.makit.Chart#getShowTotalValue
 * @function
 */

/**
 * Setter for property <code>showTotalValue</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowTotalValue  new value for property <code>showTotalValue</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setShowTotalValue
 * @function
 */


/**
 * Getter for property <code>numberOfVisibleCategories</code>.
 * The number of categories that will be visible on the chart at any time. The minimum value is 2. If not set, the number of visible categories will be automatically adjusted depending on the screen size
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>numberOfVisibleCategories</code>
 * @public
 * @name sap.makit.Chart#getNumberOfVisibleCategories
 * @function
 */

/**
 * Setter for property <code>numberOfVisibleCategories</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iNumberOfVisibleCategories  new value for property <code>numberOfVisibleCategories</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setNumberOfVisibleCategories
 * @function
 */


/**
 * Getter for property <code>rangeSelectorStartPosition</code>.
 * Specify the range selector start position, default value is 0.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>rangeSelectorStartPosition</code>
 * @public
 * @name sap.makit.Chart#getRangeSelectorStartPosition
 * @function
 */

/**
 * Setter for property <code>rangeSelectorStartPosition</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iRangeSelectorStartPosition  new value for property <code>rangeSelectorStartPosition</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setRangeSelectorStartPosition
 * @function
 */


/**
 * Getter for aggregation <code>rows</code>.<br/>
 * The data rows of the chart. User should bind these to their data source
 * 
 * @return {sap.makit.Row[]}
 * @public
 * @name sap.makit.Chart#getRows
 * @function
 */


/**
 * Inserts a row into the aggregation named <code>rows</code>.
 *
 * @param {sap.makit.Row}
 *          oRow the row to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the row should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the row is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the row is inserted at 
 *             the last position        
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#insertRow
 * @function
 */

/**
 * Adds some row <code>oRow</code> 
 * to the aggregation named <code>rows</code>.
 *
 * @param {sap.makit.Row}
 *            oRow the row to add; if empty, nothing is inserted
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#addRow
 * @function
 */

/**
 * Removes an row from the aggregation named <code>rows</code>.
 *
 * @param {int | string | sap.makit.Row} vRow the row to remove or its index or id
 * @return {sap.makit.Row} the removed row or null
 * @public
 * @name sap.makit.Chart#removeRow
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>rows</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.makit.Row[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.makit.Chart#removeAllRows
 * @function
 */

/**
 * Checks for the provided <code>sap.makit.Row</code> in the aggregation named <code>rows</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.makit.Row}
 *            oRow the row whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.makit.Chart#indexOfRow
 * @function
 */
	

/**
 * Destroys all the rows in the aggregation 
 * named <code>rows</code>.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#destroyRows
 * @function
 */


/**
 * Binder for aggregation <code>rows</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#bindRows
 * @function
 */

/**
 * Unbinder for aggregation <code>rows</code>.
 *
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#unbindRows
 * @function
 */


/**
 * Getter for aggregation <code>columns</code>.<br/>
 * The data column map of the chart.
 * 
 * @return {sap.makit.Column[]}
 * @public
 * @name sap.makit.Chart#getColumns
 * @function
 */


/**
 * Inserts a column into the aggregation named <code>columns</code>.
 *
 * @param {sap.makit.Column}
 *          oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the column should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the column is inserted at 
 *             the last position        
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#insertColumn
 * @function
 */

/**
 * Adds some column <code>oColumn</code> 
 * to the aggregation named <code>columns</code>.
 *
 * @param {sap.makit.Column}
 *            oColumn the column to add; if empty, nothing is inserted
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#addColumn
 * @function
 */

/**
 * Removes an column from the aggregation named <code>columns</code>.
 *
 * @param {int | string | sap.makit.Column} vColumn the column to remove or its index or id
 * @return {sap.makit.Column} the removed column or null
 * @public
 * @name sap.makit.Chart#removeColumn
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>columns</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.makit.Column[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.makit.Chart#removeAllColumns
 * @function
 */

/**
 * Checks for the provided <code>sap.makit.Column</code> in the aggregation named <code>columns</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.makit.Column}
 *            oColumn the column whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.makit.Chart#indexOfColumn
 * @function
 */
	

/**
 * Destroys all the columns in the aggregation 
 * named <code>columns</code>.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#destroyColumns
 * @function
 */


/**
 * Binder for aggregation <code>columns</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#bindColumns
 * @function
 */

/**
 * Unbinder for aggregation <code>columns</code>.
 *
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#unbindColumns
 * @function
 */


/**
 * Getter for aggregation <code>series</code>.<br/>
 * Data region property of the chart's Series
 * 
 * @return {sap.makit.Series}
 * @public
 * @name sap.makit.Chart#getSeries
 * @function
 */


/**
 * Setter for the aggregated <code>series</code>.
 * @param {sap.makit.Series} oSeries
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#setSeries
 * @function
 */
	

/**
 * Destroys the series in the aggregation 
 * named <code>series</code>.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#destroySeries
 * @function
 */


/**
 * Getter for aggregation <code>values</code>.<br/>
 * Data region property of the chart's Values
 * 
 * @return {sap.makit.Value[]}
 * @public
 * @name sap.makit.Chart#getValues
 * @function
 */


/**
 * Inserts a value into the aggregation named <code>values</code>.
 *
 * @param {sap.makit.Value}
 *          oValue the value to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the value should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the value is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the value is inserted at 
 *             the last position        
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#insertValue
 * @function
 */

/**
 * Adds some value <code>oValue</code> 
 * to the aggregation named <code>values</code>.
 *
 * @param {sap.makit.Value}
 *            oValue the value to add; if empty, nothing is inserted
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#addValue
 * @function
 */

/**
 * Removes an value from the aggregation named <code>values</code>.
 *
 * @param {int | string | sap.makit.Value} vValue the value to remove or its index or id
 * @return {sap.makit.Value} the removed value or null
 * @public
 * @name sap.makit.Chart#removeValue
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>values</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.makit.Value[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.makit.Chart#removeAllValues
 * @function
 */

/**
 * Checks for the provided <code>sap.makit.Value</code> in the aggregation named <code>values</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.makit.Value}
 *            oValue the value whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.makit.Chart#indexOfValue
 * @function
 */
	

/**
 * Destroys all the values in the aggregation 
 * named <code>values</code>.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#destroyValues
 * @function
 */


/**
 * Getter for aggregation <code>categoryRegions</code>.<br/>
 * Data region property of the chart's Categories
 * 
 * @return {sap.makit.Category[]}
 * @public
 * @name sap.makit.Chart#getCategoryRegions
 * @function
 */


/**
 * Inserts a categoryRegion into the aggregation named <code>categoryRegions</code>.
 *
 * @param {sap.makit.Category}
 *          oCategoryRegion the categoryRegion to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the categoryRegion should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the categoryRegion is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the categoryRegion is inserted at 
 *             the last position        
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#insertCategoryRegion
 * @function
 */

/**
 * Adds some categoryRegion <code>oCategoryRegion</code> 
 * to the aggregation named <code>categoryRegions</code>.
 *
 * @param {sap.makit.Category}
 *            oCategoryRegion the categoryRegion to add; if empty, nothing is inserted
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#addCategoryRegion
 * @function
 */

/**
 * Removes an categoryRegion from the aggregation named <code>categoryRegions</code>.
 *
 * @param {int | string | sap.makit.Category} vCategoryRegion the categoryRegion to remove or its index or id
 * @return {sap.makit.Category} the removed categoryRegion or null
 * @public
 * @name sap.makit.Chart#removeCategoryRegion
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>categoryRegions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.makit.Category[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.makit.Chart#removeAllCategoryRegions
 * @function
 */

/**
 * Checks for the provided <code>sap.makit.Category</code> in the aggregation named <code>categoryRegions</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.makit.Category}
 *            oCategoryRegion the categoryRegion whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.makit.Chart#indexOfCategoryRegion
 * @function
 */
	

/**
 * Destroys all the categoryRegions in the aggregation 
 * named <code>categoryRegions</code>.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#destroyCategoryRegions
 * @function
 */


/**
 * Getter for aggregation <code>category</code>.<br/>
 * Data region property of the chart's Category
 * 
 * @return {sap.makit.Category}
 * @public
 * @deprecated Since version 7.30.0. 
 * This aggregation is deprecated, please use categoryRegions aggregation instead.
 * @name sap.makit.Chart#getCategory
 * @function
 */


/**
 * Setter for the aggregated <code>category</code>.
 * @param {sap.makit.Category} oCategory
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.30.0. 
 * This aggregation is deprecated, please use categoryRegions aggregation instead.
 * @name sap.makit.Chart#setCategory
 * @function
 */
	

/**
 * Destroys the category in the aggregation 
 * named <code>category</code>.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.30.0. 
 * This aggregation is deprecated, please use categoryRegions aggregation instead.
 * @name sap.makit.Chart#destroyCategory
 * @function
 */


/**
 * Double tap event on the chart
 *
 * @name sap.makit.Chart#doubletap
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'doubletap' event of this <code>sap.makit.Chart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.makit.Chart</code>.<br/> itself. 
 *  
 * Double tap event on the chart
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.makit.Chart</code>.<br/> itself.
 *
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#attachDoubletap
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'doubletap' event of this <code>sap.makit.Chart</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#detachDoubletap
 * @function
 */

/**
 * Fire event doubletap to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @protected
 * @name sap.makit.Chart#fireDoubletap
 * @function
 */


/**
 * Single tap event on the chart
 *
 * @name sap.makit.Chart#tap
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'tap' event of this <code>sap.makit.Chart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.makit.Chart</code>.<br/> itself. 
 *  
 * Single tap event on the chart
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.makit.Chart</code>.<br/> itself.
 *
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#attachTap
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'tap' event of this <code>sap.makit.Chart</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#detachTap
 * @function
 */

/**
 * Fire event tap to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @protected
 * @name sap.makit.Chart#fireTap
 * @function
 */


/**
 * Long press event on the chart
 *
 * @name sap.makit.Chart#longpress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'longpress' event of this <code>sap.makit.Chart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.makit.Chart</code>.<br/> itself. 
 *  
 * Long press event on the chart
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.makit.Chart</code>.<br/> itself.
 *
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#attachLongpress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'longpress' event of this <code>sap.makit.Chart</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Chart#detachLongpress
 * @function
 */

/**
 * Fire event longpress to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @protected
 * @name sap.makit.Chart#fireLongpress
 * @function
 */


/**
 * Get the value of the currently highlighted category
 *
 * @name sap.makit.Chart#getSelectedCategory
 * @function
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * Get the value of the currently highlighted series
 *
 * @name sap.makit.Chart#getSelectedSeries
 * @function
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * Get the number of distinct category values
 *
 * @name sap.makit.Chart#getNumberOfCategories
 * @function
 * @type int
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * Return an array of categories value that is currently selected.
 *
 * @name sap.makit.Chart#getSelectedCategoryGroup
 * @function
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


// Start of sap/makit/Chart.js
/*!
 * @copyright@
 */

jQuery.sap.require("sap.makit.MakitLib");

/**
 * @override
 */
sap.makit.Chart.prototype.init = function() {
	//Private variable
	this._makitChart = null;
	this._parentCurrentHeight = 0;
	this._selectedCatIdx = 0;
	this._chartTypeDefined = false;
	this._legendPosDefined = false;
	this._createRowsCalled = false;
	
	this._datarows = []; //This is the placeholder for the Chart's data row it's a 1-to-1 mapping to rows aggregation.
	this._styleClasses = []; //workaround for custom classes

	this.setCategoryAxis(new sap.makit.CategoryAxis());
	this.setValueAxis(new sap.makit.ValueAxis());
	this.setValueBubble(new sap.makit.ValueBubble());
	this.setPrimaryColorPalette(null);
	
	
	if(this.getType() === sap.makit.ChartType.Pie || this.getType() === sap.makit.ChartType.Donut) {
		this.setLegendPosition(sap.makit.LegendPosition.Left);	
	}
	else {
		this.setLegendPosition(sap.makit.LegendPosition.None);
	}
	
	this.attachEvent("_change", this._onPropertyChanged);
	sap.ui.getCore().attachThemeChanged(this._applyCSS, this);
};

/**
 * Attempt to preserve the chart's DOM reference before re-rendering it
 * @override
 */
sap.makit.Chart.prototype.onBeforeRendering = function(oEvent) {
	this.fireEvent("_beforeRendering", this);
	if(this.getDomRef() && !sap.ui.core.RenderManager.isPreservedContent(this.getDomRef())){
		sap.ui.core.RenderManager.preserveContent(this.getDomRef(), /* bPreserveRoot */ true, /* bPreserveNodesWithId */ false);
	}
};

/**
 * Once the place holder is rendered, we will create the MAKit chart object or 
 * retrieve the preserved chart DOM reference if exists.
 * @override
 */
sap.makit.Chart.prototype.onAfterRendering = function(oEvent) {
	this.fireEvent("_afterRendering", this);
	var $placeholder = jQuery(jQuery.sap.domById("sap-ui-dummy-" + this.getId()));
	var $oldContent = sap.ui.core.RenderManager.findPreservedContent(this.getId());
	var $newContent = null;
	
	if ($oldContent.size() == 0) {
		this.fireEvent("_createMAKitObject", this);
		this._createChartObject();
		$newContent = new jQuery(this.getDomRef());
		$placeholder.replaceWith($newContent);
		var parent = this.getParent();
		var parentId = parent.getId();
		var parentDom = jQuery.sap.domById(parentId);
		this._parentCurrentHeight = parentDom.offsetHeight;
		sap.ui.core.ResizeHandler.register(parentDom, jQuery.proxy(this._onResize, this));
	} else if ( $oldContent.size() > 0 ) {
		this.fireEvent("_restoreMAKitObject", this);
		// replace dummy with old content
		$placeholder.replaceWith($oldContent);
	} else {
		$placeholder.remove();
	}
	
	if($newContent) {
		this._makitChart.showRangeSelectorView(this.getShowRangeSelector());
		this._makitChart.showTableView(this.getShowTableView());
		this._makitChart.setGraphLineWidth(this.getLineThickness());
		this._makitChart.showTableValue(this.getShowTableValue());
		this._makitChart.setMaxPies(this.getMaxSliceCount());
		this._makitChart.setPalette(this.getPrimaryColorPalette());
		this._makitChart.setProperty("ShowTotal", this.getShowTotalValue());
		this._makitChart.setNumberOfVisibleCategories(this.getNumberOfVisibleCategories());
		this._makitChart.setRangeSelectorStartPosition(this.getRangeSelectorStartPosition());
	}
	
	this._setDataTable();
};


/** 
 * WORKAROUND: MAKit chart current behavior overwrite the div's css class when it's created
 *				So we need to intercept addition of custom style classes before
 *				this._makitChart is created.
 * @override
 */
sap.makit.Chart.prototype.addStyleClass = function(sStyleClass, bSuppressRerendering) {
	 //If it's already in the control, then it is in the _styleClasses array
	if (this._styleClasses.indexOf(sStyleClass) === -1) {
		this._styleClasses.push(sStyleClass);
	}

	if(this._makitChart) {
		sap.ui.core.Control.prototype.addStyleClass.call(this, sStyleClass, bSuppressRerendering);
	}
	return this;
};

/**
 * @override
 */
sap.makit.Chart.prototype.removeStyleClass = function(sStyleClass, bSuppressRerendering) {
	var idx = this._styleClasses.indexOf(sStyleClass);
	if (idx > -1) {
		this._styleClasses.splice(idx, 1);
	}

	if(this._makitChart) {
		sap.ui.core.Control.prototype.removeStyleClass.call(this, sStyleClass, bSuppressRerendering);
	}
	return this;
};

/**
 * @override
 */
sap.makit.Chart.prototype.bindAggregation = function(sName, oBindingInfo) {
	// special handling for the rows aggregation
	if (sName === "rows") {
		// old API compatibility (sName, sPath, oTemplate, oSorter, aFilters)
		if (typeof oBindingInfo == "string") {
			oBindingInfo = {
				path: arguments[1],
				template: arguments[2],
				sorter: arguments[3], 
				filters: arguments[4]
			};
		}
		// the rows aggregation has neither a template nor a factory function!
		oBindingInfo.template = undefined;
		oBindingInfo.factory = function() {};
		// call the real bindAggregation method
		return sap.ui.core.Element.prototype.bindAggregation.call(this, sName, oBindingInfo); 
	}
	// call the real bindAggregation method
	return sap.ui.core.Element.prototype.bindAggregation.apply(this, arguments);
};

/** 
 * User should not use these API programmatically.
 * @override
 */
sap.makit.Chart.prototype.addRow = function(oRow){
	jQuery.sap.log.error("The control manages the rows aggregation. The method \"addRow\" cannot be used programmatically!");
};

/**
 * @override
 */
sap.makit.Chart.prototype.insertRow = function(oRow, iIndex){
	jQuery.sap.log.error("The control manages the rows aggregation. The method \"insertRow\" cannot be used programmatically!");
};

/**
 * @override
 */
sap.makit.Chart.prototype.removeRow = function(vRow){
	jQuery.sap.log.error("The control manages the rows aggregation. The method \"removeRow\" cannot be used programmatically!");
};

/**
 * @override
 */
sap.makit.Chart.prototype.removeAllRows = function(){
	jQuery.sap.log.error("The control manages the rows aggregation. The method \"removeAllRows\" cannot be used programmatically!");
};

/**
 * @override
 */
sap.makit.Chart.prototype.destroyRows = function(vRow){
	jQuery.sap.log.error("The control manages the rows aggregation. The method \"destroyRows\" cannot be used programmatically!");
};

/**
 * @override
 */
sap.makit.Chart.prototype.updateRows = function(){
	this.fireEvent("_startUpdateRows", this);
	this._createRows();
	this._createRowsCalled = true;
	if (this._makitChart) {
		this._setDataTable();
	}
	this.fireEvent("_endUpdateRows", this);
};

/**
 * @override
 */
sap.makit.Chart.prototype.setValueBubble = function(oValueBubble){
	if (oValueBubble instanceof sap.makit.ValueBubble) {
		sap.ui.core.Element.prototype.setProperty.call(this, "valueBubble", oValueBubble, false);
		oValueBubble.attachEvent("_change", this._onValueBubbleChanged, this);
		if (this._makitChart) {
			var valueBubbleObj = oValueBubble.toObject();
			this._makitChart.setValueBubbleStyle(valueBubbleObj);
			if (this._makitChart.isValueBubbleVisible() != valueBubbleObj.visible) {
				this._makitChart.showValueBubble(valueBubbleObj.visible);
			}
		}
	}
	else {
		throw new Error("valueBubble property must be of type sap.makit.ValueBubble");
	}
	return this;
};

/**
 * @override
 */
sap.makit.Chart.prototype.setCategory = function(oCategory){
	//sap.ui.core.Element.prototype.setAggregation.call(this, "category", oCategory, false);
	//oCategory.attachEvent("_change", {type: "category"}, this._onDataRegionPropChanged, this);
	var categories = this.getCategoryRegions();
	if (categories.length > 0){
		this.removeCategoryRegion(0);
	}
	this.insertCategoryRegion(oCategory, 0);
	return this;
};

/**
 * @override
 */
sap.makit.Chart.prototype.getCategory = function(oCategory){
	var categories = this.getCategoryRegions();
	return categories[0];
};

/**
 * @override
 */
sap.makit.Chart.prototype.destroyCategory = function(){
	this.removeCategoryRegion(0);
	return this;
};

/**
 * @override
 */
sap.makit.Chart.prototype.addCategoryRegion= function(oCategory){
	sap.ui.core.Element.prototype.addAggregation.call(this, "categoryRegions", oCategory, false);
	oCategory.attachEvent("_change", {type: "categories"}, this._onDataRegionPropChanged, this);
	return this;
};

/**
 * @override
 */
sap.makit.Chart.prototype.insertCategoryRegion= function(oCategory, iIndex){
	sap.ui.core.Element.prototype.insertAggregation.call(this, "categoryRegions", oCategory, iIndex, false);
	oCategory.attachEvent("_change", {type: "categories"}, this._onDataRegionPropChanged, this);
	return this;
};

/**
 * @override
 */
sap.makit.Chart.prototype.removeCategoryRegion= function(oCategory){
	var removedObj = sap.ui.core.Element.prototype.removeAggregation.call(this, "categoryRegions", oCategory, false);
	if(removedObj != null) {
		oCategory.detachEvent("_change", this._onDataRegionPropChanged, this);
	}
	return removedObj;
};

/**
 * @override
 */
sap.makit.Chart.prototype.removeAllCategoryRegions = function(){
	var removedObjs = sap.ui.core.Element.prototype.removeAllAggregation.call(this, "categoryRegions", false);
	var len = removedObjs.length;
	var i;
	for( i = 0; i < len; i++){ 
		removedObjs[i].detachEvent("_change", this._onDataRegionPropChanged, this);
	}
	return removedObjs;
};

/**
 * @override
 */
sap.makit.Chart.prototype.addValue= function(oValue){
	sap.ui.core.Element.prototype.addAggregation.call(this, "values", oValue, false);
	oValue.attachEvent("_change", {type: "values"}, this._onDataRegionPropChanged, this);
	return this;
};

/**
 * @override
 */
sap.makit.Chart.prototype.insertValue= function(oValue, iIndex){
	sap.ui.core.Element.prototype.insertAggregation.call(this, "values", oValue, iIndex, false);
	oValue.attachEvent("_change", {type: "values"}, this._onDataRegionPropChanged, this);
	return this;
};

/**
 * @override
 */
sap.makit.Chart.prototype.removeValue= function(oValue){
	var removedObj = sap.ui.core.Element.prototype.removeAggregation.call(this, "values", oValue, false);
	if(removedObj != null) {
		removedObj.detachEvent("_change", this._onDataRegionPropChanged, this);
	}
	return removedObj;
};

/**
 * @override
 */
sap.makit.Chart.prototype.removeAllValues = function(){
	var removedObjs = sap.ui.core.Element.prototype.removeAllAggregation.call(this, "values", false);
	var len = removedObjs.length;
	var i;
	for( i = 0; i < len; i++){ 
		removedObjs[i].detachEvent("_change", this._onDataRegionPropChanged, this);
	}
	return removedObjs;
};

/**
 * @override
 */
sap.makit.Chart.prototype.setSeries = function(oSeries){
	sap.ui.core.Element.prototype.setAggregation.call(this, "series", oSeries, false);
	oSeries.attachEvent("_change", {type: "series"}, this._onDataRegionPropChanged, this);
	return this;
};

/**
 * @override
 */
sap.makit.Chart.prototype.setValueAxis = function (oValueAxis){
	if (oValueAxis instanceof sap.makit.ValueAxis) {
		sap.ui.core.Element.prototype.setProperty.call(this, "valueAxis", oValueAxis, false);
		oValueAxis.attachEvent("_change", { axis:"values" }, this._onAxisPropChanged, this);
	}
	else {
		throw new Error("valueAxis property must be of type sap.makit.ValueAxis");
	}
	return this;
};

/**
 * @override
 */
sap.makit.Chart.prototype.setCategoryAxis = function (oCategoryAxis){
	if (oCategoryAxis instanceof sap.makit.CategoryAxis) {
		sap.ui.core.Element.prototype.setProperty.call(this, "categoryAxis", oCategoryAxis, false);
		oCategoryAxis.attachEvent("_change", { axis:"category" }, this._onAxisPropChanged, this);
	}
	else {
		throw new Error("categoryAxis property must be of type sap.makit.CategoryAxis");
	}
	return this;
};

/**
 * @override
 */
sap.makit.Chart.prototype.setPrimaryColorPalette = function(oColorPalette) {
	if (oColorPalette == null || (oColorPalette instanceof Array && oColorPalette.length > 0)) {
		sap.ui.core.Element.prototype.setProperty.call(this, "primaryColorPalette", oColorPalette, false);
		if (this._makitChart) {
			this._makitChart.setPalette(oColorPalette);
		}
	}
	else {
		throw new Error("primaryColorPalette property must be an array");
	}
	return this;
};


/*=================================================================================
 *== PRIVATE METHODS
 *=================================================================================
 **/

/**
 * Set the Chart's height. Canvas does not support % height, 
 * so it need to have an absolute height
 * 
 * @return true, if the height is using % value, false otherwise
 * 
 * @private
 * 
 * */
sap.makit.Chart.prototype._setRealHeight = function(height){
	var elem = this.getDomRef();
	var prevHeight = elem.style.height;
	var newHeight = "0px";
	if(height.indexOf("%") > -1) {
		var domref = this.getDomRef();
		//always get parentDom, fixed for IE QUnit Test failed.
		var parent = this.getParent();
		var parentId = parent.getId();
		var parentDom = jQuery.sap.domById(parentId);
		
		var intHeight = parseInt(height, 10);
		var realHeight = Math.ceil(parentDom.offsetHeight * (intHeight / 100));
		newHeight = realHeight + "px";
	}
	else {
		newHeight = height;
	}
	
	if (prevHeight != newHeight){
		elem.style.height = newHeight;
	}
};

/**
 * We will construct the row aggregation in this function
 * 
 * @private
 * 
 * */
sap.makit.Chart.prototype._createRows = function() {
	this.fireEvent("_startCreateRows", this);
	var oTemplate = new sap.makit.Row(this.getId() + "-dummyrows");
	var aCols = this.getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		var oColTemplate = aCols[i];
		if (oColTemplate) {
			var name = aCols[i].getName();
			var oClone = oColTemplate.clone("col" + i);
			oClone.detachEvent("_change", this._onColumnPropChanged, this);
			for(var prop in oColTemplate.mProperties) {
				if(oColTemplate.mProperties.hasOwnProperty(prop)) {
					oClone.setProperty(prop, oColTemplate.getProperty(prop), false);
				}
			}
			oClone.data("sap-ui-colindex", i);
			oTemplate.addAggregation("cells",oClone);
			oClone.unbindAggregation("name",true);
		}
	}
	this.fireEvent("_endColumn", this);
	this.destroyAggregation("rows");
	this.fireEvent("_endDestroyRows", this);
	var aContexts = undefined;
	var oBinding = this.getBinding("rows");
	if (oBinding) {
		aContexts = oBinding.getContexts();
	}
	var totalRows = oBinding.getLength();
	this._datarows = [];
	var bi = this.getBindingInfo("rows");
	var sModelName = undefined;
	if (bi && bi.model) {
		sModelName = bi.model;
	}
	this.fireEvent("_endPrepareRows", this);
	for (var i = 0; i < totalRows; i++) {
		if (aContexts && aContexts[i]) {
			var oClone = oTemplate.clone("row" + i);
			oClone.setBindingContext(aContexts[i], sModelName);
			this.addAggregation("rows", oClone);
			this._datarows.push(oClone._datarow);
		}
	}
	this.fireEvent("_endCreateRows", this);
	// destroy the template
	oTemplate.destroy();
};

/**
 * Create and initialize the MAKit $MA.Chart object
 * 
 * @private
 * 
 * */
sap.makit.Chart.prototype._createChartObject = function (){
	var elem = this.getDomRef();
	jQuery.sap.assert(elem, "Chart's DomRef is not ready");
	
	elem.style.width = this.getWidth();
	this._setRealHeight(this.getHeight());

	this._makitChart = new window.$MA.Chart(this.getId(), true);
	var that = this;
	
	this._makitChart.bind("initialized", function() {
		that._makitChart.showToolBar(false);
		that._setMakitChartProperties();
	});
	
	this._makitChart.bind("beforerender", function() {
		that.fireEvent("_makitBeforeRender", that);
	});
	
	this._makitChart.bind("renderstart", function() {
		that.fireEvent("_makitRenderStart", that);
	});
	
	this._makitChart.bind("renderend", function() {
		that.fireEvent("_makitRenderEnd", that);
	});
	
	this._makitChart.bind("animationend", function() {
		that.fireEvent("_makitAnimationEnd", that);
	});

	var syntax = this._getChartSyntax();

	this._makitChart.create(syntax);

	this._makitChart.bind("tap", function(param) {
		that._selectedCatIdx = that._makitChart.getSelectedCategoryIndex();
		that.fireTap(param);
	});
	this._makitChart.bind("doubletap", function(param) {
		that.fireEvent("doubletap", param);
	});
	this._makitChart.bind("longpress", function(param) {
		that._selectedCatIdx = that._makitChart.getSelectedCategoryIndex();
		that.fireEvent("longpress", param);
	});

	//workaround for overwritten classes
	var len = this._styleClasses.length;
	for (var i = 0; i < len; i++ ){
		this.addStyleClass(this._styleClasses[i]);
	}
	
	this._applyCSS();
};

/**
 * This function is used to apply the Makit properties that will be reset when changing chart type. 
 * 
 * @private
 * 
 * */
sap.makit.Chart.prototype._setMakitChartProperties = function() {
	if (!this._makitChart) {
		return;
	}
	this._makitChart.setLegend(this.getLegendPosition().toLowerCase());
	
	// We should only apply this if the chart's data has been initialised at least once
	if(this._dataInitialized){
		this._makitChart.showTableView(this.getShowTableView());
		this._makitChart.showRangeSelectorView(this.getShowRangeSelector());
		this._makitChart.setGraphLineWidth(this.getLineThickness());
		this._makitChart.showTableValue(this.getShowTableValue());
		this._makitChart.setPalette(this.getPrimaryColorPalette());
		this._makitChart.setProperty("ShowTotal", this.getShowTotalValue());
		this._makitChart.setNumberOfVisibleCategories(this.getNumberOfVisibleCategories());
		this._makitChart.setRangeSelectorStartPosition(this.getRangeSelectorStartPosition());
	}

	var valueBubble = this.getValueBubble();
	if (valueBubble) {
		var valueBubbleObj = valueBubble.toObject();
		this._makitChart.setValueBubbleStyle(valueBubbleObj);
		if (this._makitChart.isValueBubbleVisible() != valueBubbleObj.visible) {
			this._makitChart.showValueBubble(valueBubbleObj.visible);
		}
	}
};

sap.makit.Chart.prototype.addColumn= function(oValue){
	sap.ui.core.Element.prototype.addAggregation.call(this, "columns", oValue, false);
	oValue.attachEvent("_change", {type: "columns"}, this._onColumnPropChanged, this);
	return this;
};

/**
 * Generate the MAKit chart metadata syntax based on the sap.makit.Chart properties.
 * To be used to create the MAKit chart.
 * 
 * @private
 * 
 * */
sap.makit.Chart.prototype._getChartSyntax = function() {
	var categoryAxisObj = this.getCategoryAxis();
	var categoryObjs = this.getCategoryRegions();
	var catLen = categoryObjs.length;
	if (catLen > 0){
		var i;
		var categorySyntax = "<Categories";
		if(categoryAxisObj) { 
			if(categoryAxisObj.getDisplayAll()) {
				categorySyntax += ' display="' + categoryAxisObj.getDisplayAll() + '"';
			}
		}
		categorySyntax += ">";
		var displayNames = "";
		for (i = catLen - 1; i >= 0; i--) {
			var temp = categoryObjs[i].getDisplayName();
			if(temp && temp.length > 0 ){
				displayNames += temp + " | ";
			}
		}
		displayNames = displayNames.substr(0, displayNames.length - 3);
		
		for (i = 0; i < catLen; i++){
			var categoryObj = categoryObjs[i];
			categorySyntax += '<Category column="' + categoryObj.getColumn() + '"';
			if (categoryObj.getFormat()) {
					categorySyntax += ' format="' + categoryObj.getFormat() + '"';
			}
			if (i == 0) {
				categorySyntax += ' displayname="' + displayNames + '"';
			}
			if(categoryAxisObj) {
				categorySyntax += ' showprimaryline="'+ categoryAxisObj.getShowPrimaryLine() +'"';
				categorySyntax += ' showgrid="'+ categoryAxisObj.getShowGrid() +'"';
				categorySyntax += ' showlabel="'+ categoryAxisObj.getShowLabel() +'"';
				categorySyntax += ' thickness="'+ categoryAxisObj.getThickness() +'"';
				categorySyntax += ' color="'+ categoryAxisObj.getColor() +'"';
				categorySyntax += ' sortorder="'+ categoryAxisObj.getSortOrder().toLowerCase() +'"';
				categorySyntax += ' displaylastlabel="'+ categoryAxisObj.getDisplayLastLabel() +'"';
			}
			categorySyntax += ' />';
		}
		categorySyntax += "</Categories>";
	}
	else {
		throw new Error("Chart '"+ this.getId() +"' needs at least one Category data region");
	}

	var seriesObj = this.getSeries();
	var seriesSyntax = '';
	if (seriesObj) {
		seriesSyntax = '<Series Column="' + seriesObj.getColumn() + '"';
		if (seriesObj.getFormat()) {
			seriesSyntax += ' format="' + seriesObj.getFormat() + '"';
		}
		if (seriesObj.getDisplayName()) {
			seriesSyntax += ' displayname="' + seriesObj.getDisplayName() + '"';
		}
		seriesSyntax += '/>';
	}

	var valueAxisObj = this.getValueAxis();
	var valuesSyntax = '<Values>';
	if(valueAxisObj) {
		valuesSyntax = '<Values';
		valuesSyntax += ' showprimaryline="'+ valueAxisObj.getShowPrimaryLine() +'"';
		valuesSyntax += ' showgrid="'+ valueAxisObj.getShowGrid() +'"';
		valuesSyntax += ' showlabel="'+ valueAxisObj.getShowLabel() +'"';
		valuesSyntax += ' thickness="'+ valueAxisObj.getThickness() +'"';
		valuesSyntax += ' color="'+ valueAxisObj.getColor() +'"';
		if(valueAxisObj.getMin() !== "") {
			valuesSyntax += ' min="'+ valueAxisObj.getMin() +'"';
		}
		if(valueAxisObj.getMax() !== "") {
			valuesSyntax += ' max="'+ valueAxisObj.getMax() +'"';
		}
		valuesSyntax += '>';
	}

	var valuesObj = this.getValues();
	var length = valuesObj.length;
	if (length == 0) {
		throw new Error("Chart '"+ this.getId() +"' needs at least one Value data region");
	}
	var valueObj;
	for (var i = 0; i < length; i++) {
		valueObj = valuesObj[i];
		valuesSyntax += '<Value Expression="' + valueObj.getExpression() + '"';
		if (valueObj.getFormat()) {
			valuesSyntax += ' format="' + valueObj.getFormat() + '"';
		}
		if (valueObj.getDisplayName()) {
			valuesSyntax += ' displayname="' + valueObj.getDisplayName() + '"';
		}
		if(valueObj.getLocale() !== "") {
			valuesSyntax += ' Locale="'+ valueObj.getLocale() +'"';
		}
		valuesSyntax += '/>';
	}
	valuesSyntax += '</Values>';

	var type = this.getType().toLowerCase();
	var pieStyle = null;
	if (type === "donut" || type === "pie"){
		pieStyle = type; // it's the pieStyle that can be pie or donut
		type = "pie"; // in MAKit the chart's type is always pie for Pie/Donut chart
	}
	var chartSyntax = '<Chart ChartType="' + type + '"';
	if(pieStyle !== null) {
		chartSyntax += ' PieStyle="' + pieStyle + '"';
	}
	chartSyntax += ' >';

	chartSyntax += categorySyntax;
	if (seriesObj) {
		chartSyntax += seriesSyntax;
	}
	chartSyntax += valuesSyntax;
	chartSyntax += '</Chart>';

	return chartSyntax;
};

/**
 * Update the data table of MAKit chart. 
 * 
 * @private
 * 
 * */
sap.makit.Chart.prototype._setDataTable = function() {
	//Use delayed call to prevent setDataTable to be called too fast and too many times in a short period.
	this._setDataTableTimer = this._setDataTableTimer || jQuery.sap.delayedCall(150, this, function(){
		jQuery.sap.assert(this._makitChart, "_makitChart is not initialized");
		if(this._datarows && this._datarows.length > 0){
			this.fireEvent("_createDataTable", this);
			var data = this._datarows;
			var dataTable = new window.$MA.DataTable();
			var columns = this.getColumns();
			var colLen = columns.length;
			if (colLen == 0) {
				columns = this.getRows()[0].getCells();
				colLen = columns.length;
			}
			for (var i = 0; i < colLen; i++){
				dataTable.addColumn(columns[i].getName(), columns[i].getType());
			}

			dataTable.addRows(data);
			this.fireEvent("_beforeSetDataTable", this);
			this._makitChart.setDataTable(dataTable);
			this._dataInitialized = true;
		}
		this._setDataTableTimer = undefined;
	});
};


/** 
 * Read and parse the css classes in the document and apply those style to the MAKit Chart 
 * 
 * @private
 */
sap.makit.Chart.prototype._applyCSS = function(oEvent) {
	if (this._makitChart){
		this._makitChart.applyCSS();
	}
};


/*===================================================================================
 *=	PRIVATE EVENT HANDLERS
 *===================================================================================
 **/

/**
 * Handler for onresize event. 
 * 
 * @private
 * 
 * */
sap.makit.Chart.prototype._onResize = function(oEvent) {
	var parent = this.getParent();
	var parentId = parent.getId();
	var parentDom = jQuery.sap.domById(parentId);
	var parentDomCurHeight = parentDom.offsetHeight;
	var parentDomCurWidth = parentDom.offsetWidth;
	
	if ((this._parentCurrentHeight != parentDomCurHeight && parentDomCurHeight > 0) || parentDomCurHeight < 5) {
		this._setRealHeight(this.getHeight());
		this._parentCurrentHeight = parentDom.offsetHeight;
	}
	if(this._makitChart != null && parentDomCurHeight > 0 && parentDomCurWidth > 0) {
		this._makitChart.refresh();
	}
};

/**
 * Handler for Chart's direct properties change. 
 * 
 * @private
 * 
 * */
sap.makit.Chart.prototype._onPropertyChanged = function(oEvent){
	var name = oEvent.mParameters["name"];
	var newVal = oEvent.mParameters["newValue"];
	
	if (name === "type" && !this._chartTypeDefined) {
		this._chartTypeDefined = true;
		if(!this._legendPosDefined){
			if(newVal === sap.makit.ChartType.Pie || newVal === sap.makit.ChartType.Donut) {
				this.setLegendPosition(sap.makit.LegendPosition.Left);	
			}
			else {
				this.setLegendPosition(sap.makit.LegendPosition.None);
			}
		}
	}
	else if (name === "legendPosition" && !this._legendPosDefined) {
		this._legendPosDefined = true;
	}
	
	if(this._makitChart){
		if (name === "type") {
			var type = newVal.toLowerCase();
			var pieStyle = null;
			this._makitChart.setProperty("ChartType", type);
			if (type === "donut" || type === "pie"){
				pieStyle = type; // it's the pieStyle that can be pie or donut
				type = "pie"; // in MAKit the chart's type is always pie for Pie/Donut chart
				this._makitChart.setProperty("PieStyle", pieStyle);
			}
		} else if (name === "showRangeSelector") {
			this._makitChart.showRangeSelectorView(newVal);
		}
		else if (name === "showTableView") {
			this._makitChart.showTableView(newVal);
		}
		else if (name === "legendPosition") {
			this._makitChart.setLegend(newVal.toLowerCase());
		}
		else if(name === "width") {
			this.getDomRef().style.width = this.getWidth();
		}
		else if(name === "height") {
			this._setRealHeight(newVal);
		}
		else if(name === "lineThickness") {
			this._makitChart.setGraphLineWidth(newVal);
		}
		else if(name === "maxSliceCount") {
			this._makitChart.setMaxPies(newVal);
		}
		else if(name === "showTableValue") {
			this._makitChart.showTableValue(newVal);
		}
		else if(name === "primaryColorPalette") {
			this._makitChart.setPalette(newVal);
		}
		else if(name === "showTotalValue") {
			this._makitChart.setProperty("ShowTotal", newVal);
		} else if(name === "numberOfVisibleCategories") {
			this._makitChart.setNumberOfVisibleCategories(newVal);
		} else if (name === "rangeSelectorStartPosition") {
			this._makitChart.setRangeSelectorStartPosition(newVal);
		}
		
		this._makitChart.setSelectedCategoryIndex(this._selectedCatIdx);
		this._makitChart.refresh();
	}
};

sap.makit.Chart.prototype._onColumnPropChanged = function(oEvent, oData){
	var oParams = oEvent.mParameters;
	if (oParams["name"] == "name" && this._createRowsCalled) {
		jQuery.sap.log.info("Column name property is changed due to name has been binded");
		this._createRows();
	}
};

/**
 * Handler for Category, Value and Series data region property change 
 * 
 * @private
 * 
 * */
sap.makit.Chart.prototype._onDataRegionPropChanged = function(oEvent, oData){
	jQuery.sap.assert(oData, "oData is expected to be set in _onDataRegionPropChanged");
	if (!this._makitChart) {
		return;
	}
	var oParams = oEvent.mParameters;
	if (oData["type"] == "values") {
		var valObj = oEvent.oSource;
		var idx = this.indexOfValue(valObj);
		if(idx > -1){
			this._makitChart.setProperty(oData["type"] + "["+idx+"]." + oParams["name"], oParams["newValue"]);
		}
	}
	else if (oData["type"] == "categories") {
		var catObj = oEvent.oSource;
		var idx = this.indexOfCategoryRegion(catObj);
		var propName = oParams["name"];
		if(idx > -1){
			if(propName == "displayName") {
				var cats = this.getCategoryRegions();
				var i, value = "", len = cats.length;
				for(i = 0; i < len; i ++){
					value += cats[i].getDisplayName();
					if (i != len -1) {
						value +=  " | ";
					}
				}
				this._makitChart.setProperty("category." + propName, oParams["newValue"]);
			}
			else {
				this._makitChart.setProperty(oData["type"] + "["+idx+"]." + propName, oParams["newValue"]);
			}
		}
	} else {
		this._makitChart.setProperty(oData["type"] + "." + oParams["name"], oParams["newValue"]);
	}
};

/**
 * Handler for CategoryAxis and ValueAxis change 
 * 
 * @private
 * 
 * */
sap.makit.Chart.prototype._onAxisPropChanged = function(oEvent, oData){
	jQuery.sap.assert(oData, "oData is expected to be set in _onAxisPropChanged");
	if (!this._makitChart) {
		return;
	}
	var oParams = oEvent.mParameters;
	var sName =  oParams["name"].toLowerCase();
	var value =  oParams["newValue"];
	// Sortorder in makit only accepts lowercase value
	var axis = oData["axis"];
	if (sName === "sortorder") {
		value = value.toLowerCase();
	}
	else if (sName === "displayall") {
		axis = "categories";
		sName = "display";
		if(!value){
			value = "";
		}
	}
	
	this._makitChart.setProperty(axis + "." + sName, value);
	if (sName === "sortorder") {
		this._setDataTable();
	}
	
};

/**
 * Handler for ValueBubble properties change 
 * 
 * @private
 * 
 * */
sap.makit.Chart.prototype._onValueBubbleChanged = function (oEvent){
	if (!this._makitChart) {
		return;
	}
	var valueBubbleObj = this.getValueBubble().toObject();
	this._makitChart.setValueBubbleStyle(valueBubbleObj);
	if (this._makitChart.isValueBubbleVisible() != valueBubbleObj.visible) {
		this._makitChart.showValueBubble(valueBubbleObj.visible);
	}
	this._makitChart.refresh();
};

/*=================================================================================
 *== PUBLIC METHODS
 *=================================================================================
 **/

/**
 * See the generated JSDoc for the documentation of this public function
 * 
 * @public
 * */
sap.makit.Chart.prototype.getSelectedCategory = function() {
	var selectedCategory = undefined;
	if (this._makitChart){
		selectedCategory = this._makitChart.getSelectedCategory();
	}
	return selectedCategory;
};

/**
 * See the generated JSDoc for the documentation of this public function
 * 
 * @public
 * */
sap.makit.Chart.prototype.getSelectedSeries = function() {
	var selectedSeries = undefined;
	if (this._makitChart){
		selectedSeries = this._makitChart.getSelectedSeries();
	}
	return selectedSeries;
};

/**
 * See the generated JSDoc for the documentation of this public function
 * 
 * @public
 * */
sap.makit.Chart.prototype.getNumberOfCategories = function() {
	var numOfCat = undefined;
	if (this._makitChart){
		numOfCat = this._makitChart.getNumberOfCategories();
	}
	return numOfCat;
};

/**
 * See the generated JSDoc for the documentation of this public function
 * 
 * @public
 * */
sap.makit.Chart.prototype.getSelectedCategoryGroup = function() {
	var selectedCategoryGroup = undefined;
	if (this._makitChart){
		selectedCategoryGroup = this._makitChart.getSelectedCategoryGroup();
	}
	return selectedCategoryGroup;
};