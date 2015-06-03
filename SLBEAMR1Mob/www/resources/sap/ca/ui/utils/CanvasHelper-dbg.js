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

jQuery.sap.declare("sap.ca.ui.utils.CanvasHelper");

jQuery.sap.require("sap.ca.ui.utils.exif");
jQuery.sap.require("sap.ca.ui.utils.BinaryUtil");

sap.ui.base.ManagedObject.extend("sap.ca.ui.utils.CanvasHelper", {
	
	metadata: {
		properties: {
			"width": {type: "int", group : "Appearance"},
			"height": {type: "int", group : "Appearance"},
			"crop": {type: "boolean", group : "Appearance"},
			"quality": {type: "int", group : "Appearance"},
            "minWeight": {type: "int", group : "Appearance"}
		},
		events:{
			"done": {}
		}
	},
	
	_newsize: function(w, h, W, H, C) {
        var c = C ? 'h' : '';
        if ((W && w > W) || (H && h > H)) {
            var r = w / h;
            if ((r >= 1 || H === 0) && W && !C) {
                w = W;
                h = (W / r) >> 0;
            } else if (C && r <= (W / H)) {
                w = W;
                h = (W / r) >> 0;
                c = 'w';
            } else {
                w = (H * r) >> 0;
                h = H;
            }
        }
        return {
            'width': w,
            'height': h,
            'cropped': c
        };
    },
    
    /**
     * NOT USED YET
     */
    _dataURLtoBlob: function(data) {
        var mimeString = data.split(',')[0].split(':')[1].split(';')[0];
        var byteString = atob(data.split(',')[1]);
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        var bb = (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder);
        if (bb) {   
            bb = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder)();
            bb.append(ab);
            return bb.getBlob(mimeString);
        } 
        else { 
            bb = new Blob([ab], {
                'type': (mimeString)
            });
            return bb;
        }
    },
    
    /**
     * Detect subsampling in loaded image.
     * In iOS, larger images than 2M pixels may be subsampled in rendering.
     */
    _detectSubsampling: function(img) {
        var iw = img.width, ih = img.height;
        if (iw * ih > (1024*1024)) { // subsampling may happen over megapixel image
            var canvas = document.createElement('canvas');
            canvas.width = canvas.height = 1;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, -iw + 1, 0);
            // subsampled image becomes half smaller in rendering size.
            // check alpha channel value to confirm image is covering edge pixel or not.
            // if alpha value is 0 image is not covering, hence subsampled.
            return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
        } 
        else {
            return false;
        }
    },
    
    /**
     * Transform canvas coordination according to specified frame size and orientation
     * Orientation value is from EXIF tag
     */
    _transformCoordinate: function(canvas, width, height, orientation) {
        if (orientation >= 5 && orientation <= 8){
            canvas.width = height;
            canvas.height = width;
        }
        else{
            canvas.width = width;
            canvas.height = height;
        }
        var ctx = canvas.getContext('2d');
        switch (orientation) {
            case 1:
                // nothing
                break;
            case 2:
                // horizontal flip
                ctx.translate(width, 0);
                ctx.scale(-1, 1);
                break;
            case 3:
                // 180 rotate left
                ctx.translate(width, height);
                ctx.rotate(Math.PI);
                break;
            case 4:
                // vertical flip
                ctx.translate(0, height);
                ctx.scale(1, -1);
                break;
            case 5:
                // vertical flip + 90 rotate right
                ctx.rotate(0.5 * Math.PI);
                ctx.scale(1, -1);
                break;
            case 6:
                // 90 rotate right
                ctx.rotate(0.5 * Math.PI);
                ctx.translate(0, -height);
                break;
            case 7:
                // horizontal flip + 90 rotate right
                ctx.rotate(0.5 * Math.PI);
                ctx.translate(width, -height);
                ctx.scale(-1, 1);
                break;
            case 8:
                // 90 rotate left
                ctx.rotate(-0.5 * Math.PI);
                ctx.translate(-width, 0);
                break;
            default:
                break;
        }
    },
    
    /**
     * Detecting vertical squash in loaded image.
     * Fixes a bug which squash image vertically while drawing into canvas for some images.
     */
    _detectVerticalSquash: function(img, iw, ih) {
        var canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = ih;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        var data = ctx.getImageData(0, 0, 1, ih).data;
        // search image edge pixel position in case it is squashed vertically.
        var sy = 0;
        var ey = ih;
        var py = ih;
        while (py > sy) {
            var alpha = data[(py - 1) * 4 + 3];
            if (alpha === 0) {
                ey = py;
            } else {
                sy = py;
            }
            py = (ey + sy) >> 1;
        }
        var ratio = py / ih;
        return ratio === 0 ? 1 : ratio;
    },

    _keepRatio: function(iw, ih){
        if (iw > ih){
            this.setHeight(Math.round(this.getHeight() * (ih / iw)));
        }
        else if (iw < ih){
            this.setWidth(Math.round(this.getWidth() * (iw / ih)));
        }
    },

    
   /**
    * Loads the image into the canvas, resize it and fire an event
    * 
    */
    resize: function(file){
    	var self = this;

        var reader = new FileReader();
        reader.onloadend = function(e) {

            var dataURL = e.target.result;

            if (file.size / 1024 < self.getMinWeight()){
                jQuery.sap.log.info("Image is light, no resize is needed");
                self.fireDone({data: dataURL});
            }
            else{

                var byteString = atob(dataURL.split(',')[1]);
                var binary = new sap.ca.ui.utils.BinaryUtil(byteString, byteString.length);
                var exif = EXIF.readFromBinaryFile(binary);

                var img = new Image();
                img.onload = function(e) {

                    var iw = img.width, ih = img.height;

                    self._keepRatio(iw, ih);

                    var orientation = exif['Orientation'] || 1;

                    var size = (orientation >= 5 && orientation <= 8)
                            ? self._newsize(img.height, img.width, self.getWidth(), self.getHeight(), self.getCrop())
                            : self._newsize(img.width, img.height, self.getWidth(), self.getHeight(), self.getCrop());


                    var width = size.width, height = size.height;

                    var canvas = document.createElement("canvas");
                    var ctx = canvas.getContext("2d");
                    ctx.save();
                    self._transformCoordinate(canvas, width, height, orientation);

                    // over image size
                    if (self._detectSubsampling(img)) {
                        iw /= 2;
                        ih /= 2;
                    }
                    var d = 1024; // size of tiling canvas
                    var tmpCanvas = document.createElement('canvas');
                    tmpCanvas.width = tmpCanvas.height = d;
                    var tmpCtx = tmpCanvas.getContext('2d');
                    var vertSquashRatio = self._detectVerticalSquash(img, iw, ih);
                    var sy = 0;
                    while (sy < ih) {
                        var sh = sy + d > ih ? ih - sy : d;
                        var sx = 0;
                        while (sx < iw) {
                            var sw = sx + d > iw ? iw - sx : d;
                            tmpCtx.clearRect(0, 0, d, d);
                            tmpCtx.drawImage(img, -sx, -sy);
                            var dx = Math.floor(sx * width / iw);
                            var dw = Math.ceil(sw * width / iw);
                            var dy = Math.floor(sy * height / ih / vertSquashRatio);
                            var dh = Math.ceil(sh * height / ih / vertSquashRatio);
                            ctx.drawImage(tmpCanvas, 0, 0, sw, sh, dx, dy, dw, dh);
                            sx += d;
                        }
                        sy += d;
                    }
                    ctx.restore();
                    tmpCanvas = tmpCtx = null;

                    var newcanvas = document.createElement('canvas');
                    newcanvas.width = size.cropped === 'h' ? height : width;
                    newcanvas.height = size.cropped === 'w' ? width : height;
                    var x = size.cropped === 'h' ? (height - width) * .5 : 0;
                    var y = size.cropped === 'w' ? (width - height) * .5 : 0;
                    var newctx = newcanvas.getContext('2d');
                    newctx.drawImage(canvas, x, y, width, height);

                    jQuery.sap.log.info(file, file.type);
                    if (file.type === "image/png") {
                        var data = newcanvas.toDataURL(file.type);
                    } else {
                        var data = newcanvas.toDataURL("image/jpeg", (self.getQuality() * .01));
                    }

                    self.fireDone({data: data, width: newcanvas.width, height: newcanvas.height});

                };
                img.src = dataURL;
            }

        };
        reader.readAsDataURL(file);
    }

});
