/*
 * @copyright
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/IconPool'],function(q,I){"use strict";var O={};O._isEmptyObject=function(o){if(!o){return true}if((!o._isEmpty||!o._isEmpty())&&(!o.getVisible||o.getVisible())){return false}return true};O._isEmptyArray=function(a){if(a){for(var i=0;i<a.length;i++){if(!O._isEmptyObject(a[i])){return false}}}return true};O._isEmptyRow=function(l,r){return O._isEmptyObject(l)&&O._isEmptyArray(r)};O._renderObjects=function(r,o,a){for(var i=0;i<o.length;i++){if(o[i]instanceof sap.ui.core.Control){this._renderChildControl(r,a,o[i])}}};O._getIcons=function(o){var i=[];if(o.getShowMarkers()){o._oFavIcon.setVisible(o.getMarkFavorite());o._oFlagIcon.setVisible(o.getMarkFlagged());i.push(o._oPlaceholderIcon);i.push(o._oFavIcon);i.push(o._oFlagIcon)}return i};O.renderAttribute=function(r,o,a,f){r.write("<div");r.addClass("sapMOHAttr");r.writeClasses();if(f){r.addStyle("width","100%");r.writeStyles()}r.write(">");this._renderChildControl(r,o,a);r.write("</div>")};O.renderRow=function(r,o,l,R){if(O._isEmptyRow(l,R)){return}r.write("<div");r.addClass("sapMOHAttrRow");r.writeClasses();r.write(">");if(!O._isEmptyObject(l)){this.renderAttribute(r,o,l,O._isEmptyArray(R))}else if(O._isEmptyObject(l)&&!O._isEmptyArray(R)){if(R[0]instanceof sap.m.ProgressIndicator){r.write("<div");r.addClass("sapMOHAttr");r.writeClasses();r.write(">");r.write("</div>")}}if(!O._isEmptyArray(R)){r.write("<div");if(R[0]instanceof sap.m.ProgressIndicator){r.addClass("sapMOHStatusFixedWidth")}else if(R[0]instanceof sap.ui.core.Icon){r.addClass("sapMOHStatusFixedWidth");r.addClass("sapMObjStatusMarker")}else{r.addClass("sapMOHStatus")}r.writeClasses();r.write(">");O._renderObjects(r,R,o);r.write("</div>")}r.write("</div>")};O.renderAttributesAndStatuses=function(r,o){var a=o.getAttributes();var v=[];for(var i=0;i<a.length;i++){if(a[i].getVisible()){v.push(a[i])}}var A=v.length;var b=[];var c=O._getIcons(o);if(!o.getResponsive()&&!O._isEmptyArray(c)){b.push(c)}if(o.getFirstStatus()){b.push([o.getFirstStatus()])}if(o.getSecondStatus()){b.push([o.getSecondStatus()])}if(o.getStatuses()){var s=o.getStatuses();for(var i=0;i<s.length;i++){if(!s[i].getVisible||s[i].getVisible()){if(s[i]instanceof sap.m.ObjectStatus||s[i]instanceof sap.m.ProgressIndicator){b.push([s[i]])}else{q.sap.log.warning("Only sap.m.ObjectStatus or sap.m.ProgressIndicator are allowed in \"sap.m.ObjectHeader.statuses\" aggregation."+" Current object is "+s[i].constructor.getMetadata().getName()+" with id \""+s[i].getId()+"\"")}}}}var d=b.length;var n=A>d?A:d;if(o.getResponsive()){this.renderRowResponsive(r,o,v,b)}else{for(var i=0;i<n;i++){this.renderRow(r,o,v[i],b[i])}}};O.renderNumber=function(r,o){if(o.getNumber()){r.write("<div");r.writeAttribute("id",o.getId()+"-numberdiv");r.addClass("sapMOHNumberDiv");r.writeClasses();r.write(">");r.write("<span");r.writeAttribute("id",o.getId()+"-number");r.addClass("sapMOHNumber");r.addClass("sapMOHNumberState"+o.getNumberState());r.writeClasses();r.write(">");r.writeEscaped(o.getNumber());r.write("</span>");if(o.getNumberUnit()){r.write("<span");r.writeAttribute("id",o.getId()+"-numberUnit");r.addClass("sapMOHNumberUnit");r.addClass("sapMOHNumberState"+o.getNumberState());r.writeClasses();r.write(">");r.writeEscaped(o.getNumberUnit());r.write("</span>")}r.write("</div>")}};O.renderTitle=function(r,o){o._oTitleArrowIcon.setVisible(o.getShowTitleSelector());if(o.getShowTitleSelector()&&o._oTitleArrowIcon.getVisible()){r.write("<div");r.addClass("sapMOHTitleAndArrow");r.writeClasses();r.write(">")}if(o.getTitle()){o._titleText.setText(o.getTitle());r.write("<span");r.writeAttribute("id",o.getId()+"-title");r.addClass("sapMOHTitle");if(o.getTitleActive()){r.writeAttribute("tabindex","0");r.addClass("sapMOHTitleActive")}if(o.getShowTitleSelector()){r.addClass("sapMOHTitleFollowArrow")}r.writeClasses();r.write(">");if(!o.getResponsive()){o._titleText.addStyleClass("sapMOHTitle")}this._renderChildControl(r,o,o._titleText);r.write("</span>")}if(o.getShowTitleSelector()){r.write("<span");r.addClass("sapMOHTitleArrow");r.writeClasses();r.write(">");this._renderChildControl(r,o,o._oTitleArrowIcon);r.write("</span>")}if(o.getShowTitleSelector()&&o._oTitleArrowIcon.getVisible()){r.write("</div>")}};O.renderFullTitle=function(r,o){if(!o.getNumber()){r.addClass("sapMOHTitleDivFull")}};O.renderFullOH=function(r,o){if(o.getIntro()){r.write("<div");r.addClass("sapMOHIntro");if(o.getIntroActive()){r.addClass("sapMOHIntroActive")}r.writeClasses();r.write(">");r.write("<span");r.writeAttribute("id",o.getId()+"-intro");if(o.getIntroActive()){r.writeAttribute("tabindex","0")}r.write(">");r.writeEscaped(o.getIntro());r.write("</span>");r.write("</div>")}r.write("<div");r.addClass("sapMOHTopRow");r.writeClasses();r.write(">");r.write("<div");r.writeAttribute("id",o.getId()+"-titlediv");r.addClass("sapMOHTitleDiv");if(o._hasIcon()){r.addClass("sapMOHTitleIcon")}this.renderFullTitle(r,o);r.writeClasses();r.write(">");if(o._hasIcon()){r.write("<div");r.addClass("sapMOHIcon");if(o.getIconActive()){r.writeAttribute("tabindex","0");r.addClass("sapMPointer")}r.writeClasses();r.write(">");this._renderChildControl(r,o,o._getImageControl());r.write("</div>")}this.renderTitle(r,o);r.write("</div>");this.renderNumber(r,o);r.write("<div class=\"sapMOHDivider\"/>");r.write("</div>");if(o._hasBottomContent()){r.write("<div");r.addClass("sapMOHBottomRow");r.writeClasses();r.write(">");this.renderAttributesAndStatuses(r,o);r.write("<div class=\"sapMOHDivider\"/>");r.write("</div>")}};O.renderCondensedOH=function(r,o){r.write("<div");r.writeAttribute("id",o.getId()+"-titlediv");r.addClass("sapMOHTitleDiv");this.renderFullTitle(r,o);r.writeClasses();r.write(">");this.renderTitle(r,o);r.write("</div>");this.renderNumber(r,o);var f=o.getAttributes()[0];if(f&&!f._isEmpty()){this.renderAttribute(r,o,f)}};O.render=function(r,o){this._computeChildControlsToBeRendered(o);if(!o.getVisible()){this._cleanupNotRenderedChildControls(r,o);return}if(o.getResponsive()){this.renderResponsive(r,o);this._cleanupNotRenderedChildControls(r,o);return}var c=o.getCondensed();r.write("<div");r.writeControlData(o);r.addClass("sapMOH");if(c){r.addClass("sapMOHC");r.addClass("sapMOHBg"+o.getBackgroundDesign())}r.writeClasses();var t=o.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.write(">");if(c){this.renderCondensedOH(r,o)}else{this.renderFullOH(r,o)}r.write("<div class=\"sapMOHLastDivider\"/>");r.write("</div>");this._cleanupNotRenderedChildControls(r,o)};O.renderResponsive=function(r,c){var C,t=true,m=this.hasResponsiveMarkers(c),s=this.hasResponsiveStates(c),T=this.hasResponsiveTabs(c),h=c.getHeaderContainer(),S=!(sap.ui.Device.os.name==="Android"&&sap.ui.Device.os.version<4.4&&sap.ui.Device.browser.name==="an"&&sap.ui.Device.browser.version<4.4);if(!c.getVisible()){return}C=c.getCondensed();r.write('<div class="sapMOHROuter"');r.writeControlData(c);r.write(">");r.write("<div");r.addClass("sapMOH");r.addClass("sapMOHR");if(!S){r.addClass("sapMOHNoCalc")}if(c.getHeaderContainer()instanceof sap.m.IconTabBar){r.addClass("sapMOHWithITB")}r.addClass("sapMOHBg"+c.getBackgroundDesign());if(C){r.addClass("sapMOHC")}if(c._iCountVisAttrStat<=2){r.addClass("sapMOHStatesTwoOrLess")}else if(c._iCountVisAttrStat<=4){r.addClass("sapMOHStatesThreeOrFour")}else{r.addClass("sapMOHStatesFiveOrMore")}if(!m){r.addClass("sapMOHNoMarkers")}if(!T){r.addClass("sapMOHNoTabs")}if(c._iCountVisTabs>7){r.addClass("sapMOHTabsMoreThanSeven")}r.writeClasses();var a=c.getTooltip_AsString();if(a){r.writeAttributeEscaped("title",a)}r.write(">");if(m){this.renderResponsiveMarkers(r,c,t,m,s,T)}this.renderResponsiveTitle(r,c,t,m,s,T);if(s){this.renderResponsiveStates(r,c,t,m,s,T)}if(T){this.renderResponsiveTabs(r,c,t,m,s,T)}r.write("</div>");if(h&&h instanceof sap.m.IconTabBar){this._renderChildControl(r,c,h)}r.write("</div>")};O.renderResponsiveTitle=function(r,c,t,m,s,T){r.write("<div");r.writeAttribute("id",c.getId()+"-titlediv");r.addClass("sapMOHTitleDiv");if(!T){r.addClass("sapMOHTitleDivNoTabs")}if(!s){r.addClass("sapMOHTitleDivNoStates")}if(c._hasIcon()){r.addClass("sapMOHTitleIcon")}if(!c.getNumber()){r.addClass("sapMOHTitleDivFull")}r.writeClasses();r.write(">");if(!c.getNumber()){r.addClass("sapMOHTitleDivFull")}c._titleText.setMaxLines(2);this.renderTitleResponsive(r,c);if(c._hasIcon()){r.write("<div");r.addClass("sapMOHIcon");if(c.getIconActive()){r.addClass("sapMPointer")}r.writeClasses();r.write(">");this._renderChildControl(r,c,c._getImageControl());r.write("</div>")}this.renderResponsiveNumber(r,c);r.write("</div>")};O.hasResponsiveMarkers=function(c){return(c.getShowMarkers()&&(c.getMarkFavorite()||c.getMarkFlagged()))};O.renderResponsiveMarkers=function(r,c){var a=[],i=0;if(c.getShowMarkers()){c._oFavIcon.setVisible(c.getMarkFavorite());c._oFlagIcon.setVisible(c.getMarkFlagged());a.push(c._oFavIcon);a.push(c._oFlagIcon);r.write("<div class=\"sapMObjStatusMarker\">");for(;i<a.length;i++){this._renderChildControl(r,c,a[i])}r.write("</div>")}};O.renderResponsiveNumber=function(r,c){var o=c.getAggregation("_objectNumber");if(o&&o.getNumber()){o.toggleStyleClass("sapMObjectNumberFull",!c.getTitle());this._renderChildControl(r,c,o)}};O.hasResponsiveStates=function(c){var a=c.getAttributes();var v=[];if(!(c._hasAttributes()||c._hasStatus())){c._iCountVisAttrStat=0;return false}for(var i=0;i<a.length;i++){if(a[i].getVisible()){v.push(a[i])}}var b=[];var d=O._getIcons(c);if(!c.getResponsive()&&!O._isEmptyArray(d)){b.push(d)}if(c.getFirstStatus()&&c.getFirstStatus().getVisible()){b.push([c.getFirstStatus()])}if(c.getSecondStatus()&&c.getSecondStatus().getVisible()){b.push([c.getSecondStatus()])}var s=c.getStatuses();for(var i=0;i<s.length;i++){if(!s[i].getVisible||s[i].getVisible()){if(s[i]instanceof sap.m.ObjectStatus||s[i]instanceof sap.m.ProgressIndicator){b.push([s[i]])}else{q.sap.log.warning("Only sap.m.ObjectStatus or sap.m.ProgressIndicator are allowed in \"sap.m.ObjectHeader.statuses\" aggregation."+" Current object is "+s[i].constructor.getMetadata().getName()+" with id \""+s[i].getId()+"\"")}}}c._iCountVisAttrStat=v.length+b.length;return!!(v.length+b.length)};O.renderResponsiveStates=function(r,c,t,m,s,T){r.write("<div");r.addClass("sapMOHStates");if(!T){r.addClass("sapMOHStatesNoTabs")}r.writeClasses();r.write("\">");this.renderAttributesAndStatuses(r,c);r.write("</div>")};O.hasResponsiveTabs=function(c){var h=c.getHeaderContainer(),i;if(h){if(h instanceof sap.m.IconTabBar){i=h._getIconTabHeader();if(i.getVisible()){c._iCountVisTabs=i.getItems().length;return!!i.getItems().length}}else if(sap.suite&&sap.suite.ui&&sap.suite.ui.commons&&h instanceof sap.suite.ui.commons.HeaderContainer){return!!h.getItems().length}}return false};O.renderResponsiveTabs=function(r,c,t,m,s,T){var h=c.getHeaderContainer(),i;r.write("<div class=\"sapMOHTabs"+(h instanceof sap.m.IconTabBar?" sapmMOHTabsITB":"")+(!s?" sapMOHTabsNoStates":"")+"\">");if(h){if(h instanceof sap.m.IconTabBar){i=h._getIconTabHeader();this._renderChildControl(r,c,i);h._bHideHeader=true}else if(sap.suite&&sap.suite.ui&&sap.suite.ui.commons&&h instanceof sap.suite.ui.commons.HeaderContainer){this._renderChildControl(r,c,h)}else{q.sap.log.warning("The control "+h+" is not supported for aggregation \"headerContainer\"")}}r.write("</div>")};O.renderRowResponsive=function(r,o,v,a){var V=v.concat(a),c=v.length,C=V.length;if(C===0){return}r.write("<div");r.addClass("sapMOHStatesFirstCont");r.writeClasses();r.write(">");if(c>=1){this.renderAttribute(r,o,V[0])}else{this.renderStatus(r,o,V[0])}if(C>=2){if(c>=2){this.renderAttribute(r,o,V[1])}else{this.renderStatus(r,o,V[1])}}var i=2;if(C>4){for(;i<C/2;i++){if(c>i){this.renderAttribute(r,o,V[i])}else{this.renderStatus(r,o,V[i])}}}r.write("</div>");if(C===2){return}r.write("<div");r.addClass("sapMOHStatesSecondCont");r.writeClasses();r.write(">");for(;i<C;i++){if(c>i){this.renderAttribute(r,o,V[i])}else{this.renderStatus(r,o,V[i])}}r.write("</div>")};O.renderStatus=function(r,o,s,f){r.write("<div");r.addClass("sapMOHStatus");r.writeClasses();if(f){r.addStyle("width","100%");r.writeStyles()}r.write(">");this._renderChildControl(r,o,s[0]);r.write("</div>")};O.renderTitleResponsive=function(r,o){o._oTitleArrowIcon.setVisible(o.getShowTitleSelector());if(o.getShowTitleSelector()&&o._oTitleArrowIcon.getVisible()){r.write("<div");r.addClass("sapMOHTitleAndArrow");r.writeClasses();r.write(">")}if(o.getTitle()){o._titleText.setText(o.getTitle());r.write("<div");r.writeAttribute("id",o.getId()+"-title");r.addClass("sapMOHTitle");r.addClass("sapMOHRTitleNoWordBreak");if(o.getTitleActive()){r.addClass("sapMOHTitleActive")}if(o.getShowTitleSelector()){r.addClass("sapMOHTitleFollowArrow")}r.writeClasses();r.write(">");if(!o.getResponsive()){o._titleText.addStyleClass("sapMOHTitle")}this._renderChildControl(r,o,o._titleText);if(o.getShowTitleSelector()){r.write("<span");r.addClass("sapMOHTitleArrow");r.writeClasses();r.write(">");this._renderChildControl(r,o,o._oTitleArrowIcon);r.write("</span>")}if(o.getIntro()){r.write("<div");r.addClass("sapMOHIntro");if(o.getIntroActive()){r.addClass("sapMOHIntroActive")}r.writeClasses();r.write(">");r.write("<span");r.writeAttribute("id",o.getId()+"-intro");r.write(">");r.writeEscaped(o.getIntro());r.write("</span>");r.write("</div>")}r.write("</div>")}if(o.getShowTitleSelector()&&o._oTitleArrowIcon.getVisible()){r.write("</div>")}};O._computeChildControlsToBeRendered=function(o){o.__controlsToBeRendered={};var c=o.getAttributes();for(var i=0;i<c.length;i++){o.__controlsToBeRendered[c[i].getId()]=c[i]}c=o.getStatuses();for(var i=0;i<c.length;i++){o.__controlsToBeRendered[c[i].getId()]=c[i]}var C=o.getFirstStatus();if(C){o.__controlsToBeRendered[C.getId()]=C}C=o.getSecondStatus();if(C){o.__controlsToBeRendered[C.getId()]=C}C=o.getAggregation("_objectNumber");if(C){o.__controlsToBeRendered[C.getId()]=C}};O._renderChildControl=function(r,o,c){r.renderControl(c);if(c){delete o.__controlsToBeRendered[c.getId()]}};O._cleanupNotRenderedChildControls=function(r,o){for(var i in o.__controlsToBeRendered){r.cleanupControlWithoutRendering(o.__controlsToBeRendered[i])}delete o.__controlsToBeRendered};return O},true);