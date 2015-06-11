sap.ui.controller("com.slb.eam.mob.view.WOItemDetails", {
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.WODetail
*/
	onInit: function() {
        var oModel = new sap.ui.model.json.JSONModel("model/WOItemDetails.json");
        this.getView().setModel(oModel);
	},
    handleCreateNotification : function(sType) {
        if (!this[sType]) {
                  this[sType] = sap.ui.xmlfragment(
                            "com.slb.eam.mob.view.fragments.CreateNotification",
                            this // associate controller with the fragment
                        );
                  this.getView().addDependent(this[sType]);
            }
                  this[sType].bindElement("/ProductCollection/0");
                  this[sType].open();
                  var oModel = new sap.ui.model.json.JSONModel();
                  oModel.crNotification= this[sType];
                  oCore.setModel(oModel,"crNotificationModel");
                  },
    onDialogCloseButton: function (oEvent) {
                  var oModel = oCore.getModel("crNotificationModel");
                      oModel.crNotification.close();
                  },
    handleNavButtonPress : function (evt) {
                  var nav = oCore.byId("WOItems").getController().nav;
                  this.nav.back("WOItems",null);
                  }

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.WODetail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.WODetail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.WODetail
*/
//	onExit: function() {
//
//	}

});
