/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.PictureItemRenderer");sap.ca.ui.PictureItemRenderer={};
sap.ca.ui.PictureItemRenderer.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapCaUiPictureItem");r.writeClasses();var _=c._width||c.getWidth();var a=c._height||c.getHeight();r.addStyle("width",_);r.addStyle("height",a);r.writeStyles();r.writeAttribute("tabindex","0");r.write(">");r.renderControl(c._oImage);r.write("</div>")};
