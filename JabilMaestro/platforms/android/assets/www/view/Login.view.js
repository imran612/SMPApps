/*
 * Copyright 2014 Jabil
 */
sap.ui.jsview("com.jabil.maestro.mob.view.Login", {
              
              getControllerName : function() {
              return "com.jabil.maestro.mob.view.Login";
              },
              
              createContent : function(oController) {
              //Pge element
              var page = new sap.m.Page({showHeader: true,
                                        showNavButton: false,
                                        alignItems:"center",
                                        });
              //Set page header with logo and logoff button
              page.setCustomHeader(new sap.m.Bar({contentMiddle: new sap.ui.core.HTML({content:"<div class='headerLogoStyle'>Jabil <span>Maestro</span></div>"}) }));
              page.getCustomHeader().addStyleClass("appHeaderStyle");
              //Add page Style
              page.addStyleClass("loginPageStyle");
              
              //Load Login screen content
              page.addContent(new sap.ui.core.HTML({content:"<div id='loginLogo' class='loginLogo'></div>"}));

              page.addContent(new sap.m.HBox("errorLine",{visible:false,items: [new sap.ui.core.Icon({src:"sap-icon://error"}).addStyleClass('errorIcon'),new sap.m.Label("errorText").addStyleClass("errorText")] }));
              
              page.addContent(new sap.m.Input("userName", {placeholder:"Username"}));
              page.addContent(new sap.m.Input("password", {placeholder:"Password", type:sap.m.InputType.Password}));
              page.addContent(new sap.m.Button({text:"Login",press: oController.handleLogin}));
              page.addContent(new sap.ui.core.HTML({content:"<div id='loginLogo2' class='loginLogo2Style'></div>"}));

              page.setFooter(new sap.m.Toolbar({content:new sap.ui.core.HTML({content:"<div id='copyrightText' class='copyrightLoginStyle'>Copyright 2014 Jabil</div>"})}).addStyleClass("footerStyle"));
              
              return page;
              }
              
    });
