/*
 * Copyright 2014 Jabil
 */
sap.ui.jsview("com.jabil.maestro.mob.view.Home", {

      getControllerName : function() {
         return "com.jabil.maestro.mob.view.Home";
      },

      createContent : function(oController) {
              //Pge element
              var page = new sap.m.Page({showHeader: true,
                                        showNavButton: false,
                                        alignItems:"center",
                                    });
              //Set page header with logo and logoff button
              page.setCustomHeader(new sap.m.Bar({contentMiddle: new sap.ui.core.HTML({content:"<div class='headerLogoStyle'>Jabil <span>Maestro</div>"}), contentRight:new sap.m.Image({src:"img/logout.png", press: oController.handleLogoff}) }));
              page.getCustomHeader().addStyleClass("appHeaderStyle");
              //Add page Style
              page.addStyleClass("mainPageStyle");
              //Load the navigation button in home screen
              
              var list = new sap.m.List("homeButtonList");
              //Add OTD Link
              var otdListItem = new sap.m.CustomListItem("otd",{press:oController.handleTilePress,type: sap.m.ListType.Active});
              var item1 = new sap.m.HBox();
			  item1.addItem(new sap.ui.core.HTML({content:"<div class='homeListItemIconStyleOtd'><img src='img/home/icon-otd.png'/></div>"}));
              //item1.addItem(new sap.m.Image({src:"img/home/bg-btn-otd.png"}));
              item1.addItem(new sap.ui.core.HTML({content:"<div class='homeListItemTextStyle'><div class='homeBtHd1TxtStyle'>On Time Delivery</div><div class='homeBtnDetTxtStyle'>Fill-rate measurement describing the percentage of orders filled by the requested date.</div></div>"}));
              otdListItem.insertContent(item1);
              otdListItem.addStyleClass("homeListItemStyle");
              list.addItem(otdListItem);
              if(isInternalUser){
                //Add Material Shortages Link
                var msListItem = new sap.m.CustomListItem("ms",{press:oController.handleTilePress,type: sap.m.ListType.Active});
                var item2 = new sap.m.HBox();
                item2.addItem(new sap.ui.core.HTML({content:"<div class='homeListItemIconStyleMs'><img src='img/home/icon-ms.png'/></div>"}));
                //item2.addItem(new sap.m.Image({src:"img/home/bg-btn-ms.png"}));
                item2.addItem(new sap.ui.core.HTML({content:"<div class='homeListItemTextStyle'><div class='homeBtHd2TxtStyle'>Material Shortages</div><div class='homeBtnDetTxtStyle'>The loss or impending loss of items or suppliers of items or raw materials.</div></div>"}));
                msListItem.insertContent(item2);
                msListItem.addStyleClass("homeListItemStyle");
                list.addItem(msListItem);
              }
              //Add Order Status Link
              var osListItem = new sap.m.CustomListItem("os",{press:oController.handleTilePress,type: sap.m.ListType.Active});
              var item3 = new sap.m.HBox();
			  item3.addItem(new sap.ui.core.HTML({content:"<div class='homeListItemIconStyleOs'><img src='img/home/icon-os.png'/></div>"}));
              //item3.addItem(new sap.m.Image({src:"img/home/bg-btn-os.png"}));
              item3.addItem(new sap.ui.core.HTML({content:"<div class='homeListItemTextStyle'><div class='homeBtHd3TxtStyle'>Order Status</div><div class='homeBtnDetTxtStyle'>This function enables you to check on the current processing stage of your order.</div></div>"}));
              osListItem.insertContent(item3);
              osListItem.addStyleClass("homeListItemStyle");
              list.addItem(osListItem);
              
              //Add Order Status Link
              var ltcListItem = new sap.m.CustomListItem("ltc",{press:oController.handleTilePress,type: sap.m.ListType.Active});
              var item4 = new sap.m.HBox();
			  item4.addItem(new sap.ui.core.HTML({content:"<div class='homeListItemIconStyleLtc'><img src='img/home/icon-ltc.png'/></div>"}));
              //item4.addItem(new sap.m.Image({src:"img/home/bg-btn-ltc.png"}));
              item4.addItem(new sap.ui.core.HTML({content:"<div class='homeListItemTextStyle'><div class='homeBtHd4TxtStyle'>Lead Time Completion</div><div class='homeBtnDetTxtStyle'>The amount of time that elapses between when a process starts and when it is completed.</div></div>"}));
              ltcListItem.insertContent(item4);
              ltcListItem.addStyleClass("homeListItemStyle");
              list.addItem(ltcListItem);
              //add content to page
              page.addContent(list);
              //Add copyright text
              page.setFooter(new sap.m.Toolbar({content:new sap.ui.core.HTML({content:"<div id='copyrightText' class='copyrightStyle'>Copyright 2014 Jabil</div>"})}).addStyleClass("footerStyle"));
              return page;
      }

});
