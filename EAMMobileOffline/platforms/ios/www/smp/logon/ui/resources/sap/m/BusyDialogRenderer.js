/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
jQuery.sap.declare("sap.m.BusyDialogRenderer");sap.m.BusyDialogRenderer={};
sap.m.BusyDialogRenderer.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapMBusyDialog sapMCommonDialog");if(jQuery.device.is.iphone){r.addClass("sapMDialogHidden")}if(!c.getText()&&!c.getTitle()&&!c.getShowCancelButton()){r.addClass("sapMBusyDialogSimple")}if(sap.m._bSizeCompact){r.addClass("sapUiSizeCompact")}r.writeClasses();var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.write(">");if(c.getTitle()){r.write("<header class=\"sapMDialogTitle\">");r.writeEscaped(c.getTitle());r.write("</header>")}r.renderControl(c._oLabel);r.renderControl(c._busyIndicator);if(c.getShowCancelButton()){if(sap.ui.Device.system.phone){r.write("<footer class='sapMBusyDialogFooter sapMFooter-CTX'>");r.renderControl(c._oButton);r.write("</footer>")}else{r.renderControl(c._oButtonToolBar)}}r.write("</div>")};
