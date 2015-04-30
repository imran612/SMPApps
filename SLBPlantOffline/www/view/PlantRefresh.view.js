jQuery.sap.require("ui5bp.app.config");

sap.ui.jsview("ui5bp.view.PlantRefresh", {

    getControllerName: function() {
        return "ui5bp.view.PlantRefresh";
    },

    createContent: function(oController) {
        
        var oBtnSave = new sap.m.Button({
            icon : "sap-icon://save",
            visible : true,
            tooltip : "Save",
            press : function(ev) {
                oController.doRefresh();
            }
        });
              
              var oLayout = new sap.ui.commons.layout.VerticalLayout({
                                                                   width: "100%"
                                                                   });
              
             
              
              // Label for the e-mail field
              var oLabel = new sap.ui.commons.Label("lbKtext5", {
                                                text: ' Push the save button to refresh'
                                                });
              
              oLayout.addContent(oLabel);
              
              var oLabel2 = new sap.ui.commons.Label("lbKtext6", {
                                                    text: ' the offline store.'
                                                    });
              
              oLayout.addContent(oLabel2);

              
              
        
        return new sap.m.Page({
            title: "Refresh Store",
            showNavButton: "{device>/isPhone}",
            navButtonPress: [oController.doNavBack, oController],
            content: [oLayout],
            headerContent: [oBtnSave]
                              /*,
            footer: new sap.m.Bar({})*/
        });
    }

});