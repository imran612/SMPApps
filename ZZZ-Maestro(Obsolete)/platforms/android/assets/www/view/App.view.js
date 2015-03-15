/*
 * Copyright 2014 Jabil
 */
sap.ui.jsview("com.jabil.maestro.mob.view.App", {

	getControllerName: function () {
		return "com.jabil.maestro.mob.view.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);

		// create app
		//this.app = new sap.m.SplitApp();
              this.app = new sap.m.App();
              // load the Home page
              var login = sap.ui.jsview("Login", "com.jabil.maestro.mob.view.Login");
              login.getController().nav = this.getController();
              this.app.addPage(login);
	
		return this.app;
	}
});