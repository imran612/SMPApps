sap.ui.jsview("com.jbl.lc.view.Login", {

	getControllerName: function () {
		return "com.jbl.lc.view.Login";
	},
	
	createContent: function (oController) {
              var page = new sap.m.Page({showHeader: true,
                                        showNavButton: false,
                                        alignItems:"center",
                                        }).addStyleClass("loginPageBkg");
 
              var vLyt=new sap.ui.layout.VerticalLayout({width:"90%"});
              //1. Error message place holder
              vLyt.addContent(new sap.m.HBox("errorLine",{visible:false,items: [new sap.m.Image({src:"img/login-error-icon.png"}),new sap.m.Label("errorText").addStyleClass("errorText")] }).addStyleClass("errorLine"));
              //2. Username input
              vLyt.addContent(new sap.m.Input("userName", {placeholder:"Username"}).addStyleClass("loginUser"));
              //3. Password input
              vLyt.addContent(new sap.m.Input("password", {placeholder:"Password", type:sap.m.InputType.Password}).addStyleClass("loginPwd"));
              //4. Submit button
              vLyt.addContent(new sap.m.Button({text:"Login",press: function() {
                                               busyDialog.open();
                                               setTimeout(function() {
                                                          oController.handleLogin();
                                                          }, 100);

                                               
                                               }
                                               }).addStyleClass("loginBtn"));
            
              page.addContent(vLyt);
              
              return page; 
              
              }
});