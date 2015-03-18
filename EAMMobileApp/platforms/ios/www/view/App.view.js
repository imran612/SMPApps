sap.ui.jsview("com.slb.mobile.view.App", {

	getControllerName: function () {
		return "com.slb.mobile.view.App";
	},
	
	createContent: function (oController) {
              alert("in app view createmethod");
        // to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
        this.app = new sap.m.App();
        // load the login page
        var main = sap.ui.xmlview("mainview", "com.slb.mobile.view.mainview");
        main.getController().nav = this.getController();
        this.app.addPage(main, true);
         
        return this.app;
	}
});