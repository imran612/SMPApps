/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
sap.ui.define(['jquery.sap.global','sap/ui/Device'],function(q,D){'use strict';var F={save:function(d,f,s,m,c){var a=f+'.'+s;if(c==='utf-8'&&s==='csv'){d='\ufeff'+d}if(window.Blob){var t='data:'+m;if(c){t+=';charset='+c}var b=new window.Blob([d],{type:t});if(window.navigator.msSaveOrOpenBlob){window.navigator.msSaveOrOpenBlob(b,a)}else{var u=window.URL||window.webkitURL;var B=u.createObjectURL(b);var l=window.document.createElement('a');if('download'in l){var $=q(document.body);var e=q(l).attr({download:a,href:B,style:'display:none'});$.append(e);e.get(0).click();e.remove()}else{if(d&&c==='utf-8'&&s==='csv'){d=d.substr(1)}window.open(t+";base64,"+window.btoa(d))}}}else if(D.browser.internet_explorer&&D.browser.version<=9){var $=q(document.body);var g=q('<iframe/>',{style:'display:none'});$.append(g);var o=g.get(0).contentWindow.document;o.open(m,'replace');if(c){o.charset=c}o.write(d);o.close();var T=new Date();var S=o.execCommand('SaveAs',false,a);if(!S&&new Date()-T<10){o.execCommand('SaveAs',false,a+'.txt')}g.remove()}}};return F},true);
