jQuery.sap.declare("com.slb.eam.mob.Component");
jQuery.sap.require("com.slb.eam.mob.MyRouter");

sap.ui.core.UIComponent.extend("com.slb.eam.mob.Component", {
                    
            createContent : function() {
                               // create root view
                               var oView = sap.ui.view({
                                                       id : "app",
                                                       viewName : "com.slb.eam.mob.view.App",
                                                       type : "JS",
                                                       viewData : { component : this }
                                                       });
                               // set i18n model
                               i18nModel = new sap.ui.model.resource.ResourceModel({
                                                bundleUrl : "i18n/messagebundle.properties"
                                            });
                               oView.setModel(i18nModel, "i18n");
                               // set device model
                               var oDeviceModel = new sap.ui.model.json.JSONModel({
                                                                                  isTouch : sap.ui.Device.support.touch,
                                                                                  isNoTouch : !sap.ui.Device.support.touch,
                                                                                  isPhone : sap.ui.Device.system.phone,
                                                                                  isNoPhone : !sap.ui.Device.system.phone,
                                                                                  listMode : sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
                                                                                  listItemType : sap.ui.Device.system.phone ? "Active" : "Inactive"
                                                                                  });
                               oDeviceModel.setDefaultBindingMode("OneWay");
                               this.setModel(oDeviceModel, "device");
                               sap.ui.Device.orientation.attachHandler(function(oEvt){
                                                                       if(oEvt.landscape) {
                                                                       if(oCore.byId("WODetail--showMasterIcon") != undefined) {
                                                                       
                                                                       oCore.byId("WODetail--showMasterIcon").setVisible(false);
                                                                       }
                                                                       }
                                                                       else {
                                                                       oCore.byId("WODetail--showMasterIcon").setVisible(true);
                                                                       }
                                                                       });
                               
                               return oView;
                               

                                }

                               
});
