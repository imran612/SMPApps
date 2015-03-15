sap.ui.jsview("com.jbl.lc.view.ProcessQs", {

	getControllerName: function () {
		return "com.jbl.lc.view.ProcessQs";
	},
	
	createContent: function (oController) {

              var page = new sap.m.Page({showHeader: true,
                                        showNavButton: true,
                                        showFooter: true,
                                        alignItems:"center",
                                        navButtonPress:oController.handleNavBack
                                        }); 
              
              
              page.setCustomHeader(new sap.m.Bar("pageHdr3",{contentLeft: [new sap.m.Button({icon:"sap-icon://nav-back",press:oController.handleNavBack}),new sap.m.Image({src:"img/LC-logo.png"}).addStyleClass("nyLogo")],contentRight:[new sap.m.Text({text:i18nModel.getResourceBundle().getText("Welcome")+" "+oCore.getModel("userModel").getData().user}).addStyleClass("welHdr"),new sap.m.Button({icon:"sap-icon://log",press:oController.handleLogoff}) ]}));

              page.setFooter(new sap.m.Bar({
                                           
                                           contentLeft:[new sap.m.Label({text:i18nModel.getResourceBundle().getText("ProcessOrder")}).addStyleClass("footerPO footerStyle"),new sap.m.Text("footerPO2")],
                                           contentMiddle:[new sap.m.Text({text:i18nModel.getResourceBundle().getText("Customer")}).addStyleClass("footerStyle"),new sap.m.Text("customerName2")],contentRight:[new sap.m.Text({text:i18nModel.getResourceBundle().getText("Material")}).addStyleClass("footerStyle"),new sap.m.Text("material2").addStyleClass("footerMat")]
                                           
                                           }));
              
              //display jbl logo
              page.addContent(new sap.m.Bar({contentLeft:new sap.m.Image({src:"img/jabil-logo.jpg",height:"20px"}).addStyleClass("jblLogo")}).addStyleClass("subHdrBar"));
              //add heading pannel
              var headPanel = new sap.m.Panel({width:"93%"}).addStyleClass("headPanelStyleQs");
              headPanel.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("ProcessQuestions"),width:"100%"}).addStyleClass("eDataLabel"));
              //display sequence
              headPanel.addContent(new sap.m.Text({text:i18nModel.getResourceBundle().getText("4")}).addStyleClass("seqNo seqNo4"));
              //display lctypes drop down
              var lctypeList= new sap.ui.commons.DropdownBox("lcTypeDD",{change:oController.handleLCTypeSelection}).addStyleClass("lcTypeListBox lcTypeListBoxQs");
              var oTemplate= new sap.ui.core.ListItem();
              oTemplate.bindProperty("text","ProcessOrder");
              // oTemplate.bindProperty("key","ProcessOrder");
              lctypeList.bindItems("/",oTemplate);
              lctypeList.setModel(oCore.getModel("lcListModel"));
              //set the list value from prev drop down
              sap.ui.getCore().byId("lcTypeDD").setValue(sap.ui.getCore().byId("lcListDD").getValue());
              headPanel.addContent(lctypeList);
              page.addContent(headPanel);

              
              //1. initialize panel to hold main page content
              var poQslPanel = new sap.m.Panel("poQslPanel",{width:"95%"});
              page.addContent(poQslPanel);
              
              
              //event listner to draw questionnaire UI
              poQslPanel.attachEvent("drawQuestionUI", function(oEvent) {

                                     

                                var qModel=oCore.getModel("quesModel");
                                var qData = qModel.getData();
                                     jQuery.each(qData, function(i,val) {
                                                 var aPanel;
                                                 if(val.ResReq=="Y") {
                                                 
                                                 var yesNoSel= new sap.ui.commons.DropdownBox().addStyleClass("qAnsList");
                                                 var oTemplate= new sap.ui.core.ListItem();
                                                 oTemplate.bindProperty("text","value");
                                                 oTemplate.bindProperty("key","key");
                                                 //yesNoSel.bindProperty("editable","editable");
                                                 //yesNoSel.setEditable(false);
                                                 
                                                 yesNoSel.bindItems("/",oTemplate);
                                                 
                                                // var yesNoSel=sap.ui.xmlfragment("com.jbl.lc.view.fragment.YesNoCombo",oController);
                                                 yesNoSel.setModel(oCore.getModel("qOptionModel"));
                                                 
                                                 switch(val.StepRes) {
                                                 case "Y": yesNoSel.setSelectedKey("yes"); break;
                                                    case "N": yesNoSel.setSelectedKey("no"); break;
                                                    default : yesNoSel.setSelectedKey(""); break;
                                                 }
                                                 //yesNoSel.setSelectedKey(val.StepRes=="Y"?"yes":"no");
                                                 yesNoSel.attachChange(oController.handleSelection);
                                                 yesNoSel.setName("hdr:"+val.LCSecID);
                                                 //yesNoSel.setEditable(false);
                                        var panelHeader = new sap.m.Toolbar({content:[new sap.m.Text({text:val.StepText}),new sap.m.ToolbarSpacer(),yesNoSel ]  });
                                        //var panelHeader = new sap.m.Toolbar({content:[new sap.m.Text({text:val.StepText}),new sap.m.ToolbarSpacer(),new sap.m.Switch({customTextOn:"Yes",customTextOff:"No", state:val.StepRes=="Y"?true:false,name:"hdr:"+val.LCSecID,change:oController.handleSelection})]  });
                                                 //apply different style for first section/panel only
                                                 if(i==0) { aPanel = new sap.m.Panel({headerToolbar:panelHeader,expandable:true,expanded:false}).addStyleClass("procQsPanelList firstSection"); }
                                                 else {aPanel = new sap.m.Panel({headerToolbar:panelHeader,expandable:true,expanded:false}).addStyleClass("procQsPanelList"); }
                                                 } else {
                                                 if(i==0) { aPanel = new sap.m.Panel({headerText:val.StepText,expandable:true,expanded:false}).addStyleClass("procQsPanelList firstSection"); }
                                                 else {
                                                 aPanel = new sap.m.Panel({headerText:val.StepText,expandable:true,expanded:false}).addStyleClass("procQsPanelList");
                                                 }
                                                 }
                                                 
                                                 var aList=new sap.m.List();
                                                 jQuery.each(val.item, function(j,jVal) {
                                                    var inputListItems;
                                                    if(jVal.ResReq=="Y") {
                                                        /*inputListItems=new sap.m.InputListItem({ label: jVal.StepText,
                                                                    content : [new sap.m.Switch({customTextOn:"Yes",customTextOff:"No", state:val.StepRes=="Y"?true:false,name:"itm:"+val.LCSecID,change:oController.handleSelection})]  }); */
                                                             
                                                             var yesNoSel= new sap.ui.commons.DropdownBox().addStyleClass("qAnsList");
                                                             var oTemplate= new sap.ui.core.ListItem();
                                                             oTemplate.bindProperty("text","value");
                                                             oTemplate.bindProperty("key","key");
                                                             yesNoSel.bindItems("/Options",oTemplate);
                                                             yesNoSel.setModel(oCore.getModel("qOptionModel"));
                                                             switch(val.StepRes) {
                                                             case "Y": yesNoSel.setSelectedKey("yes"); break;
                                                             case "N": yesNoSel.setSelectedKey("no"); break;
                                                             default : yesNoSel.setSelectedKey(""); break;
                                                             }
                                                             yesNoSel.attachChange(oController.handleSelection);
                                                             yesNoSel.setName("itm:"+val.LCSecID);
                                                             
                                                             inputListItems=new sap.m.InputListItem({ label: jVal.StepText,
                                                            content : [yesNoSel]  });
                                                             
                                                             }
                                                             else {
                                                             inputListItems=new sap.m.InputListItem({ label: jVal.StepText });
                                                             
                                                             }
                                                             
                                                             aList.addItem(inputListItems);
                                                             });
                                                 
                                                 aPanel.addContent(aList);
                                                 //close the panel if YES response is detected
                                                 if(val.StepRes=="") { aPanel.setExpanded(true); }
                                                 poQslPanel.addContent(aPanel);
                                                 
                                                 });
                                     
                    });
              
              //display remarks test area
               var commentPanel = new sap.m.Panel({width:"95%"});
              commentPanel.addContent(new sap.m.Label({text:i18nModel.getResourceBundle().getText("Remarks")}).addStyleClass("remarkslabel"));
              commentPanel.addContent(new sap.m.TextArea("remarks",{wrapping: sap.ui.core.Wrapping.Soft,rows:4 }).addStyleClass("remark"));
               page.addContent(commentPanel);
             
              //display save button
              var saveBtnPanel = new sap.m.Panel({width:"98%"});
              saveBtnPanel.addContent(new sap.m.Button("saveRespBtn",{text:i18nModel.getResourceBundle().getText("SaveQuestions"),press:oController.handleSaveQs}).addStyleClass("canbtn saveQsBtn"));
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
                                                   if(val.SignStep=="ZPDN"){
                                                    if(val.IsSignAllowed =="X"){
                                                    setQuesResponsesEditable(true);
                                                    }else{
                                                    setQuesResponsesEditable(false);
                                                    }
                                                   }
                                                   
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
                                                   //update sign button text with name and date
                                                   if(val.IsSignAllowed == ""){
                                                   var signDate = val.SignedTime.substring(4,6)+"/"+val.SignedTime.substring(6,8)+"/"+val.SignedTime.substring(0,4);
                                                    signBtn.setText(val.FullName+"("+signDate+")");
                                                    signBtn.addStyleClass("disableSignBtnSigned");
                                                   }
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