sap.ui.controller("com.jbl.lc.view.Login", {
                  
            onInit: function () {
                  
            },
            onAfterRendering: function() {
            },
            /*
            * Login event handler , this method logs in the user and act based upon the repsonse
            */
                
            handleLogin: function (evt){
                  //hide the error line on the login screen if its visible
                  oCore.byId("errorLine").setVisible(false);
                  //Prepare teh synch request to login (user should wait
                  var req = new XMLHttpRequest();
                  var username = oCore.byId("userName").getValue();
                  var pass = oCore.byId("password").getValue();
                  oCore.byId("password").setValue("");
                  //validate user input if blank show user
                  if(username=="" || pass == ""){
                  oCore.byId("errorText").setText(i18nModel.getResourceBundle().getText("LoginError"));
                  oCore.byId("errorLine").setVisible(true);
                  busyDialog.close();
                  return false;
                  }
                  //Authenticate teh user by passing user cred in header and checking the repsone
                 try{
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
                              if(xhr.status==200){
                              //store userID in model for signature
                              var uModel = new sap.ui.model.json.JSONModel();
                              var uData={"user":username};
                              uModel.setData(uData);
                              oCore.setModel(uModel,"userModel");
                              //check if username field exist, then set the username
                              var uid1=oCore.byId("uId1");
                              if(uid1 !=undefined) {
                              uid1.setText(i18nModel.getResourceBundle().getText("Welcome")+" "+username);
                              }
                              handleLoginSuccess(xhr); 
                              }else{
                              handleLoginFail(xhr);
                              }
                              });
                  req.fail(function(xhr){
                          handleLoginFail(xhr);
                          /* if(xhr.status==200 && xhr.responseText.indexOf("successfully.")>=0)
                           {
                             //user authenticated successfully. Navigate to main page
                           var uModel = new sap.ui.model.json.JSONModel();
                           var uData={"user":username};
                           uModel.setData(uData);
                           oCore.setModel(uModel,"userModel");
                           handleLoginSuccess(xhr);

                           } else {
                             handleLoginFail(xhr);
                           }*/
                           
                           });
                  
                  }catch(exception){
                  //Display erro message for exception
                  //sap.m.MessageBox.alert(i18nModel.getResourceBundle().getText("LoginFailed")+exception.toString(), {duration: 2000});
                  }

            }
    });
function handleLoginFail(req){
    //var nav = oCore.byId('Login').getController().nav;
   console.log(req.responseText);
    switch (req.status) {
            //If req status is 0 : Alert to show no connection.
        case 0:
            showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",i18nModel.getResourceBundle().getText("NoConnection"));
            break;
            //If response is 401 user authentication failed. check if MYSAPSSO2 cookkie exist in that user password is expired and user is redirected to JBC logon page
        case 401:
                oCore.byId("errorText").setText(i18nModel.getResourceBundle().getText("LoginError"));
                oCore.byId("errorLine").setVisible(true);
                busyDialog.close();
                break;
            //If service doesnt exist show 404 alert message
        case 404:
            showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",i18nModel.getResourceBundle().getText("ServerError"));
            break;
            
        default:
            //BY defualt show request status message
             showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",i18nModel.getResourceBundle().getText("LoginFailed")+req.status + " - " + req.statusText);
    }
    
}
function handleLoginSuccess(xhr){
    var nav = oCore.byId('Login').getController().nav;
    busyDialog.close();
    nav.to("Home");
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


