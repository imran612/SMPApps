
sap.ui.controller("com.jbl.lc.view.ProcessQs", {
                  
            onInit: function () {
                  getQuestions();
                  },
                  
                  handleSelection: function(event) {
                  
                  //get json model for questions
                  var jsonData=oCore.getModel("quesModel").getData();
                  //identify if selection is made at header level of item level
                  if(this.getName().indexOf("hdr")>=0) {
                  //close panel if checkbox is selected
                  // for checkbox  if(this.getSelected()) {
                  if(this.getState()) {
                        this.getParent().getParent().setExpanded(false);
                  } else {
                        this.getParent().getParent().setExpanded(true);
                  }
                  //loop through data to update model data
                  //updateQSModelHelper(this.getName().split(":")[1],'',event.mParameters.selected);
                   updateQSModelHelper(this.getName().split(":")[1],'',this.getState());
                  } else {
                  var data = this.getName().split(":");
                  updateQSModelHelper(data[1],data[2],this.getState());
                 // updateQSModelHelper(data[1],data[2],event.mParameters.selected);
                  }
                  
                  },
                  handleSaveQs: function(event) {
                  busyDialog.open();
                  setTimeout(function() {
                             saveAnswers();
                             }, 100);

                  },
                  
                  handleCancel: function () {
                  var nav = oCore.byId("Home").getController().nav;
                  nav.back("Home");
                  
                  },
                  handleNavBack: function () {
                  var nav = oCore.byId("ProcessDetail").getController().nav;
                  nav.back("ProcessDetail"); 
                  
                  },
                  handleESignDialog: function (event) {
                  var oModel = new sap.ui.model.json.JSONModel();
                  if(oCore.getModel("eSignModelPopup")!=undefined) {
                    var signDailog=oCore.getModel("eSignModelPopup").eSign;
                    signDailog.destroy();
                  }
                  this._eSignD = sap.ui.xmlfragment("com.jbl.lc.view.fragment.ESignDialog",
                                                     oCore.byId("ProcessQs").getController()
                                                    );
                  // open value help dialog
                  oModel.eSign= this._eSignD;
                  oModel.signStep=event.mParameters.id;
                  oCore.setModel(oModel,"eSignModelPopup");
                  this._eSignD.open();

                  
                  },
                  onDialogCloseButton: function (oEvent) {
                 //var sType = oEvent.getSource().data("dialogType");
                  var oModel = oCore.getModel("eSignModelPopup");
                   oModel.eSign.close();
                  },
                  onDialogConfirmButton: function(event) {
                  var sPwd=oCore.byId("sPwd").getValue();
                  if(sPwd==undefined || sPwd=="") {
                  showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",i18nModel.getResourceBundle().getText("MissingPwd"));
                  } else {
                  busyDialog.open();
                  setTimeout(function() {
                             var oModel = oCore.getModel("eSignModelPopup");
                             saveSignature(oModel.signStep);
                             oModel.eSign.close();
                             }, 10);
                  
                  }
                  
                  },
                  handleLogoff: function(event) {
                  logoff();
                  },
                  handleQCheck: function(oEvt)
                  {
                 // alert("1");
                  // alert();
                 // console.log(lcmod.getData());
                  var toggle=true;
                  $.each(lcmod.getData().ques1, function( key, value ) {
                         if(!value.sel)
                         {
                         toggle=false;
                         }
                         
                         
                         });
                  lcmod.setData(lcmod.getData());
                  oCore.setModel(lcmod);
                  if(toggle)
                  {
                  oCore.byId("q1panel").setExpanded(false);
                  
                  }
                  },
                  handleQ2Check: function(oe)
                  {
                  var toggle=true;
                  $.each(lcmod.getData().ques2, function( key, value ) {
                         if(!value.sel)
                         {
                         toggle=false;
                         }
                         
                         
                         });
                  lcmod.setData(lcmod.getData());
                  oCore.setModel(lcmod);
                  if(toggle)
                  {
                  oCore.byId("q2panel").setExpanded(false);
                  
                  }
                  },
                  handleQ3Check: function(oe)
                  {
                  var toggle=true;
                  $.each(lcmod.getData().ques3, function( key, value ) {
                         if(!value.sel)
                         {
                         toggle=false;
                         }
                         
                         
                         });
                  lcmod.setData(lcmod.getData());
                  oCore.setModel(lcmod);
                  if(toggle)
                  {
                  oCore.byId("q3panel").setExpanded(false);
                  
                  }
                  },
                  handleQ4Check: function(oe)
                  {
                  var toggle=true;
                  $.each(lcmod.getData().ques4, function( key, value ) {
                         if(!value.sel)
                         {
                         toggle=false;
                         }
                         
                         
                         });
                  lcmod.setData(lcmod.getData());
                  oCore.setModel(lcmod);
                  if(toggle)
                  {
                  oCore.byId("q4panel").setExpanded(false);
                  
                  }
                  }
});

