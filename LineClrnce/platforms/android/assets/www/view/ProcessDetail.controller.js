
sap.ui.controller("com.jbl.lc.view.ProcessDetail", {
                  
            onInit: function () {
                  getPODetails();
                  },
                  onAfterRendering: function() {
                  },
                  handleNavBack: function () {
                  var nav = sap.ui.getCore().byId("Home").getController().nav;
                  nav.back("Home");
                  
                  },

                  handleQsNav : function() {
                  getQuestions();
                  sap.ui.getCore().byId("Home").getController().nav.to("ProcessQs");
                  
                  },
                  handleLogoff: function(event) {
                  logoff();
                  }
});

