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
    // Application Constructor
    initialize: function() {
        new sap.m.Shell({app : new sap.ui.core.ComponentContainer({name : "com.jbl.lc" })}).placeAt("content");
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("backbutton", this.onBackKeyDown, false);
        document.addEventListener("pause", this.onAppPause, false);
        document.addEventListener("resume", this.onAppResume, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       app.receivedEvent('deviceready');
    },
    // deviceready back button press Handler for android
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
onBackKeyDown: function() {
},
    // device ready app pause (background) function
onAppPause: function(){
    navigator.splashscreen.show();
},
    
    // device ready app pause (background) function
onAppResume: function(){
    navigator.splashscreen.hide();
    authenticate(false);
},
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        setTimeout(function() {
                   navigator.splashscreen.hide();
                   }, 1);
    }
};
