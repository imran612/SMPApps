jQuery.sap.require("com.slb.plantoffline.app.SMPController");

sap.ui.controller("ui5bp.view.PlantOnlineList", {

    onInit: function() {
        //this.getView().setModel(new sap.ui.model.json.JSONModel("model/coffee2.json"));
        this.bus = sap.ui.getCore().getEventBus();
        this.bus.subscribe("read", "plant", this.plantsReadDone, this);
    },

    doNavBack: function(event) {
        this.bus.publish("nav", "back");
    },
    onPlantSelect: function(event) {
        console.log("plant select");

                  //event.getSource().getSelectedItem().getBindingContextPath()
                  //this.bus.publish("status", "online", {value:"This is a test"});
        var oPlant = event.getSource().getSelectedItem()  //evt.getParameter("listItem");
        var sPath = oPlant.getBindingContext().getPath();
        var oObject = this.getView().getModel().getProperty(sPath);
                  //this._oRouter.navTo("detail", {detailId: oObject.ID});
        this.bus.publish("nav", "to", {
                                   id: "PlantEditOnline",
                                   data: oObject
                                   });

    },
    doRefresh: function(){
        console.log("onRefresh");
        com.slb.plantoffline.app.SMPController.read(false, true);
    },
                  
    plantsReadDone: function(sChannelId, sEventId, oData){
        console.log("plantsReadDone online");
        this.getView().setModel(oData.value);
    },
    onSearch: function (oEvt) {
                  
                  // add filter for search
        var aFilters = [];
        var sQuery = oEvt.getSource().getValue();
        if (sQuery && sQuery.length > 0) {
            var filter = new sap.ui.model.Filter("Werks", sap.ui.model.FilterOperator.Contains, sQuery);
            aFilters.push(filter);
        }
                  
        // update list binding
        var list = this.getView().byId("plantOnlineList");
        var binding = list.getBinding("items");
        binding.filter(aFilters, "Werks");
    }
    
});