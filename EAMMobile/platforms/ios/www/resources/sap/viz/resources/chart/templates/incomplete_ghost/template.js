(function(){var t=Object.prototype.toString;function c(i){return t.call(i)==='[object Array]'}function d(i){return t.call(i)==='[object Object]'}function _(a,b){for(var i in b){if(c(b[i])){a[i]=b[i].slice()}else if(d(b[i])){a[i]=a[i]||{};_(a[i],b[i])}else{a[i]=b[i]}}return a}function m(){var a={};for(var i=0;i<arguments.length;++i){_(a,arguments[i])}return a}var e="#333333";var f={background:{border:{left:{visible:false},right:{visible:false},top:{visible:false},bottom:{visible:false}}}};var g={title:{visible:false}};var h={tooltip:{visible:false}};var l={legend:{visible:false}};var j={interaction:{selectability:{mode:"none"},enableMouseOver:false,enableMouseOut:false,enableMouseMove:false,enableHover:false}};var p={plotArea:{animation:{dataLoading:false,dataUpdating:false,resizing:false}}};var k={color:e,label:{visible:true},axisline:{visible:true},enableLabelSelection:false};var n={xAxis:k,yAxis:k,xAxis2:k};var v={yAxis:k,xAxis:k,yAxis2:k};var x={xAxis:k,yAxis:k};var z={zAxis:k};var o={color:e,gridline:{color:e},enableLabelSelection:false};var q={rowAxis:o,columnAxis:o};var r={rotate:{enableRotate:false}};var s=m(f,g,h,l,j,p,q);var u=m(s,v);var w=m(s,n);var y=m(s,x,z,r);var A=m(s,x,z,r);var B=m(s,n);var C=m(s,v);var D=m(s,n,{plotArea:{marker:{visible:false},tooltipVisble:false}});var E=m(s,v,{plotArea:{marker:{visible:false}}});var F=m(s,n,{plotArea:{line:{marker:{visible:false}},tooltipVisble:false}});var G=m(s,v,{plotArea:{line:{marker:{visible:false}}}});var H=m(s,x,{sizeLegend:{visible:false}});var I=m(s,x);var J=m(s,x,{xAxis:{gridline:{visible:false}},multiLayout:{plotTitle:{visible:false}}});var K=m(s,x);var L=m(s);var M=m(s);var N=m(s);var O=m(s);var P=m(s,r);var Q=m(s,r);var R=m(s,{plotArea:{polarAxis:{title:{visible:false}},valueAxis:{visible:true}}});var S=m(s,v);var T=m(s,n);var U=m(s,v);var V=m(s,n);var W=m(s,n);var X=m(s,v);var Y=m(s,{plotArea:{draggable:false,label:{visible:false}}});var Z=m(s,{plotArea:{clickAble:false,label:{visible:false}}});sap.viz.extapi.env.Template.register({id:"incomplete_ghost",name:"Incomplete Ghost",version:"4.0.0",isGhost:true,properties:{'viz/bar':w,'viz/image_bar':w,'viz/multi_bar':w,'viz/dual_bar':w,'viz/multi_dual_bar':w,'viz/column':u,'viz/multi_column':u,'viz/dual_column':u,'viz/multi_dual_column':u,'viz/stacked_bar':B,'viz/multi_stacked_bar':B,'viz/dual_stacked_bar':B,'viz/multi_dual_stacked_bar':B,'viz/100_stacked_bar':B,'viz/multi_100_stacked_bar':B,'viz/100_dual_stacked_bar':B,'viz/multi_100_dual_stacked_bar':B,'viz/stacked_column':C,'viz/multi_stacked_column':C,'viz/dual_stacked_column':C,'viz/multi_dual_stacked_column':C,'viz/100_stacked_column':C,'viz/multi_100_stacked_column':C,'viz/100_dual_stacked_column':C,'viz/multi_100_dual_stacked_column':C,'riv/cbar':u,'viz/3d_bar':y,'viz/3d_column':A,'viz/combination':G,'viz/horizontal_combination':F,'viz/dual_combination':G,'viz/dual_horizontal_combination':F,'viz/boxplot':S,'viz/horizontal_boxplot':T,'viz/waterfall':U,'viz/horizontal_waterfall':V,'viz/stacked_waterfall':U,'viz/horizontal_stacked_waterfall':V,'viz/line':E,'viz/multi_line':E,'viz/dual_line':E,'viz/multi_dual_line':E,'viz/horizontal_line':D,'viz/multi_horizontal_line':D,'viz/dual_horizontal_line':D,'viz/multi_dual_horizontal_line':D,'viz/area':E,'viz/multi_area':E,'viz/100_area':E,'viz/multi_100_area':E,'viz/horizontal_area':D,'viz/multi_horizontal_area':D,'viz/100_horizontal_area':D,'viz/multi_100_horizontal_area':D,'viz/pie':N,'viz/multi_pie':N,'viz/donut':O,'viz/multi_donut':O,'viz/pie_with_depth':P,'viz/donut_with_depth':Q,'viz/bubble':H,'viz/multi_bubble':H,'viz/scatter':I,'viz/multi_scatter':I,'viz/scatter_matrix':J,'viz/radar':R,'viz/multi_radar':R,'viz/tagcloud':M,'viz/heatmap':K,'viz/treemap':L,'viz/mekko':W,'viz/100_mekko':W,'viz/horizontal_mekko':X,'viz/100_horizontal_mekko':X,'viz/network':Y,'viz/tree':Z,'viz/number':{plotArea:{valuePoint:{label:{fontColor:'#000000'}}}},'info/column':$(u),'info/bar':$(w),'info/line':$(E),'info/pie':c1(N),'info/donut':c1(O),'info/scatter':b1(I),'info/bubble':b1(H),'info/stacked_column':$(C),'info/stacked_bar':$(B),'info/combination':$(G),'info/stacked_combination':$(G),'info/dual_stacked_combination':a1(G),'info/dual_column':a1(u),'info/dual_line':a1(E),'info/dual_bar':a1(w),'info/100_stacked_column':$(C),'info/100_stacked_bar':$(B),'info/horizontal_line':$(D),'info/dual_horizontal_line':a1(D),'info/horizontal_combination':$(F),'info/horizontal_stacked_combination':$(F),'info/dual_horizontal_stacked_combination':a1(F),'info/treemap':e1(L),'info/trellis_column':$(u),'info/trellis_bar':$(w),'info/trellis_line':$(E),'info/trellis_pie':c1(N),'info/trellis_donut':c1(O),'info/trellis_scatter':b1(I),'info/trellis_bubble':b1(H),'info/trellis_stacked_column':$(C),'info/trellis_stacked_bar':$(B),'info/trellis_combination':$(G),'info/trellis_dual_column':a1(u),'info/trellis_dual_line':a1(E),'info/trellis_dual_bar':a1(w),'info/trellis_100_stacked_column':$(C),'info/trellis_100_stacked_bar':$(B),'info/trellis_horizontal_line':$(D),'info/trellis_dual_horizontal_line':a1(D),'info/trellis_horizontal_combination':$(F),'info/trellis_dual_stacked_bar':a1(B),'info/trellis_dual_stacked_column':a1(C),'info/dual_stacked_bar':a1(B),'info/100_dual_stacked_bar':a1(B),'info/dual_stacked_column':a1(C),'info/100_dual_stacked_column':a1(C),'info/time_bubble':b1(H),'info/bullet':$(s),'info/vertical_bullet':$(s),'info/trellis_bullet':$(s),'info/trellis_vertical_bullet':$(s)}});function $(a){var b={};for(var i in a){if(a.hasOwnProperty(i)){b[i]=a[i]}}b.interaction={selectability:{mode:"none",axisLabelSelection:false,legendSelection:false,plotLassoSelection:false,plotStdSelection:false}};b.valueAxis={color:e,label:{visible:true},axisline:{visible:true}};b.categoryAxis={color:e,label:{visible:true},axisline:{visible:true}};b.plotArea=b.plotArea||{};b.plotArea.gridline={color:"#efefef"};d1(b);return b}function a1(a){var b=$(a);b.valueAxis2={color:e,label:{visible:true},axisline:{visible:true}};d1(b);return b}function b1(a){var b=$(a);delete b.categoryAxis;b.valueAxis2={color:e,label:{visible:true},axisline:{visible:true}};d1(b);return b}function c1(a){var b={};for(var i in a){if(a.hasOwnProperty(i)){b[i]=a[i]}}b.interaction={selectability:{mode:"none",axisLabelSelection:false,legendSelection:false,plotLassoSelection:false,plotStdSelection:false}};d1(b);return b}function d1(a){a.plotArea=a.plotArea||{};a.plotArea.background=a.background||f;delete a.background;delete a.xAxis;delete a.xAxis2;delete a.yAxis;delete a.yAxis2;delete a.rowAxis;delete a.columnAxis}function e1(a){a=m(f,a);return $(a)}})();