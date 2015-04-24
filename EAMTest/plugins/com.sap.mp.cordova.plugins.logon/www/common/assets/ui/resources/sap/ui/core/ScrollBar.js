/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
sap.ui.define(['./library','./Control'],function(){"use strict";sap.ui.core.Control.extend("sap.ui.core.ScrollBar",{metadata:{publicMethods:["bind","unbind","pageUp","pageDown"],library:"sap.ui.core",properties:{"vertical":{type:"boolean",group:"Behavior",defaultValue:true},"scrollPosition":{type:"int",group:"Behavior",defaultValue:null},"size":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"contentSize":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"steps":{type:"int",group:"Dimension",defaultValue:null}},events:{"scroll":{}}}});sap.ui.core.ScrollBar.M_EVENTS={'scroll':'scroll'};sap.ui.core.ScrollBar.prototype.init=function(){this._$ScrollDomRef=null;this._iOldScrollPos=0;this._iOldStep=0;this._bScrollPosIsChecked=false;this._bRTL=sap.ui.getCore().getConfiguration().getRTL();this._bSuppressScroll=false;this._iMaxContentDivSize=1000000;if(jQuery.sap.touchEventMode==="ON"){jQuery.sap.require("sap.ui.thirdparty.zyngascroll");this._iLastTouchScrollerPosition=null;this._iTouchStepTreshold=24;this._bSkipTouchHandling=false;this._oTouchScroller=new window.Scroller(jQuery.proxy(this._handleTouchScroll,this),{bouncing:false})}};sap.ui.core.ScrollBar.prototype.onBeforeRendering=function(){this.$("sb").unbind("scroll",this.onscroll)};sap.ui.core.ScrollBar.prototype.onAfterRendering=function(){this._iSteps=this.getSteps();var c=this.getContentSize();this._bStepMode=!c;var s=this.getSize();if(jQuery.sap.endsWith(s,"px")){s=s.substr(0,s.length-2)}else{s=this.getVertical()?this.$().height():this.$().width()}var a=null;var $=this.$("ffsize");if(!!sap.ui.Device.browser.firefox){a=$.outerHeight()}$.remove();if(!!sap.ui.Device.browser.webkit){if(!document.width){a=Math.round(40/(window.outerWidth/jQuery(document).width()))}else{a=Math.round(40/(document.width/jQuery(document).width()))}}if(this.getVertical()){this._iFactor=!!sap.ui.Device.browser.firefox?a:!!sap.ui.Device.browser.webkit?a:Math.floor(s*0.125);this._iFactorPage=!!sap.ui.Device.browser.firefox?s-a:Math.floor(s*0.875)}else{this._iFactor=!!sap.ui.Device.browser.firefox?10:!!sap.ui.Device.browser.webkit?a:7;this._iFactorPage=!!sap.ui.Device.browser.firefox?Math.floor(s*0.8):!!sap.ui.Device.browser.webkit?Math.floor(s*0.875):s-14}this._$ScrollDomRef=this.$("sb");if(this._bStepMode){if(this.getVertical()){var S=this._iSteps*this._iFactor;if(S>this._iMaxContentDivSize){this._iFactor=Math.ceil(this._iFactor/Math.ceil(S/this._iMaxContentDivSize))}var C=this._$ScrollDomRef.height()+this._iSteps*this._iFactor;this._$ScrollDomRef.find("div").height(C)}else{var C=this._$ScrollDomRef.width()+this._iSteps*this._iFactor;this._$ScrollDomRef.find("div").width(C)}}this.setCheckedScrollPosition(this.getScrollPosition()?this.getScrollPosition():0,true);this._$ScrollDomRef.bind("scroll",jQuery.proxy(this.onscroll,this));if(jQuery.sap.touchEventMode==="ON"){this._bSkipTouchHandling=true;var o={width:0,height:0};o[this.getVertical()?"height":"width"]=this._bStepMode?(this.getSteps()*this._iTouchStepTreshold):parseInt(this.getContentSize(),10);this._oTouchScroller.setDimensions(0,0,o.width,o.height);var e=this._$ScrollDomRef.get(0);var r=e.getBoundingClientRect();this._oTouchScroller.setPosition(r.left+e.clientLeft,r.top+e.clientTop);this._bSkipTouchHandling=false}};sap.ui.core.ScrollBar.prototype.onmousewheel=function(e){if(this.$().is(":visible")){var o=e.originalEvent;var w=o.detail?o.detail:o.wheelDelta*(-1)/40;var f=w>0?true:false;if(jQuery.sap.containsOrEquals(this._$ScrollDomRef[0],e.target)){this._doScroll(sap.ui.core.ScrollBarAction.MouseWheel,f)}else{this._bMouseWheel=true;var p=null;if(this._bStepMode){p=w+this._iOldStep}else{p=w*this._iFactor+this._iOldScrollPos}this.setCheckedScrollPosition(p,true)}e.preventDefault();e.stopPropagation();return false}};sap.ui.core.ScrollBar.prototype.ontouchstart=function(e){var t=e.touches;var f=t[0];if(f&&f.target&&f.target.tagName.match(/input|textarea|select/i)){return}if(this._oTouchScroller){this._oTouchScroller.doTouchStart(t,e.timeStamp)}if(t.length==1){e.preventDefault()}};sap.ui.core.ScrollBar.prototype.ontouchmove=function(e){if(this._oTouchScroller){this._oTouchScroller.doTouchMove(e.touches,e.timeStamp,e.scale)}};sap.ui.core.ScrollBar.prototype.ontouchend=function(e){if(this._oTouchScroller){this._oTouchScroller.doTouchEnd(e.timeStamp)}};sap.ui.core.ScrollBar.prototype.ontouchcancel=function(e){if(this._oTouchScroller){this._oTouchScroller.doTouchEnd(e.timeStamp)}};sap.ui.core.ScrollBar.prototype.onscroll=function(e){if(this._bSuppressScroll){this._bSuppressScroll=false;e.preventDefault();e.stopPropagation();return false}var s=null;if(this._$ScrollDomRef){if(this.getVertical()){s=this._$ScrollDomRef.scrollTop()}else{s=this._$ScrollDomRef.scrollLeft();if(!!sap.ui.Device.browser.firefox&&this._bRTL){s=Math.abs(s)}else if(!!sap.ui.Device.browser.webkit&&this._bRTL){var S=this._$ScrollDomRef.get(0);s=S.scrollWidth-S.clientWidth-S.scrollLeft}}}var d=s-this._iOldScrollPos;var f=d>0?true:false;if(d<0){d=d*(-1)}var a=sap.ui.core.ScrollBarAction.Drag;if(d==this._iFactor){a=sap.ui.core.ScrollBarAction.Step}else if(d==this._iFactorPage){a=sap.ui.core.ScrollBarAction.Page}else if(this._bMouseWheel){a=sap.ui.core.ScrollBarAction.MouseWheel}this._doScroll(a,f);e.preventDefault();e.stopPropagation();return false};sap.ui.core.ScrollBar.prototype._handleTouchScroll=function(l,t,z){if(this._bSkipTouchHandling){return}var v=this.getVertical()?t:l;if(this._bStepMode){var p=Math.max(Math.round(v/this._iTouchStepTreshold),0)}else{var p=Math.round(v)}if(this._iLastTouchScrollerPosition!==p){this._iLastTouchScrollerPosition=p;this.setCheckedScrollPosition(p,true);this.fireScroll()}};sap.ui.core.ScrollBar.prototype.unbind=function(o){if(o){this._$OwnerDomRef=jQuery(o);if(this.getVertical()){this._$OwnerDomRef.unbind(!!sap.ui.Device.browser.firefox?"DOMMouseScroll":"mousewheel",this.onmousewheel)}if(jQuery.sap.touchEventMode==="ON"){this._$OwnerDomRef.unbind(this._getTouchEventType("touchstart"),jQuery.proxy(this.ontouchstart,this));this._$OwnerDomRef.unbind(this._getTouchEventType("touchmove"),jQuery.proxy(this.ontouchmove,this));this._$OwnerDomRef.unbind(this._getTouchEventType("touchend"),jQuery.proxy(this.ontouchend,this));this._$OwnerDomRef.unbind(this._getTouchEventType("touchcancle"),jQuery.proxy(this.ontouchcancle,this))}}};sap.ui.core.ScrollBar.prototype.bind=function(o){if(o){this._$OwnerDomRef=jQuery(o);if(this.getVertical()){this._$OwnerDomRef.bind(!!sap.ui.Device.browser.firefox?"DOMMouseScroll":"mousewheel",jQuery.proxy(this.onmousewheel,this))}if(jQuery.sap.touchEventMode==="ON"){this._$OwnerDomRef.bind(this._getTouchEventType("touchstart"),jQuery.proxy(this.ontouchstart,this));this._$OwnerDomRef.bind(this._getTouchEventType("touchmove"),jQuery.proxy(this.ontouchmove,this));this._$OwnerDomRef.bind(this._getTouchEventType("touchend"),jQuery.proxy(this.ontouchend,this));this._$OwnerDomRef.bind(this._getTouchEventType("touchcancle"),jQuery.proxy(this.ontouchcancle,this))}}};sap.ui.core.ScrollBar.prototype._getTouchEventType=function(t){return jQuery.sap.touchEventMode==="SIM"?("sap"+t):t};sap.ui.core.ScrollBar.prototype.pageUp=function(){this._doScroll(sap.ui.core.ScrollBarAction.Page,false)};sap.ui.core.ScrollBar.prototype.pageDown=function(){this._doScroll(sap.ui.core.ScrollBarAction.Page,true)};sap.ui.core.ScrollBar.prototype.setScrollPosition=function(s){if(this._$ScrollDomRef){this.setCheckedScrollPosition(s,true)}else{this.setProperty("scrollPosition",s)}return this};sap.ui.core.ScrollBar.prototype.setCheckedScrollPosition=function(s,c){var C=Math.max(s,0);if(this._bStepMode===undefined){this._bStepMode=!this.getContentSize()}var S=C;if(this._bStepMode){C=Math.min(C,this.getSteps());S=C*this._iFactor}C=Math.floor(C);this._bSuppressScroll=!c;this.setProperty("scrollPosition",C,true);if(this.getVertical()){this._$ScrollDomRef.scrollTop(S)}else{if(!!sap.ui.Device.browser.firefox&&this._bRTL){this._$ScrollDomRef.scrollLeft(-S)}else if(!!sap.ui.Device.browser.webkit&&this._bRTL){var o=this._$ScrollDomRef.get(0);this._$ScrollDomRef.scrollLeft(o.scrollWidth-o.clientWidth-S)}else{this._$ScrollDomRef.scrollLeft(S)}}if(jQuery.sap.touchEventMode==="ON"){var v=C;if(this._bStepMode){v=Math.round(C*this._iTouchStepTreshold)}this._oTouchScroller.__scrollTop=this.getVertical()?v:0;this._oTouchScroller.__scrollLeft=this.getVertical()?0:v}};sap.ui.core.ScrollBar.prototype.setContentSize=function(c){this.setProperty("contentSize",c);this._bStepMode=false;var s=this.$("sbcnt");if(s){if(this.getVertical()){s.height(c)}else{s.width(c)}}return this};sap.ui.core.ScrollBar.prototype._doScroll=function(e,f){var s=null;if(this._$ScrollDomRef){if(this.getVertical()){s=this._$ScrollDomRef.scrollTop()}else{s=this._$ScrollDomRef.scrollLeft();if(!!sap.ui.Device.browser.firefox&&this._bRTL){s=Math.abs(s)}else if(!!sap.ui.Device.browser.webkit&&this._bRTL){var S=this._$ScrollDomRef.get(0);s=S.scrollWidth-S.clientWidth-S.scrollLeft}}}if(this._bStepMode){var i=Math.round(s/this._iFactor);var o=this._iOldStep;if(o!==i){this.setCheckedScrollPosition(i,false);jQuery.sap.log.debug("-----STEPMODE-----: New Step: "+i+" --- Old Step: "+o+" --- Scroll Pos in px: "+s+" --- Action: "+e+" --- Direction is forward: "+f);this.fireScroll({action:e,forward:f,newScrollPos:i,oldScrollPos:o});this._iOldStep=i}}else{this.setProperty("scrollPosition",s,true);jQuery.sap.log.debug("-----PIXELMODE-----: New ScrollPos: "+s+" --- Old ScrollPos: "+this._iOldScrollPos+" --- Action: "+e+" --- Direction is forward: "+f);this.fireScroll({action:e,forward:f,newScrollPos:s,oldScrollPos:this._iOldScrollPos})}this._bSuppressScroll=false;this._iOldScrollPos=s;this._bMouseWheel=false};sap.ui.core.ScrollBar.prototype.onThemeChanged=function(){this.rerender()};sap.ui.core.ScrollBar.prototype.getNativeScrollPosition=function(){if(this._$ScrollDomRef){if(this.getVertical()){return this._$ScrollDomRef.scrollTop()}else{return this._$ScrollDomRef.scrollLeft()}}return 0};sap.ui.core.ScrollBar.prototype.setNativeScrollPosition=function(n){if(this._$ScrollDomRef){if(this.getVertical()){this._$ScrollDomRef.scrollTop(n)}else{this._$ScrollDomRef.scrollLeft(n)}}};return sap.ui.core.ScrollBar},true);
