sap.ui.jsview("com.jbl.lc.view.App", {

	getControllerName: function () {
		return "com.jbl.lc.view.App";
	},
	
	createContent: function (oController) {
        // to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
        this.app = new sap.m.App();
        // load the login page
        var login = sap.ui.jsview("Login", "com.jbl.lc.view.Login");
        login.getController().nav = this.getController();
        this.app.addPage(login, true);
         
        return this.app;
	}
});