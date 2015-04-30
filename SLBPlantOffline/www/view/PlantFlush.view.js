jQuery.sap.require("ui5bp.app.config");

sap.ui.jsview("ui5bp.view.PlantFlush", {

    getControllerName: function() {
        return "ui5bp.view.PlantFlush";
    },

    createContent: function(oController) {
        
        var oBtnSave = new sap.m.Button({
            icon : "sap-icon://save",
            visible : true,
            tooltip : "Save",
            press : function(ev) {
                oController.doFlush();
            }
        });
              
              var oLayout = new sap.ui.commons.layout.VerticalLayout({
                                                                   width: "100%"
                                                                   });
              
             
              
              // Label for the e-mail field
              var oLabel = new sap.ui.commons.Label("lbKtext2", {
                                                text: ' Push the save button to flush'
                                                });
              
              oLayout.addContent(oLabel);
              
              var oLabel2 = new sap.ui.commons.Label("lbKtext3", {
                                                    text: ' the offline store.'
                                                    });
              
              oLayout.addContent(oLabel2);

              
              
        
        return new sap.m.Page({
            title: "Flush Store",
            showNavButton: "{device>/isPhone}",
            navButtonPress: [oController.doNavBack, oController],
            content: [oLayout],
            headerContent: [oBtnSave]
                              /*,
            footer: new sap.m.Bar({})*/
        });
    }

});