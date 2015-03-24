sap.ui.controller("com.slb.mobile.view.App", {
	
	/**
	 * Navigates to another page
	 * @param {string} pageId The id of the next page
	 * @param {sap.ui.model.Context} context The data context to be applied to the next page (optional)
	 */
	to : function (pageId, context) {
		
		var app = this.getView().app;
                  app.setMode(sap.m.SplitAppMode.StretchCompressMode);
                  if(pageId=="Home") {
                  //console.log(app);
                  //alert(app.getInitialDetail());
                  //getDetailPage("mainview");
                     app.toDetail(app.getDetailPage("mainview"));
                   app.setMode(sap.m.SplitAppMode.HideMode);
                 // app.hideMaster();
                  }
                  else if(pageId=="WODetail") {
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
                  else {
                 
                  if(app.getPage("WOListMaster",true)!=null) {
                  
                      app.toMaster("WOListMaster");
                     app.toDetail("Empty");
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
                                               id : "Empty",
                                               viewName : "com.slb.mobile.view.WODetail",
                                               type : "XML"
                                               });
                  emptyPage.getController().nav = this;
                  //app.addDetailPage(detailpage);
                  app.insertDetailPage(emptyPage,0);
                 // app.addDetailPage(epty);
			//jQuery.sap.log.info("app controller > loaded page: " + pageId);
                  app.toMaster(pageId);
                  app.toDetail("Empty");
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