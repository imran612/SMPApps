/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.Combination.
jQuery.sap.declare("sap.viz.ui5.Combination");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseChart");


/**
 * Constructor for a new ui5/Combination.
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
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getGeneral general} : sap.viz.ui5.types.RootContainer</li>
 * <li>{@link #getInteraction interaction} : sap.viz.ui5.types.controller.Interaction</li>
 * <li>{@link #getTitle title} : sap.viz.ui5.types.Title</li>
 * <li>{@link #getLegendGroup legendGroup} : sap.viz.ui5.types.Legend</li>
 * <li>{@link #getLegend legend} : sap.viz.ui5.types.legend.Common</li>
 * <li>{@link #getToolTip toolTip} : sap.viz.ui5.types.Tooltip</li>
 * <li>{@link #getXyContainer xyContainer} : sap.viz.ui5.types.XYContainer</li>
 * <li>{@link #getDataLabel dataLabel} : sap.viz.ui5.types.Datalabel</li>
 * <li>{@link #getYAxis yAxis} : sap.viz.ui5.types.Axis</li>
 * <li>{@link #getXAxis xAxis} : sap.viz.ui5.types.Axis</li>
 * <li>{@link #getBackground background} : sap.viz.ui5.types.Background</li>
 * <li>{@link #getPlotArea plotArea} : sap.viz.ui5.types.Combination</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.viz.ui5.Combination#event:selectData selectData} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.viz.ui5.Combination#event:deselectData deselectData} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.viz.ui5.Combination#event:showTooltip showTooltip} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.viz.ui5.Combination#event:hideTooltip hideTooltip} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.viz.ui5.Combination#event:initialized initialized} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.viz.ui5.core.BaseChart#constructor sap.viz.ui5.core.BaseChart}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Chart ui5/Combination
 * @extends sap.viz.ui5.core.BaseChart
 * @version 1.26.6
 *
 * @constructor
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 * @name sap.viz.ui5.Combination
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.viz.ui5.core.BaseChart.extend("sap.viz.ui5.Combination", { metadata : {

	library : "sap.viz",
	aggregations : {
		"general" : {type : "sap.viz.ui5.types.RootContainer", multiple : false}, 
		"interaction" : {type : "sap.viz.ui5.types.controller.Interaction", multiple : false}, 
		"title" : {type : "sap.viz.ui5.types.Title", multiple : false}, 
		"legendGroup" : {type : "sap.viz.ui5.types.Legend", multiple : false}, 
		"legend" : {type : "sap.viz.ui5.types.legend.Common", multiple : false}, 
		"toolTip" : {type : "sap.viz.ui5.types.Tooltip", multiple : false}, 
		"xyContainer" : {type : "sap.viz.ui5.types.XYContainer", multiple : false}, 
		"dataLabel" : {type : "sap.viz.ui5.types.Datalabel", multiple : false}, 
		"yAxis" : {type : "sap.viz.ui5.types.Axis", multiple : false}, 
		"xAxis" : {type : "sap.viz.ui5.types.Axis", multiple : false}, 
		"background" : {type : "sap.viz.ui5.types.Background", multiple : false}, 
		"plotArea" : {type : "sap.viz.ui5.types.Combination", multiple : false}
	},
	events : {
		"selectData" : {}, 
		"deselectData" : {}, 
		"showTooltip" : {deprecated: true}, 
		"hideTooltip" : {deprecated: true}, 
		"initialized" : {}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.Combination with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.Combination.extend
 * @function
 */

sap.viz.ui5.Combination.M_EVENTS = {'selectData':'selectData','deselectData':'deselectData','showTooltip':'showTooltip','hideTooltip':'hideTooltip','initialized':'initialized'};


/**
 * Getter for aggregation <code>general</code>.<br/>
 * Module sap.viz.modules.rootContainer
 * 
 * @return {sap.viz.ui5.types.RootContainer}
 * @public
 * @name sap.viz.ui5.Combination#getGeneral
 * @function
 */


/**
 * Setter for the aggregated <code>general</code>.
 * @param {sap.viz.ui5.types.RootContainer} oGeneral
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#setGeneral
 * @function
 */
	

/**
 * Destroys the general in the aggregation 
 * named <code>general</code>.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#destroyGeneral
 * @function
 */


/**
 * Getter for aggregation <code>interaction</code>.<br/>
 * Module sap.viz.modules.controller.interaction
 * 
 * @return {sap.viz.ui5.types.controller.Interaction}
 * @public
 * @name sap.viz.ui5.Combination#getInteraction
 * @function
 */


/**
 * Setter for the aggregated <code>interaction</code>.
 * @param {sap.viz.ui5.types.controller.Interaction} oInteraction
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#setInteraction
 * @function
 */
	

/**
 * Destroys the interaction in the aggregation 
 * named <code>interaction</code>.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#destroyInteraction
 * @function
 */


/**
 * Getter for aggregation <code>title</code>.<br/>
 * Module sap.viz.modules.title
 * 
 * @return {sap.viz.ui5.types.Title}
 * @public
 * @name sap.viz.ui5.Combination#getTitle
 * @function
 */


/**
 * Setter for the aggregated <code>title</code>.
 * @param {sap.viz.ui5.types.Title} oTitle
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#setTitle
 * @function
 */
	

/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#destroyTitle
 * @function
 */


/**
 * Getter for aggregation <code>legendGroup</code>.<br/>
 * Module sap.viz.modules.legend
 * 
 * @return {sap.viz.ui5.types.Legend}
 * @public
 * @name sap.viz.ui5.Combination#getLegendGroup
 * @function
 */


/**
 * Setter for the aggregated <code>legendGroup</code>.
 * @param {sap.viz.ui5.types.Legend} oLegendGroup
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#setLegendGroup
 * @function
 */
	

/**
 * Destroys the legendGroup in the aggregation 
 * named <code>legendGroup</code>.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#destroyLegendGroup
 * @function
 */


/**
 * Getter for aggregation <code>legend</code>.<br/>
 * Module sap.viz.modules.legend.common
 * 
 * @return {sap.viz.ui5.types.legend.Common}
 * @public
 * @name sap.viz.ui5.Combination#getLegend
 * @function
 */


/**
 * Setter for the aggregated <code>legend</code>.
 * @param {sap.viz.ui5.types.legend.Common} oLegend
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#setLegend
 * @function
 */
	

/**
 * Destroys the legend in the aggregation 
 * named <code>legend</code>.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#destroyLegend
 * @function
 */


/**
 * Getter for aggregation <code>toolTip</code>.<br/>
 * Module sap.viz.chart.elements.Tooltip
 * 
 * @return {sap.viz.ui5.types.Tooltip}
 * @public
 * @name sap.viz.ui5.Combination#getToolTip
 * @function
 */


/**
 * Setter for the aggregated <code>toolTip</code>.
 * @param {sap.viz.ui5.types.Tooltip} oToolTip
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#setToolTip
 * @function
 */
	

/**
 * Destroys the toolTip in the aggregation 
 * named <code>toolTip</code>.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#destroyToolTip
 * @function
 */


/**
 * Getter for aggregation <code>xyContainer</code>.<br/>
 * Module sap.viz.modules.xycontainer
 * 
 * @return {sap.viz.ui5.types.XYContainer}
 * @public
 * @name sap.viz.ui5.Combination#getXyContainer
 * @function
 */


/**
 * Setter for the aggregated <code>xyContainer</code>.
 * @param {sap.viz.ui5.types.XYContainer} oXyContainer
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#setXyContainer
 * @function
 */
	

/**
 * Destroys the xyContainer in the aggregation 
 * named <code>xyContainer</code>.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#destroyXyContainer
 * @function
 */


/**
 * Getter for aggregation <code>dataLabel</code>.<br/>
 * Module sap.viz.modules.datalabel
 * 
 * @return {sap.viz.ui5.types.Datalabel}
 * @public
 * @name sap.viz.ui5.Combination#getDataLabel
 * @function
 */


/**
 * Setter for the aggregated <code>dataLabel</code>.
 * @param {sap.viz.ui5.types.Datalabel} oDataLabel
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#setDataLabel
 * @function
 */
	

/**
 * Destroys the dataLabel in the aggregation 
 * named <code>dataLabel</code>.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#destroyDataLabel
 * @function
 */


/**
 * Getter for aggregation <code>yAxis</code>.<br/>
 * Module sap.viz.modules.axis
 * 
 * @return {sap.viz.ui5.types.Axis}
 * @public
 * @name sap.viz.ui5.Combination#getYAxis
 * @function
 */


/**
 * Setter for the aggregated <code>yAxis</code>.
 * @param {sap.viz.ui5.types.Axis} oYAxis
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#setYAxis
 * @function
 */
	

/**
 * Destroys the yAxis in the aggregation 
 * named <code>yAxis</code>.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#destroyYAxis
 * @function
 */


/**
 * Getter for aggregation <code>xAxis</code>.<br/>
 * Module sap.viz.modules.axis
 * 
 * @return {sap.viz.ui5.types.Axis}
 * @public
 * @name sap.viz.ui5.Combination#getXAxis
 * @function
 */


/**
 * Setter for the aggregated <code>xAxis</code>.
 * @param {sap.viz.ui5.types.Axis} oXAxis
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#setXAxis
 * @function
 */
	

/**
 * Destroys the xAxis in the aggregation 
 * named <code>xAxis</code>.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#destroyXAxis
 * @function
 */


/**
 * Getter for aggregation <code>background</code>.<br/>
 * Module sap.viz.modules.background
 * 
 * @return {sap.viz.ui5.types.Background}
 * @public
 * @name sap.viz.ui5.Combination#getBackground
 * @function
 */


/**
 * Setter for the aggregated <code>background</code>.
 * @param {sap.viz.ui5.types.Background} oBackground
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#setBackground
 * @function
 */
	

/**
 * Destroys the background in the aggregation 
 * named <code>background</code>.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#destroyBackground
 * @function
 */


/**
 * Getter for aggregation <code>plotArea</code>.<br/>
 * Module sap.viz.modules.combination
 * 
 * @return {sap.viz.ui5.types.Combination}
 * @public
 * @name sap.viz.ui5.Combination#getPlotArea
 * @function
 */


/**
 * Setter for the aggregated <code>plotArea</code>.
 * @param {sap.viz.ui5.types.Combination} oPlotArea
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#setPlotArea
 * @function
 */
	

/**
 * Destroys the plotArea in the aggregation 
 * named <code>plotArea</code>.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#destroyPlotArea
 * @function
 */


/**
 * Event fires when certain data point(s) is(are) selected, data context of selected item(s) would be passed in accordance with the following format.<code>{name: "selectData",data:[{
 * //selected element's detail
 * target:"Dom Element",//an object pointed to corresponding dom element
 * data:[{val: "...",//value of this element
 * ctx:{type:"Dimension"||"Measure"||"MND",
 * //for Dimension
 * path:{aa:"...",di:"...",dii:"..."},
 * //for Measure
 * path:{mg:"...",mi:"...",dii_a1:"...",dii_a2:"..."},
 * //for MND
 * path:{mg:"...",mi:"..."}
 * //path: analysis path
 * //aa: analysis axis index // 0 for analysis axis 1, 1 for analysis 2
 * //di: dimension index //zero based
 * //dii: dimension item index //zero based
 * //mg: measure group index // 0 for measure group 1,1 for measure group 2
 * //mi: measure index // measure index in measure group zero based
 * //dii_a1: each dii of di in analysis axis 1 index
 * //dii_a2: each dii of di in analysis axis 2 index
 * }},{
 * //for bubble, tagcloud and scatter, there will be more than one values in one selected element.
 * var:"...",ctx:"..."}]},{
 * //if under multi selection, there will be more than one selected elements
 * target:"...",data:["..."]}]}
 *
 * @name sap.viz.ui5.Combination#selectData
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'selectData' event of this <code>sap.viz.ui5.Combination</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.viz.ui5.Combination</code>.<br/> itself. 
 *  
 * Event fires when certain data point(s) is(are) selected, data context of selected item(s) would be passed in accordance with the following format.<code>{name: "selectData",data:[{
 * //selected element's detail
 * target:"Dom Element",//an object pointed to corresponding dom element
 * data:[{val: "...",//value of this element
 * ctx:{type:"Dimension"||"Measure"||"MND",
 * //for Dimension
 * path:{aa:"...",di:"...",dii:"..."},
 * //for Measure
 * path:{mg:"...",mi:"...",dii_a1:"...",dii_a2:"..."},
 * //for MND
 * path:{mg:"...",mi:"..."}
 * //path: analysis path
 * //aa: analysis axis index // 0 for analysis axis 1, 1 for analysis 2
 * //di: dimension index //zero based
 * //dii: dimension item index //zero based
 * //mg: measure group index // 0 for measure group 1,1 for measure group 2
 * //mi: measure index // measure index in measure group zero based
 * //dii_a1: each dii of di in analysis axis 1 index
 * //dii_a2: each dii of di in analysis axis 2 index
 * }},{
 * //for bubble, tagcloud and scatter, there will be more than one values in one selected element.
 * var:"...",ctx:"..."}]},{
 * //if under multi selection, there will be more than one selected elements
 * target:"...",data:["..."]}]}
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.viz.ui5.Combination</code>.<br/> itself.
 *
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#attachSelectData
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'selectData' event of this <code>sap.viz.ui5.Combination</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#detachSelectData
 * @function
 */

/**
 * Fire event selectData to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @protected
 * @name sap.viz.ui5.Combination#fireSelectData
 * @function
 */


/**
 * Event fires when certain data point(s) is(are) deselected, data context of deselected item(s) would be passed in accordance with the following format.<code>{name: "deselectData",data:["---the same as selectedData---"]}
 *
 * @name sap.viz.ui5.Combination#deselectData
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'deselectData' event of this <code>sap.viz.ui5.Combination</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.viz.ui5.Combination</code>.<br/> itself. 
 *  
 * Event fires when certain data point(s) is(are) deselected, data context of deselected item(s) would be passed in accordance with the following format.<code>{name: "deselectData",data:["---the same as selectedData---"]}
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.viz.ui5.Combination</code>.<br/> itself.
 *
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#attachDeselectData
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'deselectData' event of this <code>sap.viz.ui5.Combination</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#detachDeselectData
 * @function
 */

/**
 * Fire event deselectData to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @protected
 * @name sap.viz.ui5.Combination#fireDeselectData
 * @function
 */


/**
 * This event is deprecated, please use showDetail decoration (refer to properties: interaction.decorations) instead. Event fires when the mouse hover onto the specific part of chart, data context of tooltip would be passed in accordance with the following format.<code>{name:"showTooltip",data:{body:[{
 * //All measures
 * name:"...",val:[{//measure value is an array containing only one item
 * value:"..."}]},"..."],footer:[{label:"...",value:"..."},"..."],plotArea:{
 * //this object specifies the plot area of the chart
 * height:"...",width:"...",x:"...",y:"..."},point:{
 * //this object specifies a point which affects the position of tooltip
 * x:"...",y:"..."},selectedValues:...//this number specify how many values are selected}}
 *
 * @name sap.viz.ui5.Combination#showTooltip
 * @event
 * @deprecated Since version 1.19. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'showTooltip' event of this <code>sap.viz.ui5.Combination</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.viz.ui5.Combination</code>.<br/> itself. 
 *  
 * This event is deprecated, please use showDetail decoration (refer to properties: interaction.decorations) instead. Event fires when the mouse hover onto the specific part of chart, data context of tooltip would be passed in accordance with the following format.<code>{name:"showTooltip",data:{body:[{
 * //All measures
 * name:"...",val:[{//measure value is an array containing only one item
 * value:"..."}]},"..."],footer:[{label:"...",value:"..."},"..."],plotArea:{
 * //this object specifies the plot area of the chart
 * height:"...",width:"...",x:"...",y:"..."},point:{
 * //this object specifies a point which affects the position of tooltip
 * x:"...",y:"..."},selectedValues:...//this number specify how many values are selected}}
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.viz.ui5.Combination</code>.<br/> itself.
 *
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.19. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.Combination#attachShowTooltip
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'showTooltip' event of this <code>sap.viz.ui5.Combination</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.19. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.Combination#detachShowTooltip
 * @function
 */

/**
 * Fire event showTooltip to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @protected
 * @deprecated Since version 1.19. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.Combination#fireShowTooltip
 * @function
 */


/**
 * This event is deprecated, please use hideDetail decoration (refer to properties: interaction.decorations) instead. Event fires when the mouse hover out of the specific part of chart, no data is passed.
 *
 * @name sap.viz.ui5.Combination#hideTooltip
 * @event
 * @deprecated Since version 1.19. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'hideTooltip' event of this <code>sap.viz.ui5.Combination</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.viz.ui5.Combination</code>.<br/> itself. 
 *  
 * This event is deprecated, please use hideDetail decoration (refer to properties: interaction.decorations) instead. Event fires when the mouse hover out of the specific part of chart, no data is passed.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.viz.ui5.Combination</code>.<br/> itself.
 *
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.19. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.Combination#attachHideTooltip
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'hideTooltip' event of this <code>sap.viz.ui5.Combination</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.19. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.Combination#detachHideTooltip
 * @function
 */

/**
 * Fire event hideTooltip to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @protected
 * @deprecated Since version 1.19. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.Combination#fireHideTooltip
 * @function
 */


/**
 * Event fires when the loading ends. To use the event listener when creating charts, you must use an event that is passed by the events option. For more information on events options, see the usrOptions section of the <a href="sap.viz.core.html#createViz" target="_blank">createViz</a> function in the API document.
 *
 * @name sap.viz.ui5.Combination#initialized
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'initialized' event of this <code>sap.viz.ui5.Combination</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.viz.ui5.Combination</code>.<br/> itself. 
 *  
 * Event fires when the loading ends. To use the event listener when creating charts, you must use an event that is passed by the events option. For more information on events options, see the usrOptions section of the <a href="sap.viz.core.html#createViz" target="_blank">createViz</a> function in the API document.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.viz.ui5.Combination</code>.<br/> itself.
 *
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#attachInitialized
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'initialized' event of this <code>sap.viz.ui5.Combination</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.Combination#detachInitialized
 * @function
 */

/**
 * Fire event initialized to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.viz.ui5.Combination} <code>this</code> to allow method chaining
 * @protected
 * @name sap.viz.ui5.Combination#fireInitialized
 * @function
 */


// Start of sap/viz/ui5/Combination.js
sap.viz.ui5.Combination.prototype.getVIZChartType = function() {
  return "viz/combination";
};

sap.viz.ui5.Combination.prototype.getGeneral = function() {
  return this._getOrCreate("general");
}
sap.viz.ui5.Combination.prototype.getInteraction = function() {
  return this._getOrCreate("interaction");
}
sap.viz.ui5.Combination.prototype.getTitle = function() {
  return this._getOrCreate("title");
}
sap.viz.ui5.Combination.prototype.getLegendGroup = function() {
  return this._getOrCreate("legendGroup");
}
sap.viz.ui5.Combination.prototype.getLegend = function() {
  return this._getOrCreate("legend");
}
sap.viz.ui5.Combination.prototype.getToolTip = function() {
  return this._getOrCreate("toolTip");
}
sap.viz.ui5.Combination.prototype.getXyContainer = function() {
  return this._getOrCreate("xyContainer");
}
sap.viz.ui5.Combination.prototype.getDataLabel = function() {
  return this._getOrCreate("dataLabel");
}
sap.viz.ui5.Combination.prototype.getYAxis = function() {
  return this._getOrCreate("yAxis");
}
sap.viz.ui5.Combination.prototype.getXAxis = function() {
  return this._getOrCreate("xAxis");
}
sap.viz.ui5.Combination.prototype.getBackground = function() {
  return this._getOrCreate("background");
}
sap.viz.ui5.Combination.prototype.getPlotArea = function() {
  return this._getOrCreate("plotArea");
}
sap.viz.ui5.Combination.prototype.attachSelectData = function(oData, fnHandler, oListener) {
  return this._attachVIZEvent("selectData", oData, fnHandler, oListener);
};

sap.viz.ui5.Combination.prototype.detachSelectData = function(fnHandler, oListener) {
  return this._detachVIZEvent("selectData", fnHandler, oListener);
};

sap.viz.ui5.Combination.prototype.attachDeselectData = function(oData, fnHandler, oListener) {
  return this._attachVIZEvent("deselectData", oData, fnHandler, oListener);
};

sap.viz.ui5.Combination.prototype.detachDeselectData = function(fnHandler, oListener) {
  return this._detachVIZEvent("deselectData", fnHandler, oListener);
};

sap.viz.ui5.Combination.prototype.attachShowTooltip = function(oData, fnHandler, oListener) {
  return this._attachVIZEvent("showTooltip", oData, fnHandler, oListener);
};

sap.viz.ui5.Combination.prototype.detachShowTooltip = function(fnHandler, oListener) {
  return this._detachVIZEvent("showTooltip", fnHandler, oListener);
};

sap.viz.ui5.Combination.prototype.attachHideTooltip = function(oData, fnHandler, oListener) {
  return this._attachVIZEvent("hideTooltip", oData, fnHandler, oListener);
};

sap.viz.ui5.Combination.prototype.detachHideTooltip = function(fnHandler, oListener) {
  return this._detachVIZEvent("hideTooltip", fnHandler, oListener);
};

sap.viz.ui5.Combination.prototype.attachInitialized = function(oData, fnHandler, oListener) {
  return this._attachVIZEvent("initialized", oData, fnHandler, oListener);
};

sap.viz.ui5.Combination.prototype.detachInitialized = function(fnHandler, oListener) {
  return this._detachVIZEvent("initialized", fnHandler, oListener);
};

