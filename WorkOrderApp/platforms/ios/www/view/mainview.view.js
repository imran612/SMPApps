sap.ui.jsview("view.mainview", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.mainview
	*/ 
	getControllerName : function() {
		return "view.mainview";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.mainview
	*/ 
	createContent : function(oController) {
              var table = new sap.m.Table("pTable",{
                                          columns: [
                                                    new sap.m.Column({
                                                                     header : new sap.m.Label({
                                                                                    text : "Name"
                                                                                              }),
                                                                     }),
                                                        new sap.m.Column({
                                                                    header : new sap.m.Label({
                                                                    text : "Description"
                                                                    })
                                                                         })
                                                                         ,
                                                                        new sap.m.Column({
                                                                        header : new sap.m.Label({
                                                                        text : "Rating"
                                                                                                 })
                                                                                                                                }),
                                                                    new sap.m.Column({
                                                                        header : new sap.m.Label({
                                                                            text : "Updated Price"
                                                                        })
                                                                     })
                                                                                         
                                          ]
              });
              table.bindItems("/", new sap.m.ColumnListItem({
                                                                        cells : [ new sap.m.Text({
                                                                                text : "{Name}"
                                                                                                 }),
                                                                            new sap.m.Text({
                                                                                                  text : "{Description}"
                                                                                                  }),
                                                                                 new sap.m.Text({
                                                                                                  text : "{Rating}"
                                                                                                  }),
                                                                                 new sap.m.Text({
                                                                                                  text : "{Price}"
                                                                                                  })
                                                                                 
                                                                                 ]
                                                                        }));
              
              table.setModel(sap.ui.getCore().getModel("prModel"));
		return new sap.m.Page({
			title: "Title",
			content:table
		});
	}

});
