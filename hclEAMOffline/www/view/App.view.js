sap.ui.jsview("root.view.App", {

	getControllerName: function () {
		return "root.view.App";
	},
	
	createContent: function (oController) {
        // to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
        this.app = new sap.m.SplitApp();
              //this.app.setMode(sap.m.SplitAppMode.StretchCompressMode);
        //this.app = new sap.m.App();
              
        this.app.addMasterPage(sap.ui.jsview("emptyview", "root.view.Empty"));
        // load the login page
        var main = sap.ui.xmlview("mainview", "root.view.mainview");
        main.getController().nav = this.getController();
        this.app.addPage(main, false);
              this.app.setMode(sap.m.SplitAppMode.HideMode);
             // this.app.setMode(sap.m.SplitAppMode.StretchCompressMode);
              //this.app.hideMaster();
              
       return this.app;
            
	}
});