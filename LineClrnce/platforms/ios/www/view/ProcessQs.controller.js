
sap.ui.controller("com.jbl.lc.view.ProcessQs", {
         /* 
           Component lifecycle method to initialize the component.
          */
            onInit: function () {
                  //get process questionnaire upon initialization
                  getQuestions();
                  //create json model to set Yes/No to combox Ui
                  var quesOptionModel=new sap.ui.model.json.JSONModel("model/quesres_model.json");
                  oCore.setModel(quesOptionModel,"qOptionModel");
                  },
                  
           /*
            Event handler method called to capture user response on questionnaire. 
            Update the model based on user response.
            */
            handleSelection: function(event) {
                  //get json model for questions
                  var jsonData=oCore.getModel("quesModel").getData();
                  //identify if selection is made at header level of item level
                  if(this.getName().indexOf("hdr")>=0) {
                  //close panel if checkbox is selected
                  // for checkbox  if(this.getSelected()) {
                  if(this.getValue()=="") {
                        this.getParent().getParent().setExpanded(true);
                  } else {
                        this.getParent().getParent().setExpanded(false);
                  }
                  //loop through data to update model data
                  //updateQSModelHelper(this.getName().split(":")[1],'',event.mParameters.selected);
                  // updateQSModelHelper(this.getName().split(":")[1],'',this.getState());
                  updateQSModelHelper(this.getName().split(":")[1],'',this.getValue());
                  } else {
                  var data = this.getName().split(":");
                  //updateQSModelHelper(data[1],data[2],this.getState());
                  updateQSModelHelper(data[1],data[2],this.getValue());
                 // updateQSModelHelper(data[1],data[2],event.mParameters.selected);
                  }
                  
                  },
            /*
              Event handler method used to save user responses.
            */
            handleSaveQs: function(event) {
                  busyDialog.open();
                  setTimeout(function() {
                             saveAnswers(false);
                             }, 100);

                  },
            /*
              User tap on cancel button. Take him to home page.
             */
            handleCancel: function () {
                  //clear the text
                  sap.ui.getCore().byId("remarks").setValue("");
                  var nav = oCore.byId("Home").getController().nav;
                  nav.back("Home");
                  },
            /*
             User tap on back arrow button. Navigate to previous screen.
             */
            handleNavBack: function () {
                  var nav = oCore.byId("ProcessDetail").getController().nav;
                  nav.back("ProcessDetail");
                  },
            /*
             Display sign dailog window when sign button is clicked.
             */
            handleESignDialog: function (event) {
                  signStep =  event.mParameters.id;
                  setTimeout(function() {
                             saveAnswers(true);
                             }, 100);
                  openSignatureDialog();
                  /*var oModel = new sap.ui.model.json.JSONModel();
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
                   */
                  
                  },
        /*
          Close sign dailog window.
         */
            onDialogCloseButton: function (oEvent) {
                 //var sType = oEvent.getSource().data("dialogType");
                  //var oModel = oCore.getModel("eSignModelPopup");
                   //oModel.eSign.close();
                  signDialog.close();
                  },
        /*
            Undo Signature.
          */
            onDialogUndoSignButton:function (oEvent) {
                  var sPwd=oCore.byId("sPwd").getValue();
                  var sUID=oCore.byId("sUID").getValue();
                  if(sPwd==undefined || sPwd=="" || sUID == undefined || sUID =="") {
                  showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",i18nModel.getResourceBundle().getText("MissingPwd"));
                  }
                  else {
                  sap.m.MessageBox.confirm(i18nModel.getResourceBundle().getText("UndoSignConfirm"),function (oAction){
                                           if(oAction == sap.m.MessageBox.Action.OK){
                                                //if( setQuesResponsesEditable(true)) {
                                                    busyDialog.open();
                                                    setTimeout(function() {
                                                      //var oModel = oCore.getModel("eSignModelPopup");
                                                    saveSignature("ZPDN","X");
                                                    //oModel.eSign.close();
                                                      }, 10);
                                                //}
                                            }
                                           });
                  }

            },
        /*
           Event handler method to handle user signature. User enters the SAP password to perform the signature.
           Validate user signature before starting the update process.
         */
            onDialogConfirmButton: function(event) {
                  var sPwd=oCore.byId("sPwd").getValue();
                  if(sPwd==undefined || sPwd=="") {
                  showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",i18nModel.getResourceBundle().getText("MissingPwd"));
                  }
                  else {
                  if( checkIfUserRespondToAllQs()) {
                  busyDialog.open();
                  setTimeout(function() {
                             saveSignature(signStep)
                             }, 10);
                  }else{
                  oCore.byId("sPwd").setValue("");
                  }
                 }

                 },
            /*
             Perform logoff.
             */
            handleLogoff: function(event) {
                  logoff();
                  },
           handleLCTypeSelection: function(evt) {
                  //update lctype model with selected value from dropdown and make the GW service call to refresh process detail table
                  var lcTypeData=oCore.getModel("poInputModel").getData();
                  lcTypeData[0].ProcessOrder= this.getValue().split("-")[1].trim();
                  lcTypeData[0].ProfileType= this.getValue().split("-")[0].trim()
                  var lcTypeModel=  oCore.getModel("poInputModel");
                  lcTypeModel.setData(lcTypeData);
                  oCore.setModel(lcTypeModel,"poInputModel");
                  getQuestions();
                  sap.ui.getCore().byId("lcListDD").setValue(this.getValue());
                  }
});

