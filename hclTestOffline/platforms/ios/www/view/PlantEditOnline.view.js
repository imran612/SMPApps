jQuery.sap.require("ui5bp.app.config");

sap.ui.jsview("ui5bp.view.PlantEditOnline", {

    getControllerName: function() {
        return "ui5bp.view.PlantEditOnline";
    },

    createContent: function(oController) {
        
        var oBtnSave = new sap.m.Button({
            icon : "sap-icon://save",
            visible : true,
            tooltip : "Save",
            press : function(ev) {
                oController.doSave();
            }
        });
              
              var oLayout = new sap.ui.commons.layout.VerticalLayout({
                                                                   width: "100%"
                                                                   });
              
              // Create text field for the e-mail
              var oTF = new sap.ui.commons.TextField(this.createId("tfWerks"), {
                                                     tooltip: 'Werks',
                                                     editable: false
                                                     }).bindValue("/Werks");
              
              // Label for the e-mail field
              var oLabel = new sap.ui.commons.Label({
                                                    text: 'Werks',
                                                    labelFor: oTF
                                                    });
              

              oTF.addStyleClass("editTF");
              oLabel.addStyleClass("editLB");
              oLayout.addContent(oLabel);
              oLayout.addContent(oTF);
              

              oTF = new sap.ui.commons.TextField(this.createId("tfStand"), {
                                                 tooltip: 'Stand',
                                                  editable: false
                                                 }).bindValue("/Stand");
              

              oLabel = new sap.ui.commons.Label({
                                                text: 'Stand',
                                                labelFor: oTF
                                                });
              
              oTF.addStyleClass("editTF");
              oLabel.addStyleClass("editLB");
              oLayout.addContent(oLabel);
              oLayout.addContent(oTF);
              
              // Create text field for the e-mail
              oTF = new sap.ui.commons.TextField(this.createId("tfKtext"), {
                                                 tooltip: 'Ktext',
                                                 editable: true
                                                 }).bindValue("/Ktext");
              
              // Label for the e-mail field
              oLabel = new sap.ui.commons.Label({
                                                text: 'Ktext',
                                                labelFor: oTF
                                                });
              
              oTF.addStyleClass("editTF");
              oLabel.addStyleClass("editLB");
              oLayout.addContent(oLabel);
              oLayout.addContent(oTF);
              
              
        
        return new sap.m.Page({
            title: "Plant Edit Online",
            showNavButton: "{device>/isPhone}",
            navButtonPress: [oController.doNavBack, oController],
            content: [oLayout],
            headerContent: [oBtnSave]
                              /*,
            footer: new sap.m.Bar({})*/
        });
    }

});