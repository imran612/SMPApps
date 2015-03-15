sap.ui.jsview("com.jbl.lc.view.Home", {

	getControllerName: function () {
		return "com.jbl.lc.view.Home";
	},
	
	createContent: function (oController) {
		
              var page = new sap.m.Page({showHeader: true,
                                        showNavButton: false,
                                        alignItems:"center",
                                        });
              page.setCustomHeader(new sap.m.Bar("pageHdr1",{contentLeft: new sap.m.Image({src:"img/LC-logo.png"}).addStyleClass("nyLogo"),contentRight:[new sap.m.Text("uId1",{text:i18nModel.getResourceBundle().getText("Welcome")+" "+oCore.getModel("userModel").getData().user}).addStyleClass("welHdr"),new sap.m.Button({icon:"sap-icon://log",press:oController.handleLogoff}) ]}));
              //display jbl logo
              page.addContent(new sap.m.Bar({contentLeft:new sap.m.Image({src:"img/jabil-logo.jpg",height:"20px"}).addStyleClass("jblLogo")}).addStyleClass("subHdrBar"));  
              
              //1. initialize panel to hold main page content
              var mainPanel = new sap.m.Panel("mainPanel",{width:"95%"});
              mainPanel.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("EnterData"),width:"100%"}).addStyleClass("eDataLabel"));
             
              //display sequence
              mainPanel.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("1")}).addStyleClass("seqNo"));
              //2. display LC status bar
                var scanBHtml=new sap.ui.core.HTML({content:"<div class='scanContainer'><div class='scanText'>Scan Process Order</div><img class='scanArrow' src='img/scan-arrow.png'/></div>"});
              var lcScanTile = new sap.m.CustomTile({content:scanBHtml,press:oController.barcodescan}).addStyleClass("lcmaintile");
              mainPanel.addContent(lcScanTile);
              mainPanel.addContent(new sap.m.Text({text:"Or"}).addStyleClass("orTxt"));
              //allow user to enter PO manully
              mainPanel.addContent(new sap.m.Input("inputPO",{placeholder: "Enter Process Order"}).addStyleClass("manualPO"));
              //display sequence
              var dialogWin = new sap.m.Dialog("lcTWindow",{title:i18nModel.getResourceBundle().getText("SelectLCType") ,beginButton: new sap.m.Button({text:i18nModel.getResourceBundle().getText("Cancel"), press: oController.handleLCTClose}).addStyleClass("dialogBtn"),endButton:new sap.m.Button({text:i18nModel.getResourceBundle().getText("Confirm"), press: oController.handleLCTConfirm}).addStyleClass("dialogBtn") }).addStyleClass("lcTypeWinStyle");

              //display submit button
              mainPanel.addContent(new sap.m.Button({text:"Submit",press:oController.handlePOEntry}).addStyleClass("canbtn scanSubmit"));
              page.addContent(mainPanel);
              return page;
              
              }
});