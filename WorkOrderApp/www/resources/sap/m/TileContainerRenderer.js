/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.TileContainerRenderer");sap.m.TileContainerRenderer={};
sap.m.TileContainerRenderer.render=function(r,c){var a=c.getId();r.write("<div tabindex=\"-1\"");r.writeControlData(c);r.addStyle("height",c.getHeight());r.addStyle("width",c.getWidth());r.writeStyles();r.addClass("sapMTC");r.writeClasses();r.write(" >");r.write("<div id=\""+a+"-scrl\" class=\"sapMTCScrl\" style=\"height:0px;");if(!c.bRtl){r.write(" overflow: hidden;")}r.write("\">");r.write("<div id=\""+a+"-blind\" class=\"sapMTCBlind\"></div>");r.write("<div id=\""+a+"-cnt\" class=\"sapMTCCnt sapMTCAnim\" style=\"height:0px; width:0px;\">");var t=c.getTiles();for(var i=0;i<t.length;i++){t[i]._setVisible(false);r.renderControl(t[i])}r.write("</div>");r.write("</div>");r.write("<div id=\""+a+"-pager\" class=\"sapMTCPager\">");r.write("</div>");r.write("<div id=\""+a+"-leftedge\" class=\"sapMTCEdgeLeft\"></div>");r.write("<div id=\""+a+"-rightedge\" class=\"sapMTCEdgeRight\"></div>");r.write("<div id=\""+a+"-leftscroller\" class=\"sapMTCScroller sapMTCLeft\"><div class=\"sapMTCInner\"></div></div>");r.write("<div id=\""+a+"-rightscroller\" class=\"sapMTCScroller sapMTCRight\"><div class=\"sapMTCInner\"></div></div>");r.write("</div>")};
