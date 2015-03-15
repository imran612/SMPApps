/*
 * Copyright 2014 Jabil
 */
//declared used libraries
jQuery.sap.require("sap.ui.thirdparty.highcharts.highcharts");
jQuery.sap.require("sap.ui.thirdparty.highcharts.highcharts-3d");
jQuery.sap.require("sap.ui.thirdparty.highcharts.modules.no-data-to-display");

sap.ui.jsview("com.jabil.maestro.mob.view.Main", {
              
              getControllerName : function() {
              return "com.jabil.maestro.mob.view.Main";
              },
              
              createContent : function(oController) {
              //Pge element
              var page = new sap.m.Page({showHeader: true,
                                        showNavButton: false,
                                        alignItems:"center",
                                        });
              //Set page header with logo and logoff button
              page.setCustomHeader(new sap.m.Bar({contentLeft:new sap.m.Image({src:"img/home.png", press: oController.handleNavHome}),contentMiddle: new sap.ui.core.HTML({content:"<div class='headerLogoStyle' id='mainPageHD'></div></div>"}), contentRight:new sap.m.Image({src:"img/logout.png", press: oController.handleLogoff}) }));
              page.getCustomHeader().addStyleClass("appHeaderStyle");
              //Add page Style
              page.addStyleClass("mainPageStyle");
              var tabBar = new sap.m.Toolbar("mainTabBar");
              tabBar.addContent(new sap.ui.core.HTML({content:"<div id='otdBt' class='otdBtInactiveStyle'><div id='otdBtDiv' class='tabImagDivStyle'></div><div id='otdBtTxt' class='tabTxtInactiveStyle'>OTD</div>"}));
              if(isInternalUser){
                tabBar.addContent(new sap.ui.core.HTML({content:"<div id='msBt'class='msBtInactiveStyle'><div id='msBtDiv' class='tabImagDivStyle'></div><div id='msBtTxt' class='tabTxtInactiveStyle'> Shortages</div>"}));
              }
              tabBar.addContent(new sap.ui.core.HTML({content:"<div id='osBt'class='osBtInactiveStyle'><div  id='osBtDiv' class='tabImagDivStyle'></div><div id='osBtTxt' class='tabTxtInactiveStyle'>Orders</div>"}));
              tabBar.addContent(new sap.ui.core.HTML({content:"<div id='ltcBt' class='ltcBtInactiveStyle'><div  id='ltcBtDiv' class='tabImagDivStyle'></div><div id='ltcBtTxt' class='tabTxtInactiveStyle'>LTC</div>"}));
              
              tabBar.addStyleClass("mainTabStyle");
              var navToolbar = new sap.m.Toolbar("navToolbar",{
                                                 content:[
                                                          new sap.m.Link("lastWeek",{text:"Last Week", press:oController.handleWeekNav}),
                                                          new sap.m.ToolbarSpacer(),
                                                          new sap.m.Button("siteDDButton",{text:userSiteTxt,iconFirst:false,icon:"sap-icon://slim-arrow-down", press:oController.handleSiteDDPress}).addStyleClass("siteDDStyle"),
                                                          new sap.m.ToolbarSpacer(),
                                                          new sap.m.Link("thisWeek",{text:"This Week", press:oController.handleWeekNav})
                                                          ]});
              navToolbar.addStyleClass("otdToolbarStyle");
              //create Pull to refresh controll
              var ptr  = new sap.m.PullToRefresh("PTR",{refresh: oController.handleRefresh});
              page.addContent(ptr);
              page.addContent(tabBar);
              page.addContent(navToolbar);
              loadOTDContent(page,oController);
              loadLTCContent(page,oController);
              loadOrderStatusContent(page,oController);
              if(isInternalUser){
                loadMSContent(page,oController);
                loadMSDetContent(page,oController);
              }
              page.setFooter(new sap.m.Toolbar({content:new sap.ui.core.HTML({content:"<div id='copyrightText' class='copyrightStyle'>Copyright 2014 Jabil</div>"})}).addStyleClass("footerStyle"));
              return page;
              }
              
              });
function loadOTDContent(page,controller){
   
    var otdLyt = new sap.m.VBox("otdBtContent",{visible:false});
    var carousel = new sap.m.Carousel({height:"20rem", width:"100%",loop:true, pageChanged: controller.handleOTDPageChange});
    carousel.addStyleClass("otdCarouselStyle");
    carousel.insertPage(new sap.ui.core.HTML("achivableOTDChartDIV",{content:"<div id='achivableOTDChart' class='otdChartDivStyle'></div>"}));
    carousel.insertPage(new sap.ui.core.HTML("weeklyOTDChartDIV",{content:"<div id='weeklyOTDChart' class='otdChartDivStyle'></div>"}));
    carousel.insertPage(new sap.ui.core.HTML("dailyOTDChartDIV",{content:"<div class='dailyOTDTxtDiv'><p class='dailyOTDTxt1'>Daily OTD</p><h1 id='otdTxt' class='dailyOTDTxt2'>...</h1></div><div id='dailyOTDChart' class='otdChartDivStyle'></div>"}));
    
    otdLyt.addItem(carousel);
    page.addContent(otdLyt);
}

function loadLTCContent(page,controller){
    var otdLyt = new sap.m.VBox("ltcBtContent",{visible:false});
    otdLyt.addItem(new sap.ui.core.HTML("ltcChartDIV",{content:"<div class='ltcTxtDiv'><p class='ltcTxt1'>Lead Time</p><h1 id='ltcTxt' class='ltcTxt2'>...</h1></div><div id='ltcChart' class='ltcChartDivStyle'></div>"}));
    var ltcFooter = new sap.m.Toolbar("ltcFooter",{
                                       content:[
                                                new sap.m.ToolbarSpacer(),
                                                new sap.m.Button({text:i18nModel.getResourceBundle().getText("FilterBTTxt"), press: controller.changeSelect,visible:true}).addStyleClass("filterBUBtStyle"),
                                                new sap.m.ToolbarSpacer()

                                                ]});
    ltcFooter.addStyleClass("ltcFooterToolbarStyle");
    otdLyt.addItem(ltcFooter);
    page.addContent(otdLyt);
    
}

function loadOrderStatusContent(page,controller){
    
    var osLyt = new sap.m.VBox("osBtContent",{visible:false});
    //Create search field and add to page
    osLyt.addItem(new sap.m.SearchField("orderSearch", {search: controller.searchOrder}).addStyleClass("orderSearchStyle"));
    //Creat the list item for order details
    
    var orderListItem = new sap.m.CustomListItem("orderListItem");
    //Create Material list items
    var matNumLbl =new sap.m.Text({text:"{MATNUM}"}).addStyleClass("orderListItemTopStyle");
    var matDescLbl =new sap.m.Text({text:"{MATDESC}"}).addStyleClass("orderListItemBottomStyle");
    var pgiDtLbl =new sap.m.Text({text:"{PGIDATETIME}"}).addStyleClass("orderListItemTopStyle");
    var numUnitLbl =new sap.m.Text({text:"PGI Date"}).addStyleClass("orderListItemBottomStyle");
    var hBox = new sap.m.HBox();
    hBox.addItem(new sap.m.VBox({items:[matNumLbl,matDescLbl],width:"70%"}))
    hBox.addItem(new sap.m.VBox({items:[pgiDtLbl,numUnitLbl],width:"30%"}));
    orderListItem.insertContent(hBox);
    
    
    //create main list and add items
    var orderList = new sap.m.List("orderList",{noDataText: i18nModel.getResourceBundle().getText("PONoData")});
    orderList.bindItems("/d/results",orderListItem, new sap.ui.model.Sorter("PONUM",false,true));
    //Add page to content
    osLyt.addItem(orderList);
    page.addContent(osLyt);
}

function loadMSContent(page,controller){
    
    var msLyt = new sap.m.VBox("msBtContent",{visible:false});
    //Create search field and add to page
    msLyt.addItem(new sap.m.SearchField("matSearch", {search: controller.searchMaterials, liveChange:controller.filterMaterials}).addStyleClass("orderSearchStyle"));
    //Create main list for shortages
    var msListItems = new sap.m.ObjectListItem("msListItems", {tooltip:"{PLANT}", title:"{MATERIAL}", number:"{BALANCE_1}/{BALANCE_2}", type:"Navigation", press:controller.handleMSListSelect });
    
    var materialList = new sap.m.List("materialList",{ swipeContent:new sap.m.Button({text:i18nModel.getResourceBundle().getText("UnFollow"), press: controller.handleFollow}).addStyleClass("unFollowButtonStyle")});
    //add content to page
    msLyt.addItem(materialList);
    page.addContent(msLyt);
}
function loadMSDetContent(page,controller){
    var msDetLyt = new sap.m.VBox("msDetContent",{visible:false});
    //nav toolbar
    var navBar = new sap.m.Toolbar("msDetToolbar",{
                                       content:[
                                                new sap.m.Button("back",{text:"Back", icon:"sap-icon://nav-back", press:controller.handleMSDetBack}).addStyleClass("msDetBackBtStyle"),
                                                new sap.m.Text("msDetHDText").addStyleClass("msDetHDTextStyle"),
                                                new sap.m.ToolbarSpacer(),
                                                ]});
    navBar.addStyleClass("msDetNavBarStyle");

    msDetLyt.addItem(navBar);
    //Create week table list control
    var wkList1 = new sap.m.List("wkList1",{
                                 columns: [
                                           new sap.m.Column({header:new sap.m.Label({text:i18nModel.getResourceBundle().getText("QtyType"), design: sap.m.LabelDesign.Bold})}),
                                           new sap.m.Column({hAlign: "Right", header:new sap.m.Label({text:i18nModel.getResourceBundle().getText("PastDue"), design: sap.m.LabelDesign.Bold})}),
                                           new sap.m.Column({hAlign: "Right",header:new sap.m.Label("wk1Hdr",{text:"Week-", design: sap.m.LabelDesign.Bold})})
                                           ],
                                 items: {
                                 path: "/",
                                 template: new sap.m.ColumnListItem({
                                                                    cells: [
                                                                            //new sap.m.ObjectIdentifier({title: "{DESC}"}),
                                                                            new sap.m.Text({text: "{DESC}"}),
                                                                            new sap.m.Text({text: "{wk1}"}),
                                                                            new sap.m.Text({text: "{wk2}"})
                                                                            ]
                                                                    })
                                 }
                                 });
    wkList1.setNoDataText(i18nModel.getResourceBundle().getText("LoadingData"));
    var wkList2 = new sap.m.List("wkList2",{
                                 columns: [
                                           new sap.m.Column({header:new sap.m.Label({text:i18nModel.getResourceBundle().getText("QtyType"), design: sap.m.LabelDesign.Bold})}),
                                           new sap.m.Column({hAlign: "Right",header:new sap.m.Label("wk2Hdr",{text:"Week-", design: sap.m.LabelDesign.Bold})}),
                                           new sap.m.Column({hAlign: "Right",header:new sap.m.Label("wk3Hdr",{text:"Week-", design: sap.m.LabelDesign.Bold})})
                                           ],
                                 items: {
                                 path: "/",
                                 template: new sap.m.ColumnListItem({
                                                                    cells: [
                                                                            // new sap.m.ObjectIdentifier({title: "{DESC}"}),
                                                                            new sap.m.Text({text: "{DESC}"}),
                                                                            new sap.m.Text({text: "{wk1}"}),
                                                                            new sap.m.Text({text: "{wk2}"})
                                                                            ]
                                                                    
                                                                    })
                                 }
                                 });
    var wkList3 = new sap.m.List("wkList3",{
                                 columns: [
                                           new sap.m.Column({header:new sap.m.Label({text:i18nModel.getResourceBundle().getText("QtyType"), design: sap.m.LabelDesign.Bold})}),
                                           new sap.m.Column({hAlign: "Right",header:new sap.m.Label("wk4Hdr",{text:"Week-", design: sap.m.LabelDesign.Bold})})
                                           ],
                                 items: {
                                 path: "/",
                                 template: new sap.m.ColumnListItem({
                                                                    cells: [
                                                                            //new sap.m.ObjectIdentifier({title: "{DESC}"}),
                                                                            new sap.m.Text({text: "{DESC}"}),
                                                                            new sap.m.Text({text: "{wk1}"})
                                                                            ]
                                                                    
                                                                    })
                                 }
                                 });
    //Create carousel and add content
    var carousel = new sap.m.Carousel("MSDetCarousel",{height:"90%", width:"100%",loop:true, showPageIndicator: true});
    carousel.addStyleClass("msDetCarouselStyle");
    carousel.insertPage(wkList3);
    carousel.insertPage(wkList2);
    carousel.insertPage(wkList1);
    msDetLyt.addItem(carousel)
    page.addContent(msDetLyt);
}
