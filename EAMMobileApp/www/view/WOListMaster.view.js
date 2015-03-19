sap.ui.jsview("com.slb.mobile.view.WOListMaster", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.WOListMaster
	*/ 
	getControllerName : function() {
		return "com.slb.mobile.view.WOListMaster";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.WOListMaster
	*/ 
	createContent : function(oController) {
		
        var page = new sap.m.Page({showHeader: true,
                                        showNavButton: true,
                                        alignItems:"center",
                                        });
              page.setCustomHeader(new sap.m.Bar({contentLeft: new sap.m.Button({icon:"sap-icon://home",press:oController.goHome})}));
        //var srchField = new sap.m.SearchField(sId, mSettings);
		//var oWODesc = new sap.m.Text({text: "Hello"}); 
		
		//var woList = new sap.m.List("list");
		var woList = new sap.m.List({
			id:"list",
			select:"handleListSelect"
		});
		
        var objectTemplate = new sap.m.ObjectListItem({
        	                 type :"Active",
                             title : "{WoId}",
                             number : "{EquipNum}",
                             numberUnit :"{OrdType}",
                             press : [oController.handleListItemPress, oController],
                             attributes : [new sap.m.ObjectAttribute({
                                     text : "{FuncLoc}"
                               })], //new sap.m.ObjectAttribute({
                                   // text : "{SupplierName}"
                            //})],
                            firstStatus : new sap.m.ObjectStatus({
                                        text : "{Wc}"
                           })
                        }); 

        woList.bindItems("/WorkOrderCollection", objectTemplate);
              //this.app = new sap.m.SplitApp();
              page.addContent(woList);
              return page;
 		/*return new sap.m.Page({
			title: "Work Orders",
			content: [
			         
			          woList
			         
			]
		}); */
	}

});