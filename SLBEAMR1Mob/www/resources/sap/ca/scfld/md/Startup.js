/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.declare("sap.ca.scfld.md.Startup");sap.ca.scfld.md.Startup={};
sap.ca.scfld.md.Startup.init=function(i,m){var s=function(){var b=m.byId("fioriContent");if(b){jQuery.sap.require("sap.ca.scfld.md.app.Application");var a=new sap.ca.scfld.md.app.Application({identity:i,component:m.getView().getViewData().component,oViewHook:b.getId()});a.setIdentity(i);return true}return false};if(!s()){jQuery(s)}var S="<style> "+".sapMSplitAppFullscreen > .sapMSplitContainerMaster { position: fixed; height: 0; left: -10000px; width: 0; } "+".sapMSplitAppFullscreen > .sapMSplitContainerDetail .sapMSplitContainerMasterBtn { display: none; } "+"</style>";jQuery("head").append(S)};
