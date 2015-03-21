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
		
              var page = new sap.m.Page({showHeader: true,showFooter: true,
                                        showNavButton: true,
                                        alignItems:"center",
                                        title: "Work List"
                                        });
              page.setCustomHeader(new sap.m.Bar({contentLeft: new sap.m.Button({icon:"sap-icon://home",press:oController.goHome}),contentMiddle: new sap.m.Text({text:"Work List"}) ,contentRight:new sap.m.Button({icon:"sap-icon://filter"})  }));
              
              page.setFooter(new sap.m.Bar({}));
              page.setSubHeader(new sap.m.Bar({contentMiddle: new sap.m.SearchField({showRefreshButton: true})}));
   
             page.addContent(sap.ui.xmlfragment("com.slb.mobile.view.fragments.WOMasterListItems",oController));
      
	/*	var woList = new sap.m.List({
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
                               })],
                            firstStatus : new sap.m.ObjectStatus({
                                        text : "{Wc}"
                           })
                        }); 

        woList.bindItems("/WorkOrderCollection", objectTemplate);
            
              page.addContent(woList); */
              
              return page;
       
	}
              

});

/*{
 "WorkOrderCollection": [
 {
 "WoId": "50000101",
 "Desc": "Stem Maintenance",
 "OrdType": "PM03",
 "SystemStatus": "REL",
 "UserStatus": "INSP",
 "EquipNum": "A7104131",
 "EquipDesc": "Centrifuge 518 High Volume FVS",
 "FuncLoc": "Loca123",
 "StartDate": "10-20-2014",
 "FinishDate": "12-10-2014",
 "Notification":"90000213",
 "EnteredBy": "User1",
 "Priority": "p1",
 "PriorityText": "priority text",
 "NoOfOperation": "10",
 "Wc": "wc-1000",
 "wcDesc": "wc1000",
 "BusinessPartner": {
 "CompanyName": "SAP AG",
 "SoId": "100000000",
 "Street": "Dietmar-Hopp-Allee",
 "Building": "15",
 "PostalCode": "69190",
 "City": "Walldorf",
 "Country": "DE"
 }
 }
 
 ]
 } */


