sap.ui.controller("com.slb.mobile.view.WODetail", {
	
	handleNavButtonPress : function (evt) {
		this.nav.back("idEmpty");
		
		//this.bus.publish("nav", "back");

	},

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.WODetail
*/
	onInit: function() {
                  var oModel = new sap.ui.model.json.JSONModel("model/WODetails.json");
                  this.getView().setModel(oModel);
                  //sap.ui.getCore().setModel(oModel);
                 // sap.ui.getCore().byId("lineItemList").setModel(oModel);
                  //alert("d");
	},
                  
                  handleLineItemPress: function(evt) {
                 // var context = evt.getParameter("listItem").getBindingContext();
                  this.nav.to("WODetailL2", null);
                  }

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.WODetail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.WODetail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.WODetail
*/
//	onExit: function() {
//
//	}

});

/*
 {
 "WODetailHeader": [
 {
 "WOId": "5000101",
 "RigId": "R2322",
 "JobId": "J87799",
 "WOText": "Oil Leak on Gearbox",
 "StartDate": "23-Nov-2014",
 "Plant": "ZM01",
 "ProductId": "1239102",
 "Name": "Power Projector 4713",
 "Category": "Projector",
 "SupplierName": "Corrective",
 "Description": "A very powerful projector with special features for Internet usability, USB",
 "WeightMeasure": 1467,
 "WeightUnit": "g",
 "Price": 856.49,
 "CurrencyCode": "EUR",
 "Status": "Available",
 "Quantity": 3,
 "UoM": "PC",
 "Width": 51,
 "Depth": 42,
 "Height": 18,
 "DimUnit": "cm",
 "ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/large_HT-6100.jpg"
 }
 ],
 
 "WODetailColection": [
 {
 "type": "Category",
 "values": [
 {
 "text": "Projector",
 "data": 1
 },
 {
 "text": "Graphics Card",
 "data": 2
 },
 {
 "text": "Accessory",
 "data": 4
 },
 {
 "text": "Printer",
 "data": 2
 },
 {
 "text": "Monitor",
 "data": 3
 },
 {
 "text": "Laptop",
 "data": 1
 },
 {
 "text": "Keyboard",
 "data": 1
 }
 ]
 },
 {
 "type": "SupplierName",
 "values": [
 {
 "text": "Corrective",
 "data": 3
 },
 {
 "text": "Preventative",
 "data": 3
 },
 {
 "text": "Routine",
 "data": 5
 },
 {
 "text": "Very Best Screens",
 "data": 3
 }
 ]
 }
 ]
 
 }
*/
/*

 {
 "WODetailHeader": [
 {
 "WOId": "5000101",
 "RigId": "R2322",
 "JobId": "J87799",
 "WOText": "Oil Leak on Gearbox",
 "StartDate": "23-Nov-2014",
 "Plant": "ZM01",
 "ProductId": "1239102",
 "Name": "Power Projector 4713",
 "Category": "Projector",
 "SupplierName": "Corrective",
 "Description": "A very powerful projector with special features for Internet usability, USB",
 "WeightMeasure": 1467,
 "WeightUnit": "g",
 "Price": 856.49,
 "CurrencyCode": "EUR",
 "Status": "Available",
 "Quantity": 3,
 "UoM": "PC",
 "Width": 51,
 "Depth": 42,
 "Height": 18,
 "DimUnit": "cm",
 "ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/large_HT-6100.jpg"
 }
 ],
 "WODetailColection": [
 
 
 {
 "text": "Projector",
 "data": 1
 },
 {
 "text": "Graphics Card",
 "data": 2
 },
 {
 "text": "Accessory",
 "data": 4
 },
 {
 "text": "Printer",
 "data": 2
 },
 {
 "text": "Monitor",
 "data": 3
 },
 {
 "text": "Laptop",
 "data": 1
 },
 {
 "text": "Keyboard",
 "data": 1
 }
 
 ]
 }
*/