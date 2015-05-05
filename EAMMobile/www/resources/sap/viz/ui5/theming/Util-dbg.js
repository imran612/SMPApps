/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */

jQuery.sap.declare("sap.viz.ui5.theming.Util");

sap.viz.ui5.theming.Util = {};

/**
 * CSS Parameters to Properties mapping object
 */
sap.viz.ui5.theming.Util._mapping = {
    "sapUiChartLabelHoverColor" : ["categoryAxis.hoverShadow.color",
                                   "legend.hoverShadow.color",
                                   "rowAxis.hoverShadow.color",
                                   "rowAxis.mouseDownShadow.color"],  
    "sapUiChartLabelPressedColor" : ["categoryAxis.mouseDownShadow.color",
                                     "legend.mouseDownShadow.color",
                                     "columnAxis.hoverShadow.color",
                                     "columnAxis.mouseDownShadow.color"],
    "sapUiChartCategoryAxisLabelFontColor" : ["categoryAxis.label.style.color",
                                              "columnAxis.label.style.color",
                                              "rowAxis.label.style.color"],
    "sapUiChartValueAxisLabelFontColor" : [ "valueAxis.label.style.color",
                                            "valueAxis2.label.style.color" ],
    "sapUiChartCategoryAxislabelFontSize" : ["categoryAxis.label.style.fontSize",
                                             "rowAxis.label.style.fontSize",
                                             "columnAxis.label.style.fontSize"],
    "sapUiChartValueAxislabelFontSize" : [ "valueAxis.label.style.fontSize",
                                           "valueAxis2.label.style.fontSize" ],
    "sapUiChartCategoryAxisLineColor" : "categoryAxis.color",
    "sapUiChartValueAxisLineColor" : [ "valueAxis.color", "valueAxis2.color" ],
    "sapUiChartCategoryAxisTickColor" : "categoryAxis.color",
    "sapUiChartValueAxisTickColor" : [ "valueAxis.color", "valueAxis2.color" ],
    "sapUiChartBackgroundColor" : "general.background.color",
    "sapUiFontFamily" : [ "plotArea.dataLabel.style.fontFamily",
                          "plotArea.dimensionLabel.style.fontFamily",
                          "plotArea.referenceLine.defaultStyle.label.fontFamily",
                          "plotArea.highlight.centerName.style.fontFamily",
                          "plotArea.highlight.centerValue.style.fontFamily",
                          "categoryAxis.title.style.fontFamily",
                          "categoryAxis.label.style.fontFamily",
                          "valueAxis.title.style.fontFamily",
                          "valueAxis.label.style.fontFamily",
                          "valueAxis2.label.style.fontFamily",
                          "valueAxis2.title.style.fontFamily",
                          "columnAxis.title.style.fontFamily",
                          "columnAxis.label.style.fontFamily",
                          "rowAxis.title.style.fontFamily",
                          "rowAxis.label.style.fontFamily",
                          "legend.title.style.fontFamily",
                          "legend.label.style.fontFamily",
                          "sizeLegend.title.style.fontFamily",
                          "sizeLegend.label.style.fontFamily",
                          "title.style.fontFamily" ],
    "sapUiChartLabelFontWeight" : [ "plotArea.dataLabel.style.fontWeight",
                                    "plotArea.dimensionLabel.style.fontWeight",
                                    "plotArea.referenceLine.defaultStyle.label.fontWeight",
                                    "plotArea.highlight.centerName.style.fontWeight",
                                    "plotArea.highlight.centerValue.style.fontWeight",
                                    "categoryAxis.label.style.fontWeight",
                                    "valueAxis.label.style.fontWeight",
                                    "valueAxis2.label.style.fontWeight",
                                    "columnAxis.label.style.fontWeight",
                                    "rowAxis.label.style.fontWeight",
                                    "legend.label.style.fontWeight",
                                    "sizeLegend.label.style.fontWeight" ],
   "sapUiChartLegendLabelFontColor" : [ "legend.label.style.color",
                                        "sizeLegend.label.style.color" ],
   "sapUiChartLegendTitleFontColor" : [ "legend.title.style.color",
                                        "sizeLegend.title.style.color" ],
   "sapUiChartLegendTitleFontSize" : [ "legend.title.style.fontSize",
                                       "sizeLegend.title.style.fontSize" ],
   "sapUiChartLegendLabelFontSize" : [ "legend.label.style.fontSize",
                                       "sizeLegend.label.style.fontSize" ],
    "sapUiChartPaletteUndefinedColor" : "plotArea.defaultOthersStyle.color",  
    "sapUiChartGridlineColor" : ["plotArea.gridline.color",
                                 "plotArea.grid.line.color"],
    "sapUiChartReferenceLineColor" : "plotArea.referenceLine.defaultStyle.color",
    "sapUiChartReferenceLineLabelColor" : "plotArea.referenceLine.defaultStyle.label.color",
    "sapUiChartDataLabelFontSize" : ["plotArea.dataLabel.style.fontSize",
                                     "plotArea.dimensionLabel.style.fontSize",
                                     "plotArea.referenceLine.defaultStyle.label.fontSize"],
    "sapUiChartDataLabelFontColor" : ["plotArea.dataLabel.style.color",
                                      "plotArea.dimensionLabel.style.color"],
    "sapUiChartScrollBarThumbColor" : [ "plotArea.scrollbar.thumb.fill",
                                       "legend.scrollbar.thumb.fill" ],
    "sapUiChartScrollBarTrackColor" : [ "plotArea.scrollbar.track.fill",
                                        "legend.scrollbar.track.fill" ],
    "sapUiChartScrollBarThumbHoverColor" : ["plotArea.scrollbar.thumb.hoverFill",
                                             "legend.scrollbar.thumb.hoverFill" ],                                                                      
    "sapUiChartMainTitleFontColor" : "title.style.color",
    "sapUiChartAxisTitleFontColor" : [ "categoryAxis.title.style.color",
                                       "valueAxis.title.style.color", 
                                       "valueAxis2.title.style.color",
                                       "columnAxis.title.style.color",
                                       "rowAxis.title.style.color"],
    "sapUiChartMainTitleFontSize" : "title.style.fontSize",
    "sapUiChartAxisTitleFontSize" : [ "categoryAxis.title.style.fontSize",
                                      "valueAxis.title.style.fontSize",
                                      "valueAxis2.title.style.fontSize",
                                      "columnAxis.title.style.fontSize",
                                      "rowAxis.title.style.fontSize"],                                                                     
    "sapUiChartTitleFontWeight" : [ "title.style.fontWeight",
                                    "legend.title.style.fontWeight",
                                    "categoryAxis.title.style.fontWeight",
                                    "valueAxis.title.style.fontWeight",
                                    "valueAxis2.title.style.fontWeight",
                                    "columnAxis.title.style.fontWeight",
                                    "rowAxis.title.style.fontWeight"]    
};

/**
 * Read CSS parameters and convert them to CVOM properties
 * 
 * @return {object}
 * @example {"plot.dataLabel.style.color": "0xff00ff", "title.style.color":
 *          "0x00ff00", ...}
 */
sap.viz.ui5.theming.Util.readCSSParameters = function() {
    var property = {};
    var mapping = sap.viz.ui5.theming.Util._mapping;
    for ( var key in mapping) {
        if (mapping.hasOwnProperty(key)) {
            var value = sap.ui.core.theming.Parameters.get(key);
            if (value) {
                var index = value.indexOf('rem');
                if(index > -1) {
                    //Fix me, at present we hard code 1rem = 16px, since the chart cannot support rem
                    var temp = value.substring(0, index);
                    value = temp * 
                        parseFloat(window.getComputedStyle(document.documentElement).fontSize) + 'px';
                }
                var path = mapping[key];
                if (Object.prototype.toString.call(path) === '[object Array]') {
                    for (var i = 0; i < path.length; i++) {
                        addProperty(property, path[i], value);
                    }
                } else {
                    addProperty(property, path, value);
                }
            }
        }
    }
    return property;

    function addProperty(property, path, value) {
        var keys = path.split('.');
        var prop = property;
        for (var i = 0; i < keys.length - 1; i++) {
            var key = keys[i];
            if (undefined == prop[key] || null == prop[key]) {
                prop[key] = {}
            }
            prop = prop[key];
        }
        key = keys[i];
        prop[key] = value;
    }
};