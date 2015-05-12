jQuery.sap.declare("com.slb.plantoffline.app.SMPController");

//jQuery.sap.require("sap.ui.model.resource.ResourceModel");

com.slb.plantoffline.app.SMPController = {
    
ggatest: function() {
    
    //console.log("in ggatest " + com.slb.plantoffline.app.SMPController.appId);
    
},
    
    
    
appId: "com.slb.plantoffline",
applicationContext: null,
smpServerProtocol: "http",
smpServerHost: "us1455saps033.dir.slb.com",//"us1455saps033.dir.slb.com",//"usphlvm1497.phl.sap.corp",
smpServerPort: "8080", //"8080",
smpURL: "http://us1455saps033.dir.slb.com:8080",//"http://us1455saps033.dir.slb.com:8080"//"http://usphlvm1497.phl.sap.corp:8080",
    //odataSessionID: window.localStorage.getItem("odataSessionID"),  //Unsure of the duration of the session.  Unregister and register to get a new session
authStr: null,
oDataVersion: "2",  //Note, the Offline OData plugin in SP05 only supports OData version 2.
store: null, //Offline OData store
startTime: null,
online: navigator.onLine,
plantModel: null,
plantModelOffline: null,
token: null,
wasOnlineCall: true,
    
    // Optional initial connection context
context: {
    "serverHost": "us1455saps033.dir.slb.com", //Place your SMP 3.0 server name here
    "https": false,
    "serverPort": "8080",
    "user": "I812441", //user name for registration and OData Endpoint
    "password": "gga",  //password for registration and OData Endpoint
    //once set can be changed by calling sap.Logon.changePassword()
    "communicatorId": "REST",
    "passcode": "password",  //note hardcoding passwords and unlock passcodes are strictly for ease of use during development
    //once set can be changed by calling sap.Logon.managePasscode()
    "unlockPasscode": "password",
    "passcode_CONFIRM":"password",
    "ssoPasscode":"Password1"
    /*"auth": [
     {
     "type": "saml2.web.post",
     "config": {
     "saml2.web.post.authchallengeheader.name": "com.sap.cloud.security.login",
     "saml2.web.post.finish.endpoint.uri": "/SAMLAuthLauncher",
     "saml2.web.post.finish.endpoint.redirectparam": "finishEndpointParam"
     }
     }
     ]*/
    
    
},
    
    
    //window.onerror: this.onError,
    
onError: function(msg, url, line) {
    var idx = url.lastIndexOf("/");
    var file = "unknown";
    if (idx > -1) {
        file = url.substring(idx + 1);
    }
    alert("An error occurred in " + file + " (at line # " + line + "): " + msg);
    return false; //suppressErrorAlert;
},
    
    
init: function() {
    
    console.log("in SMP init");
    jQuery.sap.require("sap.ui.thirdparty.datajs");
    //console.log("in init " + this.appId);
    //console.log("in init " + this.register());
    var self = com.slb.plantoffline.app.SMPController;
    // document.addEventListener("online", self.deviceOnline, false);
    //document.addEventListener("offline", self.deviceOffline, false);
    
    
    window.onerror = self.onError;
    //document.addEventListener("online", com.slb.plantoffline.app.SMPControllerdeviceOnline, false);
    //document.addEventListener("offline", com.slb.plantoffline.app.SMPControllerdeviceOffline, false);
    self.register();
    
},
    
register:function() {
    
    console.log("in register");
    //this.updateStatus2("register called");
    var self = com.slb.plantoffline.app.SMPController;
    
    sap.Logon.init(self.logonSuccessCallback, self.logonErrorCallback, self.appId, self.context);
    // Changed by Ahmed
    //sap.Logon.init(self.logonSuccessCallback, self.logonErrorCallback, self.appId, self.context, null, "X509FileCertificateProvider");
},
    
logonSuccessCallback: function(result) {
    console.log("logonSuccessCallback " + JSON.stringify(result));
    //this.updateStatus2("Successfully REGISTERED");
    //this = com.slb.plantoffline.app.SMPController;
    var self = com.slb.plantoffline.app.SMPController;
    self.applicationContext = result;
    //alternatively the authproxy plugin can provide this if SAPKapselHandleHttpRequests=true, (it is by default on iOS)
    self.authStr = "Basic " + btoa(self.applicationContext.registrationContext.user + ":" + self.applicationContext.registrationContext.password);
    console.log("user:" + self.applicationContext.registrationContext.user + "  pw:" + self.applicationContext.registrationContext.password);
    //self.read(false);
    
},
    
logonErrorCallback: function(error) {   //this method is called if the user cancels the registration.
    console.log("A logon error occurred:  " + JSON.stringify(error));
    if (device.platform == "Android") {  //Not supported on iOS
        navigator.app.exitApp();
    }
},
    
unRegister: function() {
    var self = com.slb.plantoffline.app.SMPController;
    self.updateStatus2("unregister called");
    sap.Logon.core.deleteRegistration(self.logonUnregisterSuccessCallback, self.errorCallback);
    self.clearTable("PlantsTable");
},
    
logonUnregisterSuccessCallback: function(result) {
    var self = com.slb.plantoffline.app.SMPController;
    self.updateStatus2("Successfully UNREGISTERED");
    console.log("logonUnregisterSuccessCallback " + JSON.stringify(result));
    self.applicationContext = null;
    //odataSessionID = "";
    //window.localStorage.setItem("odataSessionID", "");
},
    
errorCallback: function(e) {
    alert("An error occurred " + JSON.stringify(e));
    console.log("An error occurred " + JSON.stringify(e));
    var self = com.slb.plantoffline.app.SMPController;
    self.updateStatus1("");
},
    
    
getEndPointURL: function() {
    //return smpURL + "/" + appId + "/" + getTempODataSession() + "/V" + oDataVersion + "/OData/OData.svc";
    return com.slb.plantoffline.app.SMPController.smpURL + "/com.slb.plantoffline/";
    //?$orderby=Name desc&milliseconds=" + new Date().getTime();
},
    
read: function(isLocal, isOnline) {
    console.log("in read");
    var self = com.slb.plantoffline.app.SMPController;
    //this.updateStatus2("read request started");
    self.startTime = new Date();
    //this.showScreen("MainDiv");
    //this.clearTable("PlantsTable");
    if (!self.haveAppId()) {
        return;
    }
    
    if(isOnline){
        //sap.OData.applyHttpClient();
        sap.OData.removeHttpClient();
        self.wasOnlineCall = true;
    }else if(!self.store) {
        self.wasOnlineCall = false;
        console.log("gga store isn't open, calling open");
        self.openStore();
        return;
    }else{
        console.log("gga store is open");
        self.wasOnlineCall = false;
        sap.OData.applyHttpClient();
    }
    
    
    var sURL = self.getEndPointURL() + "PlantSet";
    
    /*if (isLocal) {  //displays entities that have been created or updated but have not yet been flushed.
     if (self.store && self.store.getRequestQueueStatus) { //filter is a new features in SP06 of the SDK.  getRequestQueueStatus was added in the same SP.
     sURL = sURL + "&$filter=sap.islocal()";
     }
     else {
     alert("Displaying changed records that have not yet been flushed requires the offline store to be open and is a new feature in SP06 of the SDK");
     }
     }*/
    
    var oHeaders = {};
    oHeaders['Authorization'] = self.authStr;
    oHeaders['Accept'] = "application/json";
    oHeaders['x-csrf-token'] = "Fetch";
    
    //oHeaders['X-SMP-APPCID'] = applicationContext.applicationConnectionId;    //this header is provided by the logon plugin
    
    clientCert = new sap.AuthProxy.CertificateFromLogonManager("com.mycompany.logon");
    
    var request = {
        headers : oHeaders,
        requestUri : sURL,
        method : "GET"
    };
    console.log("read using " + sURL + "  with connection id: " + self.applicationContext.applicationConnectionId);
    
    //OData.read(request, self.readSuccessCallback, self.errorCallback);
    
    
    
    //var headers = {"X-SMP-APPCID" : self.applicationContext.applicationConnectionId};
    var m = new sap.ui.model.odata.ODataModel("http://us1455saps033.dir.slb.com:8080/com.slb.plantoffline/", true, "test", "gga");
    
    
    //var m = new sap.ui.model.odata.ODataModel("http://usphlvm1497.phl.sap.corp:8080/com.slb.plantoffline/", true, "test", "gga", oHeaders, true);
    //m.setSizeLimit(1000);
    //self.plantModel = m;
    //m.read("/PlantSet", null, null, true, self.readSuccessCallback, self.errorCallback);
    var bus = sap.ui.getCore().getEventBus();
    if(isOnline){
        m.setSizeLimit(1000);
        self.plantModel = m;
        bus.publish("read", "plant", {value:self.plantModel});
    }else{
        m.setSizeLimit(1000);
        //OData.read(request, self.readSuccessCallback, self.errorCallback);
        self.plantModelOffline = m;
        if(isLocal){
            bus.publish("read", "plantChanged", {value:self.plantModelOffline});
        }else{
            bus.publish("read", "plantOffline", {value:self.plantModelOffline});
        }
    }
    
    
},
    
readSuccessCallback: function(data, response) { //not used
    
    var endTime = new Date();
    var self = com.slb.plantoffline.app.SMPController;
    var duration = (endTime - self.startTime)/1000;
    console.log("Read " + data.results.length + " records in " + duration + " seconds");
    self.token = response.headers["x-csrf-token"];
    
    //self.plantModelOffline = new sap.ui.model.json.JSONModel(data.results);
    //var bus = sap.ui.getCore().getEventBus();
    //bus.publish("read", "plantOffline", {value:self.plantModelOffline});
    
    var oEntry = data.results[374];
    oEntry.Ktext = "GGA App 4";
    
    oEntry = {Ktext:"GGA App 5"};
    var token = response.headers["x-csrf-token"];
    var sURL = self.getEndPointURL() + "PlantSet(Werks='ZTST',Stand='NEW')";
    var successFun = null;
    if (self.wasOnlineCall){
        successFun = self.ggaSuccess;
    }else{
        successFun = self.updateRecordSuccess;
    }
    OData.request(
                  {
                  headers : {
                  "x-csrf-token" : token,
                  "Content-Type" : "application/atom+xml;type=entry",
                  "MaxDataServiceVersion" : "2.0",
                  "DataServiceVersion" : "2.0",
                  "X-Requested-With" : "XMLHttpRequest",
                  "Authorization" : self.authStr
                  },
                  requestUri : sURL,
                  method : "PUT",
                  data : oEntry,
                  //user : username,
                  //password : password,
                  async : true
                  },
                  self.updateRecordSuccess, self.ggaFail, OData.atomHandler);
    
    
    //fire an event so any UI elements can refresh
    //var bus = sap.ui.getCore().getEventBus();
    //bus.publish("read", "plantOffline", {value:self.plantModelOffline});
    
    
    
    /*var updatePlantURL = this.getEndPointURL() + "PlantSet(Werks='ZTST',Stand='NEW')";
     var oHeaders = {};
     
     oHeaders['Authorization'] = this.authStr;
     oHeaders['Content-Type'] = "application/xml";
     oHeaders['accept'] = "application/xml";
     //oHeaders['X-SMP-APPCID'] = applicationContext.applicationConnectionId;    //this header is provided by the logon plugin
     
     var d = {};
     d.Werks = "ZTST";
     d.Stand = "NEW";
     d.Ktext = "GGA 10";
     
     
     var request = {
     headers : oHeaders,
     requestUri : updatePlantURL,
     method : "PUT",  //merge not supported for this OData producer
     data : d
     };
     //self.updateRecordSuccess();
     //var m = new sap.ui.model.odata.ODataModel("http://usphlvm1497.phl.sap.corp:8080/com.slb.plantoffline", true, "I812441", "gga");
     OData.request(request, self.updateRecordSuccess, self.errorCallback);
     */
    
    
    
    /*if(response.requestUri.indexOf("PlantSet") > 0){
     bus.publish("read", "plant", {value:self.plantModel});
     }*/
    
    //this.updateStatus2("Read " + data.results.length + " records in " + duration + " seconds");
    
    /*var plantsTable = document.getElementById("PlantsTable");
     for (var i = 0; i < data.results.length; i++) {
     var row = plantsTable.insertRow(1);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);
     var cell5 = row.insertCell(4);
     var cell6 = row.insertCell(5);
     cell1.innerHTML = '<input type="radio" name="ID" id="ID" value="' + data.results[i].ID + '">';
     cell2.innerHTML = data.results[i].Werks;
     cell3.innerHTML = data.results[i].Stand;
     cell4.innerHTML = data.results[i].Description;
     }*/
},
    
ggaSuccess: function(data, response){
    console.log("ggaSuccess");
},
ggaFail: function(oError){
    console.log("ggaFail");
},
    
getPlantModel: function(){
    var self = com.slb.plantoffline.app.SMPController;
    
    return self.plantModel;
},
    
deleteRecord: function() {
    var self = com.slb.plantoffline.app.SMPController;
    if (!self.haveAppId()) {
        return;
    }
    //get the selected record to be deleted.
    var form = document.forms["PlantsForm"];
    var plantsRadioArray = form.ID;
    var radioEl = this.getSelectedRadioElement(plantsRadioArray);
    if (!radioEl) {
        alert("Please select a plant to be deleted");
        return;
    }
    var deleteProductsURL = this.getEndPointURL() + "/PlantSet(" + radioEl.value + ")";
    var oHeaders = {};
    oHeaders['Authorization'] = this.authStr;
    //oHeaders['X-SMP-APPCID'] = applicationContext.applicationConnectionId;    //this header is provided by the logon plugin
    
    var request = {
        headers : oHeaders,
        requestUri : deleteProductsURL,
        method : "DELETE"
    };
    OData.request(request, this.read, this.errorCallback);
},
    
showUpdateDiv: function() {
    //get the selected record to be deleted.
    var plantsForm = document.forms["PlantsForm"];
    var plantsRadioArray = plantsForm.ID;
    var radioEl = this.getSelectedRadioElement(plantsRadioArray);
    if (!radioEl) {
        alert("Please select a plant to be updated");
        return;
    }
    var tr = radioEl.parentElement.parentElement;
    var id = radioEl.value;
    var updateForm = document.forms["UpdateForm"];
    updateForm.ID.value = id;
    var werks = tr.childNodes[1].innerHTML;
    updateForm.werks.value = werks;
    var stand = tr.childNodes[2].innerHTML;
    updateForm.stand.value = stand;
    var desc = tr.childNodes[3].innerHTML;
    updateForm.description.value = desc;
    
    
    this.showScreen("UpdateDiv");
},
    
updateRecord: function(oPlant, isOnline) {
    var self = com.slb.plantoffline.app.SMPController;
    console.log("update");
    var oModel;
    
    if(isOnline){
        
        oModel = self.plantModel;
        var url = "/PlantSet(Werks='" + oPlant.oData.Werks + "',Stand='" + oPlant.oData.Stand + "')";
        oModel.update(url, oPlant.oData ,null, self.updateRecordOnlineSuccess, self.onError);
    }
    else{
        oModel = self.plantModelOffline;
        //var data = {
        //    "Werks": oPlant.werks,
        //    "Stand": oPlant.Stand,
        //    "Ktext": "Offline Test 4"
        //}
        
        var headers = {
            "Content-Type" : "application/json",
            "X-Requested-With" : "XMLHttpRequest",
            "Authorization" : self.authStr,
            "Content-Length" : encodeURI(oPlant.oData).length
        };
        
        oModel.setHeaders(headers);
        var url = "/PlantSet(Werks='" + oPlant.oData.Werks + "',Stand='" + oPlant.oData.Stand + "')";
        oModel.update(url, oPlant.oData ,null, self.updateRecordSuccess, self.onError);
    }
    
    
    //var updatePlantURL = self.getEndPointURL() + "PlantSet(Werks='" + werks + "',Stand='" + stand +"')";
    
    /*
     
     var updatePlantURL = self.getEndPointURL() + "PlantSet(Werks='ZTST',Stand='NEW')";
     var oHeaders = {};
     
     oHeaders['Authorization'] = self.authStr;
     oHeaders['Content-Type'] = "application/json";
     oHeaders['accept'] = "application/json";
     oHeaders['X-HTTP-Method'] = "MERGE";
     oHeaders['DataServiceVersion'] = "1.0";
     //oHeaders['X-SMP-APPCID'] = applicationContext.applicationConnectionId;    //this header is provided by the logon plugin
     
     var d = {};
     d.Ktext = 'Offline Test 1';
     
     */
    
    //var d = '{"Werks":"ZTST","Stand":"NEW","Addrnum":"","Mandt":"800","Ktext":"Offline 11"}';
    
    /*var d = { "d" : { "__metadata" : { "id" : "http://usphlvm1534.phl.sap.corp:8080/sap/opu/odata/sap/ZGGA_PM_SRV/PlantSet(Werks='ZTST',Stand='NEW')", "uri" : "http://usphlvm1534.phl.sap.corp:8080/sap/opu/odata/sap/ZGGA_PM_SRV/PlantSet(Werks='ZTST',Stand='NEW')", "type" : "ZGGA_PM_SRV.Plant" }, "Mandt" : "800", "Werks" : "ZTST", "Stand" : "NEW", "Ktext" : "Offline 8", "Addrnum" : "" } }*/
    
    /*var d = "<?xml version='1.0' encoding='utf-8'?><entry xml:base='http://usphlvm1534.phl.sap.corp:8080/sap/opu/odata/sap/ZGGA_PM_SRV/' xmlns='http://www.w3.org/2005/Atom' xmlns:m='http://schemas.microsoft.com/ado/2007/08/dataservices/metadata' xmlns:d='http://schemas.microsoft.com/ado/2007/08/dataservices'><id>http://usphlvm1534.phl.sap.corp:8080/sap/opu/odata/sap/ZGGA_PM_SRV/PlantSet(Werks='ZTST',Stand='NEW')</id><title type='text'>PlantSet(Werks='ZTST',Stand='NEW')</title><updated>2015-03-30T03:58:49Z</updated><category term='ZGGA_PM_SRV.Plant' scheme='http://schemas.microsoft.com/ado/2007/08/dataservices/scheme'/><content type='application/xml'><m:properties><d:Mandt>800</d:Mandt><d:Werks>ZTST</d:Werks><d:Stand>NEW</d:Stand><d:Ktext>Offline 9</d:Ktext><d:Addrnum/></m:properties></content></entry>";*/
    
    /*var d = {
     Werks: "ZTST",
     Stand: "NEW",
     Ktext: "Offline Test 4"
     }*/
    
    /*
     var d = {"d":{"results":[{"__metadata":{"id":"http://usphlvm1534.phl.sap.corp:8080/sap/opu/odata/sap/ZGGA_PM_SRV/PlantSet(Werks='0001',Stand='0001')","uri":"http://usphlvm1534.phl.sap.corp:8080/sap/opu/odata/sap/ZGGA_PM_SRV/PlantSet(Werks='0001',Stand='0001')","type":"ZGGA_PM_SRV.Plant"},"Mandt":"800","Werks":"0001","Stand":"0001","Ktext":"Offline 1","Addrnum":""}]}};
     */
    
    /*var d = <entry xmlns="http://www.w3.org/2005/Atom" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns:d="http://schemas.microsoft.com/ado/2007/08/dataservices" xml:base="http://usphlvm1534.phl.sap.corp:8080/sap/opu/odata/sap/ZGGA_PM_SRV/">
     <id>
     http://usphlvm1534.phl.sap.corp:8080/sap/opu/odata/sap/ZGGA_PM_SRV/PlantSet(Werks='ZTST',Stand='NEW')
     </id>
     <title type="text">PlantSet(Werks='ZTST',Stand='NEW')</title>
     <updated>2015-03-30T01:44:59Z</updated>
     <category term="ZGGA_PM_SRV.Plant" scheme="http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"/>
     <link href="PlantSet(Werks='ZTST',Stand='NEW')" rel="self" title="Plant"/>
     <content type="application/xml">
     <m:properties>
     <d:Mandt>800</d:Mandt>
     <d:Werks>ZTST</d:Werks>
     <d:Stand>NEW</d:Stand>
     <d:Ktext>File Test3</d:Ktext>
     <d:Addrnum/>
     </m:properties>
     </content>
     </entry>*/
    
    /*
     var dataJson= JSON.stringify(d);
     console.log("data: " + dataJson);
     oHeaders['Content-Length'] = 900;//dataJson.length;//encodeURI(d).length;
     
     var request = {
     headers : oHeaders,
     requestUri : updatePlantURL,
     method : "PUT",
     data : dataJson
     };
     OData.request(request, self.updateRecordSuccess, self.onError);
     }
     */
    //        (Werks='ZTST',Stand='NEW')
    /*
     var updatePlantURL = self.getEndPointURL() + "PlantSet(Werks='" + werks + "',Stand='" + stand +"')";
     var oHeaders = {};
     
     oHeaders['Authorization'] = self.authStr;
     oHeaders['Content-Type'] = "application/xml";
     oHeaders['accept'] = "application/xml";
     //oHeaders['X-SMP-APPCID'] = applicationContext.applicationConnectionId;    //this header is provided by the logon plugin
     
     var d = {};
     d.Werks = "ZTST";
     d.Stand = "NEW";
     d.Ktext = "GGA 10";
     d.add
     
     
     var request = {
     headers : oHeaders,
     requestUri : updatePlantURL,
     method : "PUT",  //merge not supported for this OData producer
     data : d
     };
     //self.updateRecordSuccess();
     //var m = new sap.ui.model.odata.ODataModel("http://usphlvm1497.phl.sap.corp:8080/com.slb.plantoffline", true, "I812441", "gga");
     OData.request(request, self.updateRecordSuccess, self.errorCallback);
     */
    
    /*
     //var oEntry = data.results[374];
     //oEntry.Ktext = "GGA App2";
     var token = self.plantModelOffline.getSecurityToken();
     //response.headers["x-csrf-token"];
     
     var sURL = self.getEndPointURL() + "PlantSet(Werks='ZTST',Stand='NEW')";
     OData.request(
     {
     headers : {
     "x-csrf-token" : token,
     "Content-Type" : "application/atom+xml;type=entry",
     //"MaxDataServiceVersion" : "2.0",
     //"DataServiceVersion" : "2.0",
     //"X-Requested-With" : "XMLHttpRequest",
     //"Authorization" : self.authStr
     },
     requestUri : sURL,
     method : "PUT",
     data : oPlant,
     //user : username,
     //password : password,
     async : true
     },
     self.updateRecordSuccess, self.onError);
     
     */
    
    /*
     var updateForm = document.forms["UpdateForm"];
     var updateProductsURL = this.getEndPointURL() + "/PlantSet(" + updateForm.ID.value + ")";
     var oHeaders = {};
     var params = {};
     params.Werks = updateForm.werks.value;
     params.Description = updateForm.description.value;
     params.Stand = updateForm.stand.value;
     oHeaders['Authorization'] = this.authStr;
     //oHeaders['X-SMP-APPCID'] = applicationContext.applicationConnectionId;    //this header is provided by the logon plugin
     
     var request = {
     headers : oHeaders,
     requestUri : updateProductsURL,
     method : "PUT",  //merge not supported for this OData producer
     data : params
     };
     OData.request(request, this.read, this.errorCallback);*/
},
    
updateRecordSuccess: function(data, response){
    alert("Record updated to offline store successfully.");
    console.log("updateRecordSuccess");
    var self = com.slb.plantoffline.app.SMPController;
    if (!self.store) {
        self.updateStatus2("The store must be open before it can be flushed");
        return;
    }
    self.startTime = new Date();
    //self.updateStatus2("store.flush called");
    //self.store.flush(self.flushStoreSuccessCallback, self.errorCallback);
    
    
    
},
updateRecordOnlineSuccess: function(data, response){
    console.log("updateRecordOnlineSuccess");
    var self = com.slb.plantoffline.app.SMPController;
    alert("Record updated online successfully.");
},
    
showCreateDiv: function() {
    if (!this.haveAppId()) {
        return;
    }
    var createForm = document.forms["CreateForm"];
    createForm.ID.value = "";
    createForm.werks.value = "";
    createForm.description.value = "";
    createForm.stand.value = "";
    this.showScreen("CreateDiv");
},
    
createRecord: function() {
    var createForm = document.forms["CreateForm"];
    var oHeaders = {};
    var params = {};
    params.ID = createForm.ID.value;
    params.Werks = createForm.werks.value;
    params.Description = createForm.description.value;
    params.Stand = createForm.stand.value;
    oHeaders['Authorization'] = this.authStr;
    //oHeaders['X-SMP-APPCID'] = applicationContext.applicationConnectionId;    //this header is provided by the logon plugin
    
    var request = {
        headers : oHeaders,
        requestUri : getEndPointURL() + "/PlantSet",
        method : "POST",
        data : params
    };
    OData.request(request, this.read, this.errorCallback);
},
    
    //returns the value of the checked radio element in the passed in array of radio elements
getSelectedRadioElement: function(radioElementArray) {
    if (radioElementArray) {
        if (radioElementArray.length) {
            for (var i = 0; i < radioElementArray.length; i++) {
                if (radioElementArray[i].checked) {
                    return radioElementArray[i];
                }
            }
        }
        else {
            if (radioElementArray.checked) {
                return radioElementArray; //just one row, radioElementArray is not an array in this case
            }
        }
    }
},
    
showScreen: function(screenIDToShow) {
    var screenToShow = document.getElementById(screenIDToShow);
    screenToShow.style.display = "block";
    var screens = document.getElementsByClassName('screenDiv');
    for (var i = 0; i < screens.length; i++) {
        if (screens[i].id != screenToShow.id) {
            screens[i].style.display = "none";
        }
    }
},
    
clearTable: function(tableId) {
    var plantsTable = document.getElementById(tableId);
    while(plantsTable.rows.length > 1) {
        plantsTable.deleteRow(1);
    }
},
    
    
openStore: function() {
    console.log("gga openStore");
    var self = com.slb.plantoffline.app.SMPController;
    if (!self.haveAppId()) {
        return;
    }
    self.startTime = new Date();
    self.updateStatus2("store.open called");
    
    /*
     oHeaders['Authorization'] = self.authStr;
     oHeaders['Content-Type'] = "application/json;charset=utf-8";
     oHeaders['accept'] = "application/json";
     oHeaders['X-HTTP-Method'] = "MERGE";
     oHeaders['DataServiceVersion'] = "1.0";
     
     */
    
    var properties = {
        "name": "PlantsOfflineStore2",
        "host": self.applicationContext.registrationContext.serverHost,
        "port": self.applicationContext.registrationContext.serverPort,
        "https": self.applicationContext.registrationContext.https,
        "serviceRoot" : self.getEndPointURL(), //"com.slb.plantoffline",
        //"streamParams" : "custom_header=Content-Type:application/json",
        "definingRequests" : {
            "PlantsDR2" : "/PlantSet"
        }
        
    };
    //"streamParams" : "custom_header=Authorization: " + self.authStr + ";custom_header=X-SMP-APPCID:" +  self.applicationContext.applicationConnectionId + ";custom_header=Content-Type:application/atom+xml,charset=utf-8",
    
    
    //BOM "streamParams" : "custom_header=Authorization: " + self.authStr + ";custom_header=X-SMP-APPCID:" +  self.applicationContext.applicationConnectionId + ";custom_header=Content-Type:application/atom+xml,charset=utf-8",
    //doesn't work "streamParams" : "custom_header=Content-Type:application/json;type=entry;charSet=utf-8;"
    //"streamParams" : "custom_header=Authorization:Basic " + authStr + ";custom_header=X-SMP-APPCID:" +  appCID + ";",
    //"streamParams" : "custom_header=Authorization:" + self.authStr + ";custom_header=Content-Type:application/atom+xml;type=entry;",
    //"streamParams" : "custom_header=Content-Type:application/atom+xml;type=entry",
    
    /*"customHeaders" : {
     
     "Content-Type" : "application/atom+xml;type=entry"
     
     }*/
    //"x-csrf-token" : token,
    //"MaxDataServiceVersion" : "2.0",
    //"DataServiceVersion" : "2.0",
    //"X-Requested-With" : "XMLHttpRequest",
    //"Authorization" : self.authStr
    
    self.store = sap.OData.createOfflineStore(properties);
    self.store.onrequesterror = self.onRequestError; //called for each modification error during flush
    
    //var options = {};
    self.store.open(self.openStoreSuccessCallback, self.errorCallback);//, options);
},
    
onRequestError: function(error) {
    alert("An error occurred while FLUSHING " + JSON.stringify(error));
},
    
openStoreSuccessCallback: function() {
    console.log("gga openStoreSuccessCallback");
    var self = com.slb.plantoffline.app.SMPController;
    var endTime = new Date();
    var duration = (endTime - self.startTime)/1000;
    self.updateStatus2("Store opened in  " + duration + " seconds");
    self.updateStatus1("Store is OPEN.");
    //sap.OData.applyHttpClient();  //Offline OData calls can now be made against datajs.
    
    self.read(false, false);
    
},
    
closeStore: function() {
    var self = com.slb.plantoffline.app.SMPController;
    if (!self.store) {
        self.updateStatus2("The store must be opened before it can be closed");
        return;
    }
    self.updateStatus2("store.close called");
    self.store.close(self.closeStoreSuccessCallback, self.errorCallback);
},
    
closeStoreSuccessCallback: function() {
    this.updateStatus1("Store is CLOSED.");
},
    
    //Sends pending modification requests to the server.
flushStore: function() {
    var self = com.slb.plantoffline.app.SMPController;
    if (!self.store) {
        self.updateStatus2("The store must be open before it can be flushed");
        return;
    }
    self.startTime = new Date();
    self.updateStatus2("store.flush called");
    self.store.flush(self.flushStoreSuccessCallback, self.errorCallback);
},
    
flushStoreSuccessCallback: function() {
    var self = com.slb.plantoffline.app.SMPController;
    var endTime = new Date();
    var duration = (endTime - self.startTime)/1000;
    self.updateStatus2("Store flushed in  " + duration + " seconds");
    self.read(false, false);
},
    
    //After calling this the store will receive any changes from the OData producer.
refreshStore: function() {
    var self = com.slb.plantoffline.app.SMPController;
    if (!this.store) {
        self.updateStatus2("The store must be open before it can be refreshed");
        return;
    }
    self.startTime = new Date();
    self.updateStatus2("store.refresh called");
    self.store.refresh(self.refreshStoreCallback, self.errorCallback);
},
    
refreshStoreCallback: function() {
    var self = com.slb.plantoffline.app.SMPController;
    var endTime = new Date();
    var duration = (endTime - self.startTime)/1000;
    self.updateStatus2("Store refreshed in  " + duration + " seconds");
    alert("Offline store refreshed.");
},
    
    //Removes the physical store from the filesystem
clearStore: function() {
    if (!this.store) {
        this.updateStatus2("The store must be closed before it can be cleared");
        return;
    }
    this.store.clear(this.clearStoreSuccessCallback, this.errorCallback);
},
    
clearStoreSuccessCallback: function() {
    this.updateStatus1("");
    this.updateStatus2("Store is CLEARED");
    this.store = null;
},
    
showErrors: function() {
    if (!this.store) {
        this.updateStatus2("The store must be opened before viewing the ErrorArchive");
        return;
    }
    this.clearTable("ErrorsTable");
    this.showScreen("ErrorsDiv");
    this.updateStatus2("ErrorArchive request started");
    var sURL = this.getEndPointURL() + "/ErrorArchive";
    var oHeaders = {};
    oHeaders['Authorization'] = this.authStr;
    //oHeaders['X-SMP-APPCID'] = applicationContext.applicationConnectionId;    //this header is provided by the logon plugin
    
    var request = {
        headers : oHeaders,
        requestUri : sURL,
        method : "GET"
    };
    console.log("read using " + sURL);
    OData.read(request, this.showErrorsSuccessCallback, this.errorCallback);
},
    
showErrorsSuccessCallback: function(data, response) {
    this.updateStatus2("ErrorArchive contains " + data.results.length + " records ");
    console.log(JSON.stringify(data.results));
    var plantsTable = document.getElementById("ErrorsTable");
    for (var i = 0; i < data.results.length; i++) {
        var row = plantsTable.insertRow(1);
        var plant = JSON.parse(data.results[i].RequestBody);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        cell1.innerHTML = '<input type="radio" name="ID" id="ID" value="' + data.results[i].RequestID + '">';
        cell2.innerHTML = data.results[i].RequestMethod;
        cell3.innerHTML = plant.Werks;
        cell4.innerHTML = plant.Stand;
        cell5.innerHTML = plant.Description;
        cell6.innerHTML = data.results[i].RequestURL;
        cell7.innerHTML = data.results[i].Message;
    }
},
    
clearError: function() {
    //get the selected record to be deleted.
    var form = document.forms["ErrorsForm"];
    var errorsRadioArray = form.ID;
    var radioEl = this.getSelectedRadioElement(errorsRadioArray);
    if (!radioEl) {
        alert("Please select an error to be cleared");
        return;
    }
    this.updateStatus2("Clear ErrorArchive entry started");
    var deleteErrorsURL = this.getEndPointURL() + "/ErrorArchive" + "(" + radioEl.value + ")";
    var oHeaders = {};
    oHeaders['Authorization'] = this.authStr;
    //oHeaders['X-SMP-APPCID'] = applicationContext.applicationConnectionId;    //this header is provided by the logon plugin
    
    var request = {
        headers : oHeaders,
        requestUri : deleteErrorsURL,
        method : "DELETE"
    };
    OData.request(request, this.showErrors, this.errorCallback);
},
    
haveAppId: function() {
    if (!this.applicationContext) {
        alert("Please register with the SMP Server before proceeding");
        return false;
    }
    return true;
},
    
getDeviceStatusString: function() {
    if (this.online) {
        return "Device is ONLINE";
    }
    else {
        return "Device is OFFLINE";
    }
},
    
deviceOnline: function() {
    var self = com.slb.plantoffline.app.SMPController;
    self.online = true;
    var bus = sap.ui.getCore().getEventBus();
    bus.publish("status", "online", {value:"Online"});
    //this.updateStatus1("");
},
    
deviceOffline: function() {
    var self = com.slb.plantoffline.app.SMPController;
    self.online = false;
    var bus = sap.ui.getCore().getEventBus();
    bus.publish("status", "online", {value:"Offline"});
    //this.updateStatus1("");
},
    
updateStatus1: function(msg) {
    //document.getElementById('statusID').innerHTML = msg + " " + this.getDeviceStatusString();
    console.log(msg + " " + this.getDeviceStatusString());
},
    
updateStatus2: function(msg) {
    //var d = new Date();
    //document.getElementById('statusID2').innerHTML = msg + " at " + this.addZero(d.getHours()) + ":" + this.addZero(d.getMinutes()) + "." + this.addZero(d.getSeconds());
    //console.log(msg + " at " + this.addZero(d.getHours()) + ":" + this.addZero(d.getMinutes()) + "." + this.addZero(d.getSeconds()));
},
    
    
addZero: function(input) {
    if (input < 10) {
        return "0" + input;
    }
    return input;
}
    
    
};