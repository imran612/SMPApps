/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.PictureTileRenderer");jQuery.sap.require("sap.m.CustomTileRenderer");sap.ca.ui.PictureTileRenderer=sap.ui.core.Renderer.extend(sap.m.CustomTileRenderer);
sap.ca.ui.PictureTileRenderer.render=function(r,c){jQuery.sap.log.debug("PictureTileRenderer :: begin rendering");r.write("<div ");r.writeControlData(c);r.addClass("sapCaUiPictureTile");r.writeClasses();r.write(">");r.write("<div");r.addClass("sapCaUiPictureTileContent");r.writeClasses();r.write(">");r.write("<div tabindex='0' id='"+c.getId()+"-wrapper'>");r.renderControl(c._oDeletePictureButton);this._renderContent(r,c);r.write("</div>");r.write("</div></div>")};
sap.ca.ui.PictureTileRenderer._renderContent=function(r,t){r.renderControl(t.getContent())};
