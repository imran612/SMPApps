sap.ui.controller("com.slb.eam.mob.view.Launchpad", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.mainview
*/
	onInit: function() {
        var oModel = new sap.ui.model.json.JSONModel("model/Launchpad.json");
        this.getView().setModel(oModel);
	},
    handleEditPress : function (evt) {
        var oTileContainer = this.getView().byId("container");
        var newValue = ! oTileContainer.getEditable();
        oTileContainer.setEditable(newValue);
        evt.getSource().setText(newValue ? "Done" : "Edit");
        },
                  
    handleBusyPress : function (evt) {
        var oTileContainer = this.getView().byId("container");
        var newValue = ! oTileContainer.getBusy();
        oTileContainer.setBusy(newValue);
        evt.getSource().setText(newValue ? "Done" : "Busy state");
        },
                  
    handleTileDelete : function (evt) {
        var tile = evt.getParameter("tile");
        evt.getSource().removeTile(tile);
        },
    handleTilePress: function (evt) {
        jQuery.sap.require("com.slb.eam.mob.util.Helper");
        var helper = com.slb.eam.mob.util.Helper;
        var nav = oCore.byId('Launchpad').getController().nav;
        helper.readGWONOFF();
        busyDialog.close();
        nav.to("WOMaster");
        },
    openSettings : function(sType) {
        var nav = oCore.byId('Launchpad').getController().nav;
        nav.to("UserSettings",null);
        },
    launchSettings: function(evt) {
        var nav = oCore.byId('Launchpad').getController().nav;
        nav.to("UserSettings",null);
        }
 

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.mainview
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.mainview
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.mainview
*/
//	onExit: function() {
//
//	}
                            
                 
});