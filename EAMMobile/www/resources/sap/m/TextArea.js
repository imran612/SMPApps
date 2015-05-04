/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./InputBase','./library'],function(q,I,l){"use strict";var T=I.extend("sap.m.TextArea",{metadata:{library:"sap.m",properties:{rows:{type:"int",group:"Appearance",defaultValue:2},cols:{type:"int",group:"Appearance",defaultValue:20},height:{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:null},maxLength:{type:"int",group:"Behavior",defaultValue:0},wrapping:{type:"sap.ui.core.Wrapping",group:"Behavior",defaultValue:null}},events:{liveChange:{parameters:{value:{type:"string"}}}}}});T.prototype.init=function(){I.prototype.init.call(this);this._inputProxy=q.proxy(this._onInput,this)};T.prototype.onAfterRendering=function(){I.prototype.onAfterRendering.call(this);this.bindToInputEvent(this._inputProxy);if(sap.ui.Device.support.touch){if(this._behaviour.INSIDE_SCROLLABLE_WITHOUT_FOCUS){this._$input.on("touchstart",q.proxy(this._onTouchStart,this));this._$input.on("touchmove",q.proxy(this._onTouchMove,this))}else if(this._behaviour.PAGE_NON_SCROLLABLE_AFTER_FOCUS){this._$input.on("touchmove",function(e){if(q(this).is(":focus")){e.stopPropagation()}})}}};T.prototype.onsapenter=function(e){};T.prototype.onValueRevertedByEscape=function(v){this._onInput()};T.prototype._onInput=function(e){var v=this._$input.val();if(this.getMaxLength()>0&&v.length>this.getMaxLength()){v=v.substring(0,this.getMaxLength());this._$input.val(v)}if(v!=this.getValue()){this.setProperty("value",v,true);v=this.getValue();this.fireLiveChange({value:v,newValue:v})}};T.prototype._behaviour=(function(d){return{INSIDE_SCROLLABLE_WITHOUT_FOCUS:d.os.ios||d.os.blackberry||d.browser.chrome,PAGE_NON_SCROLLABLE_AFTER_FOCUS:d.os.android&&d.os.version>=4.1}}(sap.ui.Device));T.prototype._onTouchStart=function(e){var t=e.touches[0];this._iStartY=t.pageY;this._iStartX=t.pageX;this._bHorizontalScroll=undefined;e.setMarked("swipestartHandled")};T.prototype._onTouchMove=function(e){var d=this._$input[0],p=e.touches[0].pageY,s=d.scrollTop,t=s<=0,b=s+d.clientHeight>=d.scrollHeight,g=this._iStartY>p,G=this._iStartY<p,o=t&&G||b&&g;if(this._bHorizontalScroll===undefined){this._bHorizontalScroll=Math.abs(this._iStartY-p)<Math.abs(this._iStartX-e.touches[0].pageX)}if(this._bHorizontalScroll||!o){e.setMarked()}};return T},true);