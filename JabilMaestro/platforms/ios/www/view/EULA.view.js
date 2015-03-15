/*
 * Copyright 2014 Jabil
 */
sap.ui.jsview("com.jabil.maestro.mob.view.EULA", {
              
              getControllerName : function() {
              return "com.jabil.maestro.mob.view.EULA";
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
              
              // Add EULA Link
              page.addContent(new sap.ui.core.HTML({content:"<iframe id='eulaFrame' class='eulaFrameStyle' src='"+serverEndpoint+EULALink+"'></iframe>"}));
              
              //mainLyt.addItem(eulaContainer)
              var eulaFooter = new sap.m.Toolbar({
                                                content:[
                                                         new sap.m.Button({text:"I Agree", press: oController.handleAccept, type:"Accept"}).addStyleClass("eulaAcceptStyle"),
                                                         new sap.m.ToolbarSpacer(),
                                                         new sap.m.Button({text:"I Disagree", press: oController.handleReject, type:"Reject"}).addStyleClass("eulaRejectStyle")
                                                         ]});
              eulaFooter.addStyleClass("eulaFooterStyle");

           
              page.setFooter(eulaFooter);
              return page;
              }
              
    });
