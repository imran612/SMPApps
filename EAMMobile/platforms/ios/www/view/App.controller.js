sap.ui.controller("com.slb.mobile.view.App", {
	
	/**
	 * Navigates to another page
	 * @param {string} pageId The id of the next page
	 * @param {sap.ui.model.Context} context The data context to be applied to the next page (optional)
	 */
	to : function (pageId, context) {
		
		var app = this.getView().app;
                 // app.setMode(sap.m.SplitAppMode.StretchCompressMode);
                  app.setMode(sap.m.SplitAppMode.ShowHideMode);
                  if(pageId=="Home") {
                  //console.log(app);
                  //alert(app.getInitialDetail());
                  //getDetailPage("mainview");
                  app.hideMaster();
                     app.toDetail(app.getDetailPage("mainview"));
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
                                         viewName : "com.slb.mobile.view." + pageId,
                                         type : "XML"
                                         });
                  detailpage.getController().nav = this;
                 // app.removeDetailPage(0);
                  app.addDetailPage(detailpage);
                  app.toDetail(pageId);
                 // app.setInitialDetail(detailpage);
                  }
                  }
                  else if(pageId=="WODetailL2") {
                  if(app.getPage("WODetailL2",false)!=null) {
                  
                  app.toDetail("WODetailL2");
                  }
                  else {
               
                  var detailpage = sap.ui.view({
                                               id : pageId,
                                               viewName : "com.slb.mobile.view." + pageId,
                                               type : "XML"
                                               });
                  detailpage.getController().nav = this;
                  // app.removeDetailPage(0);
                  app.addDetailPage(detailpage);
                  app.toDetail(pageId);
                  // app.setInitialDetail(detailpage);
                  }
                  }
                  else if(pageId=="Settings") {
                  if(app.getPage("Settings",false)!=null) {
                  app.setMode(sap.m.SplitAppMode.HideMode);
                  app.toDetail("Settings");
                  }
                  else {
                  
                  var settings = sap.ui.view({
                                               id : pageId,
                                               viewName : "com.slb.mobile.view." + pageId,
                                               type : "XML"
                                               });
                  settings.getController().nav = this;
                  // app.removeDetailPage(0);
                  app.addDetailPage(settings);
                  app.setMode(sap.m.SplitAppMode.HideMode);
                  app.toDetail(pageId);
                  // app.setInitialDetail(detailpage);
                  }
                  }
                  else if(pageId=="showMaster") {
                     app.showMaster();
                  }
                  else {
                 
                  if(app.getPage("WOListMaster",true)!=null) {
                  
                      app.toMaster("WOListMaster");
                     app.toDetail("WODetail");
                  }
                  else {

		// load page on demand
                  console.log(app);
                 // app.removeDetailPage(0);
		var home = ("Home" === pageId);
		if (app.getPage(pageId, home) === null) {
			var page = sap.ui.view({
				id : pageId,
				viewName : "com.slb.mobile.view." + pageId,
				type : "JS"
			});
			page.getController().nav = this;
                  
			//app.addPage(page, home);
                  app.addMasterPage(page, home);
                  // var epty = sap.ui.jsview("ept1", "com.slb.mobile.view.WODetail");
                  var emptyPage = sap.ui.view({
                                               id : "WODetail",
                                               viewName : "com.slb.mobile.view.WODetail",
                                               type : "XML"
                                               });
                  emptyPage.getController().nav = this;
                  //app.addDetailPage(detailpage);
                 // app.removeAllDetailPages();
                 // app.insertDetailPage(emptyPage,0);
                  app.insertDetailPage(emptyPage,0);
                  //app.addDetailPage(emptyPage);
			//jQuery.sap.log.info("app controller > loaded page: " + pageId);
                   //app.setMode(sap.m.SplitAppMode.PopoverMode);
                  //alert(sap.ui.Device.orientation.portrait);
                  if (sap.ui.Device.orientation.portrait) {
                  oCore.byId("WODetail--showMasterIcon").setVisible(true);
                  }
                  else {
                  oCore.byId("WODetail--showMasterIcon").setVisible(false);
                  }
                  app.toMaster(pageId);
                  app.toDetail("WODetail");
                  //app.destroyDetailPages();
                  //app.toDetail("WODetail");
                  
		}
                  }
                  
                 // app.to(pageId,"flip");
                  
                  }//else
		
		// show the page
		
                  
                  
		// set data context on the page
		if (context) {
			//var page = app.getPage(pageId);
			//page.setBindingContext(context);
		}
                  jQuery.sap.delayedCall(1000, this, function () {
                                          busyDialog.close();
                                         });
                 
                  //return app;
	},
	
	/**
	 * Navigates back to a previous page
	 * @param {string} pageId The id of the next page
	 */
	back : function (pageId) {
		this.getView().app.backToPage(pageId,"flip");
	}
});