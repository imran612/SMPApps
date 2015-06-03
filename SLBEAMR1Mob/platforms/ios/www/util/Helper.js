/*
 * Copyright 
 */

jQuery.sap.declare("com.slb.eam.mob.util.Helper");

//jQuery.sap.require("sap.m.MessageToast");
//jQuery.sap.require("sap.m.MessageBox");

com.slb.eam.mob.util.Helper = {
    onError: function(msg, url, line) {
        var idx = url.lastIndexOf("/");
        var file = "unknown";
        if (idx > -1) {
            file = url.substring(idx + 1);
        }
        alert("An error occurred in " + file + " (at line # " + line + "): " + msg);
        return false; //suppressErrorAlert;
    },
    
    test1: function() {
        alert("in test");
        alert(appContext);
    },
    readGWONOFF: function() {
        var self = com.slb.eam.mob.util.Helper;
        console.log("in read");
        if(online){
            //sap.OData.applyHttpClient();
            sap.OData.removeHttpClient();
           // self.wasOnlineCall = true;
        }else{
            console.log("gga store is open");
            //  openStore();
           // self.wasOnlineCall = false;
            sap.OData.applyHttpClient();
        }
        if(store==null)
        {
            self.openStore(appContext);
            sap.OData.applyHttpClient();
        }
        //var sURL = "http://us1455saps033.dir.slb.com:8080/com.slb.eam.mob/WOLIST";
        var sURL = appContext.applicationEndpointURL + "/WOLIST";
        var oHeaders = {};
        oHeaders['Authorization'] = self.authStr;
        oHeaders['Accept'] = "application/json";
        oHeaders['x-csrf-token'] = "Fetch";
        var request = {
            headers : oHeaders,
            requestUri : sURL,
            method : "GET"
        };
        OData.read(request, self.readSuccessCallback1, self.errorCallback);
        
    },
readSuccessCallback1: function(data, response) {
        // alert("got data yeah!!");
        var woList=[];
        var woModel = new sap.ui.model.json.JSONModel();
        $(data.results).each(function( i, val ) {
                             woList.push({ "WOId" : val.Orderid,
                                         "Plant"  : val.OrderType,
                                         "WOText"  :val.ShortText,
                                         "RigId": "R2322",
                                         "JobId": "J87799",
                                         "StartDate": "23-Nov-2014"
                                         });
                             
                             });
        woModel.setData(woList);
        sap.ui.getCore().setModel(woModel,"mastermodel");
        oCore.byId("masterlist").fireEvent("drawmaster");
    },
    
readGWData:function() {
        var sUrl = appContext.applicationEndpointURL + "/WOLIST?sap-client=330&$format=json";
        var uri = appContext.applicationEndpointURL;
        // var sUrl = appContext.applicationEndpointURL +"?sap-client=330&$format=json";
        var headers = {"X-SMP-APPCID" : appContext.applicationConnectionId};
        var user = appContext.registrationContext.user;
        var password = appContext.registrationContext.password;
        authStr = "Basic " + btoa(user + ":" + password);
        var oHeaders = {};
        oHeaders['Authorization'] = authStr;
        //oHeaders['X-SMP-APPCID'] = applicationContext.applicationConnectionId;    //this header is provided by the logon plugin
        
        var request = {
            headers : oHeaders,
            requestUri : sUrl,
            method : "GET"
        };
        if(online) {
            sap.OData.removeHttpClient();
            
        } else {
            sap.OData.applyHttpClient();
        }
        OData.read(request, readSuccessCallback, errorCallback);
    },
    
readSuccessCallback:function(data, response) {
        var woList=[];
        var woModel = new sap.ui.model.json.JSONModel();
        $(data.results).each(function( i, val ) {
                             woList.push({ "WOId" : val.Orderid,
                                         "Plant"  : val.OrderType,
                                         "WOText"  :val.ShortText,
                                         "RigId": "R2322",
                                         "JobId": "J87799",
                                         "StartDate": "23-Nov-2014"
                                         });
                             
                             });
        woModel.setData(woList);
        sap.ui.getCore().setModel(woModel,"mastermodel");
        oCore.byId("masterlist").fireEvent("drawmaster");
    },
    
errorCallback:function(e) {
        alert("error "+e);
        alert("An error occurred: " + JSON.stringify(e));
    },
    
openStore:function(context) {
        var self = com.slb.eam.mob.util.Helper;
        var properties = {
            "name": "WOListOfflineStore2",
            "host": appContext.registrationContext.serverHost,
            "port": appContext.registrationContext.serverPort,
            "https": appContext.registrationContext.https,
            "serviceRoot" : appContext.applicationEndpointURL,
            //"streamParams" : "custom_header=Content-Type:application/json",
            "definingRequests" : {
                "WOListReq2" : "/WOLIST"
            }
            
        };
        
        store = sap.OData.createOfflineStore(properties);
        store.onrequesterror = self.errorCallback; //called for each modification error during flush
        //var options = {};
       // var self = com.slb.eam.mob.util.Helper;
        store.open(self.openStoreSuccessCallback, self.errorCallback);
        //store.open(openStoreSuccessCallback, errorCallback/*, options);
    },
    
openStoreSuccessCallback:function() {
        var endTime = new Date();
        var duration = (endTime - startTime)/1000;
    },
    
refreshOnInterval:function() {
        var interval = 300000;  //5 minutes
        timerID = setInterval(function () {refreshStore()}, interval);  //call refreshStore every interval,
        //remove timer in pause event, add back in resume
    },
    
refreshStore:function() {
        console.log("REFRESHSTORE");
        var self = com.slb.eam.mob.util.Helper;
        if (!store) {
            alert("The store must be open before it can be refreshed");
            return;
        }
        if (isDeviceOnline()) {
            startTimeRefresh = new Date();
            //updateStatus2("store.refresh called");
             //var self = com.slb.eam.mob.util.Helper;
            store.refresh(self.refreshStoreCallback, self.errorCallback);
        }
    },
    
refreshStoreCallback:function() {
        var endTime = new Date();
        var duration = (endTime - startTimeRefresh)/1000;
        
    },
    
getDeviceStatusString:function() {
        if (online) {
            return alert("Device is ONLINE");
        }
        else {
            return alert("Device is OFFLINE");
        }
    },
    
isDeviceOnline:function() {
        return online;
    }
    

};