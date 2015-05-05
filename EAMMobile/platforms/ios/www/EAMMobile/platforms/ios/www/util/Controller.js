jQuery.sap.declare("com.slb.mobile.util.Controller");

sap.ui.core.mvc.Controller.extend("com.slb.mobile.util.Controller", {
	getEventBus : function () {
		return sap.ui.getCore().getEventBus();
	},

	getRouter : function () {
		return sap.ui.core.UIComponent.getRouterFor(this);
	}
});