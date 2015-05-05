(function() {
    var toString = Object.prototype.toString;
    function isArray(it){
        return toString.call(it) === '[object Array]';
    }
    function isObject(it){
        return toString.call(it) === '[object Object]';
    }
    function _merge(a, b){
        for(var key in b){
            if(isArray(b[key])){
                a[key] = b[key].slice();
            }else if(isObject(b[key])){
                a[key] = a[key] || {};
                _merge(a[key], b[key]);
            }else{
                a[key] = b[key];
            }
        }
        return a;
    }
    function merge(){
        var res = {};
        for(var i = 0; i < arguments.length; ++i){
            _merge(res, arguments[i]);
        }
        return res;
    }

    var axisColor = "#333333";

    var background = {
        background: {
            border: {
                left: {
                    visible: false
                },

                right: {
                    visible: false
                },

                top: {
                    visible: false
                },

                bottom: {
                    visible: false
                }
            }
        }
    };

    var title = {
        title: {
            visible: false
        }
    };

    var tooltip = {
        tooltip: {
            visible: false
        }
    };

    var legend = {
        legend: {
            visible: false
        }
    };

    var interaction = {
        interaction: {
            selectability: {
                mode: "none"
            },
            enableMouseOver: false,
            enableMouseOut: false,
            enableMouseMove: false,
            enableHover: false
        }
    };

    var plotArea = {
        plotArea: {
            animation: {
                dataLoading: false,
                dataUpdating: false,
                resizing: false
            }
        }
    };

    var axis = {
        color: axisColor,
        label: {
            visible: true
        },
        axisline: {
            visible: true
        },
        enableLabelSelection: false
    };

    var horizontalEffect = {
        xAxis: axis,
        yAxis: axis,
        xAxis2: axis
    };

    var verticalEffect = {
        yAxis: axis,
        xAxis: axis,
        yAxis2: axis
    };

    var xyEffect = {
        xAxis: axis,
        yAxis: axis
    };

    var zAxis = {
        zAxis: axis
    };

    var multiAxisProperty = {
        color: axisColor,
        gridline: {
            color: axisColor
        },
        enableLabelSelection: false
    };

    var multiple = {
        rowAxis: multiAxisProperty,
        columnAxis: multiAxisProperty
    };

    var rotate = {
        rotate: {
            enableRotate: false
        }
    };

    var base = merge(background, title, tooltip, legend, interaction, plotArea, multiple);
    //-----------------------------------------------

    var ghost_properties_vertical_bar = merge(base, verticalEffect);

    var ghost_properties_horizontal_bar = merge(base, horizontalEffect);

    var ghost_properties_horizontal_3dbar = merge(base, xyEffect, zAxis, rotate);

    var ghost_properties_vertical_3dbar = merge(base, xyEffect, zAxis, rotate);

    var ghost_properties_horizontal_stackedbar = merge(base, horizontalEffect);

    var ghost_properties_vertical_stackedbar = merge(base, verticalEffect);

    var ghost_properties_horizontal_line = merge(base, horizontalEffect, {
        plotArea: {
            marker: {
                visible: false
            },
            tooltipVisble: false
        }
    });

    var ghost_properties_vertical_line = merge(base, verticalEffect, {
        plotArea: {
            marker: {
                visible: false
            }
        }
    });

    var ghost_properties_horizontal_combination = merge(base, horizontalEffect, {
        plotArea: {
            line: {
                marker: {
                    visible: false
                }
            },
            tooltipVisble: false
        }
    });

    var ghost_properties_vertical_combination = merge(base, verticalEffect, {
        plotArea: {
            line: {
                marker: {
                    visible: false
                }
            }
        }
    });

    var ghost_properties_bubble = merge(base, xyEffect, {
        sizeLegend: {
            visible: false
        }
    });

    var ghost_properties_scatter = merge(base, xyEffect);

    var ghost_properties_scattermatrix = merge(base, xyEffect, {
        xAxis: {
            gridline: {
                visible: false
            }
        },
        multiLayout: {
            plotTitle: {
                visible: false
            }
        }
    });

    var ghost_properties_heatmap = merge(base, xyEffect);

    var ghost_properties_treemap = merge(base);

    var ghost_properties_tagcloud = merge(base);

    var ghost_properties_pie = merge(base);

    var ghost_properties_donut = merge(base);

    var ghost_properties_pie_with_depth = merge(base, rotate);

    var ghost_properties_donut_with_depth = merge(base, rotate);

    var ghost_properties_radar = merge(base, {
        plotArea: {
            polarAxis: {
                title: {
                    visible: false
                }
            },
            valueAxis: {
                visible: true
            }
        }
    });

    var ghost_properties_vertical_boxplot = merge(base, verticalEffect);

    var ghost_properties_horizontal_boxplot = merge(base, horizontalEffect);

    var ghost_properties_vertical_waterfall = merge(base, verticalEffect);

    var ghost_properties_horizontal_waterfall = merge(base, horizontalEffect);

    var ghost_properties_mekko = merge(base, horizontalEffect);

    var ghost_properties_horizontal_mekko = merge(base, verticalEffect);

    var ghost_properties_network = merge(base, {
        plotArea: {
            draggable: false,
            label: {
                visible: false
            }
        }
    });

    var ghost_properties_tree = merge(base, {
        plotArea: {
            clickAble: false,
            label: {
                visible: false
            }
        }
    });

    sap.viz.extapi.env.Template.register({
        id: "incomplete_ghost",
        name: "Incomplete Ghost",
        version: "4.0.0",
        isGhost: true,
        properties: {
            'viz/bar': ghost_properties_horizontal_bar,
            'viz/image_bar': ghost_properties_horizontal_bar,
            'viz/multi_bar': ghost_properties_horizontal_bar,
            'viz/dual_bar': ghost_properties_horizontal_bar,
            'viz/multi_dual_bar': ghost_properties_horizontal_bar,
            'viz/column': ghost_properties_vertical_bar,
            'viz/multi_column': ghost_properties_vertical_bar,
            'viz/dual_column': ghost_properties_vertical_bar,
            'viz/multi_dual_column': ghost_properties_vertical_bar,
            'viz/stacked_bar': ghost_properties_horizontal_stackedbar,
            'viz/multi_stacked_bar': ghost_properties_horizontal_stackedbar,
            'viz/dual_stacked_bar': ghost_properties_horizontal_stackedbar,
            'viz/multi_dual_stacked_bar': ghost_properties_horizontal_stackedbar,
            'viz/100_stacked_bar': ghost_properties_horizontal_stackedbar,
            'viz/multi_100_stacked_bar': ghost_properties_horizontal_stackedbar,
            'viz/100_dual_stacked_bar': ghost_properties_horizontal_stackedbar,
            'viz/multi_100_dual_stacked_bar': ghost_properties_horizontal_stackedbar,
            'viz/stacked_column': ghost_properties_vertical_stackedbar,
            'viz/multi_stacked_column': ghost_properties_vertical_stackedbar,
            'viz/dual_stacked_column': ghost_properties_vertical_stackedbar,
            'viz/multi_dual_stacked_column': ghost_properties_vertical_stackedbar,
            'viz/100_stacked_column': ghost_properties_vertical_stackedbar,
            'viz/multi_100_stacked_column': ghost_properties_vertical_stackedbar,
            'viz/100_dual_stacked_column': ghost_properties_vertical_stackedbar,
            'viz/multi_100_dual_stacked_column': ghost_properties_vertical_stackedbar,
            'riv/cbar': ghost_properties_vertical_bar,

            'viz/3d_bar': ghost_properties_horizontal_3dbar,
            'viz/3d_column': ghost_properties_vertical_3dbar,

            'viz/combination': ghost_properties_vertical_combination,
            'viz/horizontal_combination': ghost_properties_horizontal_combination,
            'viz/dual_combination': ghost_properties_vertical_combination,
            'viz/dual_horizontal_combination': ghost_properties_horizontal_combination,

            'viz/boxplot': ghost_properties_vertical_boxplot,
            'viz/horizontal_boxplot': ghost_properties_horizontal_boxplot,

            'viz/waterfall': ghost_properties_vertical_waterfall,
            'viz/horizontal_waterfall': ghost_properties_horizontal_waterfall,

            'viz/stacked_waterfall': ghost_properties_vertical_waterfall,
            'viz/horizontal_stacked_waterfall': ghost_properties_horizontal_waterfall,

            'viz/line': ghost_properties_vertical_line,
            'viz/multi_line': ghost_properties_vertical_line,
            'viz/dual_line': ghost_properties_vertical_line,
            'viz/multi_dual_line': ghost_properties_vertical_line,
            'viz/horizontal_line': ghost_properties_horizontal_line,
            'viz/multi_horizontal_line': ghost_properties_horizontal_line,
            'viz/dual_horizontal_line': ghost_properties_horizontal_line,
            'viz/multi_dual_horizontal_line': ghost_properties_horizontal_line,

            'viz/area': ghost_properties_vertical_line,
            'viz/multi_area': ghost_properties_vertical_line,
            'viz/100_area': ghost_properties_vertical_line,
            'viz/multi_100_area': ghost_properties_vertical_line,
            'viz/horizontal_area': ghost_properties_horizontal_line,
            'viz/multi_horizontal_area': ghost_properties_horizontal_line,
            'viz/100_horizontal_area': ghost_properties_horizontal_line,
            'viz/multi_100_horizontal_area': ghost_properties_horizontal_line,

            'viz/pie': ghost_properties_pie,
            'viz/multi_pie': ghost_properties_pie,
            'viz/donut': ghost_properties_donut,
            'viz/multi_donut': ghost_properties_donut,

            'viz/pie_with_depth': ghost_properties_pie_with_depth,
            'viz/donut_with_depth': ghost_properties_donut_with_depth,

            'viz/bubble': ghost_properties_bubble,
            'viz/multi_bubble': ghost_properties_bubble,
            'viz/scatter': ghost_properties_scatter,
            'viz/multi_scatter': ghost_properties_scatter,
            'viz/scatter_matrix': ghost_properties_scattermatrix,

            'viz/radar': ghost_properties_radar,
            'viz/multi_radar': ghost_properties_radar,

            'viz/tagcloud': ghost_properties_tagcloud,

            'viz/heatmap': ghost_properties_heatmap,
            'viz/treemap': ghost_properties_treemap,
            'viz/mekko': ghost_properties_mekko,
            'viz/100_mekko': ghost_properties_mekko,
            'viz/horizontal_mekko': ghost_properties_horizontal_mekko,
            'viz/100_horizontal_mekko': ghost_properties_horizontal_mekko,

            'viz/network': ghost_properties_network,
            'viz/tree': ghost_properties_tree,
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
            'info/column': info(ghost_properties_vertical_bar),
            'info/bar': info(ghost_properties_horizontal_bar),
            'info/line': info(ghost_properties_vertical_line),
            'info/pie': infoPie(ghost_properties_pie),
            'info/donut': infoPie(ghost_properties_donut),
            'info/scatter': infoBubble(ghost_properties_scatter),
            'info/bubble': infoBubble(ghost_properties_bubble),
            'info/stacked_column': info(ghost_properties_vertical_stackedbar),
            'info/stacked_bar': info(ghost_properties_horizontal_stackedbar),
            'info/combination': info(ghost_properties_vertical_combination),
            'info/stacked_combination': info(ghost_properties_vertical_combination),
            'info/dual_stacked_combination': infoDual(ghost_properties_vertical_combination),
            'info/dual_column': infoDual(ghost_properties_vertical_bar),
            'info/dual_line': infoDual(ghost_properties_vertical_line),
            'info/dual_bar': infoDual(ghost_properties_horizontal_bar),
            'info/100_stacked_column': info(ghost_properties_vertical_stackedbar),
            'info/100_stacked_bar': info(ghost_properties_horizontal_stackedbar),
            'info/horizontal_line': info(ghost_properties_horizontal_line),
            'info/dual_horizontal_line': infoDual(ghost_properties_horizontal_line),
            'info/horizontal_combination': info(ghost_properties_horizontal_combination),
            'info/horizontal_stacked_combination': info(ghost_properties_horizontal_combination),
            'info/dual_horizontal_stacked_combination': infoDual(ghost_properties_horizontal_combination),
            'info/treemap': infoTreemap(ghost_properties_treemap),

            'info/trellis_column': info(ghost_properties_vertical_bar),
            'info/trellis_bar': info(ghost_properties_horizontal_bar),
            'info/trellis_line': info(ghost_properties_vertical_line),
            'info/trellis_pie': infoPie(ghost_properties_pie),
            'info/trellis_donut': infoPie(ghost_properties_donut),
            'info/trellis_scatter': infoBubble(ghost_properties_scatter),
            'info/trellis_bubble': infoBubble(ghost_properties_bubble),
            'info/trellis_stacked_column': info(ghost_properties_vertical_stackedbar),
            'info/trellis_stacked_bar': info(ghost_properties_horizontal_stackedbar),
            'info/trellis_combination': info(ghost_properties_vertical_combination),
            'info/trellis_dual_column': infoDual(ghost_properties_vertical_bar),
            'info/trellis_dual_line': infoDual(ghost_properties_vertical_line),
            'info/trellis_dual_bar': infoDual(ghost_properties_horizontal_bar),
            'info/trellis_100_stacked_column': info(ghost_properties_vertical_stackedbar),
            'info/trellis_100_stacked_bar': info(ghost_properties_horizontal_stackedbar),
            'info/trellis_horizontal_line': info(ghost_properties_horizontal_line),
            'info/trellis_dual_horizontal_line': infoDual(ghost_properties_horizontal_line),
            'info/trellis_horizontal_combination': info(ghost_properties_horizontal_combination),
            'info/trellis_dual_stacked_bar': infoDual(ghost_properties_horizontal_stackedbar),
            'info/trellis_dual_stacked_column': infoDual(ghost_properties_vertical_stackedbar),

            'info/dual_stacked_bar': infoDual(ghost_properties_horizontal_stackedbar),
            'info/100_dual_stacked_bar': infoDual(ghost_properties_horizontal_stackedbar),
            'info/dual_stacked_column': infoDual(ghost_properties_vertical_stackedbar),
            'info/100_dual_stacked_column': infoDual(ghost_properties_vertical_stackedbar),
            'info/time_bubble': infoBubble(ghost_properties_bubble),
            'info/bullet' : info(base),
            'info/vertical_bullet' : info(base),
            'info/trellis_bullet' : info(base),
            'info/trellis_vertical_bullet' : info(base)
        }
        // properties
    });

    function info(obj) {
        var ret = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                ret[i] = obj[i];
            }
        }

        ret.interaction = {
            selectability: {
                mode: "none",
                axisLabelSelection: false,
                legendSelection: false,
                plotLassoSelection: false,
                plotStdSelection: false
            }
        };

        ret.valueAxis = {
            color: axisColor,
            label: {
                visible: true
            },
            axisline: {
                visible: true
            }
        };

        ret.categoryAxis = {
            color: axisColor,
            label: {
                visible: true
            },
            axisline: {
                visible: true
            }
        };

        ret.plotArea = ret.plotArea || {};
        ret.plotArea.gridline = {
            color: "#efefef"
        };

        general(ret);
        return ret;
    }

    function infoDual(obj) {
        var ret = info(obj);

        ret.valueAxis2 = {
            color: axisColor,
            label: {
                visible: true
            },
            axisline: {
                visible: true
            }
        };

        general(ret);
        return ret;
    }

    function infoBubble(obj) {
        var ret = info(obj);

        delete ret.categoryAxis;

        ret.valueAxis2 = {
            color: axisColor,
            label: {
                visible: true
            },
            axisline: {
                visible: true
            }
        };

        general(ret);
        return ret;
    }

    function infoPie(obj) {
        var ret = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                ret[i] = obj[i];
            }
        }

        ret.interaction = {
            selectability: {
                mode: "none",
                axisLabelSelection: false,
                legendSelection: false,
                plotLassoSelection: false,
                plotStdSelection: false
            }
        };

        general(ret);
        return ret;
    }

    function general(obj) {
        obj.plotArea = obj.plotArea || {};
        obj.plotArea.background = obj.background || background;
        delete obj.background;

        delete obj.xAxis;
        delete obj.xAxis2;
        delete obj.yAxis;
        delete obj.yAxis2;
        delete obj.rowAxis;
        delete obj.columnAxis;
    }
    
    function infoTreemap(obj) {
        obj = merge(background, obj);
        return info(obj);
    }
})();
