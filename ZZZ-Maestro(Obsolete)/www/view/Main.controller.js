/*
 * Copyright 2014 Jabil
 */
jQuery.sap.require("com.jabil.maestro.mob.util.Helper");
jQuery.sap.require("com.jabil.maestro.mob.util.Global");
jQuery.sap.require("com.jabil.maestro.mob.util.MainViewHelper");
jQuery.sap.require("com.jabil.maestro.mob.util.ShortagesHelper");

sap.ui.controller("com.jabil.maestro.mob.view.Main", {
                  /**
                   * Called when a controller is instantiated and its View controls (if available) are already created.
                   * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
                   */
                  onInit : function (evt) {
                
                
                  },
                  /**
                   * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
                   * (NOT before the first rendering! onInit() is used for that one!).
                   */
                  //   onBeforeRendering: function() {
                  //
                  //   },
                  
                  /**
                   * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
                   * This hook is the same one that SAPUI5 controls get after being rendered.
                   */
                   onAfterRendering: function() {
                        //initialize
                        loadTabImages();
                        selectTab(selView,true);
                        //set this week default and disable this week
                        sap.ui.getCore().byId("thisWeek").setEnabled(false);
                        //load sites
                        loadSites();
                    },
                  
                  /**
                   * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
                   */
                  onExit : function () {
                  
                  },
                  /**
                   * Called when Weekly navigation button is pressed
                   */
                  handleWeekNav: function(evt){
                    isCurrentWeek = this.getId() == "thisWeek";
                    if(isCurrentWeek){
                        sap.ui.getCore().byId("lastWeek").setEnabled(true);
                        sap.ui.getCore().byId("thisWeek").setEnabled(false);
                    }else{
                        sap.ui.getCore().byId("thisWeek").setEnabled(true);
                        sap.ui.getCore().byId("lastWeek").setEnabled(false);
                    }
                    refreshSelectedChart();
                    //set flag to load next chart on swipe
                    loadDataAtSwipe = true;
                  
                  },
                  //Called when user pulls to refresh
                  handleRefresh: function(evt){
                    refreshSelectedChart();
                    this.hide();
                  },
                  
                  /**
                   * Called when User navigates between different charts
                   */
                  
                  handleOTDPageChange : function(evt){
                    //get the selected chart
                    selectedChart =  this.getActivePage();
                    selectedChart = selectedChart.substring(0,selectedChart.length-3)
                    //set nav buttons for Weekly and Achievable charts
                    switch(selectedChart){
                        case "dailyOTDChart" :
                                         sap.ui.getCore().byId("lastWeek").setVisible(false);
                                         sap.ui.getCore().byId("thisWeek").setVisible(false);
                                         break;
                        case "weeklyOTDChart" :
                                                {
                                                    sap.ui.getCore().byId("lastWeek").setVisible(true);
                                                    sap.ui.getCore().byId("thisWeek").setVisible(true);
                                                    if($("#weeklyOTDChart").highcharts() == null || loadDataAtSwipe){
                                                        loadWeeklyOTDChart(getWeekStartDate(isCurrentWeek,true));
                                                    }
                                                    break;
                                                }
                        case "achivableOTDChart" :
                                                {
                                                    sap.ui.getCore().byId("lastWeek").setVisible(true);
                                                    sap.ui.getCore().byId("thisWeek").setVisible(true);
                                                    if($("#achivableOTDChart").highcharts() == null || loadDataAtSwipe){
                                                        loadAchOTDChart(getWeekStartDate(isCurrentWeek,true));
                                                    }
                                                    break;
                                                }
                  }
                  loadDataAtSwipe = false;
                  
                  },


                  /**
                   * Called when user navigtes back to home page
                   */
                  handleNavHome : function (evt) {
                    var nav = sap.ui.getCore().byId("Main").getController().nav;
                    nav.back("Home");
                  },

            //Called when user press the site DD button
            handleSiteDDPress: function(evt){
                if(siteDialog != null && siteDialog.getButtons().length == 1){
                  var confirmBtMain = new sap.m.Button("confirmBtMain",{text:"Confirm",press:sap.ui.getCore().byId("Main").getController().handleSiteSelection, width:"100%"});
                  siteDialog.addButton(confirmBtMain);
                  sap.ui.getCore().byId("confirmBtHome").setVisible(false);
                }
                openSiteDialog();
            },
            /**
                * Called when Site is selected.
            */
            handleSiteSelection: function(oEvent) {
                //get user site and site text and close the dialog
                  //get user site and site text and close the dialog
                  $.each(sap.ui.getCore().byId("siteDialog").getContent()[0].getItems(),function(id,obj){
                         if(obj.getSelected()){
                            userSite= this.getTooltip();
                            userSiteTxt=this.getText().split("-")[0].trim();
                            sap.ui.getCore().byId("siteDDButton").setText(userSiteTxt);
                         }
                    });
                  this.getParent().close();
                //update user site
                updateSite(userSite,true);
                
            },
            /**
             * Called when Logoff is pressed.
            */
                handleLogoff: function(oEvent) {
                  logoff("Home");
                
            },
            /**
                * Called when user search for materials
            */
            searchOrder: function(evt){
                  var query = evt.getParameter("query");
                  if(query.length>0){
                    orderLookup(query);
                  }
            },
            /**
                * Called when Weekly navigation button is pressed
            */
            filterMaterials: function(evt){
                var like = evt.getParameter("newValue");
                var oFilter = new sap.ui.model.Filter("MATERIAL",
                                                    sap.ui.model.FilterOperator.StartsWith,
                                                    like);
                var listBinding = sap.ui.getCore().byId("materialList").getBinding("items");
                listBinding.filter([oFilter]);
            },
            /**
            * Called when user search for materials
            */
            searchMaterials: function(evt){
                var query = evt.getParameter("query");
                if(query.length==0){
                  loadMaterialShortagesList();
                }else{
                  materialLookup(query);
                }
            },
            /*
                * called when user select the list item in material shortages list
            */
            handleMSListSelect: function(evt){
                if (!(navMat== this.getTitle() && navSite == this.getTooltip())){
                  loadMatShotageDetails(this.getTitle(),this.getTooltip());
                 }
                navMat= this.getTitle();
                navSite = this.getTooltip();
                sap.ui.getCore().byId("msDetContent").setVisible(true);
                sap.ui.getCore().byId("msBtContent").setVisible(false);
                  
            },
            /*
                * called when user clicks on follow
            */
            handleFollow: function(evt){
                if(this.getText() == "Follow"){
                  var matText = this.getParent().getParent().getItems()[0].getItems()[0];
                  followMaterial(matText.getText(),matText.getTooltip(),this);
                }else {
                  var matList = evt.getSource().getParent();
                  unFollowMaterial(matList.getSwipedItem().getTitle(),matList.getSwipedItem().getTooltip());
                  matList.swipeOut();
                }
            },
            //Called when user press back button on MSDetail screen
            handleMSDetBack: function(evt){
                  sap.ui.getCore().byId("msDetContent").setVisible(false);
                  sap.ui.getCore().byId("msBtContent").setVisible(true);
            },
            /**
                * Called when user clicks on filter button
            */
            changeSelect: function(evt){
                  if (buDialog == null) {
                    buDialog = getBUDialog("Main");
                  }
                  buDialog.open();
             },
                  
            /*
            * called when user select the BU drop down
            */
            handleBUSelection: function(evt){
                selectedBU= evt.getParameter("selectedItem").getTitle();
                if (selectedBU.length >0) {
                  sap.m.MessageToast.show("Filter LTC by BU : " + selectedBU);
                }
                //loadChartData("ltcChart",getWeekStartDate(isCurrentWeek,true),selectedBU);
                  loadLTCChart(getWeekStartDate(isCurrentWeek,true),selectedBU);
            },
            /**
                Called when user search BU in the dialog
            */
            handleBUSearch : function(evt){
                var sValue = evt.getParameter("value");
                var oFilter = new sap.ui.model.Filter("BUSINESS_UNIT", sap.ui.model.FilterOperator.Contains, sValue);
                var oBinding = evt.getSource().getBinding("items");
                oBinding.filter([oFilter]);
            }



});

