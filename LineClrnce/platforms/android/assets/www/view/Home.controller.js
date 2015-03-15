var inputId;
var _valueHelpDialog;
sap.ui.controller("com.jbl.lc.view.Home", {
                  
            onInit: function () {
                 },
                  onAfterRendering: function() {
                  },
                handleLCType: function (oController) {
                  // open value help dialog
                  var lcType=oCore.byId("lcTypesDialog");
                  lcType.open();
                  },
                  handleLCTClose: function(event) {
                  oCore.byId("lcTWindow").close();
                  },
                  handleLCTConfirm: function(event) {
                  var lcTypeWin=oCore.byId("lcTWindow");
                  var lcListLyt = lcTypeWin.getContent()[0];
                  var lcType='';
                  var processOrder;
                  $.each(lcListLyt.getItems(), function(id, obj) {
                         if(obj.getSelected()) {
                          var aHelper = obj.getText().split("-");
                          lcType=aHelper[0];
                          processOrder=aHelper[1];
                         return false;
                         }
                         }); 
                  if(lcType=='') {
                   showMessage(i18nModel.getResourceBundle().getText("Error"),"Error",i18nModel.getResourceBundle().getText("LCTypeMissing"));
                  } else {
                  var lcTypes=[];
                  var lcTModel = new sap.ui.model.json.JSONModel();
                  lcTypes.push({ "ProcessOrder" : processOrder.trim(),
                               "ProfileType"  : lcType.trim(),
                               });
                  lcTModel.setData(lcTypes);
                  oCore.setModel(lcTModel,"lcTypeModel");
                  oCore.byId("lcTWindow").close();
                  getPODetails();
                  oCore.byId("Home").getController().nav.to("ProcessDetail");
                  //store LCtype in model
                  
                  }
                 
                  },
                  handleLogoff: function(event) {
                  logoff();
                  },
                  
            barcodescan: function(evt) {
                //  var barLeft=oCore.byId(evt.mParameters.id).getContent().sId;
                  //var barText=oCore.byId("__text3").addStyleClass("activeTitle");
                 //getQuestions();
                 //getLCTypes();
                 scan();
                 // getPODetails();
                  },
                  handlePOEntry: function(evt) {
                   //validate user input
                 var poValue=oCore.byId("inputPO").getValue().trim();
                  if(validatePO(poValue)) {
                       getLCTypes(poValue);
                  }
                  
                  },
                 detailList : function(evt) {
                    oCore.byId("Home").getController().nav.to("DocumentList");
                  }
});

function navigateToDetails(pageId, targetPage) {
    var page = oCore.byId(pageId);
    page.getController().nav.to(targetPage);
}

function scan() {
    
    cordova.plugins.barcodeScanner.scan(
                                        function (result) {
                                        if(result.cancelled==0) {
                                        if(validatePO(result.text)) {
                                             getLCTypes(result.text);
                                        }
                                        }
                                        
                                        },
                                        function (error) {
                                        sap.m.MessageBox.alert(response,{title:"Error"});
                                        }
                                        );
    

}
