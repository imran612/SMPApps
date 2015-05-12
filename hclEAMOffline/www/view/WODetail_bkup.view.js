sap.ui.jsview("root.view.WODetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.WODetail
	*/ 
	getControllerName : function() {
		return "root.view.WODetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.WODetail
	*/ 
	createContent : function(oController) {
		// VBOX1 
		var oSysStatus = new sap.m.Input({
	        value : "{SystemStatus} ",
	        editable : false
	    });
		
		var oUsrStatus = new sap.m.Input({
	        value : "{UserStatus} ",
	        editable : false
	    });
		
		oOTHBOX  = new sap.m.HBox({items:[oSysStatus,oUsrStatus],
			alignItems : sap.m.FlexAlignItems.Center});
		
		oEqLabel = new sap.m.Label({text:"   Equipment:",design:sap.m.LabelDesign.Bold});
		var oEqNo = new sap.m.Text({
	        text : "{EquipNum} "
	    });
		var oEqDesc = new sap.m.Text({
	        text : "-{EquipDesc} "
	    });
		
		oEqHBOX  = new sap.m.HBox({items:[oEqLabel,oEqNo,oEqDesc],
			alignItems : sap.m.FlexAlignItems.Center
		});
		
		oLStDate = new sap.m.Label({text:"   Basic Start Date:",design:sap.m.LabelDesign.Bold});
		var oTStDate = new sap.m.Text({
	        text : " {StartDate} "
	    });

		oLEdDate = new sap.m.Label({text:"   Basic End Date:",design:sap.m.LabelDesign.Bold});
		var oTEdDate = new sap.m.Text({
	        text : " {FinishDate} "
	    });
		
		oDateHBOX  = new sap.m.HBox({items:[oLStDate,oTStDate,oLEdDate,oTEdDate],
			alignItems : sap.m.FlexAlignItems.Center
		});
		
		oHDRVBox1 = new sap.m.VBox({items:[oOTHBOX,oEqHBOX,oDateHBOX],
			alignItems : sap.m.FlexAlignItems.Start});

		var objectHead = new sap.m.ObjectHeader({
            type :"Active",
            title : "{WoId} {Desc}",
            number : "",
            numberUnit :"{OrdType}",
/*            attributes : [new sap.m.ObjectAttribute({
                    text : "System Status :{SystemStatus}     User Status :{UserStatus}"
              }), new sap.m.ObjectAttribute({
                  text : "Equipment :{EquipNum} - {EquipDesc}"
              }), new sap.m.ObjectAttribute({
                  text : "Functional Location :{FuncLoc}"
              }), new sap.m.ObjectAttribute({
                   text : "Basic Start Date :{StartDate}     Basic End Date :{FinishDate}"
              }), new sap.m.ObjectAttribute({
                   text : "Notification :{Notification}"
           })],
           firstStatus : new sap.m.ObjectStatus({
                       text : "Work Center :{Wc}"
          })*/
       }); 
		
		var iconTabBar = new sap.m.IconTabBar({
			expanded : "{device>/isNoPhone}",
			select : function(oEvent){
			oController.handleTabSelect(oEvent);
			},
				items : [ new sap.m.IconTabFilter({
					key : "Info",
					icon : "sap-icon://hint",
					text : "Start Job",
					content: new sap.m.Text({
			            text: "Basic Content goes here ..."
			          })
					}),new sap.m.IconTabFilter({
					key : "Notes",
					icon : "sap-icon://notes",
					text : "Components",
					content: new sap.m.Text({
			            text: "Components Info goes here ..."
			          })
					}),new sap.m.IconTabFilter({
					key : "Attachments",
					icon : "sap-icon://attachment",
					text : "Measurements",
					content: new sap.m.Text({
			            text: "Measurements Info goes here ..."
			          })
					
				})]
			});

 		return new sap.m.Page("WODetailId",{
			title: "Work Orders",
	        showNavButton: true,
	        //navButtonPress:[oController.handleNavButtonPress],
	        //navButtonPress:"handleNavButtonPress",
	        navButtonTap: function(){
	    		this.getView().app.back();
	        },
			content: [
			          objectHead,
			          oHDRVBox1,
			          iconTabBar
			]
		});
	}

});