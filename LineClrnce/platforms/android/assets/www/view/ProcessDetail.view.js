sap.ui.jsview("com.jbl.lc.view.ProcessDetail", {

	getControllerName: function () {
		return "com.jbl.lc.view.ProcessDetail";
	},
	
	createContent: function (oController) {
              var page = new sap.m.Page({showHeader: true,
                                        showNavButton: true,
                                        alignItems:"center",
                                        navButtonPress:oController.handleNavBack
                                        }); 

              
              page.setCustomHeader(new sap.m.Bar("pageHdr2",{contentLeft: [new sap.m.Button({icon:"sap-icon://nav-back",press:oController.handleNavBack}),new sap.m.Image({src:"img/LC-logo.png"}).addStyleClass("nyLogo")],contentRight:[new sap.m.Text("uId2",{text:i18nModel.getResourceBundle().getText("Welcome")+" "+oCore.getModel("userModel").getData().user}).addStyleClass("welHdr"),new sap.m.Button({icon:"sap-icon://log",press:oController.handleLogoff}) ]})); 
 
              //display jbl logo
              page.addContent(new sap.m.Bar({contentLeft:new sap.m.Image({src:"img/jabil-logo.jpg",height:"20px"}).addStyleClass("jblLogo")}).addStyleClass("subHdrBar"));
              
              //1. initialize panel to hold main page content
              var poDetailPanel = new sap.m.Panel("poDetailPanel",{width:"95%"});
              poDetailPanel.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("ProcessDetails"),width:"100%"}).addStyleClass("eDataLabel"));
              //display sequence
              poDetailPanel.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("2")}).addStyleClass("seqNo seqNo2"));
              poDetailPanel.addContent(sap.ui.xmlfragment("com.jbl.lc.view.fragment.PODetails",oController));
               //alert("in det");
              var brdata = sap.ui.getCore().getModel("barmod");
              var toolPD = new sap.m.Toolbar("procDetTB",{content:[new sap.m.Label({text:i18nModel.getResourceBundle().getText("ProcessOrder")}), new sap.m.Text("tool_PO"), new sap.m.ToolbarSpacer(), new sap.m.Label({text:i18nModel.getResourceBundle().getText("Plant")}),new sap.m.Text("tool_plant"),new sap.m.ToolbarSpacer(), new sap.m.Label({text:i18nModel.getResourceBundle().getText("LCStatus")}),new sap.m.Text("tool_status")]  }).addStyleClass("processDetBar");
             
                  poDetailPanel.addContent(toolPD);
              
              //display sequence
              poDetailPanel.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("3")}).addStyleClass("seqNo seqNo3"));
              //display process questionair section
            /* var quesBar = new sap.m.Bar({contentLeft: new sap.m.Text({text:i18nModel.getResourceBundle().getText("ProcessQuestions")}).addStyleClass("quesLabel"),contentRight:new sap.m.Button({icon:"sap-icon://navigation-right-arrow"}).addStyleClass("selArrow")}).addStyleClass("quesBar");
                  poDetailPanel.addContent(new sap.m.CustomTile({content:quesBar,press:oController.handleQsNav}).addStyleClass("lcmaintile"));*/
              
              
              var quesBar=new sap.ui.core.HTML({content:"<div class='quesContainer'><div class='quesText'>Process Questionnaires</div><img class='quesArrow' src='img/process-q-arrow.png'/></div>"});
              
              poDetailPanel.addContent(new sap.m.CustomTile({content:quesBar,press:oController.handleQsNav}).addStyleClass("lcmaintile"));
              
              //display cancel button
              poDetailPanel.addContent(new sap.m.Button({text:"Cancel",press:oController.handleNavBack}).addStyleClass("canbtn"));
             
              
                page.addContent(poDetailPanel);
              return page;
              
              }
});