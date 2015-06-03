var devapp = {
    //Application Constructor
    initialize : function() {
        this.bindEvents();
    },

	//========================================================================
	// Bind Event Listeners
	//========================================================================
bindEvents : function() {
        //add an event listener for the Cordova deviceReady event.
        document.addEventListener("deviceready", this.onDeviceReady, false);
         // App must check AppConnect policy state when the app comes to foreground
         document.addEventListener('resume', function() {
                                   devapp.applyAppConnectPolicies();
                                   });
         document.addEventListener('appconnect.authStateChangedTo',
                                   this.onAppConnectAuthStateChangedTo,
                                   false);
         document.addEventListener('appconnect.managedPolicyChangedTo',
                                   this.onAppConnectManagedPolicyChangedTo,
                                   false);
         document.addEventListener('appconnect.isReady',
                                   this.onAppConnectIsReady,
                                   false);
         document.addEventListener('appconnect.openInPolicyChangedTo',
                                   this.onOpenInPolicyChangedTo,
                                   false);
         document.addEventListener('appconnect.pasteboardPolicyChangedTo',
                                   this.onPasteboardPolicyChangedTo,
                                   false);
         document.addEventListener('appconnect.printPolicyChangedTo',
                                   this.onPrintPolicyChangedTo,
                                   false);
         document.addEventListener('appconnect.configChangedTo',
                                   this.onConfigChangedTo,
                                   false);
        document.addEventListener("online", this.deviceOnline, false);
        document.addEventListener("offline", this.deviceOffline, false);
    },

	
    //========================================================================
    //Cordova Device Ready
    //========================================================================
onDeviceReady : function() {
        // Must initialize AppConnect on 'deviceready' event
        AppConnectCordova.initialize();
        // Apply appconnect policies
        devapp.applyAppConnectPolicies();
        // get user register with SMP
        doLogonInit();

  },
    /* Mobile iron hook methods */
    // Change app state based on AppConnect auth policy
applyAppConnectPolicies: function() {
    if (AppConnectCordova.isReady()) {
        /* Should update UI based on AppConnect auth state now
         
         * Display AppConnect policy states. Apps should read the AppConnect policy values and
         * show appropriate UI, disable certain functionality (e.g. Copy/Paste, OpenIn, Print etc.)
         */
        devapp.updateWithAppConnectPolicy();
        devapp.showAppConnectPolicyValues();
    }
    else {
    }
},
updateWithAppConnectPolicy: function() {
    if (AppConnectCordova.authState() == AppConnectCordova.ACAuthState.AUTHORIZED) {
        /*** check if we need to implement this method **/
    }
},
showAppConnectPolicyValues: function() {
     devapp.logStateToConsole("showAppConnectPolicyValues()");
     devapp.logStateToConsole(AppConnectCordova.authState());
     devapp.logStateToConsole(AppConnectCordova.authMessage());
     devapp.logStateToConsole(JSON.stringify(AppConnectCordova.config()));
},
    
onAppConnectAuthStateChangedTo: function (event) {
    devapp.logStateToConsole("onAppConnectAuthStateChangedTo()");
    devapp.logStateToConsole(event.newAuthState);
    devapp.updateWithAppConnectPolicy();
    // Close loop for reporting
    AppConnectCordova.authStateApplied(AppConnectCordova.ACPolicyState.APPLIED);
},
onAppConnectManagedPolicyChangedTo: function (event) {
    // For our purpose we update the status page
    var managedText = event.newManagedPolicy == AppConnectCordova.ACManagedPolicy.MANAGED ? "YES" : "NO";
    devapp.logStateToConsole("onAppConnectManagedPolicyChangedTo " +managedText);
},
onAppConnectIsReady: function (event) {
    // Ready to read AppConnect properties
    devapp.logStateToConsole("onAppConnectIsReady()");
    devapp.showAppConnectPolicyValues();
},
onOpenInPolicyChangedTo: function (event) {
    var openInPolicyText = event.newOpenInPolicy == AppConnectCordova.ACOpenInPolicy.UNAUTHORIZED ? "Disabled" : "Enabled";
    devapp.logStateToConsole(openInPolicyText);
    // Close loop for reporting
    AppConnectCordova.openInPolicyApplied(AppConnectCordova.ACPolicyState.APPLIED);
},
    
onPasteboardPolicyChangedTo: function (event) {
    var pasteboardPolicyText = event.newPasteboardPolicy == AppConnectCordova.ACPasteboardPolicy.UNAUTHORIZED ? "Disabled" : "Enabled";
    devapp.logStateToConsole(pasteboardPolicyText);
    // Close loop for reporting
    AppConnectCordova.pasteboardPolicyApplied(AppConnectCordova.ACPolicyState.APPLIED);
},
    
onPrintPolicyChangedTo: function (event) {
    var printPolicyText = event.newPrintPolicy == AppConnectCordova.ACPrintPolicy.UNAUTHORIZED ? "Disabled" : "Enabled";
    devapp.logStateToConsole(printPolicyText);
    // Close loop for reporting
    // Example of unsupported policy. UNSUPPORTED
    AppConnectCordova.printPolicyApplied(AppConnectCordova.ACPolicyState.UNSUPPORTED, "Print policy is unsupported.");
},
    
onConfigChangedTo: function (event) {
    devapp.logStateToConsole(JSON.stringify(event.newConfig));
    if (event.newConfig.hasOwnProperty("GoodConfig")) {
        AppConnectCordova.configApplied(AppConnectCordova.ACPolicyState.APPLIED, "Applied");
    }
    else {
        AppConnectCordova.configApplied(AppConnectCordova.ACPolicyState.ERROR, "Unknown config");
    }
},
logStateToConsole: function(name) {
    var authState = AppConnectCordova.authState();
    var origIsReady = AppConnectCordova.isReady();
    var managed = AppConnectCordova.managed();
    console.log( name + " -- isReady: " + origIsReady + " authState: " + authState + " managed: " + managed);
},
    /* end of mobile iron hook methods */
    
deviceOnline: function() {
    online = true;
    //sap.OData.removeHttpClient();
    alert("Device online.");
},
 
deviceOffline: function() {
    online = false;
    //sap.OData.applyHttpClient();
    alert("Using Offline Store.");
}
    
};

