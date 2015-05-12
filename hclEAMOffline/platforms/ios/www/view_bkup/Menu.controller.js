jQuery.sap.require("sap.ui.model.json.JSONModel");

sap.ui.controller("ui5bp.view.Menu", {

    onInit: function() {
        this.getView().setModel(new sap.ui.model.json.JSONModel("model/menu.json"));
        this.bus = sap.ui.getCore().getEventBus();
        this.bus.subscribe("status", "online", this.doUpdateOnlineStatus, this);
        //document.addEventListener("online", this.doUpdateOnlineStatus2("Online"), false);
        //document.addEventListener("offline", this.doUpdateOnlineStatus2("Offline"), false);

    },

    doNavOnSelect: function(event) {
        if (sap.ui.Device.system.phone) {
            event.getParameter("listItem").setSelected(false);
        }
        this.bus.publish("nav", "to", {
            id: event.getParameter('listItem').getCustomData()[0].getValue()
        });
    },
                  
    doUpdateOnlineStatus: function(sChannelId, sEventId, oData){
        console.log("in doUpdateOnlineStatus " + oData.value);
        var status1 = this.getView().byId("status1");
        status1.setText(oData.value);
    },
    doUpdateOnlineStatus2: function(status){
                  console.log("in doUpdateOnlineStatus " + status );
                  var status1 = this.getView().byId("status1");
                  status1.setText(status);
    }
});