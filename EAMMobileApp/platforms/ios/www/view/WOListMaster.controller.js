sap.ui.controller("com.slb.mobile.view.WOListMaster", {

	handleListItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("WODetail", context);
	},
	
	handleListSelect : function (evt) {
		var context = evt.getParameter("listItem").getBindingContext();
		this.nav.to("WODetail", context);
	},
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.WOListMaster
*/
	onInit: function() {
                  var oModel = new sap.ui.model.json.JSONModel("model/WOMockup.json");
                  this.getView().setModel(oModel);
	},
                  goHome: function(evt) {
                  var context = evt.getSource().getBindingContext();
                  var nav = oCore.byId('mainview').getController().nav;
                    nav.to("Home",context);
                  }

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.WOListMaster
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.WOListMaster
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.WOListMaster
*/
//	onExit: function() {
//
//	}

});