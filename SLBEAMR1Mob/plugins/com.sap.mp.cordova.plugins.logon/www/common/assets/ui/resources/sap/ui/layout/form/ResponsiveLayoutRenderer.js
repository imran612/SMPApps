/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.ui.layout.form.FormLayoutRenderer");jQuery.sap.declare("sap.ui.layout.form.ResponsiveLayoutRenderer");sap.ui.layout.form.ResponsiveLayoutRenderer=sap.ui.core.Renderer.extend(sap.ui.layout.form.FormLayoutRenderer);
sap.ui.layout.form.ResponsiveLayoutRenderer.getMainClass=function(){return"sapUiFormResLayout"};
sap.ui.layout.form.ResponsiveLayoutRenderer.renderContainers=function(r,l,f){var c=f.getFormContainers();var L=0;for(var i=0;i<c.length;i++){var C=c[i];if(C.getVisible()){L++}}if(L>0){if(L>1){r.renderControl(l._mainRFLayout)}else if(l.mContainers[c[0].getId()][0]){r.renderControl(l.mContainers[c[0].getId()][0])}else{r.renderControl(l.mContainers[c[0].getId()][1])}}};
