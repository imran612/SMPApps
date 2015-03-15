jQuery.sap.declare("com.jbl.lc.Component");

sap.ui.core.UIComponent.extend("com.jbl.lc.Component", {

	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "com.jbl.lc.view.App",
			type : "JS",
			viewData : { component : this }
		});

		// set i18n model
		 i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messagebundle.properties"
		});
		oView.setModel(i18nModel, "i18n");
		return oView;
	}
});