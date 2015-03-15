/*
 * Copyright 2014 Jabil
 */

jQuery.sap.declare("com.jabil.maestro.mob.util.Global");
//*****************************************************************************************************************************************
//                                                    Global.js
//                                               It contains all the globel variables
//*****************************************************************************************************************************************

// global  variables
    //User customer and site
    var userCustomer = '';
    var userSite = '';
    var userSiteTxt;
    //Nav variables
    var navMat ='';
    var navSite = '';
    // reusable dialogs
    var siteDialog;
    var busyDialog;
    //Server end point
    var serverEndpoint = "https://connect.jabil.com";
    //resource bundle
    var i18nModel;

    var selView;
    var isCurrentWeek = true;
    var loadDataAtSwipe = false;
    var selectedBU="";
    var buDialog;
    var selectedChart = "dailyOTDChart";
    var isInternalUser = false;
    var EULALink ='';

