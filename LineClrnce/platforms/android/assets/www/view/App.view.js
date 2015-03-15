sap.ui.jsview("com.jbl.lc.view.App", {

	getControllerName: function () {
		return "com.jbl.lc.view.App";
	},
	
	createContent: function (oController) {
		
             // alert("in app view");
        // to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
        //this.app = new sap.m.SplitApp();
        this.app = new sap.m.App();
              // set i18n model
             /* i18nModel = new sap.ui.model.resource.ResourceModel({
                                                                  bundleUrl : "i18n/messageBundle.properties"
                                                                  });*/
              
        // load the login page
        var login = sap.ui.jsview("Login", "com.jbl.lc.view.Login");
        login.getController().nav = this.getController();
        this.app.addPage(login, true);
         
        return this.app;
	}
});