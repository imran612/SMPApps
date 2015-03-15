/*
 * Copyright 2014 Jabil
 */
jQuery.sap.require("com.jabil.maestro.mob.util.Helper");
jQuery.sap.require("com.jabil.maestro.mob.util.Global");

sap.ui.controller("com.jabil.maestro.mob.view.EULA", {
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
                   },
                  
                  /**
                   * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
                   */
                  onExit : function () {
                  }, 
                  
                  /*
                   * EULA Acceptance handler
                   */
                 
                handleAccept : function (evt){
                  acceptEULA();
                },
            /**
                * Rject handler.
            */
                handleReject: function(oEvent) {
                  performLogoff();
                }
});

