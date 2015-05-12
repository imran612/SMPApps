jQuery.sap.require("com.hcl.app.SMPController");

sap.ui.controller("ui5bp.view.PlantEditOnline", {

    onInit: function() {
                  this.getView().addDelegate({onBeforeShow:function(evt) {
                                             console.log("test");
                                             var oModel = new sap.ui.model.json.JSONModel();
                                             oModel.setData(evt.data);
                                             evt.to.setModel(oModel);
                                             //evt.to.setBindingContext(evt.data);
                                             }});
        //this.getView().setModel(new sap.ui.model.json.JSONModel("model/coffee2.json"));
        this.bus = sap.ui.getCore().getEventBus();
        //this.bus.subscribe("read", "plantOffline", this.plantsReadDone, this);
    },
                  
    beforeShow: function(evt){
        console.log("in beforeShow");
    },

    doNavBack: function(event) {
                  this.bus.publish("nav", "back",{
                                   id: "PlantEdit"
                                   });
    },
    
    doSave: function(){
        //var oModel2 = new myJSONModel;
                  
        // Retrieve the contact information from the text fields
        var oParameters = {
            Mandt : this.getView().getModel().getProperty("/Mandt"),
            Addrnum : this.getView().getModel().getProperty("/Addrnum"),
            Werks : this.getView().byId("tfWerks").getValue(),
            Stand : this.getView().byId("tfStand").getValue(),
            Ktext : this.getView().byId("tfKtext").getValue()
        };
                  
        var oModel = this.getView().getModel();
        oModel.Ktext = this.getView().byId("tfKtext").getValue();
                  
                  
        /*var model = sap.ui.getCore().getModel("plant");
                  model.update("/PlantSet(Werks='" + oParameters.Werks + "',Stand='" + oParameters.Stand + "')", oParameters, null,
                            function(){
                               com.hcl.app.SMPController.updateRecord();
                        // sap.ui.getCore().getModel().refresh();

                    },
                    function(){
                               console.log("update failed");
                        }
                    );*/
       
        com.hcl.app.SMPController.updateRecord(oModel, true);
                  
        // Post data to the REST interface
        //oModel2.loadDataNew("../../../zscnblog2/contact/", handleSuccess, handleError,     oParameters, true, 'POST');
    }
});