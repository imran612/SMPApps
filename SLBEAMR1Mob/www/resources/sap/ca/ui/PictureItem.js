/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.PictureItem");jQuery.sap.require("sap.ca.ui.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ca.ui.PictureItem",{metadata:{deprecated:true,library:"sap.ca.ui",properties:{"status":{type:"string",group:"Behavior",defaultValue:null},"source":{type:"string",group:"Data",defaultValue:null},"name":{type:"string",group:"Data",defaultValue:null},"width":{type:"sap.ui.core.CSSSize",group:"Data",defaultValue:'62px',deprecated:true},"height":{type:"sap.ui.core.CSSSize",group:"Data",defaultValue:'62px',deprecated:true}},events:{"loaded":{}}}});sap.ca.ui.PictureItem.M_EVENTS={'loaded':'loaded'};
/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
sap.ca.ui.PictureItem.STATUS={'ADD':'Added','DELETE':'Deleted','READ':'Read'};
sap.ca.ui.PictureItem.prototype.init=function(){this._oTapHandler=jQuery.proxy(this._onTap,this);this._oImage=new sap.m.Image({id:this.getId()+"-image"});this._oImage.attachPress(this._oTapHandler);this._oImage.addStyleClass("sapCaUiPictureItemImage");this._iRenderCount=0;this._sourceInfo={isDataUri:false,mimeType:"",data:""}};
sap.ca.ui.PictureItem.prototype.exit=function(){if(this._oImage){this._oImage.detachPress(this._oTapHandler);this._oImage.destroy()}if(this._internalFile){delete this._internalFile}};
sap.ca.ui.PictureItem.prototype.setSource=function(v){if(v==null||v==""){jQuery.sap.log.warning("Cannot set a NULL or empty to the image source");return}this._sourceInfo=this._getSourceInfo(v);this._oImage.setSrc(v);this.setProperty("source",v,false)};
sap.ca.ui.PictureItem.prototype.setFile=function(f,c){var t=this;this._internalFile=f;var a=new sap.ca.ui.utils.CanvasHelper({width:c.width,height:c.height,crop:c.crop,quality:c.quality,minWeight:c.minWeight,done:function(e){t.setSource(e.getParameters().data);t.fireLoaded()}});a.resize(f)};
sap.ca.ui.PictureItem.prototype.getFile=function(f){if(!this._internalFile){jQuery.sap.log.warning("no file has been set");return null}return this._internalFile};
sap.ca.ui.PictureItem.prototype.isSourceDataUri=function(){if(!this._sourceInfo){return false}return this._sourceInfo.isDataUri};
sap.ca.ui.PictureItem.prototype.getMimeType=function(){return this._sourceInfo.mimeType};
sap.ca.ui.PictureItem.prototype.getBase64Encoding=function(){return this._sourceInfo.data};
sap.ca.ui.PictureItem.prototype._resizeImage=function(){var s="auto";var a="auto";var $=this.$();var d=jQuery.sap.domById(this.getId()+"-image");if(d){if(d.width==0||d.height==0){var r=jQuery.proxy(this.onAfterRendering,this);this._iRenderCount++;if(this._iRenderCount<=5){setTimeout(r,100)}else{s=$.height();this._iRenderCount=0}}else{if(d.width<d.height){var t=parseInt($.width(),10);a=(t/d.width)*d.height}else{var b=parseInt($.height(),10);s=(b/d.height)*d.width}this._iRenderCount=0}var c=this._oImage.$();c.width(s);c.height(a)}};
sap.ca.ui.PictureItem.prototype.onAfterRendering=function(){var $=this._oImage.$();var a=this.$();var r=function(){this._resizeImage();$.css({"margin-left":((a.width()-$.width())/2)+"px","margin-top":((a.height()-$.height())/2)+"px"})};if($.height()>0){r.call(this)}else{$.load(jQuery.proxy(r,this))}};
sap.ca.ui.PictureItem.prototype._onTap=function(){var a=sap.ui.getCore().byId(this._addPictureId);if(a){a._pictureTapped(this)}};
sap.ca.ui.PictureItem.prototype.onkeyup=function(e){if(e.which==jQuery.sap.KeyCodes.SPACE||e.which==jQuery.sap.KeyCodes.ENTER){this._onTap()}};
sap.ca.ui.PictureItem.prototype._getSourceInfo=function(s){if(!s)return;var r=/^data:(.+);base64,(.*)$/;var m=s.match(r);var a;if(m){var M=m[1];var b=m[2];a={isDataUri:true,mimeType:M,data:b}}else{a={isDataUri:false,mimeType:"",data:""}}return a};
