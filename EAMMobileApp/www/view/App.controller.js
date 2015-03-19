sap.ui.controller("com.slb.mobile.view.App", {
	
	/**
	 * Navigates to another page
	 * @param {string} pageId The id of the next page
	 * @param {sap.ui.model.Context} context The data context to be applied to the next page (optional)
	 */
	to : function (pageId, context) {
		
		var app = this.getView().app;
                  app.setMode(sap.m.SplitAppMode.ShowHideMode);
                  if(pageId=="WODetail") {
                  console.log(app);
                  var detailpage = sap.ui.view({
                                         id : pageId,
                                         viewName : "com.slb.mobile.view." + pageId,
                                         type : "JS"
                                         });
                  detailpage.getController().nav = this;
                 // app.removeDetailPage(0);
                  app.addDetailPage(detailpage);
                  app.toDetail(pageId);
                 // app.setInitialDetail(detailpage);  
                  }
                  else {

		// load page on demand
              
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
                  var detailpage = sap.ui.view({
                                               id : "WODetail",
                                               viewName : "com.slb.mobile.view.WODetail",
                                               type : "JS"
                                               });
                  detailpage.getController().nav = this;
                  //app.addDetailPage(detailpage);
                  app.insertDetailPage(detailpage,0);
                 // app.addDetailPage(epty);
			//jQuery.sap.log.info("app controller > loaded page: " + pageId);
                  app.toMaster(pageId);
                  app.toDetail("WODetail");
                  //app.destroyDetailPages();
                  //app.toDetail("WODetail");
                  
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