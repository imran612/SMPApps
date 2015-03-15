/*
 * Copyright 2014 Jabil 
 */
jQuery.sap.declare("com.jabil.maestro.mob.Component");

sap.ui.core.UIComponent.extend("com.jabil.maestro.mob.Component", {

	createContent : function() {
		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "com.jabil.maestro.mob.view.App",
			type : "JS",
			viewData : { component : this }
		});
        // set i18n model
        i18nModel = new sap.ui.model.resource.ResourceModel({
                                bundleUrl : "i18n/messageBundle.properties"
                                });
		return oView;
	}
});