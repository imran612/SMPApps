(function() {
    var toString = Object.prototype.toString;

    function isArray(it) {
        return toString.call(it) === '[object Array]';
    }
    function isObject(it) {
        return toString.call(it) === '[object Object]';
    }
    function _merge(a, b) {
        for (var key in b) {
            if (isArray(b[key])) {
                a[key] = b[key].slice();
            } else if (isObject(b[key])) {
                a[key] = a[key] || {};
                _merge(a[key], b[key]);
            } else {
                a[key] = b[key];
            }
        }
        return a;
    }
    function merge() {
        var res = {};
        for (var i = 0; i < arguments.length; ++i) {
            _merge(res, arguments[i]);
        }
        return res;
    }

    var axisColor = "#707070";
    var axisGridlineColor = "#dadada";
    var backgroundColor = "#eeeeee";

    var background = {
        background: {
            color: backgroundColor,
            border: {
                top: {
                    visible: false
                },
                bottom: {
                    visible: false
                },
                left: {
                    visible: false
                },
                right: {
                    visible: false
                }
            },
            drawingEffect: "glossy"
        }
    };

    var legend = {
        legend: {
            drawingEffect: "glossy",
            title: {
                visible: true
            }
        }
    };

    var tooltip = {
        tooltip: {
            drawingEffect: "glossy"
        }
    };

    var plotArea = {
        plotArea: {
            drawingEffect: "glossy"
        }
    };

    var zAxis = {
        zAxis: {
            title: {
                visible: true
            },
            color: axisColor
        }
    };

    var axis = {
        title: {
            visible: true
        },
        gridline: {
            color: axisGridlineColor
        },
        color: axisColor
    };

    var showAxisLine = {
        axisline: {
            visible: true
        }
    };

    var showInfoAxisLine = {
        axisLine: {
            visible: true
        }
    };

    var hideAxisLine = {
        axisline: {
            visible: false
        }
    };

    var hideInfoAxisLine = {
        axisLine: {
            visible: false
        }
    };

    var gridline = {
        gridline: {
            type: "incised",
            color: axisGridlineColor,
            showLastLine: true
        }
    };

    var dual = {
        title: {
            applyAxislineColor: true
        }
    };

    var base = merge(background, legend, tooltip, plotArea);

    var horizontalEffect = {
        xAxis: merge(axis, hideAxisLine, gridline),
        yAxis: axis,
        xAxis2: merge(axis, hideAxisLine)
    };

    var horizontalDualEffect = merge(horizontalEffect, dual);

    var verticalEffect = {
        yAxis: merge(axis, hideAxisLine, gridline),
        xAxis: axis,
        yAxis2: merge(axis, hideAxisLine)
    };

    var verticalDualEffect = merge(verticalEffect, dual);

    //--------------------------------------------------------------
    var barEffect = merge(base, horizontalEffect);

    var bar3dEffect = merge(base, zAxis, horizontalEffect);

    var dualbarEffect = merge(base, horizontalDualEffect);

    var verticalbarEffect = merge(base, verticalEffect);

    var vertical3dbarEffect = merge(base, zAxis, verticalEffect);

    var dualverticalbarEffect = merge(base, verticalDualEffect);

    var stackedbarEffect = merge(base, horizontalEffect);

    var dualstackedbarEffect = merge(base, horizontalDualEffect);

    var stackedverticalbarEffect = merge(base, verticalEffect);

    var dualstackedverticalbarEffect = merge(base, verticalDualEffect);

    var lineEffect = merge(base, verticalEffect);

    var duallineEffect = merge(base, verticalDualEffect);

    var horizontallineEffect = merge(base, horizontalEffect);

    var dualhorizontallineEffect = merge(base, horizontalDualEffect);

    var combinationEffect = merge(base, verticalEffect);

    var dualcombinationEffect = merge(base, verticalDualEffect);

    var horizontalcombinationEffect = merge(base, horizontalEffect);

    var dualhorizontalcombinationEffect = merge(base, horizontalDualEffect);
    var bulletEffect =  {
            legend: {
                drawingEffect: "normal",
                title: {
                    visible: true
                }
            },
            tooltip: {
                drawingEffect: "normal"
            },
            plotArea: {
                drawingEffect: "normal",
                gridline:{
                    visible : true
                },
                background: {
                    border: {
                        top: {
                            visible: false
                        },
                        bottom: {
                            visible: false
                        },
                        left: {
                            visible: false
                        },
                        right: {
                            visible: false
                        }
                    },
                    drawingEffect: "normal"
                }
            },
          
            valueAxis : {
                title: {
                    visible: true
                },
                axisLine: {
                    visible: false
                },
                gridline: {
                    type: "line",
                    color: "#d8d8d8",
                    showLastLine: true
                },
                color: "#333333"
            },

            categoryAxis : {
                title: {
                    visible: true
                },
                gridline: {
                    color: "#d8d8d8"
                },
                color: "#333333"
            }
    };


    var bubbleEffect = merge(base, {
        yAxis: merge(axis, hideAxisLine, gridline),
        xAxis: axis
    });

    var pieEffect = merge(legend, plotArea, {
        background: {
            visible: false
        }
    });

    var pieWithDepthEffect = merge(pieEffect, tooltip);

    var radarEffect = merge(legend, tooltip, plotArea, {
        background: {
            visible: false
        },
        plotArea: {
            valueAxis: {
                title: {
                    visible: true
                },
                gridline: {
                    color: axisGridlineColor
                }
            }
        }
    });

    var mekkoEffect = merge(base, {
        yAxis: merge(axis, hideAxisLine, gridline),
        xAxis: merge(axis, showAxisLine),
        xAxis2: merge(axis, showAxisLine)
    });

    var horizontalmekkoEffect = merge(base, {
        xAxis: merge(axis, hideAxisLine, gridline),
        yAxis: merge(axis, showAxisLine),
        yAxis2: merge(axis, showAxisLine)
    });

    var treemapEffect = {
        legend: {
            title: {
                visible: true
            }
        }
    };

    var template = {
        id: "flashy",
        name: "Flashy",
        version: "4.0.0",
        properties: {
            'viz/bar': barEffect,
            'viz/3d_bar': bar3dEffect,
            'viz/image_bar': barEffect,
            'viz/multi_bar': barEffect,
            'viz/dual_bar': dualbarEffect,
            'viz/multi_dual_bar': dualbarEffect,
            'viz/column': verticalbarEffect,
            'viz/3d_column': vertical3dbarEffect,
            'viz/multi_column': verticalbarEffect,
            'viz/dual_column': dualverticalbarEffect,
            'viz/multi_dual_column': dualverticalbarEffect,
            'viz/stacked_bar': stackedbarEffect,
            'viz/multi_stacked_bar': stackedbarEffect,
            'viz/dual_stacked_bar': dualstackedbarEffect,
            'viz/multi_dual_stacked_bar': dualstackedbarEffect,
            'viz/100_stacked_bar': stackedbarEffect,
            'viz/multi_100_stacked_bar': stackedbarEffect,
            'viz/100_dual_stacked_bar': dualstackedbarEffect,
            'viz/multi_100_dual_stacked_bar': dualstackedbarEffect,
            'viz/stacked_column': stackedverticalbarEffect,
            'viz/multi_stacked_column': stackedverticalbarEffect,
            'viz/dual_stacked_column': dualstackedverticalbarEffect,
            'viz/multi_dual_stacked_column': dualstackedverticalbarEffect,
            'viz/100_stacked_column': stackedverticalbarEffect,
            'viz/multi_100_stacked_column': stackedverticalbarEffect,
            'viz/100_dual_stacked_column': dualstackedverticalbarEffect,
            'viz/multi_100_dual_stacked_column': dualstackedverticalbarEffect,
            'riv/cbar': merge(legend, tooltip, plotArea, {
                background: {
                    drawingEffect: "glossy"
                },
                yAxis: axis
            }),
            'viz/combination': combinationEffect,
            'viz/horizontal_combination': horizontalcombinationEffect,
            'viz/dual_combination': dualcombinationEffect,
            'viz/dual_horizontal_combination': dualhorizontalcombinationEffect,
            'viz/boxplot': merge(base, {
                yAxis: merge(axis, hideAxisLine, gridline),
                xAxis: axis
            }),
            'viz/horizontal_boxplot': merge(base, {
                xAxis: merge(axis, hideAxisLine, gridline),
                yAxis: axis
            }),
            'viz/waterfall': merge(base, {
                yAxis: merge(axis, hideAxisLine, gridline),
                xAxis: {
                    title: {
                        visible: true
                    },
                    color: axisColor
                }
            }),
            'viz/horizontal_waterfall': merge(base, {
                xAxis: merge(axis, hideAxisLine, gridline),
                yAxis: {
                    title: {
                        visible: true
                    },
                    color: axisColor
                }
            }),
            'viz/stacked_waterfall': stackedverticalbarEffect,
            'viz/horizontal_stacked_waterfall': stackedbarEffect,

            'viz/line': lineEffect,
            'viz/multi_line': lineEffect,
            'viz/dual_line': duallineEffect,
            'viz/multi_dual_line': duallineEffect,
            'viz/horizontal_line': horizontallineEffect,
            'viz/multi_horizontal_line': horizontallineEffect,
            'viz/dual_horizontal_line': dualhorizontallineEffect,
            'viz/multi_dual_horizontal_line': dualhorizontallineEffect,
            'viz/area': lineEffect,
            'viz/multi_area': lineEffect,
            'viz/100_area': lineEffect,
            'viz/multi_100_area': lineEffect,
            'viz/horizontal_area': horizontallineEffect,
            'viz/multi_horizontal_area': horizontallineEffect,
            'viz/100_horizontal_area': horizontallineEffect,
            'viz/multi_100_horizontal_area': horizontallineEffect,
            'viz/pie': pieEffect,
            'viz/multi_pie': pieEffect,
            'viz/donut': pieEffect,
            'viz/multi_donut': pieEffect,
            'viz/pie_with_depth': pieWithDepthEffect,
            'viz/donut_with_depth': pieWithDepthEffect,
            'viz/multi_pie_with_depth': pieWithDepthEffect,
            'viz/multi_donut_with_depth': pieWithDepthEffect,
            'viz/bubble': bubbleEffect,
            'viz/multi_bubble': bubbleEffect,
            'viz/scatter': bubbleEffect,
            'viz/multi_scatter': bubbleEffect,
            'viz/scatter_matrix': bubbleEffect,
            'viz/radar': radarEffect,
            'viz/multi_radar': radarEffect,
            'viz/tagcloud': {
                legend: {
                    title: {
                        visible: true
                    }
                }
            },
            'viz/heatmap': {
                legend: {
                    title: {
                        visible: true
                    }
                },
                xAxis: {
                    title: {
                        visible: true
                    },
                    color: axisColor
                },
                yAxis: {
                    title: {
                        visible: true
                    },
                    color: axisColor
                }
            },
            'viz/treemap': treemapEffect,
            'viz/mekko': mekkoEffect,
            'viz/100_mekko': mekkoEffect,
            'viz/horizontal_mekko': horizontalmekkoEffect,
            'viz/100_horizontal_mekko': horizontalmekkoEffect,
            'viz/number': {
                plotArea: {
                    valuePoint: {
                        label: {
                            fontColor: '#000000'
                        }
                    }
                }
            },

            // info charts
            'info/column': info(verticalbarEffect),
            'info/bar': info(barEffect),
            'info/line': info(lineEffect),
            'info/pie': info(pieEffect),
            'info/donut': info(pieEffect),
            'info/scatter': infoBubble(bubbleEffect),
            'info/bubble': infoBubble(bubbleEffect),
            'info/stacked_column': info(stackedverticalbarEffect),
            'info/stacked_bar': info(stackedbarEffect),
            'info/combination': info(combinationEffect),
            'info/stacked_combination': info(combinationEffect),
            'info/dual_stacked_combination': infoDual(dualcombinationEffect),
            'info/dual_column': infoDual(dualverticalbarEffect),
            'info/dual_line': infoDual(duallineEffect),
            'info/dual_bar': infoDual(dualbarEffect),
            'info/bullet' :bulletEffect,
            'info/vertical_bullet': bulletEffect,
            'info/trellis_bullet': bulletEffect,
            'info/trellis_vertical_bullet': bulletEffect,
            'info/100_stacked_column': info(stackedverticalbarEffect),
            'info/100_stacked_bar': info(stackedbarEffect),
            'info/horizontal_line': info(horizontallineEffect),
            'info/dual_horizontal_line': infoDual(dualhorizontallineEffect),
            'info/horizontal_combination': info(horizontalcombinationEffect),
            'info/horizontal_stacked_combination': info(horizontalcombinationEffect),
            'info/dual_horizontal_stacked_combination': infoDual(dualhorizontalcombinationEffect),
            'info/treemap': infoTreemap(treemapEffect),

            'info/trellis_column': info(verticalbarEffect),
            'info/trellis_bar': info(barEffect),
            'info/trellis_line': info(lineEffect),
            'info/trellis_pie': info(pieEffect),
            'info/trellis_donut': info(pieEffect),
            'info/trellis_scatter': infoBubble(bubbleEffect),
            'info/trellis_bubble': infoBubble(bubbleEffect),
            'info/trellis_stacked_column': info(stackedverticalbarEffect),
            'info/trellis_stacked_bar': info(stackedbarEffect),
            'info/trellis_combination': info(combinationEffect),
            'info/trellis_dual_column': infoDual(dualverticalbarEffect),
            'info/trellis_dual_line': infoDual(duallineEffect),
            'info/trellis_dual_bar': infoDual(dualbarEffect),
            'info/trellis_100_stacked_column': info(stackedverticalbarEffect),
            'info/trellis_100_stacked_bar': info(stackedbarEffect),
            'info/trellis_horizontal_line': info(horizontallineEffect),
            'info/trellis_dual_horizontal_line': infoDual(dualhorizontallineEffect),
            'info/trellis_horizontal_combination': info(horizontalcombinationEffect),

            'info/dual_stacked_bar': infoDual(dualstackedbarEffect),
            'info/100_dual_stacked_bar': infoDual(dualstackedbarEffect),
            'info/dual_stacked_column': infoDual(dualstackedverticalbarEffect),
            'info/100_dual_stacked_column': infoDual(dualstackedverticalbarEffect),
            'info/time_bubble': infoBubble(bubbleEffect)
        },
        //v-longtick must be set after v-categoryaxisline
        css: "\
            .v-m-main .v-background-body{fill:#eeeeee;}\
            .v-datapoint .v-boxplotmidline{stroke:#333333}\
            .v-longtick{stroke:#b3b3b3;}\
        "
    };
    sap.viz.extapi.env.Template.register(template);

    function info(obj) {
        var ret = merge(obj, {
            valueAxis: merge(hideInfoAxisLine, {
                title: {
                    visible: true
                },
                color: axisColor
            }),
            categoryAxis: axis,
            plotArea: merge(obj.plotArea, gridline)
        });
        general(ret);
        return ret;
    }

    function infoDual(obj) {
        var ret = merge(obj, {
            valueAxis: merge(hideInfoAxisLine, {
                title: {
                    visible: true,
                    applyAxislineColor: true
                }
            }),
            categoryAxis: axis,
            valueAxis2: merge(hideInfoAxisLine, {
                title: {
                    visible: true,
                    applyAxislineColor: true
                },
                gridline: {
                    color: axisGridlineColor
                }
            }),
            plotArea: merge(obj.plotArea, gridline)
        });
        general(ret);
        return ret;
    }

    function infoBubble(obj) {
        var ret = merge(obj, {
            valueAxis: merge(showInfoAxisLine, {
                title: {
                    visible: true
                },
                color: axisColor
            }),
            valueAxis2: merge(axis, hideInfoAxisLine),
            plotArea: merge(obj.plotArea, gridline),
            sizeLegend : {
                title:{
                  visible : true
                }
            }
        });
        general(ret);
        return ret;
    }

    function general(obj) {
        obj.plotArea = obj.plotArea || {};
        obj.plotArea.background = obj.background;
        delete obj.background;

        delete obj.xAxis;
        delete obj.xAxis2;
        delete obj.yAxis;
        delete obj.yAxis2;
        
    }

    function infoTreemap(obj) {
        obj = merge(background, obj);
        return info(obj);
    }
})();
