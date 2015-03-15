/*
 * Copyright 2014 Jabil
 */
jQuery.sap.require("com.jabil.maestro.mob.util.Helper");
jQuery.sap.require("com.jabil.maestro.mob.util.Global");

sap.ui.controller("com.jabil.maestro.mob.view.Login", {
                  /**
                   * Called when a controller is instantiated and its View controls (if available) are already created.
                   * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
                   */
                  onInit : function (evt) {
                    busyDialog = new sap.m.BusyDialog();
                  },
                  /**
                   * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
                   * (NOT before the first rendering! onInit() is used for that one!).
                   */
                  //   onBeforeRendering: function() {
                  //
                  //   },
                  
                  /**
                   * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
                   * This hook is the same one that SAPUI5 controls get after being rendered.
                   */
                   onAfterRendering: function() {
                    if($("#loginLogo").children().length==0){
                        new sap.m.Image({src:"img/maestro-logo-shadowy-clean.png"}).placeAt("loginLogo");
                    }
                   },
                  
                  /**
                   * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
                   */
                  onExit : function () {
                  }, 
                  
                  /*
                   * Login event handler , this method logs in the user and act based upon the repsonse
                   */
                 
                handleLogin : function (evt){
                  //get the nav controller
                  busyDialog.open();
                  //hide the error line on the login screen if its visible
                  sap.ui.getCore().byId("errorLine").setVisible(false);
                  //Prepare teh synch request to login (user should wait
                  var req = new XMLHttpRequest();
                  var username = sap.ui.getCore().byId("userName").getValue();
                  var pass = sap.ui.getCore().byId("password").getValue();
                  sap.ui.getCore().byId("password").setValue("");

                  //validate user input if blank show user
                  if(username=="" || pass == ""){
                    sap.ui.getCore().byId("errorText").setText(i18nModel.getResourceBundle().getText("LoginValidationError"));
                    sap.ui.getCore().byId("errorLine").setVisible(true);
                    busyDialog.close();
                    return false;
                  }
                  //Authenticate teh user by passing user cred in header and checking the repsone
                try{
                  var req = $.ajax({
                              url: getDataEndPoint("login"),
                              async: false,
                              dataType: 'json',
                              cache: false,
                              beforeSend:function (xhr) {
                                   xhr.setRequestHeader('Authorization', "Basic " + Base64.encode(username + ':' + pass));
                                   }
                              });
                  req.success(function(oData,status, xhr) {
                              if(xhr.status==200){
                                handleLoginSuccess(xhr,oData);
                              }else{
                                handleLoginFail(xhr);
                              }
                            });
                  req.fail(function(xhr){
                           handleLoginFail(xhr);
                           });
                  
                  }catch(exception){
                  //Display erro message for exception
                    sap.m.MessageBox.alert(i18nModel.getResourceBundle().getText("LoginFailed")+exception.toString(), {duration: 2000});
                  }
                  
                },
            /**
                * Called when Site is selected.
            */
                handleSiteSelection: function(oEvent) {
                  //get user site and site text and close the dialog
                  userSite= this.getTooltip();
                  userSiteTxt=this.getText();
                  this.getParent().close();
                  //update user site
                  updateSite(userSite,"Home",tilePressed);
                 },
            /**
             * Called when Logoff is pressed.
            */
                handleLogoff: function(oEvent) {
                 // sap.ui.getCore().byId("logoffDialog").open();
                  //confirm("logoff");
                  logoff("Home");
                
            }
});

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
function handleLoginFail(req){
    var nav = sap.ui.getCore().byId('Login').getController().nav;

    switch (req.status) {
            //If req status is 0 : Alert to show no connection.
        case 0:
            sap.m.MessageBox.alert(i18nModel.getResourceBundle().getText("NoConnection"), {duration: 2000});
            busyDialog.close();
            break;
            //If response is 401 user authentication failed. check if MYSAPSSO2 cookkie exist in that user password is expired and user is redirected to JBC logon page
        case 401:
            //Check header for password change
            var header=req.getResponseHeader("Set-Cookie");
            if(header!=null && header.indexOf("MYSAPSSO2")>=0){
                //Display alert message about password change and open the jBC login screen for changing password
                sap.m.MessageBox.alert(i18nModel.getResourceBundle().getText("PasswordExpired"), function(oAction){
                                       var jbcLogin = window.open(serverEndpoint, '_blank','location=no,toolbar=no');
                                       jbcLogin.addEventListener('loadstart', function(event) {
                                                                 if (event.url.match("/irj/portal")) {
                                                                 jbcLogin.close();
                                                                 busyDialog.close();
                                                                 nav.to("Home");
                                                                 }
                                                                 });
                                       jbcLogin.addEventListener('exit', function(event){
                                                                 busyDialog.close();
                                                                 nav.to("Home");
                                                                 });
                                       });
            }else{
                //If password is not expired show the error message
                sap.ui.getCore().byId("errorText").setText(i18nModel.getResourceBundle().getText("LoginError"));
                sap.ui.getCore().byId("errorLine").setVisible(true);
                busyDialog.close();
            }
            break;
            //If service doesnt exist show 404 alert message
        case 404:
            sap.m.MessageBox.alert(i18nModel.getResourceBundle().getText("ServerError"));
            busyDialog.close();
            break;
            
        default:
            //BY defualt show request status message
            sap.m.MessageBox.alert(i18nModel.getResourceBundle().getText("LoginFailed")+req.status + " - " + req.statusText);
            busyDialog.close();

    }
    
}
function handleLoginSuccess(xhr,oData){
    var nav = sap.ui.getCore().byId('Login').getController().nav;
    busyDialog.close();
    //initialize the variables
    isInternalUser = oData.isInternal;
    userCustomer=oData.customer;
    //check if customer is null if yes logoff
    if(userCustomer == null || userCustomer.length==0){
        sap.m.MessageBox.alert(i18nModel.getResourceBundle().getText("AuthError"));
        performLogoff();
    }else{
        
        if(!isInternalUser && oData.EULAAcceptanceReq){
            EULALink = oData.EULALink;
            nav.to("EULA");
        }else{
            nav.to("Home");
        }
    }
}
