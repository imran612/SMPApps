var devapp = {
	smpInfo : {},
	
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
    },

	
    //========================================================================
    //Cordova Device Ready
    //========================================================================
    onDeviceReady : function() {
     	$.getJSON( "project.json", function( data ) {
			if(data && data.hybrid) {
				devapp.smpInfo.server = data.hybrid.server;
				devapp.smpInfo.port = data.hybrid.port;
				devapp.smpInfo.appID = data.hybrid.appid;
                 // alert(devapp.smpInfo.appID);
			}
    		
			if (devapp.smpInfo.server && devapp.smpInfo.server.length > 0) {
				var context = {
				  "serverHost" : devapp.smpInfo.server,
				  "https" : "true",
                  "user": "P1940099584",// HCPms admin user/ SCN User
                  "password": "08262011Maryam", // HCPms admin password / SCN Password
				  "serverPort" : devapp.smpInfo.port,
                  "communicatorId": "REST",
                  "passcode": "password",
                  "unlockPasscode": "password",
                  "passcode_CONFIRM":"password"
				};
				doLogonInit(context, devapp.smpInfo.appID);
			} else {
				startApp();
			}
    	});
  }
};

