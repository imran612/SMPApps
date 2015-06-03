/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
jQuery.sap.declare("sap.m.SplitAppRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.SplitContainerRenderer");sap.m.SplitAppRenderer={};sap.m.SplitAppRenderer=sap.ui.core.Renderer.extend(sap.m.SplitContainerRenderer);
sap.m.SplitAppRenderer.renderAttributes=function(r,c){sap.m.BackgroundHelper.addBackgroundColorStyles(r,c.getBackgroundColor(),c.getBackgroundImage())};
sap.m.SplitAppRenderer.renderBeforeContent=function(r,c){sap.m.BackgroundHelper.renderBackgroundImageTag(r,c,"sapMSplitContainerBG",c.getBackgroundImage(),c.getBackgroundRepeat(),c.getBackgroundOpacity())};
