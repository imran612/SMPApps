/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.TokenizerRenderer");sap.m.TokenizerRenderer={};
sap.m.TokenizerRenderer.render=function(r,c){r.write("<div tabindex=\"-1\"");r.writeControlData(c);r.addClass("sapMTokenizer");r.writeClasses();r.write(">");sap.m.TokenizerRenderer._renderTokens(r,c);r.write("</div>")};
sap.m.TokenizerRenderer._renderTokens=function(r,c){var i,l,t;t=c.getTokens();l=t.length;for(i=0;i<l;i++){r.renderControl(t[i])}};
