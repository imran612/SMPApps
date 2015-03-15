/*
 * Copyright 2014 Jabil
 */

jQuery.sap.declare("com.jabil.maestro.mob.util.MainViewHelper");
//*****************************************************************************************************************************************
//                                                    MainView Helper
//*************************************************************************************************************************************
/*
 * These methods are used for loading chart data for OTD and LTC charts.
 * This method loads the ata from data source system and and update the charts
 */

function initializeDailyOTDChart(){
    $('#dailyOTDChart').highcharts({
                                   chart: {
                                    type: 'pie'
                                   },
                                   title: {
                                    text: '',
                                    margin:0
                                   },
                                   credits :{enabled: false},
                                    plotOptions: {
                                    pie: {
                                    shadow: false
                                   }
                                   },
                                   tooltip: {
                                   formatter: function() {
                                   return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                                   }
                                   },
                                   series: [{
                                            size: '100%',
                                            innerSize: '90%',
                                            data: [{
                                                   name: 'Daily',
                                                   color: '#00ab73',
                                                   dataLabels: {
                                                   enabled: false,
                                                   padding: 0,
                                                   format: '{y}%',
                                                   color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || '#00ab73',
                                                   style: {
                                                   fontSize: '100px',
                                                   fontWeight: 'bold',
                                                   fontFamily: 'sans-serif'
                                                   }
                                                   }
                                                   }, {
                                                   name: 'Missed', 
                                                   color: 'gray',
                                                   dataLabels: {
                                                   enabled: false
                                                   }
                                                   }],
                                            showInLegend: false
                                        }]
                                   });
}
function loadDailyOTDChart(){
    if($("#dailyOTDChart").highcharts() == null){
        initializeDailyOTDChart();
    }
    var chart = $("#dailyOTDChart").highcharts();
    if(chart.noDataLabel !=null){
        chart.noDataLabel.textSetter(i18nModel.getResourceBundle().getText("LoadingData"));
    }
    busyDialog.open();
    var dailyOTDModel = new sap.ui.model.json.JSONModel();
    dailyOTDModel.loadData(getDataEndPoint("dailyOTDChart",dateToString(new Date(),'yyyyMMdd')));
    dailyOTDModel.attachRequestCompleted(function(){
                                         // Set data to the chart
                                         if(dailyOTDModel.getData().d != undefined){
                                         var dailyOTD = parseInt(dailyOTDModel.getData().d.results[0].PERCENTSHIPBYFCD) ;
                                         var dailyOTDMiss = 100-dailyOTD;
                                         //set the model data to chart
                                         chart.series[0].setData([[i18nModel.getResourceBundle().getText("DailyOTDLG"),parseFloat(dailyOTD)],[i18nModel.getResourceBundle().getText("MissedOTDLG"),dailyOTDMiss]]);
                                         }
                                         if(chart.noDataLabel !=null){
                                         chart.noDataLabel.textSetter(i18nModel.getResourceBundle().getText("NoData"));
                                         }
                                         $('#otdTxt').text(dailyOTD+"%");
                                         busyDialog.close();
                                         });
    
    dailyOTDModel.attachRequestFailed(function(){
                                      if(chart.noDataLabel !=null){
                                      chart.noDataLabel.textSetter(i18nModel.getResourceBundle().getText("NoData"));
                                      }
                                      handleRequestFailed();
                                      });
    
}

function initWeeklyOTDChart(){
    $('#weeklyOTDChart').highcharts({
                                    chart: {
                                        type: 'line'
                                    },
                                    title: {
                                        text: i18nModel.getResourceBundle().getText("WeeklyChartHD"),
                                        style: {"color":"#000","fontSize":"15px"},
                                        margin : 0
                                    },
                                    credits: {enabled:false},
                                    xAxis: {
                                        categories: [],
                                        gridLineWidth:1,
                                        lineWidth:0,
                                        tickLength: 0,
                                        labels: {
                                        style: {
                                            fontSize: '15px',
                                            fontWeight: 'bold'
                                            }
                                        }
                                    },
                                    yAxis: {
                                            title: {
                                                text: ''
                                            },
                                            gridLineWidth: 0,
                                            tickLength: 0,
                                            tickWidth: 1,
                                            tickPosition: 'outside',
                                            labels: {
                                                    align: 'right',
                                                    x:-10,
                                                    y:5,
                                                    enabled: false
                                            },
                                            lineWidth:0,
                                        },
                                    plotOptions: {
                                        line: {
                                        dataLabels: {
                                            enabled: true,
                                            inside: true,
                                            padding: 10,
                                            format: '{y}%',
                                            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || '#00ab73',
                                            style: {
                                                fontSize: '15px',
                                                fontWeight: 'bold',
                                                fontFamily: 'sans-serif'
                                            }
                                        },
                                        lineWidth: 4,
                                        marker: {
                                            enabled: true,
                                            radius: 6,
                                            fillColor: '#fff',
                                            lineWidth: 3
                                        },
                                        enableMouseTracking: true
                                        }
                                    },
                                    tooltip: {
                                    valueSuffix: '%'
                                    },
                                    legend: {
                                        itemDistance: 10,
                                        symbolWidth: 1,
                                        symbolHeight: 1,
                                        symbolPadding: 5,
                                        itemStyle: {
                                            fontSize: '12px',
                                            fontFamily: 'sans-serif'
                                        },
                                        symbolWidth: 10
                                    },
                                    series: [{
                                                name: i18nModel.getResourceBundle().getText("WeeklyLG"),
                                                data: [],
                                                color: '#00ab73',
                                                marker: {
                                                    lineColor: '#00ab73'
                                                }

                                             }, {
                                                name: i18nModel.getResourceBundle().getText("CUSTLG"),
                                                data: [],
                                                color: '#8a8a8a',
                                                marker: {
                                                    lineColor: '#8a8a8a'
                                                },
                                                dataLabels: {
                                                    color: '#8a8a8a',
                                                    distance: '80px'
                                                }
                                             }]
                                    });
}
function initAchOTDChart(){
    $('#achivableOTDChart').highcharts({
                                       chart: {
                                            type: 'column'
                                       },
                                       title: {
                                            text: i18nModel.getResourceBundle().getText("AchievableChartHD"),
                                            style: {"color":"#000","fontSize":"15px"},
                                            margin : 0
                                       },
                                       credits: {
                                                enabled:false
                                        },
                                       xAxis: {
                                        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                                        lineWidth:0,
                                        tickLength: 0,
                                        labels: {
                                            style: {
                                                    fontSize: '15px',
                                                    fontWeight: 'bold'
                                                    }
                                                }
                                       },
                                       yAxis: {
                                            min: 0,
                                            max: 100,
                                            title: {
                                                text: ''
                                            },
                                            gridLineWidth: 0,
                                            tickLength: 0,
                                            tickWidth: 1,
                                            tickPosition: 'outside',
                                            labels: {
                                                align: 'right',
                                                x:-10,
                                                y:5,
                                            enabled: false
                                        },
                                            lineWidth:0,
                                        },
                                       
                                       tooltip: {
                                                enabled:false
                                                },
                                       plotOptions: {
                                                    column: {
                                                        pointPadding: 0.13,
                                                        borderWidth: 0,
                                                        borderColor: '#127950',
                                                        borderRadius: '0',
                                                        groupPadding: 0,
                                                        shadow: false,
                                                        stacking:true,
                                                    }
                                                },
                                       series: [{
                                                    data: [100, 100, 100, 100, 100],
                                                    color: "#f2f2f2",
                                                    animation:false,
                                                    states: {
                                                        hover: {
                                                        enabled: false
                                                        }
                                                      },
                                                showInLegend: false

                                                }, {
                                                    data: [],
                                                    color: "#00ab74",
                                                    animation: true,
                                                    dataLabels: {
                                                        enabled: true,
                                                        inside: true,
                                                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                                                    style: {
                                                        textShadow: '0 0 2px #00754f, 0 0 2px #00754f',
                                                        fontSize: '26px',
                                                        fontWeight: 'bold',
                                                        fontFamily: 'sans-serif'
                                                    }
                                                },
                                                showInLegend: false

                                        }]
                                    });
}


function loadWeeklyOTDChart(inputDate){
    if($("#weeklyOTDChart").highcharts() == null){
        initWeeklyOTDChart();
    }
    var chart = $("#weeklyOTDChart").highcharts();
    if(chart.noDataLabel !=null){
        chart.noDataLabel.textSetter(i18nModel.getResourceBundle().getText("LoadingData"));
    }
    busyDialog.open();
    var weeklyOTDModel = new sap.ui.model.json.JSONModel();
    weeklyOTDModel.loadData(getDataEndPoint(selectedChart,inputDate));
    weeklyOTDModel.attachRequestCompleted(function(){
                                          if(weeklyOTDModel != null){
                                          // Sort variable for graph
                                          // To calculate weekly OTD %
                                          var weeklyOTDByPOModel = new sap.ui.model.json.JSONModel();
                                          weeklyOTDByPOModel.loadData(getDataEndPoint("weeklyOTDByPO",inputDate));
                                          weeklyOTDByPOModel.attachRequestCompleted(
                                                                                    function(){
                                                                                    // Check both models are not null before filling table
                                                                                    var chartData=[];
                                                                                    var catData=[];
                                                                                    var weeklyData=[];
                                                                                    var poData = [];
                                                                                    var date = new Date();
                                                                                    if(weeklyOTDModel.getData().d != undefined && weeklyOTDByPOModel.getData().d != undefined){
                                                                                    $.each(weeklyOTDModel.getData().d.results, function(idx, objWeekly) {
                                                                                           if(!(objWeekly.ORIGFCDNUM >=(date.getDay()-1) && getWeekStartDate(true,true) == inputDate)) {
                                                                                           $.each(weeklyOTDByPOModel.getData().d.results, function(idx, objWeeklyPO) {
                                                                                                  if(objWeekly.ORIGFCDNUM==objWeeklyPO.ORIGFCDNUM){
                                                                                                  chartData.push({ORIGFCDNUM: objWeekly.ORIGFCDNUM, DAY: objWeekly.DAY.substring(0,3), SHIPBYFCD: objWeekly.SHIPBYFCD,BYPOSHIPBYFCD: objWeeklyPO.SHIPBYFCD});
                                                                                                  return false;
                                                                                                  }
                                                                                                  });
                                                                                           }
                                                                                           });
                                                                                    }
                                                                                    var chartData1 = sortChartArray(chartData);
                                                                                    $.each(chartData1,function(id,obj){
                                                                                           catData.push(obj.DAY);
                                                                                           weeklyData.push(parseInt(obj.SHIPBYFCD));
                                                                                           poData.push(parseInt(obj.BYPOSHIPBYFCD));
                                                                                           });
                                                                                    chart.yAxis[0].max = Math.round(Math.max.apply(weeklyData,poData)/10)*10+10;
                                                                                    chart.yAxis[0].min = Math.round(Math.min.apply(weeklyData,poData)/10)*10-10;
                                                                                    chart.xAxis[0].categories=catData;
                                                                                    chart.series[0].setData(weeklyData);
                                                                                    chart.series[1].setData(poData);
                                                                                    if(chart.noDataLabel !=null){
                                                                                    chart.noDataLabel.textSetter(i18nModel.getResourceBundle().getText("NoData"));
                                                                                    }
                                                                                    busyDialog.close();
                                                                                    
                                                                                    });
                                          }
                                          });
    weeklyOTDModel.attachRequestFailed(function(){
                                       if(chart.noDataLabel !=null){
                                       chart.noDataLabel.textSetter(i18nModel.getResourceBundle().getText("NoData"));
                                       }
                                       handleRequestFailed();
                                       });
}

function loadAchOTDChart(inputDate){
    if($("#achivableOTDChart").highcharts() == null){
        initAchOTDChart();
    }
    var chart = $("#achivableOTDChart").highcharts();
    if(chart.noDataLabel !=null){
        chart.noDataLabel.textSetter(i18nModel.getResourceBundle().getText("LoadingData"));
    }
    busyDialog.open();
    
    //Achivable
    var achivableOTDModel = new sap.ui.model.json.JSONModel();
    achivableOTDModel.loadData(getDataEndPoint(selectedChart,inputDate));
    //chart.setBusy(true);
    achivableOTDModel.attachRequestCompleted(function(){
                                             // Load the chart data
                                             var catData=[];
                                             var achData=[];
                                             if(achivableOTDModel.getData().d != undefined){
                                             var chartData = sortChartArray(achivableOTDModel.getData().d.results);
                                             $.each(chartData, function(idx, obj) {
                                                    catData.push(obj.DAY.substring(0,3));
                                                    achData.push(parseInt(obj.SHIPBYFCD));
                                                    });
                                             }
                                             chart.xAxis[0].categories=catData;
                                             chart.series[1].setData(achData);
                                             if(chart.noDataLabel !=null){
                                                chart.noDataLabel.textSetter(i18nModel.getResourceBundle().getText("NoData"));
                                             }
                                             busyDialog.close();
                                             });
    achivableOTDModel.attachRequestFailed(function(){
                                          if(chart.noDataLabel !=null){
                                          chart.noDataLabel.textSetter(i18nModel.getResourceBundle().getText("NoData"));
                                          }
                                          handleRequestFailed();
                                          });
}

function sortChartArray(inputArray){
    var outputArray=[];
    for(var i=0;i<inputArray.length;i++){
        $.each(inputArray,function(id,obj){
               if(parseInt(obj.ORIGFCDNUM)==i){
               outputArray.push(obj);
               }	
               });
    }
    return outputArray;
}

function loadSites(){
    //Call the site data and create the site dialog
    if (sap.ui.getCore().getModel("siteModel")== null){
    var siteModel = new sap.ui.model.json.JSONModel();
    siteModel.loadData(getDataEndPoint("siteModel",""));
    siteModel.attachRequestCompleted(function(){
                                     if(siteModel.getData().d!= null){
                                        sap.ui.getCore().setModel(siteModel,"siteModel");
                                        $.each(siteModel.getData().d.results,function(id,obj){
                                            if(obj.PLANTCD == userSite){
                                                userSiteTxt = obj.PLANTID;
                                               sap.ui.getCore().byId("siteDDButton").setText(userSiteTxt);
                                            }
                                        });
                                     }
                                     });
    siteModel.attachRequestFailed(function(){
                                  handleRequestFailed();
                                  });
    }
}
function initializeLTCChart(){
    $('#ltcChart').highcharts({
                              chart: {
                              type: 'pie'
                              },
                              title: {
                                text: i18nModel.getResourceBundle().getText("LTCChartHD"),
                                style: {"color":"#000","fontSize":"15px"},
                                margin:0
                              },
                              credits :{enabled: false},
                                plotOptions: {
                                    pie: {
                                    shadow: false
                                }
                              },
                              tooltip: {
                                formatter: function() {
                                return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                                }
                              },
                              series: [{
                                       size: '100%',
                                       innerSize: '90%',
                                       data: [{
                                              name: 'PFLT',
                                              color: '#E38000',
                                              dataLabels: {
                                              enabled: false,
                                              padding: 0,
                                              format: '{y}%',
                                              color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || '#00ab73',
                                              style: {
                                              fontSize: '100px',
                                              fontWeight: 'bold',
                                              fontFamily: 'sans-serif'
                                              }
                                              }
                                              }, {
                                              name: 'Missed',
                                              color: 'gray',
                                              dataLabels: {
                                              enabled: false
                                              }
                                              }],
                                       showInLegend: false
                                       }]
                              });
}
function loadLTCChart(date,selection){
    if($("#ltcChart").highcharts() ==null){
        initializeLTCChart();
    }
    var chart = $("#ltcChart").highcharts();
    if(chart.noDataLabel !=null){
        chart.noDataLabel.textSetter(i18nModel.getResourceBundle().getText("LoadingData"));
    }
    busyDialog.open();
    var ltcModel = new sap.ui.model.json.JSONModel();
    ltcModel.loadData(getDataEndPoint("ltcChart",date,selection));
    ltcModel.attachRequestCompleted(function(){
                                    // Set data to the chart
                                    if(ltcModel.getData().d != undefined){
                                    var ltc = parseInt(ltcModel.getData().d.results[0].PERCENTSHIPBYPFLT) ;
                                    var ltcMiss = 100-ltc;
                                    //set the model data to chart
                                    chart.series[0].setData([[i18nModel.getResourceBundle().getText("PFLT"),ltc],[i18nModel.getResourceBundle().getText("MissedPFLT"),ltcMiss]]);
                                    var header = selection==""?i18nModel.getResourceBundle().getText("LTCChartHD"):i18nModel.getResourceBundle().getText("LTCChartHD")+" : "+selection;
                                    chart.title.textSetter(header);
                                    }
                                    /*if(chart.noDataLabel !=null){
                                        chart.noDataLabel.textSetter(i18nModel.getResourceBundle().getText("LoadingData"));
                                    }*/
                                    $('#ltcTxt').text(ltc+"%");

                                    busyDialog.close();
                                    });
    
    ltcModel.attachRequestFailed(function(){
                                 if(chart.noDataLabel !=null){
                                 chart.noDataLabel.textSetter(i18nModel.getResourceBundle().getText("LoadingData"));
                                 }
                                 handleRequestFailed();
                                 });
    
}
function loadTabImages(){
    new sap.m.Image("otdBtImg",{src:"img/main/icon-otd-pg.png"}).placeAt("otdBtDiv");
    new sap.m.Image("osBtImg",{src:"img/main/icon-os-pg.png"}).placeAt("osBtDiv");
    new sap.m.Image("ltcBtImg",{src:"img/main/icon-ltc-pg.png"}).placeAt("ltcBtDiv");
    //if internal user show mat shortages
    if(isInternalUser){
        new sap.m.Image("msBtImg",{src:"img/main/icon-ms-pg.png"}).placeAt("msBtDiv");
        $("#msBt").tap(function(){ selectTab("msBt",false);});
    }
    //attach event to tabs
    $("#otdBt").tap(function(){ selectTab("otdBt",false);});
    $("#osBt").tap(function(){ selectTab("osBt",false);});
    $("#ltcBt").tap(function(){ selectTab("ltcBt",false);});
    
}


function selectTab(id,onLoad){
    if(onLoad || (selView != id)){
        busyDialog.open();
        //prev tab style change if selView is not null or blank
        if(!onLoad){
            var prevImg = sap.ui.getCore().byId(selView+"Img");
            prevImg.setSrc(prevImg.getSrc().substring(0,prevImg.getSrc().length-11)+".png");
            $("#"+selView).removeClass(selView+"ActiveStyle");
            $("#"+selView+"Txt").removeClass("tabTxtActiveStyle");
            //hide the prev tab content
            sap.ui.getCore().byId(selView+"Content").setVisible(false);
        }
        //set the new button active
        selView=id;
        $("#"+id).addClass(selView+"ActiveStyle");
        $("#"+id+"Txt").addClass("tabTxtActiveStyle");
        var img = sap.ui.getCore().byId(id+"Img");
        img.setSrc(img.getSrc().substring(0,img.getSrc().length-4)+"-active.png");
        //activate tab content
        //make new tab content visible
        sap.ui.getCore().byId(id+"Content").setVisible(true);
        //hide MS detail content when browign between tabs
        if(isInternalUser){
            sap.ui.getCore().byId("msDetContent").setVisible(false);
        }
        
        //Initialize the content of the new tab
        switch(id){
            case "otdBt" : {
                $("#mainPageHD").text("OTD");
                sap.ui.getCore().byId("navToolbar").setVisible(true);
                if(selectedChart == "dailyOTDChart"){
                    sap.ui.getCore().byId("lastWeek").setVisible(false);
                    sap.ui.getCore().byId("thisWeek").setVisible(false);
                }else{
                    sap.ui.getCore().byId("lastWeek").setVisible(true);
                    sap.ui.getCore().byId("thisWeek").setVisible(true);
                }
                if($("#dailyOTDChart").highcharts()== null){
                    setTimeout(function(){loadDailyOTDChart();},1);
                }
                break;
            }
            case "msBt" :{
                $("#mainPageHD").text("Material Shortages");
                sap.ui.getCore().byId("navToolbar").setVisible(false);
                if(sap.ui.getCore().byId("materialList")==null || sap.ui.getCore().byId("materialList").getItems().length==0){
                    loadMaterialShortagesList();
                }
                break;
            }
            case "osBt" :{
                $("#mainPageHD").text("Order Status");
                sap.ui.getCore().byId("navToolbar").setVisible(false);
                break;
            }
                
            case "ltcBt" : {
                $("#mainPageHD").text("LTC");
                sap.ui.getCore().byId("navToolbar").setVisible(true);
                sap.ui.getCore().byId("lastWeek").setVisible(true);
                sap.ui.getCore().byId("thisWeek").setVisible(true);
           
                if($("#ltcChart").highcharts()== null){
                    setTimeout(function(){loadLTCChart(getWeekStartDate(isCurrentWeek,true),selectedBU)},1);
                }
                break;
            }
        }
        busyDialog.close();
    }
}


/*
 * This method is used to order search query. This is used by orders search screen
 */
function orderLookup(query){
    //Check if user enters min 8 char
    if(query!=null && query.length < 8){
        sap.m.MessageBox.alert(i18nModel.getResourceBundle().getText("POValidationError"));
        return false;
    }
    var orderList = sap.ui.getCore().byId("orderList");
    busyDialog.open();
    var orderModel = new sap.ui.model.json.JSONModel();
    orderModel.loadData(getDataEndPoint("orderModel",null,query));
    orderModel.attachRequestCompleted(function(){
                                      if(orderModel.getData().d.results != undefined){
                                      $.each(orderModel.getData().d.results, function(idx,objOrd){
                                             //Change PGI date to Open if no PGI date avaialble
                                             if(objOrd.PGIDATETIME == null){
                                             objOrd.PGIDATETIME = "Open";
                                             } else{
                                             objOrd.PGIDATETIME = objOrd.PGIDATETIME.substring(0,10);
                                             }
                                             });
                                      orderList.setModel(orderModel);
                                      var orderFilter = new sap.ui.model.Filter("PONUM",
                                                                                sap.ui.model.FilterOperator.StartsWith,
                                                                                query);
                                      //Bind items
                                      orderList.bindItems("/d/results",sap.ui.getCore().byId('orderListItem'), new sap.ui.model.Sorter("PONUM",false,true));
                                      if(orderModel.getData().d.results.length == 0){
                                      orderList.setNoDataText(i18nModel.getResourceBundle().getText("POSearchError"));
                                      }
                                      }
                                      busyDialog.close();
                                      });
    orderModel.attachRequestFailed(function(){
                                   handleRequestFailed();
                                   });
}
function refreshSelectedChart(){
    //load the chart
    switch(selView){
        case "otdBt": {
                switch(selectedChart){
                    case "dailyOTDChart" : loadDailyOTDChart(); break;
                    case "weeklyOTDChart" : loadWeeklyOTDChart(getWeekStartDate(isCurrentWeek,true)) ;break;
                    case "achivableOTDChart" : loadAchOTDChart(getWeekStartDate(isCurrentWeek,true)); break;
                }
            break;
        }
        case "msBt": {
            loadMaterialShortagesList();
            break;
        }
        case "ltcBt":{
            loadLTCChart(getWeekStartDate(isCurrentWeek,true),selectedBU);
            break;
        }
    }
}