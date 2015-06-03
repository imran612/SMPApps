sap.ui.jsview("com.slb.eam.mob.view.WOMaster", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.WOListMaster
	*/ 
	getControllerName : function() {
		return "com.slb.eam.mob.view.WOMaster";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.WOListMaster
	*/ 
	createContent : function(oController) {
		
              var page = new sap.m.Page("masterpage",{showHeader: true,showFooter: true,
                                        showNavButton: true,
                                        alignItems:"center",
                                        title: "Work List"
                                        });
              page.setCustomHeader(new sap.m.Bar({contentLeft: new sap.m.Button({icon:"sap-icon://home",press:oController.goHome}),contentMiddle: new sap.m.Text({text:"Work List"}) ,contentRight:new sap.m.Button({icon:"sap-icon://filter"})  }));
              
              page.setFooter(new sap.m.Bar({}));
              page.setSubHeader(new sap.m.Bar({contentMiddle: new sap.m.SearchField({showRefreshButton: true})}));
              var woList = new sap.m.List({
                                          id:"masterlist",
                                          select:oController.onListItemPress
                                          });
               woList.attachEvent("drawmaster", function(oEvent) {
                                      var masterModel = oCore.getModel("mastermodel");
                                      var masterdata=masterModel.getData();
                                       jQuery.each(masterdata, function(i,val) {
                                            var objectTemplate = new sap.m.ObjectListItem({press: oController.onListItemPress});
                                                   objectTemplate.setTitle(val.WOId);
                                                   objectTemplate.setNumber(val.Plant);
                                                   objectTemplate.setType(sap.m.ListType.Active);
                                                   
                                                   var attr = new sap.m.ObjectAttribute();
                                                   attr.setText(val.WOText);
                                                   objectTemplate.addAttribute(attr);
                                                   
                                                   attr = new sap.m.ObjectAttribute();
                                                   attr.setText("Rig ID: "+val.RigId);
                                                   objectTemplate.addAttribute(attr);
                                                   
                                                   attr = new sap.m.ObjectAttribute();
                                                   attr.setText("Job ID: "+val.JobId);
                                                   objectTemplate.addAttribute(attr);
                                                   
                                                   attr = new sap.m.ObjectAttribute();
                                                   attr.setText("Start Date: "+val.StartDate);
                                                   objectTemplate.addAttribute(attr);
                                                   woList.addItem(objectTemplate);
                                                   });
                               });
              page.addContent(woList);
              return page;
       
	}
});
