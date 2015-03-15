var inputId;
var _valueHelpDialog;
sap.ui.controller("com.jbl.lc.view.Home", {
   //component lifecycle methods
   /* onInit: function () {
            },
    onAfterRendering: function() {
            },*/
    /*
     Method is called when user select profile type or lc types from popup on Main screen.
     Validate if profile type is missing and warn the user.
     */
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
                  //check if user selected profile type
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
                  //navigate to processdetail screen upon profile type selection
                  oCore.byId("Home").getController().nav.to("ProcessDetail");
                 
                  
                  }
                 
                  },
        /*  
         Perform logoff if user choose to logout.
         */
            handleLogoff: function(event) {
                  logoff();
                  },
                  
        /*
         1) Method is called when user tap on Scan BarCode field. Scanner/camera will opened to scan ProcessOrder number.
         2) Validate the scanned value and get the list of profile types based on PO number
         */
        barcodescan: function(evt) {
                //  var barLeft=oCore.byId(evt.mParameters.id).getContent().sId;
                  //var barText=oCore.byId("__text3").addStyleClass("activeTitle");
                 //getQuestions();
                 //getLCTypes();
                 scan();
                 // getPODetails();
                  },
        /*
            1) Method is called when user manually enters processorder number Scan BarCode field
            2) Validate the scanned value and get the list of profile types based on PO number
        */
        handlePOEntry: function(evt) {
                   //validate user input
                 var poValue=oCore.byId("inputPO").getValue().trim();
                  if(validatePO(poValue)) {
                        populatePOModel(poValue.trim());
                       getPODetails(true);
                  }
                  
                  }
});
//Helper method for navigation purpose.
function navigateToDetails(pageId, targetPage) {
    var page = oCore.byId(pageId);
    page.getController().nav.to(targetPage);
}

function scan() {
    
    cordova.plugins.barcodeScanner.scan(
                                        function (result) {
                                        if(result.cancelled==0) {
                                        if(validatePO(result.text)) {
                                        populatePOModel(result.text.trim());
                                             getPODetails(true);
                                        }
                                        }
                                        
                                        },
                                        function (error) {
                                        sap.m.MessageBox.alert(response,{title:"Error"});
                                        }
                                        );
    

}
function populatePOModel(processOrder)
{
    var lcTypes=[];
    var lcTModel = new sap.ui.model.json.JSONModel();
    lcTypes.push({ "ProcessOrder" : processOrder.trim(), "ProfileType": "COMPLETE"
                 });
    lcTModel.setData(lcTypes);
    oCore.setModel(lcTModel,"poInputModel");
}
