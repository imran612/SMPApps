sap.ui.controller("com.slb.mobile.view.mainview", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.mainview
*/
	/*onInit: function() {
                  read();
	}*/

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.mainview
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.mainview
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.mainview
*/
//	onExit: function() {
//
//	}
                  
                  
                  onInit : function (evt) {
                  // set mock model
                 // var sPath = jQuery.sap.getModulePath("model","/homeTile.json");
                  var oModel = new sap.ui.model.json.JSONModel("model/homeTile.json");
                  this.getView().setModel(oModel);
                  },
                  
                  handleEditPress : function (evt) {
                  var oTileContainer = this.getView().byId("container");
                  var newValue = ! oTileContainer.getEditable();
                  oTileContainer.setEditable(newValue);
                  evt.getSource().setText(newValue ? "Done" : "Edit");
                  },
                  
                  handleBusyPress : function (evt) {
                  var oTileContainer = this.getView().byId("container");
                  var newValue = ! oTileContainer.getBusy();
                  oTileContainer.setBusy(newValue);
                  evt.getSource().setText(newValue ? "Done" : "Busy state");
                  },
                  
                  handleTileDelete : function (evt) {
                  var tile = evt.getParameter("tile");
                  evt.getSource().removeTile(tile);
                  },
                  handleTilePress: function (evt) {
                  var nav = oCore.byId('mainview').getController().nav;
                  busyDialog.close();
                  nav.to("WOListMaster");
                  },
                  openSettings : function(sType) {
                  if (!this[sType]) {
                  this[sType] = sap.ui.xmlfragment(
                                                   "com.slb.mobile.view.fragments.SettingLink",
                                                   this // associate controller with the fragment
                                                   );
                  this.getView().addDependent(this[sType]);
                  }
                  this[sType].openBy(sType.getSource());
                  
                  //this[sType].bindElement("/ProductCollection/0");
                  // toggle compact style
                  // jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this[sType]);
                //  this[sType].open();
                  var oModel = new sap.ui.model.json.JSONModel();
                  oModel.crNotification= this[sType];
                  oCore.setModel(oModel,"settingsModel");

                  },
                  launchSettings: function(evt) {
                  var nav = oCore.byId('mainview').getController().nav;
                  nav.to("Settings",null);
                  }

});

function read() {
    var busyDialog = new sap.m.BusyDialog();
      busyDialog.open();
    var sUrl = appContext.applicationEndpointURL + "/Products?$format=json";  //JSON format is less verbose than atom/xml
    //alert(sUrl);
    var oHeaders = {};
    //this can be provided by the authproxy plugin if intercept all requests is set to true.  It is by default on iOS but not on Android
    //oHeaders['Authorization'] = "Basic " + btoa(applicationContext.registrationContext.user + ":" + appContext.registrationContext.password);
    //oHeaders['X-SMP-APPCID'] = applicationContext.applicationConnectionId;  //not needed as this will be sent by the logon plugin
    
    var request = {
        headers : oHeaders,
        requestUri : sUrl,
        method : "GET"
    };
    var data = jQuery.ajax({
                           url: sUrl,
                           dataType: "json",
                           type: "GET",
                           cache: false,
                           success: function(response,status, XMLHttpRequest) {
                         
                           var jModel = new sap.ui.model.json.JSONModel();
                           jModel.setData(response.value);
                            sap.ui.getCore().setModel(jModel,"prModel");
                             //alert("1");
                           //console.log(response);
                           sap.ui.getCore().byId("pTable").setModel(jModel);
                             busyDialog.close();
                          // sap.ui.getCore().byId("pTable").bindItems("/");
                           },
                           error: function (response,status, XMLHttpRequest) {
                           alert("err");
                           }
                           });
    
}

function readSuccessCallback(data, response) {
   
}

function clearTable() {
    var carrierTable = document.getElementById("carrierTable");
    while(carrierTable.rows.length > 1) {
        carrierTable.deleteRow(1);
    }
}

function errorCallback(e) {
    alert("An error occurred: " );
   
}