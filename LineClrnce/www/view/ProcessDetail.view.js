sap.ui.jsview("com.jbl.lc.view.ProcessDetail", {

	getControllerName: function () {
		return "com.jbl.lc.view.ProcessDetail";
	},
	
	createContent: function (oController) {
              var page = new sap.m.Page({showHeader: true,
                                        showNavButton: true,
                                        showFooter: true,
                                        alignItems:"center",
                                        navButtonPress:oController.handleNavBack
                                        }); 

              
              page.setCustomHeader(new sap.m.Bar("pageHdr2",{contentLeft: [new sap.m.Button({icon:"sap-icon://nav-back",press:oController.handleNavBack}),new sap.m.Image({src:"img/LC-logo.png"}).addStyleClass("nyLogo")],contentRight:[new sap.m.Text("uId2",{text:i18nModel.getResourceBundle().getText("Welcome")+" "+oCore.getModel("userModel").getData().user}).addStyleClass("welHdr"),new sap.m.Button({icon:"sap-icon://log",press:oController.handleLogoff}) ]})); 
              
              //set the footer
              page.setFooter(new sap.m.Bar({
                                           contentLeft:[new sap.m.Label({text:i18nModel.getResourceBundle().getText("ProcessOrder")}).addStyleClass("footerPO footerStyle"),new sap.m.Text("footerPO1")],
                                           contentMiddle:[new sap.m.Text({text:i18nModel.getResourceBundle().getText("Customer")}).addStyleClass("footerStyle"),new sap.m.Text("CustomerName")],contentRight:[new sap.m.Text({text:i18nModel.getResourceBundle().getText("Material")}).addStyleClass("footerStyle"),new sap.m.Text("material1").addStyleClass("footerMat")]
                                                                                                                                                                            
                                           }));
              //display jbl logo
              page.addContent(new sap.m.Bar({contentLeft:new sap.m.Image({src:"img/jabil-logo.jpg",height:"20px"}).addStyleClass("jblLogo")}).addStyleClass("subHdrBar"));
              
              //1. initialize panel to hold main page content
              var poDetailPanel = new sap.m.Panel("poDetailPanel",{width:"95%"});
              poDetailPanel.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("ProcessDetails"),width:"100%"}).addStyleClass("eDataLabel"));
              
              poDetailPanel.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("2")}).addStyleClass("seqNo seqNo2"));
              //display lctypes drop down
              var lctypeList= new sap.ui.commons.DropdownBox("lcListDD",{change:oController.handleLCTypeSelection}).addStyleClass("lcTypeListBox");
              var oTemplate= new sap.ui.core.ListItem();
              oTemplate.bindProperty("text","ProcessOrder");
             // oTemplate.bindProperty("key","ProcessOrder");
              lctypeList.bindItems("/",oTemplate);
              lctypeList.setModel(oCore.getModel("lcListModel"));
              poDetailPanel.addContent(lctypeList);

              poDetailPanel.addContent(sap.ui.xmlfragment("com.jbl.lc.view.fragment.PODetails",oController));
              var brdata = sap.ui.getCore().getModel("barmod");
              /*var toolPD = new sap.m.Toolbar("procDetTB",{content:[new sap.m.Label({text:i18nModel.getResourceBundle().getText("ProcessOrder")}), new sap.m.Text("tool_PO"), new sap.m.ToolbarSpacer(), new sap.m.Label({text:i18nModel.getResourceBundle().getText("Plant")}),new sap.m.Text("tool_plant"),new sap.m.ToolbarSpacer(), new sap.m.Label({text:i18nModel.getResourceBundle().getText("LCStatus")}),new sap.m.Text("tool_status")]  }).addStyleClass("processDetBar");
             var toolPD = new sap.m.Toolbar("procDetTB",{content:[new sap.m.Label({text:i18nModel.getResourceBundle().getText("ProcessOrder")}), new sap.m.Text("tool_PO")]  }).addStyleClass("processDetBar");
                  poDetailPanel.addContent(toolPD);*/
              
              
              //display sequence
              poDetailPanel.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("3")}).addStyleClass("seqNo seqNo3"));
              //display process questionair section
              var quesBar=new sap.ui.core.HTML({content:"<div class='quesContainer'><div class='quesText'>Process Questionnaires</div><img class='quesArrow' src='img/process-q-arrow.png'/></div>"});
              
              poDetailPanel.addContent(new sap.m.CustomTile({content:quesBar,press:oController.handleQsNav}).addStyleClass("lcmaintile"));
              
              //display cancel button
              poDetailPanel.addContent(new sap.m.Button({text:"Cancel",press:oController.handleNavBack}).addStyleClass("canbtn"));
             
              page.addContent(poDetailPanel);
              return page;
              
              }
});