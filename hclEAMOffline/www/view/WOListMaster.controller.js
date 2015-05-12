sap.ui.controller("root.view.WOListMaster", {

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
                 // var woList=[];
                 // var woModel = new sap.ui.model.json.JSONModel();
                  // oCore.byId("masterlist").fireEvent("drawmaster");
                //  var item = {};
                //  var temp1;
                //  var sUrl = appContext.applicationEndpointURL + "/WOLIST?sap-client=330&$format=json";
               //   var uri = appContext.applicationEndpointURL;
                 // var sUrl = appContext.applicationEndpointURL +"?sap-client=330&$format=json";
               //   var headers = {"X-SMP-APPCID" : appContext.applicationConnectionId};
                //  var user = appContext.registrationContext.user;
                //  var password = appContext.registrationContext.password;
                //  var authStr = "Basic " + btoa(user + ":" + password);
                  /************* Begin of OData call *********/
                //  var oHeaders = {};
                //  oHeaders['Authorization'] = authStr;
                  //oHeaders['X-SMP-APPCID'] = applicationContext.applicationConnectionId;    //this header is provided by the logon plugin
                  
               /*   var request = {
                  headers : oHeaders,
                  requestUri : sUrl,
                  method : "GET"
                  };
                  //console.log("read using " + sURL);
                 OData.read(request, readSuccessCallback, errorCallback);
                */
                  
                  /*************** End of OData call *********/
                   
                  /***************** comment oDataModel call **********************
                  //Decalaration of OData Model
                 /* var oModel = new sap.ui.model.odata.ODataModel(uri, true, user,password, headers);
                  oModel.read("/WOLIST", null, null, true,
                              function fnSuccess(oData,response)
                              {
                              
                              $(oData.results).each(function( i, val ) {
                                                      woList.push({ "WOId" : val.Orderid,
                                                                  "Plant"  : val.OrderType,
                                                                  "WOText"  :val.ShortText,
                                                                  "RigId": "R2322",
                                                                  "JobId": "J87799",
                                                                  "StartDate": "23-Nov-2014"
                                                                  });
                                                      
                                                      });
                              woModel.setData(woList);
                              oCore.setModel(woModel,"mastermodel");
                              oCore.byId("masterlist").fireEvent("drawmaster");
                              
                              },
                              function fnError(response)
                              {
                              alert("eerrr");
                              }
                              );  */
                  
             /*****************************comment ajax request ********************
                  var req = $.ajax({
                                   url: sUrl,
                                   dataType: 'json',
                                   cache: false,
                                   beforeSend:function (xhr) {
                                   xhr.setRequestHeader('Authorization', "Basic " + Base64.encode(user + ':' + password));
                                   }
                                  // type: "GET"
                  
                                   });
                  req.success(function(oData,status, xhr) {
                             // alert("suc");
                              if(xhr.status==200){
                                    $(oData.d.results).each(function( i, val ) {
                                                      woList.push({ "WOId" : val.Orderid,
                                                                  "Plant"  : val.OrderType,
                                                                  "WOText"  :val.ShortText,
                                                                  "RigId": "R2322",
                                                                  "JobId": "J87799",
                                                                  "StartDate": "23-Nov-2014"
                                                                  });

                                                });
                              woModel.setData(woList);
                              oCore.setModel(woModel,"mastermodel");
                               oCore.byId("masterlist").fireEvent("drawmaster");
                             
                              }else{
                              
                              }
                              });
                  req.fail(function(xhr){
                           alert("error");
                           });
                 
                  **************/
                 // woModel.setData(woList);
                  //oCore.setModel(woModel,"mastermodel");
                  
                /*  var sURL = getDataEndPoint('WorkOrders');
                  var oHeaders = {};
                 
                  authStr = "Basic " + btoa(userdata.user + ':' + userdata.pass);
                  oHeaders['Authorization'] = authStr;
                  
                  var request = {
                  headers : oHeaders,
                  requestUri : sURL,
                  method : "GET"
                  };
                  console.log("read using " + sURL);
                  OData.read(request, readSuccessCallback, errorCallback); */
                  
                 // oCore.byId("masterlist").fireEvent("drawmaster");
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

/*
function readSuccessCallback(data, response) {
    
    alert("success");
}
function errorCallback(e) {
    alert("An error occurred: " + JSON.stringify(e));
   // showScreen("MainDiv");
} */



