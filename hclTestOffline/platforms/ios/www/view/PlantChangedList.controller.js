jQuery.sap.require("com.hcl.app.SMPController");

sap.ui.controller("ui5bp.view.PlantChangedList", {

    onInit: function() {
        //this.getView().setModel(new sap.ui.model.json.JSONModel("model/coffee2.json"));
        this.bus = sap.ui.getCore().getEventBus();
        this.bus.subscribe("read", "plantChanged", this.plantsReadDone, this);
    },

    doNavBack: function(event) {
        this.bus.publish("nav", "back");
    },
    onPlantSelect: function(event) {
                  
        console.log("plant select ");
                  //event.getSource().getSelectedItem().getBindingContextPath()
        //this.bus.publish("status", "online", {value:"This is a test"});
        var oPlant = event.getSource().getSelectedItem()  //evt.getParameter("listItem");
        var sPath = oPlant.getBindingContext().getPath();
        var oObject = this.getView().getModel().getProperty(sPath);
                  //this._oRouter.navTo("detail", {detailId: oObject.ID});
        this.bus.publish("nav", "to", {
                                   id: "PlantEdit",
                                   data: oObject
                                   });
        //event.oSource.oBindingContexts
        /*this.bus.publish("nav", "to", {
                                    id: "PlantEdit",
                                    data: {
                                        plantId: oObject.Werks,
                                        plantStand:"Greg"
                                    }
                                });*/
                  //beforeShow
    },
    doRefresh: function(){
        console.log("onRefresh");
        com.hcl.app.SMPController.read(true, false);
    },
                  
    plantsReadDone: function(sChannelId, sEventId, oData){
        console.log("plantsReadDone changed");
        this.getView().setModel(oData.value);
        sap.ui.getCore().setModel(oData.value,"plantChanged");
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
        var list = this.getView().byId("plantChangedList");
        var binding = list.getBinding("items");
        binding.filter(aFilters, "Werks");
    }
});