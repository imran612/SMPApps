sap.ui.controller("com.slb.eam.mob.view.App", {
	
	/**
	 * Navigates to another page
	 * @param {string} pageId The id of the next page
	 * @param {sap.ui.model.Context} context The data context to be applied to the next page (optional)
	 */
	to : function (pageId, context) {
		
                  var app = this.getView().app;
                  app.setMode(sap.m.SplitAppMode.ShowHideMode);
                  if(pageId=="Launchpad") {
                        app.hideMaster();
                        app.toDetail(app.getDetailPage("Launchpad"));
                        app.setMode(sap.m.SplitAppMode.HideMode);
                  }
                  else if(pageId=="WODetail") {
                        var WODModel = sap.ui.getCore().byId(pageId).getModel();
                        var aData=  WODModel.getData();
                        WODModel.setData("{}");
                        sap.ui.getCore().byId(pageId).setModel(WODModel);
                        WODModel.setData(aData);
                        sap.ui.getCore().byId(pageId).setModel(WODModel);
                  if(app.getPage("WODetail",false)!=null) {
                        app.toDetail("WODetail");
                  }
                  else {
                  var detailpage = sap.ui.view({
                        id : pageId,
                        viewName : "com.slb.eam.mob.view." + pageId,
                        type : "XML"
                    });
                        detailpage.getController().nav = this;
                        app.addDetailPage(detailpage);
                        app.toDetail(pageId);
                    }
                  }
                  else if(pageId=="WODetailUpdates") {
                  if(app.getPage("WODetailUpdates",false)!=null) {
                        app.toDetail("WODetailUpdates");
                  }
                  else {
                  var detailpage = sap.ui.view({
                        id : pageId,
                        viewName : "com.slb.eam.mob.view." + pageId,
                        type : "XML"
                  });
                        detailpage.getController().nav = this;
                        app.addDetailPage(detailpage);
                        app.toDetail(pageId);
                  }
                }
                  else if(pageId=="UserSettings") {
                  if(app.getPage("UserSettings",false)!=null) {
                        app.setMode(sap.m.SplitAppMode.HideMode);
                        app.toDetail("UserSettings");
                  }
                  else {
                  var settings = sap.ui.view({
                        id : pageId,
                        viewName : "com.slb.eam.mob.view." + pageId,
                        type : "XML"
                });
                        settings.getController().nav = this;
                        app.addDetailPage(settings);
                        app.setMode(sap.m.SplitAppMode.HideMode);
                        app.toDetail(pageId);
                  }
                }
                  else if(pageId=="showMaster") {
                        app.showMaster();
                  }
                  else {
                  if(app.getPage("WOMaster",true)!=null) {
                      app.toMaster("WOMaster");
                      app.toDetail("WODetail");
                  }
                  else {
                    var home = ("Launchpad" === pageId);
                  if (app.getPage(pageId, home) === null) {
                        var page = sap.ui.view({
                                id : pageId,
                                viewName : "com.slb.eam.mob.view." + pageId,
                                type : "JS"
                });
                        page.getController().nav = this;
                        app.addMasterPage(page, home);
                        var emptyPage = sap.ui.view({
                                    id : "WODetail",
                                    viewName : "com.slb.eam.mob.view.WODetail",
                                    type : "XML"
                            });
                        emptyPage.getController().nav = this;
                        app.insertDetailPage(emptyPage,0);
                  if (sap.ui.Device.orientation.portrait) {
                        oCore.byId("WODetail--showMasterIcon").setVisible(true);
                  }
                  else {
                        oCore.byId("WODetail--showMasterIcon").setVisible(false);
                  }
                        app.toMaster(pageId);
                        app.toDetail("WODetail");
                  
		}
    }
                  
}
                    jQuery.sap.delayedCall(1000, this, function () {
                    busyDialog.close();
        });

	},
	
	/**
	 * Navigates back to a previous page
	 * @param {string} pageId The id of the next page
	 */
	back : function (pageId) {
		this.getView().app.backToPage(pageId,"flip");
	}
});