var appContext;
var authStr = "";
var startTime = null;
var store = null;
var startTimeRefresh = null;
var online = navigator.onLine;


/********************************************************************
 * Initialize the application
 * In this case, it will check first of the application has already
 * registered with the SMP server. If not, it will register the app
 * then proceed to manage the logon process.
 ********************************************************************/
function doLogonInit(context, appId) {
  //Init needs to happen before anything else.
  console.log("Entering doLogonInit");
 jQuery.sap.require("sap.ui.thirdparty.datajs");
  //Is there a host address populated?
  if (context.serverHost.length < 1) {
    //If not, nothing we can do now
    console.log("You must set the SMP Server address before you can initialize the server connection.");
    return;
  }
  //Make call to Logon's Init method to get things registered and all setup
  if (window.sap_webide_companion) {
	sap.Logon.initPasscodeManager(onLogonInitSuccess, onLogonError, appId);
  } else {
	sap.Logon.init(onLogonInitSuccess, onLogonError, appId, context);
  }
  console.log("Leaving doLogonInit");
}

var onLogonInitSuccess = function(context) {
  console.log("Entering LogonInitSuccess");
  //Make sure Logon returned a context for us to work with
  if (context) {
    //Store the context away to be used later if necessary
      appContext = context;
      startApp();
  } else {
    //Something went seriously wrong here, context is not populated
    console.error("context null");
  }
  console.log("Leaving LogonInitSuccess");
};

var onLogonError = function(errObj) {
  //Generic error function, used as a callback by several of the methods
  console.error("Entering logonError");
  //write the contents of the error object to the console.
  console.error(JSON.stringify(errObj));
  console.error("Leaving logonError");
};

/********************************************************************
 * Delete the application's registration information
 * Disconnects the app from the SMP server
 ********************************************************************/
function doDeleteRegistration() {
  console.log("Entering doDeleteRegistration");
  if (appContext) {
    //Call logon's deleteRegistration method
    sap.Logon.core.deleteRegistration(onDeleteRegistrationSuccess, onLogonError);
  } else {
    //nothing to do here, move along...
    var msg = "The application is not initialized, cannot delete context";
    console.log(msg);
  }
  console.log("Leaving doDeleteRegistrationU");
}

function onDeleteRegistrationSuccess(res) {
  console.log("Entering unregisterSuccess");
  console.log("Unregister result: " + JSON.stringify(res));
  //Set appContext to null so the app will know it's not registered
  appContext = null;
  //reset the app to its original packaged version
  //(remove all updates retrieved by the AppUpdate plugin)
  sap.AppUpdate.reset();
  console.log("Leaving unregisterSuccess");
}

/********************************************************************
 * Lock the DataVault
 ********************************************************************/
function doLogonLock() {
  console.log("Entering doLogonLock");
  //Everything here is managed by the Logon plugin, there's nothing for
  //the developer to do except to make the call to lock to
  //Lock the DataVault
  sap.Logon.lock(onLogonLockSuccess, onLogonError);
  console.log("Leaving doLogonLock");
}

var onLogonLockSuccess = function() {
  console.log("Entering logonLockSuccess");
  console.log("Leaving logonLockSuccess");
};

/********************************************************************
 * Unlock the DataVault
 ********************************************************************/
function doLogonUnlock() {
  console.log("Entering doLogonUnlock");
  //Everything here is managed by the Logon plugin, there's nothing for
  //the developer to do except to make the call to unlock.
  //we'll be using the same success callback as
  //with init as the signatures are the same and have the same functionality
  sap.Logon.unlock(onLogonInitSuccess, onLogonError);
  console.log("Leaving doLogonUnlock");
}

/********************************************************************
 * Show the application's registration information
 ********************************************************************/
function doLogonShowRegistrationData() {
  console.log("Entering doLogonShowRegistrationData");
  //Everything here is managed by the Logon plugin, there's nothing for
  //the developer to do except to make a call to showRegistratioData
  sap.Logon.showRegistrationData(onShowRegistrationSuccess, onShowRegistrationError);
  console.log("Leaving doLogonShowRegistrationData");
}

function onShowRegistrationSuccess() {
  console.log("Entering showRegistrationSuccess");
  //Nothing to see here, move along...
  console.log("Leaving showRegistrationSuccess");
}

function onShowRegistrationError(errObj) {
  console.log("Entering showRegistrationError");
  console.error(JSON.stringify(errObj));
  console.log("Leaving showRegistrationError");
}

/********************************************************************
 * Update the DataVault password for the user
 ********************************************************************/
function doLogonChangePassword() {
  console.log("Entering doLogonChangePassword");
  //Everything here is managed by the Logon plugin, there's nothing for
  //the developer to do except to make the call to changePassword
  sap.Logon.changePassword(onPasswordSuccess, onPasswordError);
  console.log("Leaving doLogonChangePassword");
}

/********************************************************************
 * Change the DataVaule passcode
 ********************************************************************/
function doLogonManagePasscode() {
  console.log("Entering doLogonManagePassword");
  //Everything here is managed by the Logon plugin, there's nothing for
  //the developer to do except to make the call to managePasscode
  sap.Logon.managePasscode(onPasswordSuccess, onPasswordError);
  console.log("Leaving doLogonManagePassword");
}

function onPasswordSuccess() {
  console.log("Entering passwordSuccess");
  //Nothing to see here, move along...
  console.log("Leaving passwordSuccess");
}

function onPasswordError(errObj) {
  console.error("Entering passwordError");
  console.error("Password/passcode error");
  console.error(JSON.stringify(errObj));
  console.error("Leaving passwordError");
}

/********************************************************************
 * Read/Write values from the DataVault
 ********************************************************************/
function doLogonSetDataVaultValue(theKey, theValue) {
  console.log("Entering doLogonSetDataVaultValue");
  
  //Make sure we have both a key and a value before continuing
  //No sense writing a blank value to the DataVault
  if (theKey !== "" && theValue !== "") {
    console.log("Writing values to the DataVault");
    //Write the values to the DataVault
    sap.Logon.set(onDataVaultSetSuccess, onDataVaultSetError, theKey, theValue);
  } else {
    //One of the input values is blank, so we can't continue
    console.error("Key and/or value missing.");
  }
  console.log("Leaving doLogonSetDataVaultValue");
}

function onDataVaultSetSuccess() {
  console.log("Entering dataVaultSetSuccess");
  //Clear out the input fields
  //Cordova alerts are asynchronous, so this code will likely clear the input
  //fields before the alert dialog displays
  console.log("Leaving dataVaultSetSuccess");
}

function onDataVaultSetError(errObj) {
  console.error("Entering dataVaultSetError");
  console.error("Error writing to the DataVault");
  console.error("Leaving dataVaultSetError");
}

function doLogonGetDataVaultValue(theKey) {
  console.log("Entering doLogonGetDataVaultValue");
  //Make sure we have a key before continuing
  if (theKey !== "") {
    console.log("Reading value for " + theKey + " from the DataVault");
    //Read the value from the DataVault
    sap.Logon.get(onDataVaultGetSuccess, onDataVaultGetError, theKey);
  } else {
    //One of the input values is blank, so we can't continue
    console.error("Value for key missing.");
  }
  console.log("Leaving doLogonGetDataVaultValue");
}

function onDataVaultGetSuccess(value) {
  console.log("Entering dataVaultGetSuccess");
  console.log("Received: " + JSON.stringify(value));
  console.log("Leaving dataVaultGetSuccess");
}

function onDataVaultGetError(errObj) {
  console.error("Entering dataVaultGetError");
  console.error(JSON.stringify(errObj));
  console.error("Leaving dataVaultGetError");
}
function readGWONOFF() {
    console.log("in read");
    if(online){
        //sap.OData.applyHttpClient();
        sap.OData.removeHttpClient();
        self.wasOnlineCall = true;
    }else{
        console.log("gga store is open");
      //  openStore();
        self.wasOnlineCall = false;
        sap.OData.applyHttpClient();
    }
    if(store==null)
    {
        openStore(appContext);
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
    OData.read(request, readSuccessCallback1, errorCallback);
    
}
function readSuccessCallback1(data, response) {
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
}

function readGWData() {
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
}
function readSuccessCallback(data, response) {
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
} 
function errorCallback(e) {
    alert("error "+e);
    alert("An error occurred: " + JSON.stringify(e));
}

function openStore(context) {
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
    store.onrequesterror = errorCallback; //called for each modification error during flush
    //var options = {};
    store.open(openStoreSuccessCallback, errorCallback);
    //store.open(openStoreSuccessCallback, errorCallback/*, options);
}

function openStoreSuccessCallback() {
    var endTime = new Date();
    var duration = (endTime - startTime)/1000;
}

function refreshOnInterval() {
    var interval = 300000;  //5 minutes
    timerID = setInterval(function () {refreshStore()}, interval);  //call refreshStore every interval,
    //remove timer in pause event, add back in resume
}
 function refreshStore() {
    console.log("REFRESHSTORE");
    if (!store) {
        alert("The store must be open before it can be refreshed");
        return;
    }
    if (isDeviceOnline()) {
        startTimeRefresh = new Date();
        //updateStatus2("store.refresh called");
        store.refresh(refreshStoreCallback, errorCallback);
    }
}

function refreshStoreCallback() {
    var endTime = new Date();
    var duration = (endTime - startTimeRefresh)/1000;
    
}

function getDeviceStatusString() {
    if (online) {
        return alert("Device is ONLINE");
    }
    else {
        return alert("Device is OFFLINE");
    }
}

function isDeviceOnline() {
    return online;
}



