/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	defaultUrl: "",
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
		app.getPreviewURL(function (retrievedPreviewURL) {
			app.refreshPreviewFrame();
			var ifr = document.getElementById('ifr1');
			if (!ifr) {
				alert("iframe does not exist");
				return;
			}
			ifr.contentWindow.cordova = window.cordova;
			ifr.contentWindow.sap_webide_companion = {};
			document.getElementById("div1").style.display = "none";

			function createEvent(type, data) {
				var event = ifr.contentDocument.createEvent('Events');
				event.initEvent(type, false, false);
				if (data) {
					var i;
					for (i in data) {
						if (data.hasOwnProperty(i)) {
							event[i] = data[i];
						}
					}
				}
				return event;
			}

			function onIFrameLoad() {
				if (ifr.contentWindow) {
					ifr.contentWindow.cordova = window.cordova;
					ifr.contentWindow.sap_webide_companion = {};
					var injectItems = [], injectMItems = [];
					var plugin_list = window.cordova.define.moduleMap["cordova/plugin_list"].exports;					
					var i, j, k, item, itemname, mname, wobj, iobj, exportObj, exportItem;
					for (i=0; i<plugin_list.length; i++) {
						if (plugin_list[i].clobbers) {
							for (j=0; j<plugin_list[i].clobbers.length; j++) {
								injectItems.push(plugin_list[i].clobbers[j]);
							}
						}
						if (plugin_list[i].merges && plugin_list[i].merges.length >0 ) {
							injectMItems.push({"id":plugin_list[i].id, "merges": plugin_list[i].merges});
						}
					}

					for (i=0; i<injectItems.length; i++) {
						item = injectItems[i];
						try {
							itemname = item.split(".");
							wobj = window;
							iobj = ifr.contentWindow;
							for (j=0; j<itemname.length; j++) {
								if (!iobj[itemname[j]]){
									iobj[itemname[j]] = wobj[itemname[j]];
								}
								wobj = wobj[itemname[j]];
								iobj = iobj[itemname[j]];
							}
						}catch(e) {
							alert(item + ":" + e);
						}
					}

					for (i=0; i<injectMItems.length; i++) {
						item = injectMItems[i];
						for (k=0; k<item.merges.length; k++) {
							try {
								mname = item.merges[k].split(".");
								wobj = window;
								iobj = ifr.contentWindow;
								for (j=0; j<mname.length; j++) {
									if (!iobj[mname[j]]){
										iobj[mname[j]] = wobj[mname[j]];
									}
									wobj = wobj[mname[j]];
									iobj = iobj[mname[j]];
								}
								exportObj = window.cordova.define.moduleMap[item.id].exports;
								for (exportItem in exportObj) {
									if (Object.prototype.hasOwnProperty.call(exportObj, exportItem)) {
										if (!iobj[exportItem]) {
											iobj[exportItem] = wobj[exportItem];
										}
									}
								}
							}catch(ex) {
								alert(item.merges[k] + ":" + ex);
							}
						}
					}
					
					//workaround for KapSel3.5.3 Toolbar plugin
					ifr.contentDocument.addEventListener("touchstart",function(e){
						var evtTouchStart = createEvent('touchstart', e);
						document.dispatchEvent(evtTouchStart);
					});
					ifr.contentDocument.addEventListener("menubutton",function(e){
						var evtTouchStart = createEvent('menubutton', e);
						document.dispatchEvent(evtTouchStart);
					});
					//
					
					var evt = createEvent('deviceready');
					ifr.contentDocument.dispatchEvent(evt);
				}
			}
			if (ifr.attachEvent) {
				ifr.attachEvent('onload',  onIFrameLoad);
			} else {				
				ifr.onload  = onIFrameLoad;
			}
			
			// Add extra query string to force page reload.
			var dt = new Date();
            var buster = "companionbuster=" + dt.getTime();
            if (retrievedPreviewURL.indexOf("?") != -1)
            {
                // Add query right after ?
                retrievedPreviewURL = retrievedPreviewURL.split("?")[0] + "?" + buster + "&"+ retrievedPreviewURL.split("?")[1];
            }
            else
            {
                if (retrievedPreviewURL.indexOf("#") != -1)
                {
                    // Need to add query before anchor
                    retrievedPreviewURL = retrievedPreviewURL.split("#")[0] + "?" + buster + "#" + retrievedPreviewURL.split("#")[1];
                }
                else
                {
                    // No anchor or query so create one.
                    retrievedPreviewURL = retrievedPreviewURL + '?' + buster;
                }
            }
			ifr.src = retrievedPreviewURL;
			setTimeout(app.initContainer, 1000);
        });
    },
    
	refreshPreviewFrame: function() {
		if (device.platform[0] === 'i') {
			var timer = setInterval(function(){
				var ifr = document.getElementById('ifr1');
				if (ifr && document.body.offsetHeight<ifr.offsetHeight) {
					ifr.height= document.body.offsetHeight;
				}
			}, 500);
		}
    },
	
    getPreviewURL: function(callback) {
        function getPreviewURLFromAppPreferencesFailed(error) {
            alert(error);
            //callback(app.defaultUrl);
        }
        sap.AppPreferences.getPreferenceValue('previewURL', callback, getPreviewURLFromAppPreferencesFailed);
    },
	
	initContainer: function() {
		try{
			var i18n = window.cordova.require('com.sap.mp.cordova.plugins.i18n.i18n');
			i18n.load({
				path: "i18n"
			}, app.initToolbar);
		}catch(e){
			alert(e);
		}
	},
	
	initToolbar: function(i18nBundle) {
        bundle = i18nBundle;
		sap.Logger.info('Cordova container initialized', 'RDE_COMPANION');
		

		var isAndroid = (device.platform == 'Android');

		if (!isAndroid) {
			sap.Toolbar.addItem({ "label" : "Refresh", "icon" : "smp_reload", "showAsAction" : sap.Toolbar.SHOW_AS_ACTION_ALWAYS }, function() {
				var ifr = document.getElementById('ifr1');
				ifr.contentWindow.location.reload();
			});
		} else {
			sap.Toolbar.addItem({ "label" : "Refresh", "icon" : "ic_menu_refresh", "showAsAction" : sap.Toolbar.SHOW_AS_ACTION_ALWAYS }, function() {
				var ifr = document.getElementById('ifr1');
				ifr.contentWindow.location.reload();
			});
		}

		if (isAndroid) {
			sap.Toolbar.addItem({"label" : "About", "icon" : "smp_about", "showAsAction" : sap.Toolbar.SHOW_AS_ACTION_NEVER}, function () {
				window.navigator.notification.alert(bundle.get("version") + " " + bundle.get("version_value"), null, bundle.get("about_title"), bundle.get("ok"));
			});
		}

		if (device.platform[0] === 'i') {

			//refresh();
			// iOS InAppBrowser tweaks
			window.open = (function(strUrl, strWindowName, strWindowFeatures) {
				var original_window_open = window.open;
				return function(strUrl, strWindowName, strWindowFeatures) {
					if (!strWindowName || strWindowName === '') {
						// If the target isn't specified, use _blank so that InAppBrowser is shown.
						strWindowName = '_blank';
					}
					if (!strWindowFeatures || strWindowFeatures === '') {
						// Use these as default options.
						strWindowFeatures = 'location=no,EnableViewPortScale=yes';
					}
					// Percent escape spaces.
					strUrl = strUrl.replace(/ /g, '%20');
					return original_window_open(strUrl, strWindowName, strWindowFeatures);
				};

			}());

			if (window.jQuery)
			{
				// KAPSELBROWSER-59 - open anchors in InAppBrowser.
				$(document).on('click', 'a[href^=http], a[href^=https]', function(e){
					e.preventDefault();
					var $this = $(this);
					window.open($this.attr('href'), $this.attr('target'), 'location=no,EnableViewPortScale=yes');
				});
			}
		}
	}
};
