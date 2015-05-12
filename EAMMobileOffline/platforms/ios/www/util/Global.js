/*
 * Copyright 2014 Jabil
 */

jQuery.sap.declare("com.slb.mobile.util.Global");
//*****************************************************************************************************************************************
//                                                    Global.js
//                                               It contains all the globel variables
//*****************************************************************************************************************************************

// global  variables
//var serverEndpoint = "http://sapdev01a.corp.jabil.org:8010/sap/opu/odata/sap/ZGW_LC_SERVICE";
//var gwHost="http://sapdev01a.corp.jabil.org:8010";
//resource bundle
var i18nModel;
var xsrf_token;
var oCore=sap.ui.getCore();
var busyDialog = new sap.m.BusyDialog();
busyDialog.setBusyIndicatorDelay(0);
var scanned=false;
var signDialog;
var signStep;
var serverEndpoint =  "http://sapf1sdi10.dir.slb.com:8010/sap/opu/odata/sap/Z_THIN_SLB_MOB_SRV";

