/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
sap.ui.controller("sap.ca.ui.quickoverview.Company",{onTapSMS:function(e){sap.m.URLHelper.triggerSms(this.byId("qvMainContactMobile").getText())},onTapPhone:function(e){sap.m.URLHelper.triggerTel(e.getSource().getText())},onTapEmail:function(e){var s="";var m=this.getView().getModel();if(m&&m.getData()){s=(m.getData().maincontactemailsubj)?m.getData().maincontactemailsubj:""}sap.m.URLHelper.triggerEmail(e.getSource().getText(),s)},onBeforeRendering:function(){var c=this.byId("qvMainContactSMS");if(c){c.setVisible(this.byId("qvMainContactMobile").getText()!=="")}}});
