jQuery.sap.require("ui5bp.app.config");

sap.ui.jsview("ui5bp.view.PlantOfflineList", {

    getControllerName: function() {
        return "ui5bp.view.PlantOfflineList";
    },

    createContent: function(oController) {

        /*var oListTemplate = new sap.m.ObjectListItem({
            title: "{Werks}   {Stand}",
            icon: "sap-icon://factory",
            //intro: "{description}",
            number: "{calories}",
            numberUnit: "Calories"
        });
           */
              
        var oListTemplate = new sap.m.StandardListItem({
            title: {parts: [{path: "Werks"}, {path: "Stand"}],formatter: function(a,b){return a + "  -  " + b;}},
            icon: "sap-icon://factory",
            description: "{Ktext}",
            type: sap.m.ListType.Navigation//,
           // customData: new sap.ui.core.CustomData({key: "targetPage",value: "{targetPage}"})
        });
              
              


        var oList = new sap.m.List(this.createId("plantOfflineList"),{
            selectionChange: [oController.onPlantSelect, oController],
            mode: sap.m.ListMode.SingleSelectMaster,
            items: {
                    path:"/PlantSet",
                    template:oListTemplate,
                    sorter: new sap.ui.model.Sorter("Werks")
            }
        });
        //var oList = new sap.m.List({});
        //oList.bindAggregation("items", "/PlantSet", oListTemplate);
              

        var oBtnRefresh = new sap.m.Button({
            icon : "sap-icon://refresh",
            visible : true,
            tooltip : "Refresh",
            press : function(ev) {
                oController.doRefresh();
            }
        });
              
        var oSearch = new sap.m.SearchField({width:"100%", liveChange:[oController.onSearch, oController]});
        var oToolbar = new sap.m.Toolbar({content: oSearch});


        return new sap.m.Page({
            title: "Plant Offline",
            showNavButton: "{device>/isPhone}",
            navButtonPress: [oController.doNavBack, oController],
            content: [oList],
            headerContent: [oBtnRefresh],
            subHeader:[oToolbar]
                              /*,
            footer: new sap.m.Bar({})*/
        });
    }

});