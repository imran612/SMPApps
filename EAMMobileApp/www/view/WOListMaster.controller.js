sap.ui.controller("com.slb.mobile.view.WOListMaster", {

	onListItemPress : function (evt) {
                  
                  busyDialog.open();
		var context = evt.getSource().getBindingContext();
        var nav = oCore.byId('mainview').getController().nav;
        nav.to("WODetail",context);
		//this.nav.to("WODetail", context);
	},
	
	handleListSelect : function (evt) {
		var context = evt.getParameter("listItem").getBindingContext();
		this.nav.to("WODetail", context);
	},
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.WOListMaster
*/
	onInit: function() {
                  //var oModel3 = new sap.ui.model.json.JSONModel("model/WOMockup.json");
                 // this.getView().setModel(oModel3);
                  var woList=[];
                  var woModel = new sap.ui.model.json.JSONModel();
                 /* woModel.loadData("http://sapf1sdi10.dir.slb.com:8010/sap/opu/odata/sap/Z_THIN_SLB_MOB_SRV/WOLIST",false);
                  woModel.attachRequestCompleted(function() {
                                            });
                  var woModel1 = new sap.ui.model.json.JSONModel(); */
                  var item = {};
                  var temp1;
                  var req = $.ajax({
                                   url: getDataEndPoint('WorkOrders'),
                                   async: false,
                                   dataType: 'json',
                                   cache: false
                                   /*,
                                   beforeSend:function (xhr) {
                                    xhr.setRequestHeader('Authorization', "Basic " + Base64.encode("05173240" + ':' + "Maryam@2011"));
                                   } */
                                   });
                  req.success(function(oData,status, xhr) {
                              if(xhr.status==200){
                              
                            /*
                           var temp=  { "ProductCollection": [
                                                    {
                                                    "WOId": "5000101",
                                                    "RigId": "R2322",
                                                    "JobId": "J87799",
                                                    "WOText" : "Oil Leak on Gearbox",
                                                    "StartDate": "23-Nov-2014",
                                                    "Plant": "ZM01",
                                                    "ProductId": "1239102",
                                                    "Name": "Power Projector 4713",
                                                    "Category": "Projector",
                                                    "SupplierName": "Corrective",
                                                    "Description": "A very powerful projector with special features for Internet usability, USB"
                                            
                                                    },
                                                    {
                                                    "WOId": "5000102",
                                                    "RigId": "R2322",
                                                    "JobId": "J87799",
                                                    "StartDate": "23-Nov-2014",
                                                    "WOText" : "Oil Leak on Gearbox",
                                                    "Plant": "ZM01",
                                                    "ProductId": "2212-121-828",
                                                    "Name": "Gladiator MX",
                                                    "Category": "Graphics Card"
                                                   
                                                    }
                              ]
                              };
                               woModel1.setData(temp); */
                           
                             $(oData.d.results).each(function( i, val ) {
                                                      woList.push({ "WOId" : val.Orderid,
                                                                  "Plant"  : val.OrderType,
                                                                  "WOText"  :val.ShortText,
                                                                  "RigId": "R2322",
                                                                  "JobId": "J87799",
                                                                  "StartDate": "23-Nov-2014"
                                                                  });

                                                });
                             
                              }else{
                              
                              }
                              });
                  req.fail(function(xhr){
                           alert("error");
                           
                           
                           });

                  //var postData = {"ProductCollection":jdata};
                  woModel.setData(woList);
                  oCore.setModel(woModel,"mastermodel");
                  oCore.byId("masterlist").fireEvent("drawmaster");
	},
                  getGroupHeader: function (oGroup){
                  return new sap.m.GroupHeaderListItem( {
                                                       title: oGroup.key,
                                                       upperCase: false
                                                       } );
                  },
                  goHome: function(evt) {
                  var context = evt.getSource().getBindingContext();
                  var nav = oCore.byId('mainview').getController().nav;
                    nav.to("Home",context);
                  }

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.WOListMaster
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.WOListMaster
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.WOListMaster
*/
//	onExit: function() {
//
//	}

});
/*
 * This method is used for getting the data end points for various calls to backend system .
 It prepares the backend service call
 */




