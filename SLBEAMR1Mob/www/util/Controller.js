jQuery.sap.declare("com.slb.eam.mob.util.Controller");

sap.ui.core.mvc.Controller.extend("com.slb.eam.mob.util.Controller", {
	getEventBus : function () {
		return sap.ui.getCore().getEventBus();
	},

	getRouter : function () {
		return sap.ui.core.UIComponent.getRouterFor(this);
	}
});