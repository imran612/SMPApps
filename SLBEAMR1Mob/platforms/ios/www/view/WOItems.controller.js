sap.ui.controller("com.slb.eam.mob.view.WOItems", {
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.WODetail
*/
	onInit: function() {
        var oModel = new sap.ui.model.json.JSONModel("model/WOItems.json");
        this.getView().setModel(oModel);
	},
                  
    handleLineItemPress: function(evt) {
        this.nav.to("WOItemDetails", null);
    },
    showMaster: function(evt) {
        this.nav.to("showMaster", null);
    },
    handleNavButtonPress : function (evt) {
        this.nav.back("idEmpty");
    },

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

