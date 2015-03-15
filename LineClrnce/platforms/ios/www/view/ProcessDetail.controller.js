
sap.ui.controller("com.jbl.lc.view.ProcessDetail", {
          /* 
            Lifecycle method.
           */
            onInit: function () {
                  //get PO details upon initialization
                  //getPODetails();
                  getPODetailsHelper();
                  },
            onAfterRendering: function() {
                  },
            /* 
              Navigate back to Home/Main screen.
             */
            handleNavBack: function () {
                  var nav = sap.ui.getCore().byId("Home").getController().nav;
                  nav.back("Home");
                  },
            /*
              Get questionnaire and navigate to questionnaire screen.
             */
            handleQsNav : function() {
                  getQuestions();
                  sap.ui.getCore().byId("Home").getController().nav.to("ProcessQs");
                  
                  },
             handleLCTypeSelection: function(evt) {
                  //update lctype model with selected value from dropdown and make the GW service call to refresh process detail table
                  var lcTypeData=oCore.getModel("poInputModel").getData();
                  lcTypeData[0].ProcessOrder= this.getValue().split("-")[1].trim();
                  lcTypeData[0].ProfileType= this.getValue().split("-")[0].trim()
                  var lcTypeModel=  oCore.getModel("poInputModel");
                  lcTypeModel.setData(lcTypeData);
                   oCore.setModel(lcTypeModel,"poInputModel");
                  getPODetails(false);
                  //set the value of next page drop down if its already created
                  if(sap.ui.getCore().byId("lcTypeDD") !=null){
                    sap.ui.getCore().byId("lcTypeDD").setValue(this.getValue());
                  }

                  },
            /*
              Perform logoff function
             */
            handleLogoff: function(event) {
                  logoff();
                  }
});

