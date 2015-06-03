/**
 *
 * This file includes large portions of code from canvasResize
 * https://github.com/gokercebeci/canvasResize/blob/master/canvasResize.js
 * which is licensed under MIT license:
 *
 * ----------------------------------------------------------------------------------------------
 *
 * The MIT License
 *
 * Copyright (c) 2012 goker.cebeci, http://gokercebeci.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * It requires **binaryajax.js** and **exif.js** (or **jQuery EXIF**) to work which is also under
 * the [**MPL License**](http://www.nihilogic.dk/licenses/mpl-license.txt)
 *
 * ------------------------------------ ---------------------------------------------------------
 *
 * However, this modified version doesn't require anymore binaryajax.js
 *
 */
jQuery.sap.declare("sap.ca.ui.utils.CanvasHelper");jQuery.sap.require("sap.ca.ui.utils.exif");jQuery.sap.require("sap.ca.ui.utils.BinaryUtil");sap.ui.base.ManagedObject.extend("sap.ca.ui.utils.CanvasHelper",{metadata:{properties:{"width":{type:"int",group:"Appearance"},"height":{type:"int",group:"Appearance"},"crop":{type:"boolean",group:"Appearance"},"quality":{type:"int",group:"Appearance"},"minWeight":{type:"int",group:"Appearance"}},events:{"done":{}}},_newsize:function(w,h,W,H,C){var c=C?'h':'';if((W&&w>W)||(H&&h>H)){var r=w/h;if((r>=1||H===0)&&W&&!C){w=W;h=(W/r)>>0}else if(C&&r<=(W/H)){w=W;h=(W/r)>>0;c='w'}else{w=(H*r)>>0;h=H}}return{'width':w,'height':h,'cropped':c}},_dataURLtoBlob:function(d){var m=d.split(',')[0].split(':')[1].split(';')[0];var b=atob(d.split(',')[1]);var a=new ArrayBuffer(b.length);var c=new Uint8Array(a);for(var i=0;i<b.length;i++){c[i]=b.charCodeAt(i)}var e=(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder);if(e){e=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder)();e.append(a);return e.getBlob(m)}else{e=new Blob([a],{'type':(m)});return e}},_detectSubsampling:function(i){var a=i.width,b=i.height;if(a*b>(1024*1024)){var c=document.createElement('canvas');c.width=c.height=1;var d=c.getContext('2d');d.drawImage(i,-a+1,0);return d.getImageData(0,0,1,1).data[3]===0}else{return false}},_transformCoordinate:function(c,w,h,o){if(o>=5&&o<=8){c.width=h;c.height=w}else{c.width=w;c.height=h}var a=c.getContext('2d');switch(o){case 1:break;case 2:a.translate(w,0);a.scale(-1,1);break;case 3:a.translate(w,h);a.rotate(Math.PI);break;case 4:a.translate(0,h);a.scale(1,-1);break;case 5:a.rotate(0.5*Math.PI);a.scale(1,-1);break;case 6:a.rotate(0.5*Math.PI);a.translate(0,-h);break;case 7:a.rotate(0.5*Math.PI);a.translate(w,-h);a.scale(-1,1);break;case 8:a.rotate(-0.5*Math.PI);a.translate(-w,0);break;default:break}},_detectVerticalSquash:function(i,a,b){var c=document.createElement('canvas');c.width=1;c.height=b;var d=c.getContext('2d');d.drawImage(i,0,0);var e=d.getImageData(0,0,1,b).data;var s=0;var f=b;var p=b;while(p>s){var g=e[(p-1)*4+3];if(g===0){f=p}else{s=p}p=(f+s)>>1}var r=p/b;return r===0?1:r},_keepRatio:function(i,a){if(i>a){this.setHeight(Math.round(this.getHeight()*(a/i)))}else if(i<a){this.setWidth(Math.round(this.getWidth()*(i/a)))}},resize:function(f){var s=this;var r=new FileReader();r.onloadend=function(e){var a=e.target.result;if(f.size/1024<s.getMinWeight()){jQuery.sap.log.info("Image is light, no resize is needed");s.fireDone({data:a})}else{var b=atob(a.split(',')[1]);var c=new sap.ca.ui.utils.BinaryUtil(b,b.length);var g=EXIF.readFromBinaryFile(c);var i=new Image();i.onload=function(e){var h=i.width,j=i.height;s._keepRatio(h,j);var o=g['Orientation']||1;var k=(o>=5&&o<=8)?s._newsize(i.height,i.width,s.getWidth(),s.getHeight(),s.getCrop()):s._newsize(i.width,i.height,s.getWidth(),s.getHeight(),s.getCrop());var w=k.width,l=k.height;var m=document.createElement("canvas");var n=m.getContext("2d");n.save();s._transformCoordinate(m,w,l,o);if(s._detectSubsampling(i)){h/=2;j/=2}var d=1024;var t=document.createElement('canvas');t.width=t.height=d;var p=t.getContext('2d');var v=s._detectVerticalSquash(i,h,j);var q=0;while(q<j){var u=q+d>j?j-q:d;var z=0;while(z<h){var A=z+d>h?h-z:d;p.clearRect(0,0,d,d);p.drawImage(i,-z,-q);var B=Math.floor(z*w/h);var C=Math.ceil(A*w/h);var D=Math.floor(q*l/j/v);var E=Math.ceil(u*l/j/v);n.drawImage(t,0,0,A,u,B,D,C,E);z+=d}q+=d}n.restore();t=p=null;var F=document.createElement('canvas');F.width=k.cropped==='h'?l:w;F.height=k.cropped==='w'?w:l;var x=k.cropped==='h'?(l-w)*.5:0;var y=k.cropped==='w'?(w-l)*.5:0;var G=F.getContext('2d');G.drawImage(m,x,y,w,l);jQuery.sap.log.info(f,f.type);if(f.type==="image/png"){var H=F.toDataURL(f.type)}else{var H=F.toDataURL("image/jpeg",(s.getQuality()*.01))}s.fireDone({data:H,width:F.width,height:F.height})};i.src=a}};r.readAsDataURL(f)}});
