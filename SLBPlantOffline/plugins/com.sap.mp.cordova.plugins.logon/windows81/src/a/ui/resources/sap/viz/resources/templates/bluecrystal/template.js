(function(){var a="#333333";var b="#d8d8d8";var p=["#5cbae6","#b6d957","#fac364","#8cd3ff","#d998cb","#fade64","#93b9c6","#d9d6c7","#52bacc","#dce65c","#98aafb"];var r={sliderStyle:{borderColor:"#d8d8d8",highlightBorderColor:"#707070"},tooltipStyle:{fontColor:"#000000",borderColor:"#bebebe",highlightBorderColor:"#748cb2",backgroundColor:"#f4f3f4"},thumbStyle:{indicatorStartColor:"#fbfbfb",indicatorEndColor:"#cccccc",indicatorPressStartColor:"#e8e8e8",indicatorPressEndColor:"#a4a4a4",indicatorBorderStartColor:"#878787",indicatorBorderEndColor:"#474747",indicatorPressBorderStartColor:"#878787",indicatorPressBorderEndColor:"#474747",indicatorInternalLineColor:"#000000",subRectBorderColor:"#707070",subRectColor:"#bbbbbb",rectOpacity:0.2,rectColor:'#009de0',rectPressOpacity:0.48,rectPressColor:"#636363",},};var c={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal",},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},xAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},color:a,},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,},plotArea:{drawingEffect:"normal","colorPalette":p},};var d={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal",},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},xAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},color:a,},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,},plotArea:{drawingEffect:"normal","colorPalette":p},zAxis:{title:{visible:true},color:a}};var e={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal",},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},xAxis:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{color:b,},},plotArea:{drawingEffect:"normal","colorPalette":p},};var v={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p},yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},color:a,},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,},rangeSlider:r};var f={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p},yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},color:a,},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,},zAxis:{title:{visible:true},color:a}};var g={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p},yAxis:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{color:b,},},};var s={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p},xAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},color:a,},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,}};var h={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p},xAxis:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{color:b,},}};var j={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p},yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},color:a,},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,}};var k={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p},yAxis:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{color:b,},}};var l={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p},yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},color:a,},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,},rangeSlider:r};var m={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p},yAxis:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{color:b,},}};var n={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p},xAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},color:a,},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,}};var o={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p},xAxis:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{color:b,},}};var q={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p},yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},color:a,},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,},rangeSlider:r};var t={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p},yAxis:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},yAxis2:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{color:b,},}};var u={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p},xAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},color:a,},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,},axisline:{visible:false,},gridline:{color:b,},color:a,}};var w={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p},xAxis:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,applyAxislineColor:true,},axisline:{visible:false,},gridline:{color:b,},}};var x={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},plotArea:{drawingEffect:"normal","colorPalette":p},yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},color:a,},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},};var y={legend:{drawingEffect:"normal",title:{visible:true},},plotArea:{drawingEffect:"normal","colorPalette":p}};var z={legend:{drawingEffect:"normal",title:{visible:true},},plotArea:{drawingEffect:"normal","colorPalette":p}};var A={background:{visible:false,},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p,valueAxis:{title:{visible:true,},gridline:{color:b,}},dataline:{fill:{transparency:0,},},},};var B={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal",},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,},color:a,},xAxis:{title:{visible:true,},axisline:{visible:true,},gridline:{color:b,},color:a,},xAxis2:{title:{visible:true,},axisline:{visible:true},gridline:{color:b,},color:a,},plotArea:{drawingEffect:"normal","colorPalette":p},};var C={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal",},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},xAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,},color:a,},yAxis:{title:{visible:true,},gridline:{color:b,},axisline:{visible:true,},color:a,},yAxis2:{title:{visible:true,},axisline:{visible:true,},gridline:{color:b,},color:a,},plotArea:{drawingEffect:"normal","colorPalette":p},};sap.viz.extapi.env.Template.register({id:"bluecrystal",name:"BlueCrystal",version:"4.0.0",properties:{'viz/bar':c,'viz/3d_bar':d,'viz/image_bar':c,'viz/multi_bar':c,'viz/dual_bar':e,'viz/multi_dual_bar':e,'viz/column':v,'viz/3d_column':f,'viz/multi_column':v,'viz/dual_column':g,'viz/multi_dual_column':g,'viz/stacked_bar':s,'viz/multi_stacked_bar':s,'viz/dual_stacked_bar':h,'viz/multi_dual_stacked_bar':h,'viz/100_stacked_bar':s,'viz/multi_100_stacked_bar':s,'viz/100_dual_stacked_bar':h,'viz/multi_100_dual_stacked_bar':h,'viz/stacked_column':j,'viz/multi_stacked_column':j,'viz/dual_stacked_column':k,'viz/multi_dual_stacked_column':k,'viz/100_stacked_column':j,'viz/multi_100_stacked_column':j,'viz/100_dual_stacked_column':k,'viz/multi_100_dual_stacked_column':k,'riv/cbar':{background:{drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},plotArea:{drawingEffect:"normal","colorPalette":p},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},},'viz/combination':q,'viz/horizontal_combination':u,'viz/dual_combination':t,'viz/dual_horizontal_combination':w,'viz/boxplot':{background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},color:a,},xAxis:{title:{visible:true,},gridline:{color:b,},color:a,},plotArea:{drawingEffect:"normal","colorPalette":p}},'viz/horizontal_boxplot':{background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},xAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},color:a,},yAxis:{title:{visible:true,},gridline:{color:b,},color:a,},plotArea:{drawingEffect:"normal","colorPalette":p}},'viz/waterfall':{background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},yAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showFirstLine:true,},color:a,},xAxis:{title:{visible:true,},color:a,},plotArea:{drawingEffect:"normal","colorPalette":p}},'viz/horizontal_waterfall':{background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal"},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},xAxis:{title:{visible:true,},axisline:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},color:a,},yAxis:{title:{visible:true,},color:a,},plotArea:{drawingEffect:"normal","colorPalette":p}},'viz/stacked_waterfall':j,'viz/horizontal_stacked_waterfall':s,'viz/line':l,'viz/multi_line':l,'viz/dual_line':m,'viz/multi_dual_line':m,'viz/horizontal_line':n,'viz/multi_horizontal_line':n,'viz/dual_horizontal_line':o,'viz/multi_dual_horizontal_line':o,'viz/area':l,'viz/multi_area':l,'viz/100_area':l,'viz/multi_100_area':l,'viz/horizontal_area':n,'viz/multi_horizontal_area':n,'viz/100_horizontal_area':n,'viz/multi_100_horizontal_area':n,'viz/pie':y,'viz/multi_pie':y,'viz/donut':y,'viz/multi_donut':y,'viz/pie_with_depth':z,'viz/donut_with_depth':z,'viz/multi_pie_with_depth':z,'viz/multi_donut_with_depth':z,'viz/bubble':x,'viz/multi_bubble':x,'viz/scatter':x,'viz/multi_scatter':x,'viz/scatter_matrix':x,'viz/radar':A,'viz/multi_radar':A,'viz/tagcloud':{legend:{title:{visible:true},},},'viz/heatmap':{legend:{title:{visible:true},},xAxis:{title:{visible:true,},color:a,},yAxis:{title:{visible:true,},color:a,},},'viz/treemap':{legend:{title:{visible:true},}},'viz/mekko':B,'viz/100_mekko':B,'viz/horizontal_mekko':C,'viz/100_horizontal_mekko':C,'viz/number':{plotArea:{"colorPalette":p,valuePoint:{label:{fontColor:'#000000'}}}},'info/line':D(l),'info/dual_line':E(m),'info/horizontal_line':D(n),'info/dual_horizontal_line':E(o),'info/bar':D(c),'info/dual_bar':E(e),'info/column':D(v),'info/dual_column':E(g),'info/stacked_bar':D(s),'info/dual_stacked_bar':E(h),'info/100_stacked_bar':D(s),'info/100_dual_stacked_bar':E(h),'info/stacked_column':D(j),'info/dual_stacked_column':E(k),'info/100_stacked_column':D(j),'info/100_dual_stacked_column':E(k),'info/bubble':F(x),'info/scatter':F(x),'info/time_bubble':F(x),'info/pie':D(y),'info/donut':D(y),'info/combination':D(q),'info/bullet':{background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},},drawingEffect:"normal",},legend:{drawingEffect:"normal",title:{visible:true},},tooltip:{drawingEffect:"normal"},valueAxis:{title:{visible:true,},axisLine:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},color:a,},categoryAxis:{title:{visible:true,},gridline:{color:b,},color:a,},plotArea:{drawingEffect:"normal","colorPalette":p}}},css:".v-datapoint .v-boxplotmidline{stroke:#333333}\
         .v-longtick{stroke:#b3b3b3;}"});function D(H){var I={};for(var i in H){if(H.hasOwnProperty(i)){I[i]=H[i]}}I.valueAxis={title:{visible:true,},axisLine:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},color:a,};I.categoryAxis={title:{visible:true,},gridline:{color:b,},color:a,};G(I);return I}function E(H){var I={};for(var i in H){if(H.hasOwnProperty(i)){I[i]=H[i]}}I.valueAxis={title:{visible:true,applyAxislineColor:true,},axisLine:{visible:false,},gridline:{type:"line",color:b,showLastLine:true,},},I.categoryAxis={title:{visible:true,},gridline:{color:b,},color:a,},I.valueAxis2={title:{visible:true,applyAxislineColor:true,},axisLine:{visible:false,},gridline:{color:b,},};G(I);return I}function F(H){var I={};for(var i in H){if(H.hasOwnProperty(i)){I[i]=H[i]}}I.valueAxis={title:{visible:true,},axisLine:{visible:true,},gridline:{type:"line",color:b,showLastLine:true,},color:a,};I.valueAxis2={title:{visible:true,},axisLine:{visible:false,},gridline:{color:b,},color:a,};G(I);return I}function G(i){i.plotArea.background=i.background;delete i.background;delete i.xAxis;delete i.xAxis2;delete i.yAxis;delete i.yAxis2}})();