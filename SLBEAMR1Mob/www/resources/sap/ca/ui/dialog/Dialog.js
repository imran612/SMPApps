/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.dialog.Dialog");
sap.ca.ui.dialog.Dialog=function(i,s){this.setId(i);if(s){this.setXMLView(s.xmlViewId,s.xmlViewName,s.bStretchOnlyOnPhone,s.bWithPadding)}};
sap.ca.ui.dialog.Dialog.prototype.initAndOpen=function(s,c){var v=jQuery.extend({},s,{fnClose:(jQuery.isFunction(c))?c:null});var m=new sap.ui.model.json.JSONModel(v);this.getDialog().setModel(m);this.getDialog().open();return this.getDialog()};
sap.ca.ui.dialog.Dialog.prototype.setId=function(i){this._sId="";if(jQuery.type(i)==="string"){this._sId=i}};
sap.ca.ui.dialog.Dialog.prototype.getId=function(){return this._sId};
sap.ca.ui.dialog.Dialog.prototype.setXMLView=function(x,X,s,w){this._sXMLView=null;this._oDlg=null;if(jQuery.type(x)==="string"&&jQuery.type(X)==="string"){this._sXMLView=new sap.ui.view({id:x,viewName:X,type:sap.ui.core.mvc.ViewType.XML});if(this._sXMLView){this._oDlg=this._sXMLView.byId(this.getId());if(s&&jQuery.device.is.phone){this._oDlg.setStretch(true)}if(w){this._oDlg.addStyleClass("sapUiPopupWithPadding")}}}};
sap.ca.ui.dialog.Dialog.prototype.setDataProperty=function(p,v){if(this._oDlg){this._oDlg.getModel().setProperty(p,v);this._oDlg.rerender()}};
sap.ca.ui.dialog.Dialog.prototype.getXMLView=function(){return this._sXMLView};
sap.ca.ui.dialog.Dialog.prototype.getDialog=function(){return this._oDlg};
sap.ca.ui.dialog.Dialog.prototype.close=function(r){if(this._oDlg){if(this._oDlg.isOpen()){this._oDlg.close()}var m=this._oDlg.getModel();if(m&&m.getData()){if(m.getData().fnClose&&typeof m.getData().fnClose==="function"){m.getData().fnClose(r)}}}};
