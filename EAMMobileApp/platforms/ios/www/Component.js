jQuery.sap.declare("com.slb.mobile.Component");
jQuery.sap.require("com.slb.mobile.MyRouter");

sap.ui.core.UIComponent.extend("com.slb.mobile.Component", {
                    
            createContent : function() {
                               
                               // create root view
                               var oView = sap.ui.view({
                                                       id : "app",
                                                       viewName : "com.slb.mobile.view.App",
                                                       type : "JS",
                                                       viewData : { component : this }
                                                       });
                            /****** Removing the login popup ****/
                            /*   var login = new sap.m.Dialog({title:"Login"});
                               
                               var errInfo = new sap.m.Text("errinfo",{visible:false,text:"Please enter the username & password"}).addStyleClass("err");
                               var loginform= new sap.ui.layout.form.SimpleForm( {
                                                                                maxContainerCol: 2,
                                                                content: [
                                                                            new sap.m.Label({text: "User ID"}),
                                                                          new sap.m.Input("user",{placeholder: "Enter User ID..."}),
                                                                          new sap.m.Label({text: "Password"}),
                                                                          new sap.m.Input("password",{type:"Password", placeholder: "Enter Password"})
                                                                                ]
                               });
                               login.addContent(errInfo);
                               login.addContent(loginform);
                               var lbtn=new sap.m.Button({text:"Login"});
                               lbtn.attachPress(function(){
                                               // alert("hh");
                                                var resp=processLoginSuccessfull();
                                               // alert(resp);
                                                if(resp) {
                                                login.close();
                                                errInfo.setVisible(false);
                                                oView.setVisible(true);
                                                }
                                                
                                                
                                                });
                               login.addButton(lbtn);
                               login.open();
                             
                             */
                               /******End of removing popup */
                               
                               //var logindailog= sap.ui.xmlfragment("com.slb.mobile.view.fragments.LoginDialog",oController);
                               //logindailog.open();
                               
    
                               
                               // set i18n model
                               i18nModel = new sap.ui.model.resource.ResourceModel({
                                                                                   bundleUrl : "i18n/messagebundle.properties"
                                                                                   });
                               oView.setModel(i18nModel, "i18n");
                               
                               // set device model
                               var oDeviceModel = new sap.ui.model.json.JSONModel({
                                                                                  isTouch : sap.ui.Device.support.touch,
                                                                                  isNoTouch : !sap.ui.Device.support.touch,
                                                                                  isPhone : sap.ui.Device.system.phone,
                                                                                  isNoPhone : !sap.ui.Device.system.phone,
                                                                                  listMode : sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
                                                                                  listItemType : sap.ui.Device.system.phone ? "Active" : "Inactive"
                                                                                  });
                               oDeviceModel.setDefaultBindingMode("OneWay");
                               this.setModel(oDeviceModel, "device");
                               
                               sap.ui.Device.orientation.attachHandler(function(oEvt){
                                                                       
                                                                       if(oEvt.landscape) {
                                                                       if(oCore.byId("WODetail--showMasterIcon") != undefined) {
                                                                       
                                                                       oCore.byId("WODetail--showMasterIcon").setVisible(false);
                                                                       }
                                                                       }
                                                                       else {
                                                                       oCore.byId("WODetail--showMasterIcon").setVisible(true);
                                                                       }
                                                                       });
                               //oView.setVisible(false);
                               
                               return oView;
                               

                                }

	/*metadata : {
		name : "TDG Demo App",
		version : "1.0",
		includes : [],
		dependencies : {
			libs : ["sap.m", "sap.ui.layout"],
			components : []
		},

		rootView : "com.slb.mobile.view.App",

		config : {
			resourceBundle : "i18n/messageBundle.properties",
			serviceConfig : {
				name: "/OData/OData.svc/",
				serviceUrl: "/destinations/SAPOData"
			}
		},

		routing : {
			config : {
				routerClass : com.slb.mobile.MyRouter,
				viewType : "XML",
				viewPath : "com.slb.mobile.view",
				targetAggregation : "detailPages",
				clearTarget : false
			},
			routes : [
				{
					pattern : "",
					name : "main",
					view : "Master",
					targetAggregation : "masterPages",
					targetControl : "idAppControl",
					subroutes : [
						{
							pattern : "{entity}/:tab:",
							name : "detail",
							view : "Detail"
						}
					]
				},
				{
					name : "catchallMaster",
					view : "Master",
					targetAggregation : "masterPages",
					targetControl : "idAppControl",
					subroutes : [
						{
							pattern : ":all*:",
							name : "catchallDetail",
							view : "NotFound",
							transition : "show"
						}
					]
				}
			]
		}
	},

	init : function() {
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

		var mConfig = this.getMetadata().getConfig();

		// always use absolute paths relative to our own component
		// (relative paths will fail if running in the Fiori Launchpad)
		var oRootPath = jQuery.sap.getModulePath("com.slb.mobile");

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : [oRootPath, mConfig.resourceBundle].join("/")
		});
		this.setModel(i18nModel, "i18n");

		var oModel;
		if(window.cordova && appContext && !window.sap_webide_companion && !devapp.externalURL) {
			var url = appContext.applicationEndpointURL + "/";
			var oHeader = {"X-SMP-APPCID":appContext.applicationConnectionId};
			if (appContext.registrationContext.user) {
				oHeader["Authorization"] = "Basic "+btoa(appContext.registrationContext.user + ":" + appContext.registrationContext.password);
			}
			oModel = new sap.ui.model.odata.ODataModel(url, true, null, null, oHeader);
			this._setModel(oModel);
		} else {
			var sServiceUrl = mConfig.serviceConfig.serviceUrl;
			if(devapp.externalURL) {
				sServiceUrl = devapp.externalURL;
			}
			
			//This code is only needed for testing the application when there is no local proxy available, and to have stable test data.
			var bIsMocked = jQuery.sap.getUriParameters().get("responderOn") === "true";
			// start the mock server for the domain model
			if (bIsMocked) {
				this._startMockServer(sServiceUrl);
			}

			// Create and set domain model to the component
			// only call customized logon dialog when in android companion app to workaround cordova browser for 'basic' auth issue
            if ((window.sap_webide_companion || devapp.externalURL) && device) {
                if (device.platform === 'Android') {
                    this._openLogonDialog(sServiceUrl);
                } else {
    		        var self = this;
    		        var username = "";
    	            var password = "";
    		        this._logon(sServiceUrl, username, password, function (){
                        var auth = "Basic "+btoa(username + ":" + password);
        				var uHeader = {"Authorization":auth};
        		        oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true, null, null, uHeader);
    		            self._setModel(oModel);
    		        }, null, null);
                }
            } else {
				oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
                this._setModel(oModel);
            }
		}
	},

    _logon : function (url, usr, pwd, onLogonSuccess, onUnauthorized, onLogonError){
        var auth = "Basic "+btoa(usr + ":" + pwd);
		$.ajax({
            type: "GET",
            url: url,
            username: usr,
            password: pwd,
			beforeSend: function(request) {
				request.setRequestHeader("Authorization", auth);
			},
            statusCode: { 401: onUnauthorized},
            error: onLogonError,
            success: onLogonSuccess
        });
    },

	_openLogonDialog : function (sServiceUrl) {
	    var logonDialog = new sap.m.Dialog();
    	logonDialog.setTitle("Basic Authentication");
    	
    	var vbox = new sap.m.VBox();
    	this._userInput = new sap.m.Input();
    	this._userInput.setPlaceholder("Username");
    	this._pwdInput = new sap.m.Input();
    	this._pwdInput.setPlaceholder("Password");
    	this._pwdInput.setType(sap.m.InputType.Password);
    	vbox.addItem(this._userInput);
    	vbox.addItem(this._pwdInput);
    	logonDialog.addContent(vbox);
    	
    	var self = this;
    	logonDialog.addButton(new sap.m.Button({text: "OK", press:function(){
    	    var username = self._userInput.getValue();
    	    var password = self._pwdInput.getValue();
 
    	    self._logon(sServiceUrl, username, password,function (){
				logonDialog.close();
				// Create and set domain model to the component
				var oModel;
				if(username && password) {
					var auth = "Basic "+btoa(username + ":" + password);
					var uHeader = {"Authorization":auth};
					oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true, null, null, uHeader);
				} else {
					oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
				}
				self._setModel(oModel);
			}, function (){
    	        alert("Username or Password is incorrect!");
    	        self._userInput.setValue("");
    	        self._pwdInput.setValue("");
    	    }, function (e){
    	        //alert(e.statusText);
    	    });	
    	}}));
    	logonDialog.addButton(new sap.m.Button({text: "Cancel", press: function() {logonDialog.close();}}));
    	logonDialog.open();
	},
	
	_setModel : function (oModel) {
	    this.setModel(oModel);

		// set device model
		var oDeviceModel = new sap.ui.model.json.JSONModel({
			isTouch : sap.ui.Device.support.touch,
			isNoTouch : !sap.ui.Device.support.touch,
			isPhone : sap.ui.Device.system.phone,
			isNoPhone : !sap.ui.Device.system.phone,
			listMode : sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
			listItemType : sap.ui.Device.system.phone ? "Active" : "Inactive"
		});
		oDeviceModel.setDefaultBindingMode("OneWay");
		this.setModel(oDeviceModel, "device");

		this.getRouter().initialize();
	},
	
	_startMockServer : function (sServiceUrl) {
		jQuery.sap.require("sap.ui.core.util.MockServer");
		var oMockServer = new sap.ui.core.util.MockServer({
			rootUri: sServiceUrl
		});

		var iDelay = +(jQuery.sap.getUriParameters().get("responderDelay") || 0);
		sap.ui.core.util.MockServer.config({
			autoRespondAfter : iDelay
		});

		oMockServer.simulate("model/metadata.xml", "model/");
		oMockServer.start();


		sap.m.MessageToast.show("Running in demo mode with mock data.", {
			duration: 2000
		});
	}*/
                               
});
function processLoginSuccessfull()
{
    var user=sap.ui.getCore().byId("user").getValue();
    var pass=sap.ui.getCore().byId("password").getValue();
    if(user=="" || pass == ""){
        //alert("User id & password is required");
        oCore.byId("errinfo").setText("User id & password is required");
        oCore.byId("errinfo").setVisible(true);
        return false;
    }
    var result=false;
    var req = $.ajax({
                     url: "http://sapf1sdi10.dir.slb.com:8010/sap/opu/odata/sap/Z_THIN_SLB_MOB_SRV/WOLIST?sap-client=330",
                     async: false,
                     dataType: 'json',
                     cache: false,
                     beforeSend:function (xhr) {
                     xhr.setRequestHeader('Authorization', "Basic " + Base64.encode(user + ':' + pass));
                     }
                     });
    req.success(function(oData,status, xhr) {
                if(xhr.status==200){
                //store userID in model for signature
                var uModel = new sap.ui.model.json.JSONModel();
                var uData={"user":user,"pass": pass};
                uModel.setData(uData);
                oCore.setModel(uModel,"userModel");
                result=true;;
               
                }
                });
    req.fail(function(xhr){
            // alert("Authentication failed. Please enter the valid username & password");
             oCore.byId("errinfo").setText("Authentication failed. Please enter the valid username & password");
             oCore.byId("errinfo").setVisible(true);
             return false;
             
  
             
             });
    return result;
}
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