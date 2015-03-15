/*
 * Copyright 2014 Jabil
 */
/*
 *  declaration of used JS files
 */
jQuery.sap.declare("com.jabil.maestro.mob.util.Helper");
jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("sap.m.MessageBox");

//*****************************************************************************************************************************************
//                                                    Helper.js
//                                               It contains all the Gloabl methods
//*****************************************************************************************************************************************

/*
 This method handles all failed request after getting error message from server. It closes the dialog and try to reauthenticate the user if it needs to be
 */
function handleRequestFailed(){
    busyDialog.close();
    sap.m.MessageBox.alert(i18nModel.getResourceBundle().getText("LoadingError"));
}

/*
 * This method performs the logoff function from the app. After confirmation user will be logged off from JBC
 */
function logoff(pageId){
    sap.m.MessageBox.confirm(i18nModel.getResourceBundle().getText("LogoffConfirm"),function (oAction){
                             if(oAction == sap.m.MessageBox.Action.OK){
                                var page = sap.ui.getCore().byId(pageId);
                                //log off the user
                                busyDialog.open();
                                //call logoff
                                performLogoff();
                             //Clear model data
                             clearAppData();
                             busyDialog.close();
                             }
                             });
    
   }
/*
 * This is reusable method for actual logoff function on JBC
 */
function performLogoff(){
    //create a logoff request
    var req = new XMLHttpRequest();
    req.open('GET', getDataEndPoint("logout"), false);
    req.send();
    if(req.status == 200){
        sap.m.MessageToast.show(i18nModel.getResourceBundle().getText("LogoffSuccess"));
        //after logoff open the logon dialog by calling authenticate method with firstTime
        authenticate(true);
    }else{
        sap.m.MessageBox.alert(i18nModel.getResourceBundle().getText("LogoffError"));
    }
}
/*
 This method is authentication handler for Maestro mobile app it checks if a valid user session is availablea and show login screen if required
 */
function authenticate(firstTime){
    var nav = sap.ui.getCore().byId('Login').getController().nav;
    if(firstTime){
         nav.to("Login");
    }else {
        switch(isUserSessionAvailable()){
            case 200 :  break;
            case 401 :{
                nav.to("Login");
                if(busyDialog !=null){
                    busyDialog.close();
                }
                break;
            }
            case 404 : sap.m.MessageBox.alert(i18nModel.getResourceBundle().getText("ServerError")); break;
            default : {
                nav.to("Login");
                if(busyDialog !=null){
                    busyDialog.close();
                }
                break;
            }
        }
    }
}
/*
 * this method cehcks if user session is available in the app.
 */
function isUserSessionAvailable(){
    var req = new XMLHttpRequest();
    try{
        req.open('GET', getDataEndPoint("login"), false);
        req.send();
        return req.status;
    }catch(exception){
        return 0;
    }
    
}


/*
 * If customer is not assigned teh user error message is displayed 
 */

function authError(){
    sap.m.MessageBox.alert(i18nModel.getResourceBundle().getText("AuthError"));
    performLogoff();
}

/*
 This method opens the site dialog
 */
function openSiteDialog(){
    //if sit dialog instance exist
    if(siteDialog != null){
        siteDialog.open();
    }else{
        //Call the site data and create the site dialog
        var siteModel = new sap.ui.model.json.JSONModel();
        siteModel.loadData(getDataEndPoint("siteModel",""));
        siteModel.attachRequestCompleted(function(){
                                         if(siteModel.getData().d!= null){
                                         sap.ui.getCore().setModel(siteModel,"siteModel");
                                         setTimeout(function(){
                                                    if(siteDialog == null){
                                                        var cancelBt = new sap.m.Button({icon:"sap-icon://decline",press: function(oEvent) { siteDialog.close(); }});
                                                        var confirmBtHome = new sap.m.Button("confirmBtHome",{text:"Confirm",press:sap.ui.getCore().byId("Home").getController().handleSiteSelection, width:"100%"});
                                                        siteDialog = new sap.m.Dialog("siteDialog");
                                                        siteDialog.setCustomHeader(new sap.m.Bar({contentMiddle:new sap.m.Text({text:i18nModel.getResourceBundle().getText("SiteDialogHD")}).addStyleClass("siteDialogTextStyle"),contentRight:cancelBt}).addStyleClass("siteDialogHDStyle"));
                                                        siteDialog.addButton(confirmBtHome);
                                                        if(sap.ui.getCore().byId("Main")!=null){
                                                            var confirmBtMain = new sap.m.Button("confirmBtMain",{text:"Confirm",press:sap.ui.getCore().byId("Main").getController().handleSiteSelection, width:"100%"});
                                                            siteDialog.addButton(confirmBtMain);
                                                            sap.ui.getCore().byId("confirmBtHome").setVisible(false);
                                                         }

                                                        var siteLyt = new sap.m.VBox();
                                                        $.each(siteModel.getData().d.results, function(idx, obj) {
                                                               var selected = obj.PLANTCD ==userSite;
                                                               siteLyt.addItem(new sap.m.RadioButton({text:obj.PLANTID+" - "+obj.PLANTDESC,tooltip:obj.PLANTCD, group:"SiteRBG", selected:selected}));
                                                           });
                                                        siteDialog.addContent(siteLyt);
                                                        }
                                                    siteDialog.open();
                                                    },1);
                                         }
                                         });
        siteModel.attachRequestFailed(function(){
                                      handleRequestFailed();
                                      });
    }
}

/*
 * Method to create BU site dialog
 */
function getBUDialog(pageId){
    var page = sap.ui.getCore().byId(pageId);
    var _buDialog = sap.ui.xmlfragment("com.jabil.maestro.mob.view.BU", page.getController());
    _buDialog.setBusy(true);
    var buModel = new sap.ui.model.json.JSONModel();
    buModel.loadData(getDataEndPoint("buModel",""));
    buModel.attachRequestCompleted(function(){
                                        if (buModel.getData().d.results != undefined){
                                            buModel.getData().d.results[0].BUSINESS_UNIT="All";
                                            _buDialog.setModel(buModel);
                                            }
                                         _buDialog.open();
                                         });
    buModel.attachRequestFailed(function(){
                                      _buDialog.setBusy(false);
                                    handleRequestFailed();
                                    });
    return _buDialog;
}

/*
 * Load user data it contains user personalized site/customer and followes materials
 */

function loadUserData(){
    if(sap.ui.getCore().getModel('userModel') == null){
        busyDialog.open();
        var userModel = new sap.ui.model.json.JSONModel();
        userModel.loadData(getDataEndPoint("userModel",""));
        userModel.attachRequestCompleted(function(){
                                     if(userModel.getData() != undefined){
                                        userCustomer = userModel.getData().customer;
                                        userSite = userModel.getData().site;
                                        sap.ui.getCore().setModel(userModel,'userModel');
                                         busyDialog.close();
                                        if(userCustomer ==null || userCustomer.length==0){
                                         authError();
                                        }else if(userSite ==null || userSite == "null" || userSite.length==0){
                                         openSiteDialog();
                                        }
                                     }
                                     });
        userModel.attachRequestFailed(function(){
                                      handleRequestFailed();
                                      });
    }
}


/*
 * This method get the current weekdate with offset (-7 days for prev week 0 current week and cosider if first day is Monday or Sunday
 */
function getWeekWithOffset(offset,mondayOffset){
    var today = new Date();
    today.setDate(today.getDate()-today.getDay()+mondayOffset);
    if(offset == 0 ){
        return today;
    }
    today.setDate(today.getDate()+offset);
    return today;
}

/*
 * this mthod converts the date in yyyyMMdd and MMdd format
 */
function dateToString(inDate, format){
    var year = inDate.getFullYear();
    var month = inDate.getMonth()+1;
    month = month<10? "0"+month:month;
    var day = inDate.getDate();
    day = day<10?"0"+day:day;

    if(format == 'yyyyMMdd'){
        return year+""+month+""+day;
    }else if (format = 'MM/dd'){
        return month+"/"+day;
    }
}

/*
 * this method gets the start date of the week with formatting in yyyyMMdd
 */
function getWeekStartDate(currentWeek,startOnMonday){
    var returnDate;
    var mondayOffset = startOnMonday ? 1:0;
    if (currentWeek){
        returnDate = dateToString(getWeekWithOffset(0,mondayOffset),'yyyyMMdd');
    }else{
        returnDate = dateToString(getWeekWithOffset(-7,mondayOffset),'yyyyMMdd');
    }
    return returnDate;
}

/*
 * This method is called to update user sit. this method calls the backend system to update user records
 */
function updateSite(siteId,refreshChart){
    busyDialog.open();
    var siteModel = new sap.ui.model.json.JSONModel();
    siteModel.loadData(getDataEndPoint("updateSite","",siteId));
    siteModel.attachRequestCompleted(function(){
                                    if(siteModel.getData() != undefined){
                                     //display the message
                                     if(siteModel.getData().indexOf("Error")>=0){
                                        sap.m.MessageToast.show(siteModel.getData());
                                        busyDialog.close();
                                     } else{
                                        sap.m.MessageToast.show(i18nModel.getResourceBundle().getText("SiteUpdateMess")+userSiteTxt);
                                        if(refreshChart){
                                            //refresh the current chart
                                            refreshSelectedChart();
                                        }else{
                                            busyDialog.close();
                                        }
                                     }
                                    }
                            });
    siteModel.attachRequestFailed(function(){
                                        handleRequestFailed();
                                       });
}


/*
 * This method is used for getting the data end points for various calls to backend system . It prepares the backend service call
 */
function getDataEndPoint(datapoint, inputDate,inputVar,inputVar1){
    var url = serverEndpoint+"/irj/servlet/prt/portal/prtroot/jbl.com~prtcmp~hanaprxy.HanaProxyService?serviceQuery=";
    switch(datapoint){
        case "dailyOTDChart": authenticate(false);
                return url+"{\"service\":\"dailyOTDMetrics.xsodata\",\"origFCD\":\""+inputDate+"\",\"plant\":\""+userSite+"\",\"businessUnit\":\"\",\"productFamily\":\"\",\"customer\":\""+userCustomer+"\",\"format\":\"json\"}"
            
        case "weeklyOTDChart" : authenticate(false);
                            return url+"{\"service\":\"weeklyOTDMetrics.xsodata\",\"startDate\":\""+inputDate+"\",\"plant\":\""+userSite+"\",\"businessUnit\":\"\",\"productFamily\":\"\",\"customer\":\""+userCustomer+"\",\"format\":\"json\"}";
        case "weeklyOTDByPO" :
                        return  url+ "{\"service\":\"weeklyOTDMetricsByPO.xsodata\",\"startDate\":\""+inputDate+"\",\"plant\":\""+userSite+"\",\"businessUnit\":\"\",\"productFamily\":\"\",\"customer\":\""+userCustomer+"\",\"format\":\"json\"}";
            
        case "achivableOTDChart" :authenticate(false);
                        return  url+ "{\"service\":\"achievableOTDMetrics.xsodata\",\"startDate\":\""+inputDate+"\",\"plant\":\""+userSite+"\",\"businessUnit\":\"\",\"productFamily\":\"\",\"customer\":\""+userCustomer+"\",\"format\":\"json\"}";
        case "ltcChart":authenticate(false);
                    return  url+ "{\"service\":\"weeklyLTCMetrics.xsodata\",\"startDate\":\""+inputDate+"\",\"plant\":\""+userSite+"\",\"businessUnit\":\""+inputVar+"\",\"productFamily\":\"\",\"customer\":\""+userCustomer+"\",\"format\":\"json\"}";
        case "userModel":authenticate(false);return serverEndpoint+"/irj/servlet/prt/portal/prtroot/jbl.com~prtcmp~hanaprxy.UserPersonalizationService?queryFlag=4";
        case "MSDetails":authenticate(false);
                        return url+"{\"service\":\"zmmMatShortage.xsodata/ZMMMatShortage\",\"format\":\"json\",\"materialPlants\":[{\"material\"=\""+inputVar+"\",\"plant\"=\""+inputVar1+"\"}]}";
        case "siteModel":authenticate(false);
                        return url+"{\"service\":\"plants.xsodata/Plants\",\"format\":\"json\"}";
        case "buModel" :authenticate(false);
                        return url+"{\"service\":\"businessUnits.xsodata/BusinessUnits\",\"format\":\"json\"}";
        case "matSearchModel":authenticate(false);
            return  url+ "{\"service\":\"materialShortageSearch.xsodata\",\"startDate1\":\"00000000\",\"endDate1\":\""+dateToString(getWeekWithOffset(-7,6),'yyyyMMdd')+"\",\"startDate2\":\""+dateToString(getWeekWithOffset(0,0),'yyyyMMdd')+"\",\"endDate2\":\""+dateToString(getWeekWithOffset(0,6),'yyyyMMdd')+"\",\"customer\":\""+userCustomer+"\",\"format\":\"json\",\"plant\":\""+userSite+"\",\"material\":\""+inputVar+"\"}";
        case "orderModel" :authenticate(false);
            return  url + "{\"service\":\"orderStatus.xsodata\",\"poNumber\":\""+inputVar+"\",\"customer\":\""+userCustomer+"\",\"format\":\"json\"}"
        case "matShortagesList":authenticate(false);
                return  url+ "{\"service\":\"materialShortageList.xsodata\",\"startDate1\":\"00000000\",\"endDate1\":\""+dateToString(getWeekWithOffset(-7,6),'yyyyMMdd')+"\",\"startDate2\":\""+dateToString(getWeekWithOffset(0,0),'yyyyMMdd')+"\",\"endDate2\":\""+dateToString(getWeekWithOffset(0,6),'yyyyMMdd')+"\",\"customer\":\""+userCustomer+"\",\"format\":\"json\",\"materialPlants\":"+inputVar+"}";
       
        case "updateSite": authenticate(false);return serverEndpoint+"/irj/servlet/prt/portal/prtroot/jbl.com~prtcmp~hanaprxy.UserPersonalizationService?queryFlag=0&userSite="+inputVar;
        case "followMaterial": authenticate(false);return serverEndpoint+ "/irj/servlet/prt/portal/prtroot/jbl.com~prtcmp~hanaprxy.UserPersonalizationService?queryFlag=1&matNum="+inputVar+"&matSite="+inputVar1;
        case "unFollowMaterial":authenticate(false);return serverEndpoint+ "/irj/servlet/prt/portal/prtroot/jbl.com~prtcmp~hanaprxy.UserPersonalizationService?queryFlag=2&matNum="+inputVar+"&matSite="+inputVar1;
        case "logout": return serverEndpoint+"/irj/servlet/prt/portal/prtroot/com.sap.portal.navigation.masthead.LogOutComponent?logout_submit=true";
        case "login": return serverEndpoint+"/irj/servlet/prt/portal/prtroot/jbl.com~prtcmp~hanaprxy.UserPersonalizationService";
        case "acceptEULA" : authenticate(false);return serverEndpoint+"/irj/servlet/prt/portal/prtroot/jbl.com~prtcmp~hanaprxy.UserPersonalizationService?queryFlag=5&Mobile_Terms_Link="+EULALink;
            
    }
}

/*
 * This method is called to accept user EULA  */

function acceptEULA(){
    busyDialog.open();
    var eulaModel = new sap.ui.model.json.JSONModel();
    eulaModel.loadData(getDataEndPoint("acceptEULA"));
    eulaModel.attachRequestCompleted(function(){
                                          if(eulaModel.getData() != undefined){
                                            //display the message
                                            if (eulaModel.getData() == true || eulaModel.getData() == "true"){
                                                sap.ui.getCore().byId('Login').getController().nav.to("Home");
                                            }else{
                                                sap.m.MessageBox.alert(i18nModel.getResourceBundle().getText("AppError"));
                                                performLogoff();
                                            }
                                          }
                                          busyDialog.close();
                                          });
    eulaModel.attachRequestFailed(function(){
                                       handleRequestFailed();
                                       });
}

function clearAppData(){
    sap.ui.getCore().setModel(null,"userModel");
    sap.ui.getCore().setModel(null,"siteModel");
    //destroy home page for rerendering
    if(sap.ui.getCore().byId("Home")!=null){
        sap.ui.getCore().byId("Home").destroy();
    }
    //destroy Main page for rerending
    if(sap.ui.getCore().byId("Main")!=null){
        //destroy mainpage tab
        sap.ui.getCore().byId("mainTabBar").destroy();
        sap.ui.getCore().byId("lastWeek").destroy();
        sap.ui.getCore().byId("siteDDButton").destroy();
        sap.ui.getCore().byId("thisWeek").destroy();
        sap.ui.getCore().byId("navToolbar").destroy();
        sap.ui.getCore().byId("otdBtImg").destroy();
        sap.ui.getCore().byId("osBtImg").destroy();
        sap.ui.getCore().byId("ltcBtImg").destroy();
        sap.ui.getCore().byId("PTR").destroy();
        //destroy otd
        sap.ui.getCore().byId("otdBtContent").destroy();
        //destroy ltc
        sap.ui.getCore().byId("ltcFooter").destroy();
        sap.ui.getCore().byId("ltcBtContent").destroy();
        //destroy ordersearch
        sap.ui.getCore().byId("orderSearch").destroy();
        sap.ui.getCore().byId("orderListItem").destroy();
        sap.ui.getCore().byId("orderList").destroy();
        sap.ui.getCore().byId("osBtContent").destroy();
        //destroy mat search
        if(sap.ui.getCore().byId("msBtContent")!=null){
            sap.ui.getCore().byId("msBtImg").destroy();
            sap.ui.getCore().byId("matSearch").destroy();
            sap.ui.getCore().byId("msListItems").destroy();
            sap.ui.getCore().byId("materialList").destroy();
            sap.ui.getCore().byId("msBtContent").destroy();
        }
        //destroy ms detail
        if(sap.ui.getCore().byId("msDetContent") !=null){
            sap.ui.getCore().byId("msDetToolbar").destroy();
            sap.ui.getCore().byId("wkList1").destroy();
            sap.ui.getCore().byId("wkList2").destroy();
            sap.ui.getCore().byId("wkList3").destroy();
            sap.ui.getCore().byId("MSDetCarousel").destroy();
            sap.ui.getCore().byId("msDetContent").destroy();
        }

        sap.ui.getCore().byId("Main").destroy();

    }

}
