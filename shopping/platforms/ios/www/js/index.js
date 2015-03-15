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
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var ref = window.open('http://myjabilsnd.corp.jabil.org', '_blank','location=no,toolbar=no');
        ref.addEventListener('loadstart', function(event) { if (event.url.match("/irj/portal")) {window.open('http://sapsrxci.corp.jabil.org:8000/sap(bD1lbiZjPTAxMCZkPW1pbg==)/bc/bsp/srmnxp/shoppingcart/defaults.htm?sap-tray-type=PLAIN&sap-tray-padding=X&sap_ep_version=7.31.201303192041&sap_ep_baseurl=http%3a%2f%2fmyjabilsnd.corp.jabil.org%3a80%2firj%2fportal&sapsrm_mode=EDIT&sap_explanation=X&sapsrm_botype=BUS2121&sapsrm_portalbaseurl=http%3a%2f%2fmyjabilsnd.corp.jabil.org%3a80%2firj%2fportal&sapsrm_pcdlocation=pcd%3aportal_content%2fcom.sap.pct%2fspecialist%2fcom.sap.pct.srm.srm70%2fcom.sap.pct.srm.core.fl_core%2fcom.sap.pct.srm.core.fl_roles%2fcom.sap.pct.srm.core.ro_employeeselfservice_nxp%2ffl_goshopping%2fcom.sap.pct.srm.core.iv_shop_nxp&sapsrm_kw_id=L45E4F63F003573B1E10000000A11466FS0A037E25C16A40BD98CD31069DD145F9')}});
        /*ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
        ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
        ref.addEventListener('exit', function(event) { alert(event.type); });
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);*/
    }
};
