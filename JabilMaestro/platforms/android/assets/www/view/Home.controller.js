/*
 * Copyright 2014 Jabil
 */
jQuery.sap.require("com.jabil.maestro.mob.util.Helper");
jQuery.sap.require("com.jabil.maestro.mob.util.Global");
var tilePressed;
sap.ui.controller("com.jabil.maestro.mob.view.Home", {
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
                    loadUserData();
                    
                  },
                  
                  /**
                   * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
                   */
                  onExit : function () {
                  
                  },
                  
                  /**
                   * Called when the tile is pressed.
                   */
                 
                handleTilePress : function (evt){
                  var id = this.getId()+"Bt";
                  //activate tab if Main page has been available
                  if(sap.ui.getCore().byId("Main")!=null){
                    selectTab(id,false);
                  }else{
                    selView = id;
                  }
                  sap.ui.getCore().byId("Home").getController().nav.to("Main");
                },
            /**
                * Called when Site is selected.
            */
                handleSiteSelection: function(oEvent) {
                  //get user site and site text and close the dialog
                    $.each(sap.ui.getCore().byId("siteDialog").getContent()[0].getItems(),function(id,obj){
                           if(obj.getSelected()){
                            userSite= this.getTooltip();
                            userSiteTxt=this.getText().split("-")[0].trim();
                           }
                    });
                  this.getParent().close();
                  //update user site
                  updateSite(userSite);
                 },
            /**
             * Called when Logoff is pressed.
            */
                handleLogoff: function(oEvent) {
                  logoff("Home");
                
            }
});

