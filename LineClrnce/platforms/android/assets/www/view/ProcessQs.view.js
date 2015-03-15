sap.ui.jsview("com.jbl.lc.view.ProcessQs", {

	getControllerName: function () {
		return "com.jbl.lc.view.ProcessQs";
	},
	
	createContent: function (oController) {
		
              // alert("22");
              var page = new sap.m.Page({showHeader: true,
                                        showNavButton: true,
                                        alignItems:"center",
                                        navButtonPress:oController.handleNavBack
                                        }); 
              
              
              page.setCustomHeader(new sap.m.Bar("pageHdr3",{contentLeft: [new sap.m.Button({icon:"sap-icon://nav-back",press:oController.handleNavBack}),new sap.m.Image({src:"img/LC-logo.png"}).addStyleClass("nyLogo")],contentRight:[new sap.m.Text("uId3",{text:i18nModel.getResourceBundle().getText("Welcome")+" "+oCore.getModel("userModel").getData().user}).addStyleClass("welHdr"),new sap.m.Button({icon:"sap-icon://log",press:oController.handleLogoff}) ]}));
              
              //display jbl logo
              page.addContent(new sap.m.Bar({contentLeft:new sap.m.Image({src:"img/jabil-logo.jpg",height:"20px"}).addStyleClass("jblLogo")}).addStyleClass("subHdrBar"));
              
              //1. initialize panel to hold main page content
              var poQslPanel = new sap.m.Panel("poQslPanel",{width:"95%"});
              /*poQslPanel.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("ProcessQuestions"),width:"100%"}).addStyleClass("eDataLabel"));
              
                           
              //display sequence
              poQslPanel.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("4")}).addStyleClass("seqNo seqNo4"));*/
              page.addContent(poQslPanel);
              
              poQslPanel.attachEvent("drawQuestionUI", function(oEvent) {
                                     poQslPanel.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("ProcessQuestions"),width:"100%"}).addStyleClass("eDataLabel"));
                                     
                                     
                                     //display sequence
                                     poQslPanel.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("4")}).addStyleClass("seqNo seqNo4"));

                                var qModel=oCore.getModel("quesModel");
                                var qData = qModel.getData();
                                     jQuery.each(qData, function(i,val) {
                                                 var aPanel;
                                                 if(val.ResReq=="Y") {
                                                 var panelHeader = new sap.m.Toolbar({content:[new sap.m.Text({text:val.StepText}),new sap.m.ToolbarSpacer(),new sap.m.Switch({customTextOn:"Yes",customTextOff:"No", state:val.StepRes=="Y"?true:false,name:"hdr:"+val.LCSecID,change:oController.handleSelection})]  });
                                                 //apply different style for first section/panel only
                                                 if(i==0) { aPanel = new sap.m.Panel({headerToolbar:panelHeader,expandable:true,expanded:true}).addStyleClass("procQsPanelList firstSection"); }
                                                 else {aPanel = new sap.m.Panel({headerToolbar:panelHeader,expandable:true,expanded:true}).addStyleClass("procQsPanelList"); }
                                                 } else {
                                                 if(i==0) { aPanel = new sap.m.Panel({headerText:val.StepText,expandable:true,expanded:true}).addStyleClass("procQsPanelList firstSection"); }
                                                 else {
                                                 aPanel = new sap.m.Panel({headerText:val.StepText,expandable:true,expanded:true}).addStyleClass("procQsPanelList");
                                                 }
                                                 }
                                                 
                                                 var aList=new sap.m.List();
                                                 jQuery.each(val.item, function(j,jVal) {
                                                             var inputListItems;
                                                             if(jVal.ResReq=="Y") {
                                                             inputListItems=new sap.m.InputListItem({ label: jVal.StepText,
                                                                                                    content : [new sap.m.Switch({customTextOn:"Yes",customTextOff:"No", state:val.StepRes=="Y"?true:false,name:"itm:"+val.LCSecID,change:oController.handleSelection})]  });
                                                             
                                                             }
                                                             else {
                                                             inputListItems=new sap.m.InputListItem({ label: jVal.StepText });
                                                             
                                                             }
                                                             
                                                             aList.addItem(inputListItems);
                                                             });
                                                 
                                                 aPanel.addContent(aList);
                                                 //close the panel if YES response is detected
                                                 if(val.StepRes=="Y") { aPanel.setExpanded(false); }
                                                 //qsPanel.addContent(aPanel);
                                                 poQslPanel.addContent(aPanel);
                                                 
                                                 });
                                     
                                     /*  
                                      jQuery.each(qData, function(i,val) {
                                      var aPanel;
                                      if(val.ResReq=="Y") {
                                      var panelHeader = new sap.m.Toolbar({content:[new sap.m.Text({text:val.StepText}),new sap.m.ToolbarSpacer(),new sap.m.CheckBox({selected:val.StepRes=="Y"?true:false,name:"hdr:"+val.LCSecID,select:oController.handleSelection})]  });
                                      //apply different style for first section/panel only
                                      if(i==0) { aPanel = new sap.m.Panel({headerToolbar:panelHeader,expandable:true,expanded:true}).addStyleClass("procQsPanelList firstSection"); }
                                      else {aPanel = new sap.m.Panel({headerToolbar:panelHeader,expandable:true,expanded:true}).addStyleClass("procQsPanelList"); }
                                      } else {
                                      if(i==0) { aPanel = new sap.m.Panel({headerText:val.StepText,expandable:true,expanded:true}).addStyleClass("procQsPanelList firstSection"); }
                                      else {
                                      aPanel = new sap.m.Panel({headerText:val.StepText,expandable:true,expanded:true}).addStyleClass("procQsPanelList");
                                      }
                                      }
                                      
                                      var aList=new sap.m.List();
                                      jQuery.each(val.item, function(j,jVal) {
                                      var inputListItems;
                                      if(jVal.ResReq=="Y") {
                                      inputListItems=new sap.m.InputListItem({ label: jVal.StepText,
                                      content : [new sap.m.CheckBox({selected:jVal.StepRes=="Y"?true:false,name:"itm:"+val.LCSecID+":"+val.LCSeqID ,select:oController.handleSelection})]  });
                                      
                                      }
                                      else {
                                      inputListItems=new sap.m.InputListItem({ label: jVal.StepText });
                                      
                                      }
                                      
                                      aList.addItem(inputListItems);
                                      });
                                      
                                      aPanel.addContent(aList);
                                      //qsPanel.addContent(aPanel);
                                      poQslPanel.addContent(aPanel);
                                      
                                      }); 
                                      */
                    });
              
              //display save button
              var saveBtnPanel = new sap.m.Panel({width:"98%"});
              saveBtnPanel.addContent(new sap.m.Button({text:i18nModel.getResourceBundle().getText("SaveQuestions"),press:oController.handleSaveQs}).addStyleClass("canbtn saveQsBtn"));
              page.addContent(saveBtnPanel);
              
              //esign section
              var eSignPanelTxt = new sap.m.Panel("eSignPanelTxt",{width:"95%"});
              eSignPanelTxt.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("eSignHdrTxt"),width:"100%"}).addStyleClass("eDataLabel"));
              
              eSignPanelTxt.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("5")}).addStyleClass("seqNo seqNo5"));
              
              page.addContent(eSignPanelTxt);
              
              var eSignPanel = new sap.m.Panel("eSignPanel",{width:"90%"});
                eSignPanel.attachEvent("drawSignUI", function(oEvent) {
                                       eSignPanel.destroyContent();
                        eSignPanel.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("eSignText")}).addStyleClass("eSignTxt1"));
                                       var sData=oCore.getModel("signModel").getData();
                                       var disableAllSign=false;
                                       var disableSign=true;
                                       jQuery.each(sData, function(i,val) {
                                                   
                                                   
                                                   var vLyt=new sap.ui.layout.VerticalLayout({width:"100%"});
                                                   var eSignType=new sap.m.Text({text:val.SignDesc, width:"100%"});
                                                   var eSignActTxt=new sap.m.Text({text:i18nModel.getResourceBundle().getText("LCActivityText")});
                                                   var signBtn=new sap.m.Button({text:"Sign",id:val.SignStep, enabled:false,press:oController.handleESignDialog});
                                                   
                                                   if(val.SignedTime==0 && !disableAllSign) {
                                                   //signature is not yet recorded
                                                   eSignType.addStyleClass("enableSignType");
                                                   eSignActTxt.addStyleClass("lcActivityTxt");
                                                   if(!disableAllSign) {
                                                        disableSign=true;
                                                        signBtn.addStyleClass("dialogBtn");
                                                        signBtn.setEnabled(true);
                                                   }
                             
                                                   } else {
                                                   //signature is recorded
                                                   eSignType.addStyleClass("disableSignType");
                                                   eSignActTxt.addStyleClass("disableLCActivityText");
                                                   signBtn.addStyleClass("disableSignBtn");
                                                   disableSign=false;
                                                   signBtn.setEnabled(false);
                                                   }
                                                   
                                                   vLyt.addContent(eSignType);
                                                   vLyt.addContent(eSignActTxt);
                                                   eSignPanel.addContent(new sap.m.Toolbar({content:[vLyt,new sap.m.ToolbarSpacer(),signBtn]}));
                                                   if(disableSign) {
                                                    disableAllSign=true;
                                                   }
                                                   
                                                   
                                                   
                                                   });

                    });
              
             
              page.addContent(eSignPanel);
              
              //display cancel button
              var cancelPanel = new sap.m.Panel("cancelPanel",{width:"95%"});
              cancelPanel.addContent(new sap.m.Button({text:"Cancel",press:oController.handleCancel}).addStyleClass("canbtn"));
               page.addContent(cancelPanel);
              return page;
              
              }
});