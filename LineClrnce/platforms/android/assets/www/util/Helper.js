/*
 * Copyright 2014 Jabil
 */
/*
 *  declaration of used JS files
 */
jQuery.sap.declare("com.jbl.lc.util.Helper");
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
function logoff(){
    sap.m.MessageBox.confirm(i18nModel.getResourceBundle().getText("LogoffConfirm"),function (oAction){
                             if(oAction == sap.m.MessageBox.Action.OK){
                             //log off the user
                             busyDialog.open();
                             logoffHelper();
                             //Clear model data
                             clearAppData();
                             busyDialog.close();
                             }
                             });
    
}
/*
 * Helper method to logoff and terminate user sessions.
 */
function logoffHelper(){
    var req = new XMLHttpRequest();
    try{
        req.open('GET', getDataEndPoint('logout'), false);
        req.send();
        sap.m.MessageToast.show(i18nModel.getResourceBundle().getText("LogoffSuccess"));
        //after logoff display the login page
        var nav=oCore.byId("Login").getController().nav;
        nav.to("Login");
    }catch(exception){
        return 0;
    }
    
}

/*
 This method is authentication handler for Line Clearance app it checks if a valid user session is available and show login screen if required
 */
function authenticate(firstTime){
    var nav = oCore.byId('Login').getController().nav;
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
            case 404 : showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",i18nModel.getResourceBundle().getText("ServerError"));     break;
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
 * This method checks if user session is available in the app.
 */
function isUserSessionAvailable(){
    var req = new XMLHttpRequest();
    try{
        req.open('GET', getDataEndPoint(), false);
        req.send();
        return req.status;
    }catch(exception){
        return 0;
    }
    
}


/*
 * This method is used for getting the data end points for various calls to backend system . 
   It prepares the backend service call
 */
function getDataEndPoint(datapoint){
    switch(datapoint){
        case "logout" : return gwHost+"/sap/public/bc/icf/logoff?sap-client=020";
        case "lctypes" : authenticate(false); return serverEndpoint+"/LCTYPES?sap-client=020";
        case "lchdrs": authenticate(false); return serverEndpoint+"/LCHDRS?sap-client=020"
        default: return serverEndpoint+"?sap-client=020";
            
            
    }
}

/*
  1) This method is responsible to get ProcessOrder details by calling GW service by passing
     PO & ProfileType values.
  2) Validate user session & authenticity before calling GW service.
  3) Upon successful read, navigate to PO detail screen
 */
function getPODetails()
{
    if(oCore.byId("ProcessDetail")!=undefined) {
    busyDialog.open();
    //Decalaration of OData Model
    var odatamodel = new sap.ui.model.odata.ODataModel(getDataEndPoint(''),true);
    odatamodel.setHeaders({"Content-Type" : "application/json"});//Setting the Headers "Content Type"
    //fetch XSRF token as part of request
    odatamodel.setHeaders({"X-CSRF-Token" : "Fetch"});
    var lcTypeData=oCore.getModel("lcTypeModel").getData();
    odatamodel.read("/LCHDRS", null,[ "$filter=ProcessOrder eq \'"+ lcTypeData[0].ProcessOrder +"' and ProfileType eq \'"+ lcTypeData[0].ProfileType+"\'"],{"$expand":"HdrToDtl"},
                    function fnSuccess(oData,response)
                    {
                    var poDetails=[];
                    var poModel = new sap.ui.model.json.JSONModel();
                        poDetails.push({   "WorkCenter" : response.data.results[0].WorkCenter,
                                            "Material"  : response.data.results[0].Material,
                                            "LCStatus"  :response.data.results[0].LCStatus,
                                            "Plant": response.data.results[0].Plant,
                                            "ProcessOrder": response.data.results[0].ProcessOrder
                                        });
    
                    
                    poModel.setData(poDetails);
                    //set model ti ProcessDetail view to display PO details
                    var pdView = oCore.byId("ProcessDetail");
                     pdView.setModel(poModel);
                    //check if username field exist, then set the username
                    var uid2=oCore.byId("uId2");
                    if(uid2 !=undefined) {
                    uid2.setText(i18nModel.getResourceBundle().getText("Welcome")+" "+oCore.getModel("userModel").getData().user);
                    }
                    //set PO detail values
                    oCore.byId("tool_PO").setText(poDetails[0].ProcessOrder);
                    oCore.byId("tool_plant").setText(poDetails[0].Plant);
                    oCore.byId("tool_status").setText(poDetails[0].LCStatus);
                    busyDialog.close();
                    
                    },
                    function fnError(response)
                    {
                    showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",response);
                    }
                );
    }
    
}

/*
 1) This method is responsible to get Line Clearance types  by calling GW service by passing
    PO values. User will scan ProcessOrder or enter it manually
 2) Validate user session & authenticity before calling GW service.
 3) Upon successful read, display LCTypes popup screen
 4) If PO is already processed then navigate directly to PO detail screen without displaying LCTypes popup
 */
function getLCTypes(processOrder)
{
    busyDialog.open();
    var data = jQuery.ajax({
                           url: getDataEndPoint('lctypes')+"&$filter=ProcessOrder eq \'"+processOrder+"\'",
                           dataType: "json",
                           type: "GET",
                           cache: false,
                           success: function(response,status, XMLHttpRequest) {
                           var dialogWin = oCore.byId("lcTWindow");
                           if(oCore.byId("lcLyt")!=undefined) {
                           oCore.byId("lcLyt").destroy();
                           }
                           //Display warning, if no PO found in the system
                           if(response.d.results.length==0) {
                            showMessage(i18nModel.getResourceBundle().getText("Warning"),"Warning",i18nModel.getResourceBundle().getText("PONotFound"));
                           }
                           else {
                           var lcListLyt = new sap.m.VBox("lcLyt");
                           var resData=response.d.results;
                           //identify if PO is already processed?. If flag is found, then don't display lctype popup window & directly navigate to next screen
                           if(resData!=undefined && resData[0].Flag=="X") {
                           var lcTypes=[];
                           var lcTModel = new sap.ui.model.json.JSONModel();
                           lcTypes.push({ "ProcessOrder" : resData[0].ProcessOrder.trim(),
                                        "ProfileType"  : resData[0].ProfileType.trim(),
                                        });
                           lcTModel.setData(lcTypes);
                           oCore.setModel(lcTModel,"lcTypeModel");
                           //navigate to process detail screen
                           oCore.byId("Home").getController().nav.to("ProcessDetail");
                           
                           } else {
                           $.each(resData, function(id, obj) {
                                  lcListLyt.addItem(new sap.m.RadioButton({text:obj.ProfileType+" - "+obj.ProcessOrder,tooltip:obj.ProfileType, group:"LCListGrp"}));
                                  });
                            dialogWin.addContent(lcListLyt);
                           dialogWin.open();
                           }
                           
                           }
                           busyDialog.close();
                           },
                           error: function (response,status, XMLHttpRequest) {
                           showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",XMLHttpRequest);
                          }
                    });
}

/*
 1) Helper method to get questioonaire by calling GW service by passing
 PO & ProfileType values.
 2) Validate user session & authenticity before calling GW service.
 3) Upon successful read, display Questionnaire screen
 */
function getQuestions()
{
    //check if question UI is ready
    if(oCore.byId("poQslPanel")!=undefined ) {
    busyDialog.open();
    var lcTypeData=oCore.getModel("lcTypeModel").getData();
    var url = getDataEndPoint('lchdrs')+"&$filter=ProcessOrder eq \'"+ lcTypeData[0].ProcessOrder +"' and ProfileType eq \'"+ lcTypeData[0].ProfileType +"' &$expand=HdrToDtl,HdrToSgn";
    var data = jQuery.ajax({
                   url: url,
                dataType: "json",
                headers: {"X-CSRF-Token": "Fetch"},
                type: "GET",
                cache: false,
                success: function(data,status, XMLHttpRequest) {
                           var jsonQsODataModel = new sap.ui.model.json.JSONModel();
                           jsonQsODataModel.xsrf_token =XMLHttpRequest.getResponseHeader("x-csrf-token");
                           jsonQsODataModel.setData(data);
                           oCore.setModel(jsonQsODataModel,"qsODataModel");
                           var quesModel = new sap.ui.model.json.JSONModel();
                           quesModel.setData(getQuestionsHelper(data.d.results[0]));
                           oCore.setModel(quesModel,"quesModel");
                           //check if username field exist, then set the username
                           var uid3=oCore.byId("uId3");
                           if(uid3 !=undefined) {
                           uid3.setText(i18nModel.getResourceBundle().getText("Welcome")+" "+oCore.getModel("userModel").getData().user);
                           }
                           //set a scanned flag to false
                           scanned=false; 
                           //destroy question UI if it exisit
                           oCore.byId("poQslPanel").destroyContent();
                           //fire an event to draw questions ui
                           oCore.byId("poQslPanel").fireEvent("drawQuestionUI");
                           //get signature data
                           getSignature(data.d.results[0].HdrToSgn.results);
                           busyDialog.close();
                           
                           
                },
                error: function (response,status, XMLHttpRequest) {
                    showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",XMLHttpRequest);
                          
                }
                });
    }
}
/*
   1) Helper method to prepare questionnaire data to properly display on screen. Idea is to make
      parent-child relationship by identifying Header & associated line items. The key part used to
      identify assosiation is combination of LCSecID & LCSeqID.
   2) Once the data is prepared, screen is ready to be dispalyed
 */
function getQuestionsHelper(data)
{
    var item=[];
    var hdr=[];
    var hdrHelper = [];
    var compareData=data.HdrToDtl.results;
    var found=false;
    $(data.HdrToDtl.results).each(function( i, iVal ) {
        
                         if(hdr.length>0) {
                            found=false;
                         $(hdr).each(function( k, kVal ) {
                                if(iVal.LCSecID==kVal.LCSecID)
                                    {
                                               found=true;
                                               return false;
                                    }
                        });
                         }
                         if(!found) {
                         $(compareData).each(function( j, jVal ) {
                                if(iVal.LCSecID==jVal.LCSecID) {
                                if(jVal.LCSeqID=="000") {
                                    hdrHelper=[];
                                             hdrHelper.push({"LCSecID":iVal.LCSecID,"StepText":iVal.StepText,"ResReq":iVal.ResReq,"StepRes":iVal.StepRes,"HdrSelection":iVal.StepRes=="Y"?true:false,"ProcessOrder":iVal.ProcessOrder,"Plant":iVal.Plant});
                                } else {
                                    item.push({"LCSecID":jVal.LCSecID,"LCSeqID":jVal.LCSeqID, "ResReq":jVal.ResReq,"StepText":jVal.StepText,"StepRes":jVal.StepRes,"ItmSelection":jVal.StepRes=="Y"?true:false});
                                }
                             
                                }
                                
                             
                                });
                         }
                    if(!found) {
                                 
                                  item=item.sort(function(a,b) {
                                                  return a.LCSeqID - b.LCSeqID;
                                                });
                         hdr.push({"LCSecID":hdrHelper[0].LCSecID,"StepText":hdrHelper[0].StepText,"ResReq":hdrHelper[0].ResReq,"StepRes":hdrHelper[0].StepRes,"HdrSelection":hdrHelper[0].HdrSelection, "item":item});
                         item=[];
                         found=true;
                        }
                         
        });
    return hdr;
    
}
/*
   Helper method to create the signature model and fire an event to draw signature screen.
 */

function getSignature(data)
{
    var signModel = new sap.ui.model.json.JSONModel();
    signModel.setData(data);
    oCore.setModel(signModel,"signModel");
    //fire an event to draw sign ui
    oCore.byId("eSignPanel").fireEvent("drawSignUI");
    
}
/*
  1) Helper method to capture user response on questionnaire screen and call GW service to
     perform updates.
  2) Validate user session & authenticity before performing updates
  3) Make sure to pass xsrf token
  4) Display success message to user if responses were saved successfully
 */
function saveAnswers()
{
    var qModel=oCore.getModel("qsODataModel");
    $.ajax({
           url: getDataEndPoint('lchdrs'),
           type: 'post',
           data: saveAnswersHelper(),
           contentType: 'application/json',
           headers: {
           "content-type": 'application/json;charset=utf-8',
           "X-CSRF-Token": qModel.xsrf_token  //set xsrf token to perform update
           },
           dataType: 'json',
           success: function (data,status, jqXHR) {
             handleQSSuccess(jqXHR);
           },
           error: function (jqXHR, status, errorThrown)
           {
           handleQsSavedFail(jqXHR);
           }
           });
}
/*
 Callback method of saveAnswers() method. Display approriate message to user based on status code.
 */
function handleQSSuccess(req) {
    switch (req.status) {
            //If req status is 201, then post operation successfully performed and data record is created.
        case 201:
        showMessage(i18nModel.getResourceBundle().getText("Success"),"Success",i18nModel.getResourceBundle().getText("QsSuccess"));
            break;
            
        default:
            showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",req.responseText);
    }
}
/*
 Callback method of saveAnswers() method. Display approriate message to user based on status code.
 */
function handleQsSavedFail(req){
    switch (req.status) {
            //If req status is 400, for bad request or something is wrong with response body. Mainly parsing issue.
        case 400:
            showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",req.responseText);
            break;
        case 403:
            showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",req.responseText);
            break;
            
        default:
            busyDialog.close();
            
    }
    
}
/* 
  Helper method to update questionnaire model with user response. Capture the user response by setting
  the StepRes flag. GW service will use this field to identify user response.
 */
function saveAnswersHelper() {
    //get question odatamodel
    var OData=oCore.getModel("qsODataModel").getData();
    //get json model for questions
    var jsonData=oCore.getModel("quesModel").getData();
    var found=false;
    //loop thorugh oDatamodel and update the question
    $(OData.d.results[0].HdrToDtl.results).each(function( i, iVal ) {
                //make sure StepResp is not empty. Post operation failed if StepRes is set to empty.
                 //if stepresp is empty then set it to N
                   /* if(iVal.StepRes=="") {
                               iVal.StepRes="N";
                        }*/
                                                
                        $(jsonData).each(function( j, jVal ) {
                                  if(found) { found=false;return false; }
                                 if(iVal.LCSecID==jVal.LCSecID)
                                 {
                                    if(iVal.ResReq=="Y") {
                                        iVal.StepRes=jVal.StepRes==""?"N":jVal.StepRes;
                                        return false;
                                    } else {
                                 //search in item list for matching secid & seqid
                                 $(jVal.item).each(function( k, kVal ) {
                                         if(iVal.LCSecID==kVal.LCSecID && iVal.LCSeqID==kVal.LCSeqID) {
                                                  iVal.StepRes=kVal.StepRes==""?"N":kVal.StepRes;
                                                   found=true;
                                                   return false;
                                        }
                                                   
                                      });
                                
                                 
                                    }
                                 
                                 }

                                                                  
            });
                                  
    });
   return preparePostResponse(OData.d.results[0]);
}
/*
  Prepare the user questionnaire data before sending to GW service and also set the StepResp flag.
 */
function preparePostResponse(qsData)
{
    //make sure StepRes is not empty
     $(qsData.HdrToDtl.results).each(function( index, object ) {
                                     object.StepRes=object.StepRes==""?"N":object.StepRes;
                                    });
    var postData = {"ProcessOrder":qsData.ProcessOrder,"ProfileType":qsData.ProfileType,"Plant":qsData.Plant,"ProfileID":qsData.ProfileID,"LCDocNo":qsData.LCDocNo,"LCRevNo":qsData.LCRevNo,"WorkCenter":qsData.WorkCenter,"Material":qsData.Material,"Batch":qsData.Batch,"Customer":qsData.Customer,"SignStrategy":qsData.SignStrategy,"LCStatus":qsData.LCStatus,"HdrToDtl":qsData.HdrToDtl.results};
    
    return JSON.stringify(postData);
}
/*
 Helper method to update questionnaire model with user response. Capture the user response by setting
 the StepRes flag. GW service will use this field to identify user response.
 */
function updateQSModelHelper(secId, seqId,check) {
    //get questionnaire model
    var qModel = oCore.getModel("quesModel");
    //get data
    var aData=oCore.getModel("quesModel").getData();
    if(seqId!='' && seqId!=undefined) {
        $(aData).each(function( i, val ) {
                         $(val.item).each(function( j, jVal ) {
                         if(secId==jVal.LCSecID && seqId==jVal.LCSeqID) {
                            check?val.StepRes="Y":val.StepRes="N";
                            return false;
                         }
                        });
                    });
    } else {
        $(aData).each(function( i, val ) {
                         if(secId==val.LCSecID) {
                         check?val.StepRes="Y":val.StepRes="N";
                         return false;
                         }
                         });

        
    }
    qModel.setData(aData);
    
}
/*
 1) Helper method to capture user signature by calling GW service by passing username,password, processorder & profiletypes
 2) Validate user session & authenticity before performing updates
 3) Make sure to pass xsrf token
 4) Display success message to user signature is accepted
 */
function saveSignature(signStep)
{
    busyDialog.open();
    var signModel=oCore.getModel("signModel");
    var qModel=oCore.getModel("qsODataModel");
    var lcTypeData=oCore.getModel("lcTypeModel").getData();
    var url = gwHost+"/sap/opu/odata/sap/ZGW_LC_SERVICE/LCHDRS(ProcessOrder=\'"+lcTypeData[0].ProcessOrder+"',ProfileType=\'"+lcTypeData[0].ProfileType+"')/HdrToSgn?sap-client=020";
    gwHost
    $.ajax({
           url: url,
           type: 'post',
           data: saveSignHelper(signStep),
           contentType: 'application/json',
           headers: {
           "content-type": 'application/json;charset=utf-8',
           "X-CSRF-Token": qModel.xsrf_token
           },
           dataType: 'json',
           success: function (data,status, jqXHR) {
           handleSignSuccess(jqXHR,data);
           },
           error: function (jqXHR, status, errorThrown)
           {
           handleSignFailure(jqXHR);
          
           }
           });
    
}
/*
 Callback method of saveSignature() method. Display approriate message to user based on status code.
 */
function handleSignSuccess(req,respData) {
    switch (req.status) {
            //If req status is 201, then user is authorized and signature is accepted.
        case 201:
            var signModel=oCore.getModel("signModel");
            var signData=signModel.getData();
            $(signData).each(function( i, val ) {
                             if(respData.d.SignStep==val.SignStep) {
                                    val.SignedTime=respData.d.SignedTime;
                             return false;
                             }
                             });
            showMessage(i18nModel.getResourceBundle().getText("Success"),"Success",i18nModel.getResourceBundle().getText("SignSuccess"));
            break;
            
        default:
             showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",req.responseText);
    }
    //run the UI logic to re-draw signature UI. This will make sure to enable respective Sign button
    oCore.byId("eSignPanel").fireEvent("drawSignUI");

}
/*
 Callback method of saveSignature() method. Display approriate message to user based on status code.
 */
function handleSignFailure(req) {
    switch (req.status) {
            //If req status is 400, then invalid password.
        case 400:
            if(req.responseJSON.error!=undefined) {
                showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",req.responseJSON.error.message.value);
            } else {
                showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",req.responseText);
            }
            
            break;
            
        default:
            showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",req.responseText);
    }
    
}
/* 
  Helper method to to username & password to signature model before passing it to GW service.
 */
function saveSignHelper(signStep)
{
    var postData=[];
    var signModel=oCore.getModel("signModel");
    var signData=signModel.getData();
    $(signData).each(function( i, val ) {
                     if(signStep==val.SignStep) {
                       val.Password=oCore.byId("sPwd").getValue();
                       val.UserID=oCore.getModel("userModel").getData().user;
                      //reset the user password
                       oCore.byId("sPwd").setValue("");
                       //val.SignedTime=new Date().getTime();
                      // val.SignedTime="12";
                       postData.push(val);
                     return false;
                     }
            });
    return JSON.stringify(postData[0]);
}
/*
  Clear application data and destroy controls upon successfull logoff.
 */
function clearAppData(){
    //reset PO input field
    oCore.byId("inputPO").setValue("");
    //destroy lC Type List. Launch upon bar code scan
    if(oCore.byId("lcLyt") !=undefined) {oCore.byId("lcLyt").destroy(); }
    //reset signature password
    if(oCore.byId("sPwd")!=undefined) { oCore.byId("sPwd").setValue(""); }
    //destroy process order detail table
    //oCore.byId("poDetailPanel").destroy();
    //destroy process question table
    //oCore.byId("poQslPanel").destroy();
    //destroy sign panel
    // oCore.byId("eSignPanel").destroy();
}
/*
 Generic error handling method to display messages to user based on message type.
 For instance, if msgType is error, Error icon will be displayed.
 @parameters
 @msgType - Possible values are Error, Success, Warning
 @msgTile - Title to be displayed on error popup screen
 @msgBody - Actual error message body
 */
function showMessage(msgType,msgTitle,msgBody)
{
    if(msgBody=="") {
        sap.m.MessageBox.show(
                              i18nModel.getResourceBundle().getText("NoConnection"), {
                              icon: sap.m.MessageBox.Icon.ERROR,
                              title: msgTitle
                              }
                              );

    } else {
    switch(msgType){
        case "Error" :
            sap.m.MessageBox.show(
                                  msgBody, {
                                  icon: sap.m.MessageBox.Icon.ERROR,
                                  title: msgTitle
                                  }
                                  );
            break;
            
        case "Success" :
            sap.m.MessageBox.show(
                                  msgBody, {
                                  icon: sap.m.MessageBox.Icon.SUCCESS,
                                  title: msgTitle
                                  }
                                  );
            break;
        case "Warning" :
            sap.m.MessageBox.show(
                                  msgBody, {
                                  icon: sap.m.MessageBox.Icon.WARNING,
                                  title: msgTitle
                                  }
                                  );
            break;
            
            
    }
    }
     busyDialog.close();

}
/*
  Utility method to validate user input.
 @value - User input to validate
 @regExp - Regular expression to be used to validate user input
 */
function checkUserInput(value,regExp) {
    var pattern = new RegExp(regExp);
    if(!pattern.test(value)) {
        return true;
    }
    return false;
}
/*
  Validate ProcessOrder input against regular expression.
 */
function validatePO(processOrder) {
    if(processOrder=="" ) {
        showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",i18nModel.getResourceBundle().getText("POMissing"));
        return false;
    } else if(checkUserInput(processOrder,"^\\d*$")) {
        showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",i18nModel.getResourceBundle().getText("POInvalid"));
        return false;
    } else if(processOrder.length>10) {
        showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",i18nModel.getResourceBundle().getText("POInvalid"));
        return false;
    }
    return true;
}

