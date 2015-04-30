jQuery.sap.require("com.slb.plantoffline.app.SMPController");

sap.ui.controller("ui5bp.view.PlantRefresh", {

    onInit: function() {
                  this.getView().addDelegate({onBeforeShow:function(evt) {
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
                                   id: "PlantRefresh"
                                   });
    },
    
    doRefresh: function(){
               
        com.slb.plantoffline.app.SMPController.refreshStore();
                  
    }
});