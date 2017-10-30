(function (root, factory) {

	/* istanbul ignore next */
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root.imgjs = factory();
	}

}(this, function () {


	function imgjs ( Ele ) {

		"use strict";

		// Single element case
		if( Ele && Ele.tagName ) {
			Ele = [Ele];
		}

		// Do nothing if no Elements
		if ( !Ele[0].tagName ) {
			return;
		}

		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");

		function createImg ( img ) {
			var hasSrc = img.src && /img\.js/.test(img.src),
				src = (img.getAttribute("data-imgjs") || decodeURIComponent(img.src)).replace(/^.*img.js\/?(.*)$/, "$1"),
				pt = src.split("?")[0].split('/'),
				_size = pt[0].split("x"),
				size = {w:_size[0]||356, h:(_size[1]||_size[0]||200)},
				txt = src.split("?text=")[1]||size.w+'\xd7'+size.h,
				fontSize = ~~(size.w / txt.length);

			// Since we're going to modify the src with base64 string, store src into data 
			if ( hasSrc ) {
				img.setAttribute("data-imgjs", src);
			} 

			canvas.width  = img.width  = size.w;
			canvas.height = img.height = size.h;

			// BG
			ctx.fillStyle = "#"+(pt[1]||"ddd");
			ctx.fillRect(0, 0, size.w, size.h); 

			// TEXT
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.font = fontSize + "pt sans-serif";
			ctx.fillStyle = pt[2] ? "#"+pt[2] : "rgba(255,255,255,0.7)";
			ctx.fillText(txt, size.w/2, size.h/2);
			img.src = canvas.toDataURL();
		}

		for (var i = 0; i < Ele.length; i++) {
			createImg( Ele[i] );
		}
	}

	return imgjs;

}));
