/*
 * Copyright 
 */

jQuery.sap.declare("com.slb.eam.mob.util.Helper");
//jQuery.sap.require("sap.m.MessageToast");
//jQuery.sap.require("sap.m.MessageBox");

com.slb.eam.mob.util.Helper = {

onError: function(msg, url, line) {
    var idx = url.lastIndexOf("/");
    var file = "unknown";
    if (idx > -1) {
        file = url.substring(idx + 1);
    }
    alert("An error occurred in " + file + " (at line # " + line + "): " + msg);
    return false; //suppressErrorAlert;
}
};