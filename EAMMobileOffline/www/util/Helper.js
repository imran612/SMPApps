/*
 * Copyright 
 */
/*
 *  declaration of used JS files
 */
jQuery.sap.declare("com.slb.mobile.util.Helper");
//jQuery.sap.require("sap.m.MessageToast");
//jQuery.sap.require("sap.m.MessageBox");

//*****************************************************************************************************************************************
//                                                    Helper.js
//                                               It contains all the Gloabl methods
//*****************************************************************************************************************************************

/*
 This method handles all failed request after getting error message from server. It closes the dialog and try to reauthenticate the user if it needs to be
 */
/*function handleRequestFailed(){
    busyDialog.close();
    sap.m.MessageBox.alert(i18nModel.getResourceBundle().getText("LoadingError"));
}
*/
/*
 * This method performs the logoff function from the app. After confirmation user will be logged off from JBC
 */
/*function logoff(){
    sap.m.MessageBox.confirm(i18nModel.getResourceBundle().getText("LogoffConfirm"),function (oAction){
                             if(oAction == sap.m.MessageBox.Action.OK){
                             //log off the user
                             busyDialog.open();
                             logoffHelper();
                             //Clear model data
                             clearAppData();
                             busyDialog.close();
                             }
                             });
    
} */
/*
 * Helper method to logoff and terminate user sessions.
 */
/*function logoffHelper(){
    var req = new XMLHttpRequest();
    try{
        req.open('GET', getDataEndPoint('logout'), false);
        req.send();
        sap.m.MessageToast.show(i18nModel.getResourceBundle().getText("LogoffSuccess"));
        //after logoff display the login page
        var nav=oCore.byId("Login").getController().nav;
        nav.to("Login");
    }catch(exception){
        return 0;
    }
    
} */

/*
 This method is authentication handler for Line Clearance app it checks if a valid user session is available and show login screen if required
 */
/*function authenticate(firstTime){
    var nav = oCore.byId('Login').getController().nav;
    if(firstTime){
        nav.to("Login");
    }else {
        switch(isUserSessionAvailable()){
            case 200 :  break;
            case 401 :{
                nav.to("Login");
                if(busyDialog !=null){
                    busyDialog.close();
                }
                break;
            }
            case 404 : showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",i18nModel.getResourceBundle().getText("ServerError"));     break;
            default : {
                nav.to("Login");
                if(busyDialog !=null){
                    busyDialog.close();
                }
                break;
            }
        }
    }
} */
/*
 * This method checks if user session is available in the app.
 */
function isUserSessionAvailable(){
    var req = new XMLHttpRequest();
    try{
        req.open('GET', getDataEndPoint(), false);
        req.send();
        return req.status;
    }catch(exception){
        return 0;
    }
    
}


/*
 * This method is used for getting the data end points for various calls to backend system . 
   It prepares the backend service call
 */
function getDataEndPoint(datapoint){
    switch(datapoint){
        case "logout" : return gwHost+"/sap/public/bc/icf/logoff?sap-client=020";
        case "WorkOrders" : return serverEndpoint+"/WOLIST?sap-client=330";
        case "HdrOperations" : return serverEndpoint;
        case "lchdrs": authenticate(false); return serverEndpoint+"/LCHDRS?sap-client=020";
        default: return serverEndpoint;
            
            
    }
}

function getOperations(workorder) {
    gwLogin();
   //  var url = getDataEndPoint('HdrOperations')+"WORKORDER(Number='000001000000')/GetOP";
   // var username= "05173240";
    //var pass= "Maryam@2011";
    
    //var odatamodel = new sap.ui.model.odata.ODataModel("http://sapf1sdi10.dir.slb.com:8010/sap/opu/odata/sap/Z_THIN_SLB_MOB_SRV",username,pass);
    //odatamodel.setHeaders({"Content-Type" : "application/json"});//Setting the Headers "Content Type"
    //fetch XSRF token as part of request
   // odatamodel.setHeaders({"X-CSRF-Token" : "Fetch"});
   // var lcTypeData=oCore.getModel("lcTypeModel").getData();
   /* odatamodel.read("/WOLIST", null,
                    function fnSuccess(oData,response)
                    {
                    alert("s");
                    
                    },
                    function fnError(response)
                    {
                    alert("f");
                    }
                    );
 */

/*


    var req = $.ajax({
                     url: getDataEndPoint(),
                     async: false,
                     dataType: 'json',
                     cache: false,
                     beforeSend:function (xhr) {
                     xhr.setRequestHeader('Authorization', "Basic " + Base64.encode(username + ':' + pass));
                     }
                     });
    req.success(function(oData,status, xhr) {
                alert("success");
                
                });
    req.fail(function(xhr){
             alert("failed");
             
             });  */
    

}


function getWorkOrders()
{
    var req = $.ajax({
                     url: getDataEndPoint('WorkOrders'),
                     async: false,
                     dataType: 'json',
                     cache: false,
                     beforeSend:function (xhr) {
                     xhr.setRequestHeader('Authorization', "Basic " + Base64.encode("05173240" + ':' + "Maryam@2011"));
                     }
                     });
    req.success(function(oData,status, xhr) {
                if(xhr.status==200){
                var woList=[];
                var woModel = new sap.ui.model.json.JSONModel();
                 $(oData.d.results).each(function( i, val ) {
                            woList.push({  "WOId" : val.Orderid,
                                               "Plant"  : val.OrderType,
                                                "WOText"  :val.ShortText,
                                                "RigId": "R2322",
                                                "JobId": "J87799",
                                                "StartDate": "23-Nov-2014"
                                                        });
                                         
                                         
                                         woModel.setData(woList);

                                         
                                                             });
                //oCore.setModel(woModel,"WorkOrderModel");
               // alert("ss");
                //handleLoginSuccess(xhr);
                return woModel;
                }else{
                   //handleLoginFail(xhr);
                }
                });
    req.fail(function(xhr){
             alert("error");
  
             
             });
}




/**
 *
 *  Base64 encode / decode
 *  http://www.webtoolkit.info/
 *
 **/

var Base64 = {
    
    // private property
    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    
    // public method for encoding
    encode : function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        
        input = Base64._utf8_encode(input);
        
        while (i < input.length) {
            
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            
            output = output +
            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
            
        }
        
        return output;
    },
    
    // private method for UTF-8 encoding
    _utf8_encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        
        for (var n = 0; n < string.length; n++) {
            
            var c = string.charCodeAt(n);
            
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            
        }
        
        return utftext;
    }
}



