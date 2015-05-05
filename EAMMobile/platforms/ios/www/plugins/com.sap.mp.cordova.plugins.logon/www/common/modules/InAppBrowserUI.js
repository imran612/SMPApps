cordova.define("com.sap.mp.cordova.plugins.logon.LogonIabUi", function(require, exports, module) {     var utils = sap.logon.Utils;
    var staticScreens = sap.logon.StaticScreens;
    var dynamicScreens = sap.logon.DynamicScreens;
    
    var windowRef;
    var events;
	
	var onWindowReady;
    var lastOperation;
    
    var state = 'NO_WINDOW';
    var currentScreenID;
    var previousScreenID;
    var currentContext;
    var previousContext;
    
    function findCordovaPath() {
        var path = null;
        var scripts = document.getElementsByTagName('script');
        var term = 'cordova.js';
        for (var n = scripts.length-1; n>-1; n--) {
            var src = scripts[n].src;
            if (src.indexOf(term) == (src.length - term.length)) {
                path = src.substring(0, src.length - term.length);
                break;
            }
        }
        return path;
    }
    
    var showScreenWithCheck = function(screenId, screenEvents, context) {
      //check whether application wants to handle the showScreen event
      previousScreenID = currentScreenID;
      previousContext = currentContext
      currentScreenID = screenId;
      currentContext = context;
      
	  var bypassDefaultShowScreen = false;
      if (this.onShowScreen){
         bypassDefaultShowScreen = this.onShowScreen(screenId, screenEvents, currentContext);
      }
    
      if (!bypassDefaultShowScreen){
          if (state === 'ANDROID_STATE_SAML') {
				// ANDROID_STATE_SAML is an Android-specific state, necessary because the InAppBrowser behaves
				// differently on Android.  On iOS, if an InAppBrowser is launched while an old InAppBrowser
				// is still around, the old one is destroyed.  On Android, the old one will still exist,
				// but can no longer be closed (it is leaked, effectively).  This piece of code will make
				// sure the InAppBrowser is closed before launching the InAppBrowser again.
				utils.log('IAB showScreenWithCheck, ANDROID_STATE_SAML');
				windowRef.removeEventListener('loadstart', iabLoadStart);
				windowRef.removeEventListener('loadstop', iabLoadStop);
				windowRef.removeEventListener('loaderror', iabLoadError);
				windowRef.removeEventListener('exit', iabExit);

				windowRef.addEventListener('exit', function(){
					// The plugin resources must be relative to cordova.js to resolve for
					// the case that cordova and plugins are local and the application resources/code
					// is remote.
					var pathToIabHtml = findCordovaPath() + 'smp/logon/ui/iab.html';
					if (device.platform == 'Android' && pathToIabHtml.toLowerCase().indexOf("https://actuallylocalfile")===0) {
						pathToIabHtml = "file:///android_asset/www/smp/logon/ui/iab.html";
					}
					// use setTimeout to give the first InAppBrowser time to close before opening a new
					// InAppBrowser (which would make the first unclosable if it was still open).
					setTimeout(function(){
						windowRef = newScreen(pathToIabHtml);
					}, 100);
				});
				windowRef.close();
				state = 'INIT_IN_PROGRESS';
				lastOperation = function() {
					showScreen(screenId, screenEvents, currentContext);
				}
				onWindowReady = function(){
					state = 'READY';
					if (lastOperation) {
						lastOperation();
					}
				};
            } else if (state === 'NO_WINDOW') {
                utils.log('IAB showScreenWithCheck, NO_WINDOW');
                state = 'INIT_IN_PROGRESS';
                lastOperation = function() {
                    showScreen(screenId, screenEvents, currentContext);
                }
                onWindowReady = function(){
                    state = 'READY';
                    if (lastOperation) {
                        lastOperation();
                      }

                };
               
                // The plugin resources must be relative to cordova.js to resolve for
                // the case that cordova and plugins are local and the application resources/code
                // is remote.
                var pathToIabHtml = findCordovaPath() + 'smp/logon/ui/iab.html';
                if (device.platform == 'Android' && pathToIabHtml.toLowerCase().indexOf("https://actuallylocalfile")===0) {
                    pathToIabHtml = "file:///android_asset/www/smp/logon/ui/iab.html";
                }
                windowRef = newScreen(pathToIabHtml);
            }
            else if (state === 'INIT_IN_PROGRESS') {
                utils.log('IAB showScreenWithCheck, INIT_IN_PROGRESS');
                lastOperation = function() {
                    showScreen(screenId, screenEvents, currentContext);
                }
            }
            else if (state === 'READY') {
                utils.log('IAB showScreenWithCheck, READY');
                showScreen(screenId, screenEvents, currentContext);
            }
       }
		
	};

	var showNotification = function(notificationKey) {
        utils.log('iabui showNotification');
        
        var bypassShowNotification = false;

		if (this.onShowNotification){
           bypassShowNotification = this.onShowNotification(currentScreenID, notificationKey);
        }
        
		if (!bypassShowNotification) {
		    if (!windowRef) {
		        // TODO check whether we need to handle the case if there is no windowref
		        throw 'No windowref';
		    }

		    var payload = "showNotification(\"" + notificationKey + "\");";
		    //utils.log('payload: ' + payload); -> do not log payload as it may contain sensitive information

		    if (cordova.require("cordova/platform").id.indexOf("windows") === 0) {
		        // The iab.html SHOULD execute the payload!
		        //Windows8 changes: changes
		        SAP.InAppBrowser.InAppBrowserHelper.executeScript(payload);
		    }
		    else {
		        windowRef.executeScript(
                    { code: payload },
                    function (param) {
                        utils.log('executeScript returned:' + JSON.stringify(param));
                    });
		    }
		}
	};
	
	var showScreen = function(screenId, screenEvents, currentContext) {
        utils.log('showScreen' + screenId);
        utils.log(screenEvents);
        if (currentContext) {
        	   utils.logJSON(currentContext);
        }
        // saving event callbacks (by-id map)
        events = screenEvents;
		
        var uiDescriptor;
        if (screenId === "SCR_GET_CERTIFICATE_PROVIDER_PARAMETER"){
            // saving event callbacks (by-id map)
            uiDescriptor = {"viewID":currentContext.viewID};
        }
        else if (screenId == "SCR_SAML_AUTH"){
              var url = "https://"+currentContext.serverHost+":"+currentContext.serverPort+"/odata/applications/v1/"+currentContext.applicationId+"/Connections";

             if (device.platform == 'iOS') {
               
                   // SAML against an SMP server requires the first request to have the application id to set
                     // a proper X-SMP-SESSID cookie. The url constructed as below works. This extra request
                     // has no effect against HMC.
                    sap.AuthProxy.sendRequest("GET",url,null,null,
                          function(){
                            //For ios inappbrowser, if window.location is used to update the html content, then 		
                            //the uiwebview will not be released when dismissing the webview. A workaround is
                            //display cancel button for ios client 
                            if (previousScreenID){  //for ios, if no previous screen needs to restore, then the logonview will be closed by onFlowSuccess, no need to clear the window separately
                                clearWindow();
                            }
                            var path =   currentContext["config"]["saml2.web.post.finish.endpoint.uri"];
                            windowRef = window.open( path, '_blank', 'location=no,toolbar=yes,overridebackbutton=yes,allowfileaccessfromfile=yes,closebuttoncaption=Cancel,hidenavigation=yes');
                            windowRef.addEventListener('loadstart', iabLoadStart);
                            windowRef.addEventListener('loadstop', iabLoadStop);
                            windowRef.addEventListener('loaderror', iabLoadError);
                            windowRef.addEventListener('exit', iabExit);
                            windowRef.addEventListener('backbutton', function(){
                                if (events['onbackbutton']) {
                                    utils.log('IABUI onbackbutton');
                                    events['onbackbutton']();
                                }
                                else if (events['oncancel']) {
                                    utils.log('IABUI onbackbutton oncancel');
                                    events['oncancel']();
                                }
                            });

                          },
                          function(e){
                            console.log("InAppBrowserUI.js: error sending initial SAML request" + JSON.stringify(e));
                          }
                    );
               
               
            }
            else {
                 var payload = "window.location=\"" + currentContext["config"]["saml2.web.post.finish.endpoint.uri"] + "\"";
                 /* Windows8 changes: invoke the script through the native code. */
                 if (cordova.require("cordova/platform").id.indexOf("windows") === 0) {
                     MSApp.execUnsafeLocalFunction(function () {
                         // The iab.html SHOULD execute the payload!
                         SAP.InAppBrowser.InAppBrowserHelper.executeScript(payload);
                     });
                 }
                 else {
                     // SAML against an SMP server requires the first request to have the application id to set
                     // a proper X-SMP-SESSID cookie. The url constructed as below works. This extra request
                     // has no effect against HMC.
                     sap.AuthProxy.sendRequest("GET",url,null,null,function(){
                         windowRef.executeScript(
                             { code: payload },
                             function (param) {
                                 utils.log('executeScript returned:' + JSON.stringify(param));
                             });
                     },function(e){console.log("InAppBrowserUI.js: error sending initial SAML request" + JSON.stringify(e));});
                 }
             }
            
         
			
            // On Android the SAML inAppBrowser stuff has to be handled differently.
            if (device.platform.toLowerCase().indexOf("android") >= 0) {
                state = "ANDROID_STATE_SAML";
            }
            return;
        }
        else{
             uiDescriptor = staticScreens.getScreen(screenId);
        }
        
        
        if (!uiDescriptor) {
            uiDescriptor = dynamicScreens.getScreen(screenId);
        }
        if (!uiDescriptor) {
            screenEvents.onerror(new utils.Error('ERR_UNKNOWN_SCREEN_ID', screenId));
        }
        
        
		var uiDescriptorJSON = JSON.stringify(uiDescriptor);
		utils.log('InAppBrowserUI.showScreen(): ' + uiDescriptorJSON);
		utils.log('windowRef: ' + windowRef);
		
        
		var defaultContextJSON = '""';
        if (currentContext){
            if (screenId === "SCR_GET_CERTIFICATE_PROVIDER_PARAMETER" || currentContext.registrationContext == null){
                defaultContextJSON = JSON.stringify(currentContext);
            }
            else {
                if (currentContext.busy){
                    currentContext.registrationContext.busy = currentContext.busy;
                }
                defaultContextJSON = JSON.stringify(currentContext.registrationContext);
            }
        }
        		
        var payload = "showScreen(" + uiDescriptorJSON + "," + defaultContextJSON + ");";
	    /* Windows8 changes: invoke the script through the native code. */
        if (cordova.require("cordova/platform").id.indexOf("windows") === 0) {
            MSApp.execUnsafeLocalFunction(function () {
                // The iab.html SHOULD execute the payload!
                SAP.InAppBrowser.InAppBrowserHelper.executeScript(payload);
            });
        }
        else {
            windowRef.executeScript(
				{ code: payload },
				function (param) {
				    utils.log('executeScript returned:' + JSON.stringify(param));
				});
        }
	}
    
	var evalIabEvent = function (event) {
	    /* Windows8 changes */
        var windows = cordova.require("cordova/platform").id.indexOf("windows") === 0;
        if (windows) {
	        event = JSON.parse(event);
	    }
               
        //for ios, the loadstop event is not fired for # command
        //for android, the loadstart event is not fired for # command
        //with the saml support, the loadstop event is used to detect saml auth finish flag for both ios and andorid client
        var handleEvent = {
            android :
            {
               loadstart: false,
               loadstop: true
            },
            ios :
            {
               loadstart: true,
               loadstop: false
            }
        };
               
        //The logic is:
        //1. for # command, android fire eithe loadstop or loadstart event to logoncontroller.
        //2. saml event will be fired only on loadstop event

        var url = document.createElement('a');
		url.href = event.url;
		var hash = unescape(url.hash.toString());
		
		var fragments = hash.match(/#([A-Z]+)(\+.*)?/);
        if (fragments) {
            if (windows || handleEvent[cordova.require("cordova/platform").id][event.type])
            {
                var eventId = 'on' + fragments[1].toLowerCase();
                var resultContext;
                if (fragments[2]) {
                    // TODO Pass on as a string, or deserialize ?
                    resultContext = JSON.parse(fragments[2].substring(1));
                    //resultContext = fragments[2].substring(1);
                }

                if (typeof eventId === 'string' && eventId !== null ) {
                    utils.log('event: "' + eventId + '"');
                    //utils.logKeys(events[eventId] + '');
                    if (eventId === 'onready' && state === 'INIT_IN_PROGRESS') {
                        utils.log('IAB calling onwindowready');
                        onWindowReady();
                    } else if (eventId === 'onlog') {
                        utils.log('IAB CHILDWINDOW:' + resultContext.msg);;
                    }
                    else if (events[eventId]) {
                        utils.log('calling parent callback');
                        utils.logJSON(resultContext);
                        
                        events[eventId](resultContext);
                    }
                    else {
                        utils.log('invalid event: ' + eventId);
                    }
                }
            }
            else {
                utils.log('invalid event');
            }
        }
        else{
            if (event.type== 'loadstop') {
               utils.log(event);
                if (events && events["onevent"]) {
                    events["onevent"](event);
                }
                else {
                    utils.log('no events to process');
                }
            }
		}
    }
	
	var iabLoadStart = function(event) {
		utils.log('IAB loadstart: ' + device.platform ); // JSON.stringify(event), do not log url as it may contain sensitive information
        evalIabEvent(event);
	};
	var iabLoadError = function(event) {
		utils.log('IAB loaderror: ' + event.url);
	};
	var iabExit = function(event) {
		utils.log('IAB exit: ' + event.url);
		//close();
		state = 'NO_WINDOW';
		lastOperation = null;
		
		setTimeout(events['oncancel'], 30);
	};
	
	var iabLoadStop = function(event) {
		utils.log('IAB loadstop: ' + + device.platform ); //  JSON.stringify(event), do not log url as it may contain sensitive informatio
        evalIabEvent(event);
	};
	
	
	var newScreen = function (path) {
	    utils.log("create newScreen" + path);

	    /* Windows8 changes */
	    if (cordova.require("cordova/platform").id.indexOf("windows") === 0) {
	        SAP.InAppBrowser.InAppBrowserHelper.trigger = evalIabEvent;
	    }

		var windowRef = window.open( path, '_blank', 'location=no,toolbar=no,overridebackbutton=yes,allowfileaccessfromfile=yes,closebuttoncaption=Cancel,hidenavigation=yes');
 		windowRef.addEventListener('loadstart', iabLoadStart);
		windowRef.addEventListener('loadstop', iabLoadStop);
		windowRef.addEventListener('loaderror', iabLoadError);
		windowRef.addEventListener('exit', iabExit);
		windowRef.addEventListener('backbutton', function(){
			if (state === 'ANDROID_STATE_SAML'){
				// Close the InAppBrowser if the user presses back from the SAML authentication page.
				// This will result in onFlowCancel being invoked.
				windowRef.close();
			} else if (events['onbackbutton']) {
				utils.log('IABUI onbackbutton');
				events['onbackbutton']();
			}
			else if (events['oncancel']) {
				utils.log('IABUI onbackbutton oncancel');
				events['oncancel']();
			}
		});
		return windowRef;
	}
	
    
    
	var close = function() {
        
		if (state === 'NO_WINDOW') {
			utils.log('IAB close, NO_WINDOW');
		}
		else if (state === 'INIT_IN_PROGRESS') {
			utils.log('IAB close, INIT_IN_PROGRESS');
			lastOperation = clearWindow;			
		}
		else if (state === 'READY') {
			utils.log('IAB close, READY');
			clearWindow();
		}
        else if (state === "ANDROID_STATE_SAML" && !previousScreenID){ //for android, the SAML window is closed when showing the previous screen, if no previous screen, then just close it
			clearWindow();
		}
    }

	var clearWindow = function(bKeepOpen) {
		utils.log('IAB clear window' + bKeepOpen);
        if (bKeepOpen === undefined){
            bKeepOpen = false;
        }
        
		windowRef.removeEventListener('loadstart', iabLoadStart);
		windowRef.removeEventListener('loadstop', iabLoadStop);
		windowRef.removeEventListener('loaderror', iabLoadError);
		windowRef.removeEventListener('exit', iabExit);
		if (!bKeepOpen){
            windowRef.close();
        }
		windowRef = null;
		state = 'NO_WINDOW';
	}
    
    var getPreviousScreenID = function() {
        return previousScreenID;
    }
 
    var getPreviousContext = function() {
        return previousContext;
    }

	
//=================== Export with cordova ====================

    module.exports = {
    		showScreen: showScreenWithCheck,
			close: close,
			showNotification: showNotification,
            getPreviousScreenID: getPreviousScreenID,
            getPreviousContext: getPreviousContext,
            clearWindow:clearWindow
        };


});
