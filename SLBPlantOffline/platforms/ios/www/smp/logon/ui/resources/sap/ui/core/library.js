/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
sap.ui.define(['./Core'],function(){sap.ui.getCore().initLibrary({name:"sap.ui.core",types:["sap.ui.core.AccessibleRole","sap.ui.core.BarColor","sap.ui.core.CSSColor","sap.ui.core.CSSSize","sap.ui.core.CSSSizeShortHand","sap.ui.core.Collision","sap.ui.core.Design","sap.ui.core.Dock","sap.ui.core.HorizontalAlign","sap.ui.core.ID","sap.ui.core.IconColor","sap.ui.core.ImeMode","sap.ui.core.MessageType","sap.ui.core.OpenState","sap.ui.core.Orientation","sap.ui.core.Percentage","sap.ui.core.ScrollBarAction","sap.ui.core.Scrolling","sap.ui.core.TextAlign","sap.ui.core.TextDirection","sap.ui.core.TitleLevel","sap.ui.core.URI","sap.ui.core.ValueState","sap.ui.core.VerticalAlign","sap.ui.core.Wrapping","any","boolean","float","int","sap.ui.core.mvc.ViewType","object","sap.ui.core.routing.HistoryDirection","string","void"],interfaces:["sap.ui.core.Label","sap.ui.core.PopupInterface","sap.ui.core.Toolbar"],controls:["sap.ui.core.ComponentContainer","sap.ui.core.Control","sap.ui.core.HTML","sap.ui.core.Icon","sap.ui.core.LocalBusyIndicator","sap.ui.core.ScrollBar","sap.ui.core.TooltipBase","sap.ui.core.UIComponent","sap.ui.core.mvc.HTMLView","sap.ui.core.mvc.JSONView","sap.ui.core.mvc.JSView","sap.ui.core.mvc.TemplateView","sap.ui.core.mvc.View","sap.ui.core.mvc.XMLView","sap.ui.core.tmpl.DOMElement","sap.ui.core.tmpl.Template","sap.ui.core.tmpl.TemplateControl"],elements:["sap.ui.core.CustomData","sap.ui.core.Element","sap.ui.core.Item","sap.ui.core.LayoutData","sap.ui.core.ListItem","sap.ui.core.Message","sap.ui.core.SeparatorItem","sap.ui.core.Title","sap.ui.core.VariantLayoutData","sap.ui.core.search.OpenSearchProvider","sap.ui.core.search.SearchProvider","sap.ui.core.tmpl.DOMAttribute"],version:"1.24.3"});sap.ui.define("sap/ui/core/AccessibleRole",function(){"use strict";sap.ui.core.AccessibleRole={None:"None",Alert:"Alert",AlertDialog:"AlertDialog",Application:"Application",Banner:"Banner",Button:"Button",Checkbox:"Checkbox",ColumnHeader:"ColumnHeader",Combobox:"Combobox",
/**
	 * Information about the content on the page. Examples are footnotes, copyrights, or links to privacy statements.
	 * 
	 * @public
	 */
ContentInfo:"ContentInfo",Definition:"Definition",Description:"Description",Dialog:"Dialog",Directory:"Directory",Document:"Document",Grid:"Grid",GridCell:"GridCell",Group:"Group",Heading:"Heading",Img:"Img",Link:"Link",List:"List",Listbox:"Listbox",ListItem:"ListItem",Log:"Log",Main:"Main",Marquee:"Marquee",Menu:"Menu",Menubar:"Menubar",MenuItem:"MenuItem",MenuItemCheckbox:"MenuItemCheckbox",MenuItemRadio:"MenuItemRadio",Navigation:"Navigation",Note:"Note",Option:"Option",Presentation:"Presentation",ProgressBar:"ProgressBar",Radio:"Radio",RadioGroup:"RadioGroup",Region:"Region",Row:"Row",RowHeader:"RowHeader",Search:"Search",Secondary:"Secondary",SeeAlso:"SeeAlso",Separator:"Separator",Slider:"Slider",SpinButton:"SpinButton",Status:"Status",Tab:"Tab",Tablist:"Tablist",Tabpanel:"Tabpanel",Textbox:"Textbox",Timer:"Timer",Toolbar:"Toolbar",Tooltip:"Tooltip",Tree:"Tree",TreeGrid:"TreeGrid",TreeItem:"TreeItem"};return sap.ui.core.AccessibleRole},true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
sap.ui.define("sap/ui/core/BarColor",function(){"use strict";sap.ui.core.BarColor={NEUTRAL:"NEUTRAL",POSITIVE:"POSITIVE",CRITICAL:"CRITICAL",NEGATIVE:"NEGATIVE"};return sap.ui.core.BarColor},true);sap.ui.define('sap/ui/core/CSSColor',['sap/ui/base/DataType'],function(D){sap.ui.core.CSSColor=D.createType('sap.ui.core.CSSColor',{isValid:function(v){return/^(#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})|rgb\(\s*((1?[0-9]?[0-9]|2([0-4][0-9]|5[0-5]))|([0-9]?[0-9](\.[0-9]+)?|100(\.0+)?)%)\s*(,\s*((1?[0-9]?[0-9]|2([0-4][0-9]|5[0-5]))|([0-9]?[0-9](\.[0-9]+)?|100(\.0+)?)%)\s*){2}\)|rgba\((\s*((1?[0-9]?[0-9]|2([0-4][0-9]|5[0-5]))|([0-9]?[0-9](\.[0-9]+)?|100(\.0+)?)%)\s*,){3}\s*(0(\.[0-9]+)?|1(\.0+)?)\s*\)|hsl\(\s*([0-2]?[0-9]?[0-9]|3([0-5][0-9]|60))\s*(,\s*(([0-9]?[0-9](\.[0-9]+)?|100(\.0+)?)%)\s*){2}\)|hsla\(\s*([0-2]?[0-9]?[0-9]|3([0-5][0-9]|60))\s*,(\s*(([0-9]?[0-9](\.[0-9]+)?|100(\.0+)?)%)\s*,){2}\s*(0(\.[0-9]+)?|1(\.0+)?)\s*\)|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coralcornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silverskyblue|slateblue|slategray|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|transparent|inherit|)$/.test(v)}},D.getType('string'));return sap.ui.core.CSSColor},true);sap.ui.define('sap/ui/core/CSSSize',['sap/ui/base/DataType'],function(D){sap.ui.core.CSSSize=D.createType('sap.ui.core.CSSSize',{isValid:function(v){return/^(auto|inherit|[-+]?(0*|([0-9]+|[0-9]*\.[0-9]+)([rR][eE][mM]|[eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC]|%)))$/.test(v)}},D.getType('string'));return sap.ui.core.CSSSize},true);sap.ui.define('sap/ui/core/CSSSizeShortHand',['sap/ui/base/DataType'],function(D){sap.ui.core.CSSSizeShortHand=D.createType('sap.ui.core.CSSSizeShortHand',{isValid:function(v){return/^(inherit|(auto|[-+]?(0*|(\d+|\d*\.\d+)([eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC]|%))){1}(\s(auto|[-+]?(0*|(\d+|\d*\.\d+)([eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC]|%)))){0,3})$/.test(v)}},D.getType('string'));return sap.ui.core.CSSSizeShortHand},true);sap.ui.define('sap/ui/core/Collision',['sap/ui/base/DataType'],function(D){sap.ui.core.Collision=D.createType('sap.ui.core.Collision',{isValid:function(v){return/^((flip|fit|none)( (flip|fit|none))?)$/.test(v)}},D.getType('string'));return sap.ui.core.Collision},true);sap.ui.define("sap/ui/core/Design",function(){"use strict";sap.ui.core.Design={Standard:"Standard",Monospace:"Monospace"};return sap.ui.core.Design},true);sap.ui.define('sap/ui/core/Dock',['sap/ui/base/DataType'],function(D){sap.ui.core.Dock=D.createType('sap.ui.core.Dock',{isValid:function(v){return/^((begin|left|center|right|end) (top|center|bottom))$/.test(v)}},D.getType('string'));return sap.ui.core.Dock},true);sap.ui.define("sap/ui/core/HorizontalAlign",function(){"use strict";sap.ui.core.HorizontalAlign={Begin:"Begin",End:"End",Left:"Left",Right:"Right",Center:"Center"};return sap.ui.core.HorizontalAlign},true);sap.ui.define('sap/ui/core/ID',['sap/ui/base/DataType'],function(D){sap.ui.core.ID=D.createType('sap.ui.core.ID',{isValid:function(v){return/^([A-Za-z_][-A-Za-z0-9_.:]*)$/.test(v)}},D.getType('string'));return sap.ui.core.ID},true);sap.ui.define("sap/ui/core/IconColor",function(){"use strict";sap.ui.core.IconColor={Default:"Default",Positive:"Positive",Negative:"Negative",Critical:"Critical",Neutral:"Neutral"};return sap.ui.core.IconColor},true);sap.ui.define("sap/ui/core/ImeMode",function(){"use strict";sap.ui.core.ImeMode={Auto:"Auto",Active:"Active",Inactive:"Inactive",Disabled:"Disabled"};return sap.ui.core.ImeMode},true);sap.ui.define("sap/ui/core/MessageType",function(){"use strict";sap.ui.core.MessageType={Information:"Information",Warning:"Warning",Error:"Error",None:"None",Success:"Success"};return sap.ui.core.MessageType},true);sap.ui.define("sap/ui/core/OpenState",function(){"use strict";sap.ui.core.OpenState={OPEN:"OPEN",CLOSED:"CLOSED",OPENING:"OPENING",CLOSING:"CLOSING"};return sap.ui.core.OpenState},true);sap.ui.define("sap/ui/core/Orientation",function(){"use strict";sap.ui.core.Orientation={Horizontal:"Horizontal",Vertical:"Vertical"};return sap.ui.core.Orientation},true);sap.ui.define('sap/ui/core/Percentage',['sap/ui/base/DataType'],function(D){sap.ui.core.Percentage=D.createType('sap.ui.core.Percentage',{isValid:function(v){return/^([0-9][0-9]*(\.[0-9]+)?%)$/.test(v)}},D.getType('string'));return sap.ui.core.Percentage},true);sap.ui.define("sap/ui/core/ScrollBarAction",function(){"use strict";sap.ui.core.ScrollBarAction={Step:"Step",Page:"Page",MouseWheel:"MouseWheel",Drag:"Drag"};return sap.ui.core.ScrollBarAction},true);sap.ui.define("sap/ui/core/Scrolling",function(){"use strict";sap.ui.core.Scrolling={None:"None",Auto:"Auto",Scroll:"Scroll",Hidden:"Hidden"};return sap.ui.core.Scrolling},true);sap.ui.define("sap/ui/core/TextAlign",function(){"use strict";sap.ui.core.TextAlign={Begin:"Begin",End:"End",Left:"Left",Right:"Right",Center:"Center"};return sap.ui.core.TextAlign},true);sap.ui.define("sap/ui/core/TextDirection",function(){"use strict";sap.ui.core.TextDirection={LTR:"LTR",RTL:"RTL",Inherit:"Inherit"};return sap.ui.core.TextDirection},true);sap.ui.define("sap/ui/core/TitleLevel",function(){"use strict";sap.ui.core.TitleLevel={Auto:"Auto",H1:"H1",H2:"H2",H3:"H3",H4:"H4",H5:"H5",H6:"H6"};return sap.ui.core.TitleLevel},true);sap.ui.define('sap/ui/core/URI',['sap/ui/base/DataType'],function(D){sap.ui.core.URI=D.createType('sap.ui.core.URI',{isValid:function(v){return/^((([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?)$/.test(v)}},D.getType('string'));return sap.ui.core.URI},true);sap.ui.define("sap/ui/core/ValueState",function(){"use strict";sap.ui.core.ValueState={Error:"Error",Warning:"Warning",Success:"Success",None:"None"};return sap.ui.core.ValueState},true);sap.ui.define("sap/ui/core/VerticalAlign",function(){"use strict";sap.ui.core.VerticalAlign={Bottom:"Bottom",Middle:"Middle",Top:"Top",Inherit:"Inherit"};return sap.ui.core.VerticalAlign},true);sap.ui.define("sap/ui/core/Wrapping",function(){"use strict";sap.ui.core.Wrapping={None:"None",Soft:"Soft",Hard:"Hard",Off:"Off"};return sap.ui.core.Wrapping},true);sap.ui.define("sap/ui/core/mvc/ViewType",function(){"use strict";sap.ui.core.mvc.ViewType={JSON:"JSON",XML:"XML",HTML:"HTML",JS:"JS",Template:"Template"};return sap.ui.core.mvc.ViewType},true);sap.ui.define("sap/ui/core/routing/HistoryDirection",function(){"use strict";sap.ui.core.routing.HistoryDirection={Forwards:"Forwards",Backwards:"Backwards",NewEntry:"NewEntry",Unknown:"Unknown"};return sap.ui.core.routing.HistoryDirection},true);(function(){var l=sap.ui.lazyRequire;function e(p,c,s){for(var i=0;i<c.length;i++){if(s){l(s,c[i].toLowerCase(),p+c[i])}else{l(p+c[i],"new extend getMetadata")}}}l("sap.ui.core.BusyIndicator","show hide attachOpen detachOpen attachClose detachClose");l("sap.ui.core.tmpl.Template","registerType unregisterType");l("sap.ui.core.Fragment","registerType");l("sap.ui","xmlfragment","sap.ui.core.Fragment");l("sap.ui","jsfragment","sap.ui.core.Fragment");l("sap.ui","htmlfragment","sap.ui.core.Fragment");e("sap.ui.model.",["Filter","Sorter","json.JSONModel","resource.ResourceModel","odata.ODataModel","xml.XMLModel"]);e("sap.ui.model.type.",["Boolean","Integer","Float","String","Date","Time","DateTime"]);e("sap.ui.core.",["Locale","LocaleData","mvc.Controller"]);e("sap.ui.core.mvc.",["Controller","View","JSView","JSONView","XMLView","HTMLView","TemplateView"],"sap.ui");e("sap.ui.core.",["Component"],"sap.ui");e("sap.ui.core.tmpl.",["Template"],"sap.ui")}())},false);