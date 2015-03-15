
/*
 * Copyright 2014 Jabil
 */

jQuery.sap.declare("com.jabil.maestro.mob.util.ShortagesHelper");
//*****************************************************************************************************************************************
//                                                    Material Shortages Helper
//*************************************************************************************************************************************

/*
 * This method is called after user follow a new material. user model is refreshed with new data
 */
function refreshUserMaterials(){
    var userModel = new sap.ui.model.json.JSONModel();
    userModel.loadData(getDataEndPoint("userModel",""));
    userModel.attachRequestCompleted(function(){
                                     if(userModel.getData() != undefined){
                                     sap.ui.getCore().setModel(userModel,'userModel');
                                     }
                                     });
    userModel.attachRequestFailed(function(){
                                  handleRequestFailed();
                                  });
}
/*
 * This method loads the user perferences and material quatities for material shortages list
 This method is called right after user unfollow a material to update the current material list
 */
function loadMaterialsWithPreference(){
    var materialList = sap.ui.getCore().byId("materialList");
    busyDialog.open();
    //Get teh user data
    var userModel = new sap.ui.model.json.JSONModel();
    userModel.loadData(getDataEndPoint("userModel",""));
    userModel.attachRequestCompleted(function(){
                                     sap.ui.getCore().setModel(userModel,'userModel');
                                     if(userModel.getData().materials != undefined){
                                     //Prepare the material shorges query
                                     var filterString = "[";
                                     $.each(userModel.getData().materials, function(id,obj){
                                            var rec = "{\"material\":\""+obj.material+"\",\"plant\":\""+obj.plant+"\"}";
                                            filterString+= id == 0? rec: "," + rec
                                            });
                                     filterString += "]";
                                     //Load the material shortages
                                     var matListModel =  new sap.ui.model.json.JSONModel();
                                     matListModel.loadData(getDataEndPoint("matShortagesList","",filterString));
                                     matListModel.attachRequestCompleted(function(){
                                                                         if(matListModel.getData().d != undefined){
                                                                         materialList.setModel(matListModel);
                                                                         var matItems = sap.ui.getCore().byId('msListItems');
                                                                         matItems.setType("Navigation");
                                                                         materialList.bindItems("/d/results",matItems,new sap.ui.model.Sorter("PLANT",false,true));
                                                                         }
                                                                         busyDialog.close();
                                                                         });
                                     matListModel.attachRequestFailed(function(){
                                                                      handleRequestFailed();
                                                                      });
                                     
                                     }
                                     });
    userModel.attachRequestFailed(function(){
                                  handleRequestFailed();
                                  });
}
/*
 * THis method loads the user material shortages, this method is called when user browses to Material shortages or refreshes the screen
 This method takes current materials followed by user from userModel (called earlier) and calls the backedn data source for material shortages
 */
function loadMaterialShortagesList(){
    //Get the user model
    var userModel = sap.ui.getCore().getModel("userModel");
    var materialList = sap.ui.getCore().byId("materialList");
    //If user follow any material
    if(userModel.getData().materials!=undefined && userModel.getData().materials.length>0){
        //prepare the shortages query
        var filterString = "[";
        $.each(userModel.getData().materials, function(id,obj){
               var rec = "{\"material\":\""+obj.material+"\",\"plant\":\""+obj.plant+"\"}";
               filterString+= id == 0? rec: "," + rec
               });
        filterString += "]";
        busyDialog.open();
        //Call the material shortages query
        var matListModel =  new sap.ui.model.json.JSONModel();
        matListModel.loadData(getDataEndPoint("matShortagesList","",filterString));
        matListModel.attachRequestCompleted(function(){
                                            //Update the material shortages list
                                            if(matListModel.getData().d != undefined){
                                            materialList.setModel(matListModel);
                                            var matItems = sap.ui.getCore().byId('msListItems');
                                            matItems.setType("Navigation");
                                            materialList.bindItems("/d/results",matItems,new sap.ui.model.Sorter("PLANT",false,true));
                                            if(matListModel.getData().d.results.length==0){
                                            materialList.setNoDataText(i18nModel.getResourceBundle().getText("NoShortages"));
                                            }
                                            }
                                            busyDialog.close();
                                            });
        matListModel.attachRequestFailed(function(){
                                         handleRequestFailed();
                                         });
    }else{
        //If no material exist show message to search for a material.
        materialList.setNoDataText(i18nModel.getResourceBundle().getText("NoFollowMess"));
    }
    
}
/*
 * This method loads the material shortages details tabels. This method takes the currently selected material and call material shortages detail query to
 get detail shortages
 */
function loadMatShotageDetails(selectedMaterial,matSite){
    //set the current page to first week
    sap.ui.getCore().byId('MSDetCarousel').setActivePage("wkList1");
    //Prepare the dates for 5 weeks
    var dateWk1 = getWeekWithOffset(0,0);
    var dateWk2 = getWeekWithOffset(7,0);
    var dateWk3 = getWeekWithOffset(14,0);
    var dateWk4 = getWeekWithOffset(21,0);
    //Set the week headers
    sap.ui.getCore().byId("wk1Hdr").setText("Week-"+dateToString(dateWk1,'MM/dd'));
    sap.ui.getCore().byId("wk2Hdr").setText("Week-"+dateToString(dateWk2,'MM/dd'));
    sap.ui.getCore().byId("wk3Hdr").setText("Week-"+dateToString(dateWk3,'MM/dd'));
    sap.ui.getCore().byId("wk4Hdr").setText("Week-"+dateToString(dateWk4,'MM/dd'));
    
    //Declare the variables for model and tables
    var msDetModel = new sap.ui.model.json.JSONModel();
    var msDetTable1 = sap.ui.getCore().byId("wkList1");
    var msDetTable2 = sap.ui.getCore().byId("wkList2");
    var msDetTable3 = sap.ui.getCore().byId("wkList3");
    //Set the page title to selected material
    sap.ui.getCore().byId('msDetHDText').setText(selectedMaterial);
    //Load the data
    msDetModel.loadData(getDataEndPoint("MSDetails","",selectedMaterial,matSite));
    busyDialog.open();
    //handle request complete
    msDetModel.attachRequestCompleted(function(){
                                      if(msDetModel.getData().d != undefined){
                                      //Data return by the query is in flat format this section converts the data in weekly format and assign the data to table models
                                      var tabDataPast = [];var tabDataWk1 =[];var tabDataWk2 = [];var tabDataWk3 = [];var tabDataWk4 = [];
                                      var past = "00000000"; var wk1 = dateToString(dateWk1,'yyyyMMdd');var wk2 = dateToString(dateWk2,'yyyyMMdd'); var wk3 = dateToString(dateWk3,'yyyyMMdd');var wk4 = dateToString(dateWk4,'yyyyMMdd');
                                      $.each(msDetModel.getData().d.results, function(idx, objMatSh) {
                                             switch(objMatSh.START_DATE){
                                             case past:   tabDataPast.push(objMatSh.CUMBALANCE);
                                             tabDataPast.push(objMatSh.DEMAND_QTY);
                                             tabDataPast.push(objMatSh.ONHAND_QTY);
                                             tabDataPast.push(objMatSh.PO_CONF_QTY);
                                             tabDataPast.push(objMatSh.BALANCE);
                                             tabDataPast.push(objMatSh.PO_REQU_QTY);
                                             tabDataPast.push(objMatSh.SHORTSTATUS=="C"?"Close":"Open");
                                             break;
                                             case wk1:
                                             tabDataWk1.push(objMatSh.CUMBALANCE);
                                             tabDataWk1.push(objMatSh.DEMAND_QTY);
                                             tabDataWk1.push(objMatSh.ONHAND_QTY);
                                             tabDataWk1.push(objMatSh.PO_CONF_QTY);
                                             tabDataWk1.push(objMatSh.BALANCE);
                                             tabDataWk1.push(objMatSh.PO_REQU_QTY);
                                             tabDataWk1.push(objMatSh.SHORTSTATUS=="C"?"Close":"Open");
                                             break;
                                             case wk2:
                                             tabDataWk2.push(objMatSh.CUMBALANCE);
                                             tabDataWk2.push(objMatSh.DEMAND_QTY);
                                             tabDataWk2.push(objMatSh.ONHAND_QTY);
                                             tabDataWk2.push(objMatSh.PO_CONF_QTY);
                                             tabDataWk2.push(objMatSh.BALANCE);
                                             tabDataWk2.push(objMatSh.PO_REQU_QTY);
                                             tabDataWk2.push(objMatSh.SHORTSTATUS=="C"?"Close":"Open");
                                             break;
                                             case wk3:
                                             tabDataWk3.push(objMatSh.CUMBALANCE);
                                             tabDataWk3.push(objMatSh.DEMAND_QTY);
                                             tabDataWk3.push(objMatSh.ONHAND_QTY);
                                             tabDataWk3.push(objMatSh.PO_CONF_QTY);
                                             tabDataWk3.push(objMatSh.BALANCE);
                                             tabDataWk3.push(objMatSh.PO_REQU_QTY);
                                             tabDataWk3.push(objMatSh.SHORTSTATUS=="C"?"Close":"Open");
                                             break;
                                             case wk4:
                                             tabDataWk4.push(objMatSh.CUMBALANCE);
                                             tabDataWk4.push(objMatSh.DEMAND_QTY);
                                             tabDataWk4.push(objMatSh.ONHAND_QTY);
                                             tabDataWk4.push(objMatSh.PO_CONF_QTY);
                                             tabDataWk4.push(objMatSh.BALANCE);
                                             tabDataWk4.push(objMatSh.PO_REQU_QTY);
                                             tabDataWk4.push(objMatSh.SHORTSTATUS=="C"?"Close":"Open");
                                             break;
                                             }
                                             
                                             });
                                      //set table 1 data
                                      var tabData1 = [];
                                      tabData1.push({"DESC": i18nModel.getResourceBundle().getText("CumulativeBal"), "wk1": tabDataPast[0],"wk2":tabDataWk1[0]});
                                      tabData1.push({"DESC": i18nModel.getResourceBundle().getText("Demand"), "wk1": tabDataPast[1],"wk2":tabDataWk1[1]});
                                      tabData1.push({"DESC": i18nModel.getResourceBundle().getText("OnHand"), "wk1": tabDataPast[2],"wk2":tabDataWk1[2]});
                                      tabData1.push({"DESC": i18nModel.getResourceBundle().getText("POConf"), "wk1":  tabDataPast[3],"wk2":tabDataWk1[3]});
                                      tabData1.push({"DESC": i18nModel.getResourceBundle().getText("Bal"), "wk1":  tabDataPast[4],"wk2":tabDataWk1[4]});
                                      tabData1.push({"DESC": i18nModel.getResourceBundle().getText("POReq"), "wk1":  tabDataPast[5],"wk2":tabDataWk1[5]});
                                      tabData1.push({"DESC": i18nModel.getResourceBundle().getText("Status"), "wk1":  tabDataPast[6],"wk2":tabDataWk1[6]});
                                      msDetTable1.setModel(new sap.ui.model.json.JSONModel(tabData1));
                                      //set table 2 data
                                      var tabData2 = [];
                                      tabData2.push({"DESC": i18nModel.getResourceBundle().getText("CumulativeBal"), "wk1": tabDataWk2[0],"wk2":tabDataWk3[0]});
                                      tabData2.push({"DESC": i18nModel.getResourceBundle().getText("Demand"), "wk1": tabDataWk2[1],"wk2":tabDataWk3[1]});
                                      tabData2.push({"DESC": i18nModel.getResourceBundle().getText("OnHand"), "wk1": tabDataWk2[2],"wk2":tabDataWk2[2]});
                                      tabData2.push({"DESC": i18nModel.getResourceBundle().getText("POConf"), "wk1":  tabDataWk2[3],"wk2":tabDataWk3[3]});
                                      tabData2.push({"DESC": i18nModel.getResourceBundle().getText("Bal"), "wk1":  tabDataWk2[4],"wk2":tabDataWk3[4]});
                                      tabData2.push({"DESC": i18nModel.getResourceBundle().getText("POReq"), "wk1":  tabDataWk2[5],"wk2":tabDataWk3[5]});
                                      tabData2.push({"DESC": i18nModel.getResourceBundle().getText("Status"), "wk1":  tabDataWk2[6],"wk2":tabDataWk3[6]});
                                      msDetTable2.setModel(new sap.ui.model.json.JSONModel(tabData2));
                                      //set table 3 data
                                      var tabData3 = [];
                                      tabData3.push({"DESC": i18nModel.getResourceBundle().getText("CumulativeBal"), "wk1": tabDataWk4[0] });
                                      tabData3.push({"DESC": i18nModel.getResourceBundle().getText("Deamnd"), "wk1": tabDataWk4[1] });
                                      tabData3.push({"DESC": i18nModel.getResourceBundle().getText("OnHand"), "wk1": tabDataWk4[2] });
                                      tabData3.push({"DESC": i18nModel.getResourceBundle().getText("POConf"), "wk1":  tabDataWk4[3] });
                                      tabData3.push({"DESC": i18nModel.getResourceBundle().getText("Bal"), "wk1":  tabDataWk4[4] });
                                      tabData3.push({"DESC": i18nModel.getResourceBundle().getText("POReq"), "wk1":  tabDataWk4[5]});
                                      tabData3.push({"DESC": i18nModel.getResourceBundle().getText("Status"), "wk1":  tabDataWk4[6]});
                                      msDetTable3.setModel(new sap.ui.model.json.JSONModel(tabData3));
                                      busyDialog.close();
                                      }
                                      });
    msDetModel.attachRequestFailed(function(){
                                   handleRequestFailed();
                                   });
}

/*
 * This method is called to unfollow a material. this method calls the backend system to update user records
 */
function unFollowMaterial(materialId,siteId){
    var matList = sap.ui.getCore().byId("materialList");
    busyDialog.open();
    var unFollowMatModel = new sap.ui.model.json.JSONModel();
    unFollowMatModel.loadData(getDataEndPoint("unFollowMaterial","",materialId,siteId));
    unFollowMatModel.attachRequestCompleted(function(){
                                            if(unFollowMatModel.getData() != undefined){
                                            //display the message
                                            sap.m.MessageToast.show(unFollowMatModel.getData());
                                            loadMaterialsWithPreference();
                                            }
                                            busyDialog.close();
                                            });
    unFollowMatModel.attachRequestFailed(function(){
                                         handleRequestFailed();
                                         });
    
}
/*
 * This method is called to follow a material. this method calls the backend system to update user records
 */
function followMaterial(materialId,siteId,button){
    var matList = sap.ui.getCore().byId("materialList");
    busyDialog.open();
    var followMatModel = new sap.ui.model.json.JSONModel();
    followMatModel.loadData(getDataEndPoint("followMaterial","",materialId,siteId));
    followMatModel.attachRequestCompleted(function(){
                                          if(followMatModel.getData() != undefined){
                                          //display the message
                                          sap.m.MessageToast.show(followMatModel.getData());
                                          button.setEnabled(false);
                                          loadMaterialsWithPreference();
                                          sap.ui.getCore().byId("matSearch").setValue("");
                                          }
                                          busyDialog.close();
                                          });
    followMatModel.attachRequestFailed(function(){
                                       handleRequestFailed();
                                       });
}
/*
 * This method calls the material search query  . THis method is used for material search on shortages screen
 */

function materialLookup(query){
    var materialList = sap.ui.getCore().byId("materialList");
    busyDialog.open();
    var matSearchModel = new sap.ui.model.json.JSONModel();
    matSearchModel.loadData(getDataEndPoint("matSearchModel",null,query));
    matSearchModel.attachRequestCompleted(function(){
                                          if(matSearchModel.getData().d != undefined){
                                          // Set the result to material List
                                          materialList.setModel(matSearchModel);
                                          var matItems = sap.ui.getCore().byId("custMatListItem")!=null? sap.ui.getCore().byId("custMatListItem") :getCustomListItem();
                                          matItems.setType("Inactive");
                                          materialList.bindItems("/d/results",matItems, new sap.ui.model.Sorter("PLANT",false,true));
                                          }
                                          materialList.setNoDataText(i18nModel.getResourceBundle().getText("NoData"));
                                          busyDialog.close();
                                          });
    matSearchModel.attachRequestFailed(function(){
                                       handleRequestFailed();
                                       });
}


/*
 * This method prepares the custom list item for follow material screen .
 */
function getCustomListItem(){
    var custMatListItem = new sap.m.CustomListItem("custMatListItem");
    var matNumLbl =new sap.m.Text({text:"{MATERIAL}",tooltip:"{PLANT}"}).addStyleClass("orderListItemTopStyle");
    var followBt =new sap.m.Button({text:i18nModel.getResourceBundle().getText("Follow"), type:"Accept", press: sap.ui.getCore().byId("Main").getController().handleFollow}).addStyleClass("followButtonStyle");
    var qtyLbl =new sap.m.Text({text:"{BALANCE_1}/{BALANCE_2}"}).addStyleClass("orderListItemTopStyle");
    var mainLyt = new sap.m.HBox({items: [new sap.m.VBox({width:"50%", items:[matNumLbl]}).addStyleClass("custMatListVBTxtStyle"), new sap.m.VBox({width:"30%", items:[qtyLbl]}).addStyleClass("custMatListVBTxtStyle"),new sap.m.VBox({width:"20%", items:[followBt]}).addStyleClass("custMatListVBtStyle")] }).addStyleClass("custMatListHStyle");
    custMatListItem.insertContent(mainLyt);
    return custMatListItem;
    
}

