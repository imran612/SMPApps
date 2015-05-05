var devapp = {
	smpInfo : {},
	externalURL : null,
	
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
        // document.addEventListener("online", deviceOnline, false);
         //document.addEventListener("offline", deviceOffline, false);
    },

	
    //========================================================================
    //Cordova Device Ready
    //========================================================================
    onDeviceReady : function() {
        // Must initialize AppConnect on 'deviceready' event
        AppConnectCordova.initialize();
        // Apply appconnect policies
        devapp.applyAppConnectPolicies();
        // Here goes rest of the app logic
        
     	$.getJSON( "project.json", function( data ) {
			if(data && data.hybrid) {
				devapp.smpInfo.server = data.hybrid.server;
				devapp.smpInfo.port = data.hybrid.port;
				devapp.smpInfo.appID = data.hybrid.appid;
				
				//external Odata service url
				if(data.hybrid.externalURL && data.hybrid.externalURL.length > 0) {
					devapp.externalURL = data.hybrid.externalURL;
				}
			}
    		
			if (devapp.smpInfo.server && devapp.smpInfo.server.length > 0) {
				var context = {
				  "serverHost" : devapp.smpInfo.server,
				  "https" : "false",
				  "serverPort" : devapp.smpInfo.port,
                  "user": "",// ihms612@gmail.com HCPms admin user/ SCN User
                  "password": "", // Hisham@2014 HCPms admin password / SCN Password
                  "serverPort" : devapp.smpInfo.port,
                  //"communicatorId": "REST",
                  "passcode": "",
                  "unlockPasscode": "",
                  "passcode_CONFIRM":""
				};
				doLogonInit(context, devapp.smpInfo.appID);
			} else {
				startApp();
			}
    	});
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
        // Enable
       // alert("updateWithAppConnectPolicy -- authorized");
        //document.getElementById('control').style.display = 'block';
        //document.getElementById('pagedisplay').style.display = 'block';
    }
    else {
        // Disable
        //alert("updateWithAppConnectPolicy -- unauthorized");
       // document.getElementById('control').style.display = 'none';
        //document.getElementById('pagedisplay').style.display = 'none';
    }
},
showAppConnectPolicyValues: function() {
    //alert("in showAppConnectPolicyValues -- Following config are received from MI "+JSON.stringify(AppConnectCordova.config()));
    //alert("in showAppConnectPolicyValues -- authstate" +AppConnectCordova.authState());
    //alert("in showAppConnectPolicyValues -- authMessage" +AppConnectCordova.authMessage());
     devapp.logStateToConsole("showAppConnectPolicyValues()");
     devapp.logStateToConsole(AppConnectCordova.authState());
     devapp.logStateToConsole(AppConnectCordova.authMessage());
      devapp.logStateToConsole(JSON.stringify(AppConnectCordova.config()));
   /* var authStateText = AppConnectCordova.authState() == AppConnectCordova.ACAuthState.UNAUTHORIZED ? "<font color=\"red\">Unauthorized</font>" :
    AppConnectCordova.authState() == AppConnectCordova.ACAuthState.AUTHORIZED ? "<font color=\"green\">Authorized</font>" :
    "<font color=\"red\">Retired</font>";
    document.getElementById('authstate').innerHTML = authStateText;
    
    document.getElementById('authmessage').innerHTML = AppConnectCordova.authMessage();
    
    var managedText = AppConnectCordova.managedPolicy() == AppConnectCordova.ACManagedPolicy.MANAGED ? "YES" : "NO";
    document.getElementById('managed').innerHTML = managedText;
    
    var pasteboardPolicyText = AppConnectCordova.pasteboardPolicy() == AppConnectCordova.ACPasteboardPolicy.UNAUTHORIZED ? "Disabled" : "Enabled";
    document.getElementById('pasteboard').innerHTML = pasteboardPolicyText;
    
    var openInPolicyText = AppConnectCordova.openInPolicy() == AppConnectCordova.ACOpenInPolicy.UNAUTHORIZED ? "Disabled" : "Enabled";
    document.getElementById('openin').innerHTML = openInPolicyText;
    
    document.getElementById('openinwhitelist').innerHTML = JSON.stringify(AppConnectCordova.openInWhitelist());
    
    var printPolicyText = AppConnectCordova.printPolicy() == AppConnectCordova.ACPrintPolicy.UNAUTHORIZED ? "Disabled" : "Enabled";
    document.getElementById('print').innerHTML = printPolicyText;
    
    var secureFileIOPolicyText = AppConnectCordova.secureFileIOPolicy() == AppConnectCordova.ACSecureFileIOPolicy.OPTIONAL ? "Optional" : "Required";
    document.getElementById('securefileio').innerHTML = secureFileIOPolicyText;
    
    document.getElementById('appconfig').innerHTML = JSON.stringify(AppConnectCordova.config()); */
   // alert("showAppConnectPolicyValues --"+ JSON.stringify(AppConnectCordova.config()));
},
    
onAppConnectAuthStateChangedTo: function (event) {
    devapp.logStateToConsole("onAppConnectAuthStateChangedTo()");
    devapp.logStateToConsole(event.newAuthState);
    
    // Do something with the new auth state
    
    // For our purpose we update the status page
   /* var authStateText = event.newAuthState == AppConnectCordova.ACAuthState.UNAUTHORIZED ? "<font color=\"red\">Unauthorized</font>" :
    event.newAuthState == AppConnectCordova.ACAuthState.AUTHORIZED ? "<font color=\"green\">Authorized</font>" :
    "<font color=\"red\">Retired</font>";
    document.getElementById('authstate').innerHTML = authStateText;
    document.getElementById('authmessage').innerHTML = event.authMessage; */
    
    devapp.updateWithAppConnectPolicy();
    
    // Close loop for reporting
    AppConnectCordova.authStateApplied(AppConnectCordova.ACPolicyState.APPLIED);
},
onAppConnectManagedPolicyChangedTo: function (event) {
    // Only required for Dual Mode apps
    //app.logStateToConsole("onAppConnectManagedPolicyChangedTo()");
    
    // For our purpose we update the status page
    var managedText = event.newManagedPolicy == AppConnectCordova.ACManagedPolicy.MANAGED ? "YES" : "NO";
    devapp.logStateToConsole("onAppConnectManagedPolicyChangedTo " +managedText);
   // alert("onAppConnectManagedPolicyChangedTo "+managedText);
    //document.getElementById('managed').innerHTML = managedText;
},
onAppConnectIsReady: function (event) {
    // Ready to read AppConnect properties
    devapp.logStateToConsole("onAppConnectIsReady()");
    
    devapp.showAppConnectPolicyValues();
},
onOpenInPolicyChangedTo: function (event) {
    // Do something with the new Open-In policy
    // We will just update the status page
    
    var openInPolicyText = event.newOpenInPolicy == AppConnectCordova.ACOpenInPolicy.UNAUTHORIZED ? "Disabled" : "Enabled";
    devapp.logStateToConsole(openInPolicyText);
    //document.getElementById('openin').innerHTML = openInPolicyText;
    //document.getElementById('openinwhitelist').innerHTML = JSON.stringify(event.newWhitelist);
    
    // Close loop for reporting
    AppConnectCordova.openInPolicyApplied(AppConnectCordova.ACPolicyState.APPLIED);
},
    
onPasteboardPolicyChangedTo: function (event) {
    var pasteboardPolicyText = event.newPasteboardPolicy == AppConnectCordova.ACPasteboardPolicy.UNAUTHORIZED ? "Disabled" : "Enabled";
    //document.getElementById('pasteboard').innerHTML = pasteboardPolicyText;
    devapp.logStateToConsole(pasteboardPolicyText);
    // Close loop for reporting
    AppConnectCordova.pasteboardPolicyApplied(AppConnectCordova.ACPolicyState.APPLIED);
},
    
onPrintPolicyChangedTo: function (event) {
    var printPolicyText = event.newPrintPolicy == AppConnectCordova.ACPrintPolicy.UNAUTHORIZED ? "Disabled" : "Enabled";
    //document.getElementById('print').innerHTML = printPolicyText;
    devapp.logStateToConsole(printPolicyText);
    // Close loop for reporting
    // Example of unsupported policy. UNSUPPORTED
    AppConnectCordova.printPolicyApplied(AppConnectCordova.ACPolicyState.UNSUPPORTED, "Print policy is unsupported.");
},
    
onConfigChangedTo: function (event) {
    //alert("in onConfigChangedTo -- received new policy from MI " +JSON.stringify(event.newConfig));
    devapp.logStateToConsole(JSON.stringify(event.newConfig));
    //document.getElementById('appconfig').innerHTML = JSON.stringify(event.newConfig);
    // Close loop for reporting
    // Example of ERROR in the policy values. In this example config would return error if it does
    // see "GoodConfig" key in the config dictionary
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
}
    /* end of mobile iron hook methods */
};

