;(function imgjs() {
	"use strict";
	var img = document.querySelectorAll("img[src^='img.js'], [data-imgjs]");
	if (!img.length) return;
	var canvas = document.createElement("canvas"),
		ctx = canvas.getContext("2d");
	for(var i=0; i<img.length; i++) {
		var im = img[i],
			src = (decodeURIComponent(im.src) || im.getAttribute("data-imgjs"))
					.replace(/^.*img.js\/?(.*)$/, "$1"),
			pt = src.split("?")[0].split('/'),
			_size = pt[0].split("x"),
			size = {w:_size[0]||356, h:(_size[1]||_size[0]||200)},
			txt = src.split("?text=")[1]||size.w+'×'+size.h,
			fontSize = ~~(size.w / txt.length);
		canvas.width  = im.width  = size.w;
		canvas.height = im.height = size.h;
		// BG
		ctx.fillStyle = "#"+(pt[1]||"ddd");
		ctx.fillRect(0, 0, size.w, size.h); 
		// TEXT
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.font = fontSize + "pt sans-serif";
		ctx.fillStyle = pt[2] ? "#"+pt[2] : "rgba(255,255,255,0.7)";
		ctx.fillText(txt, size.w/2, size.h/2);
		im.src = canvas.toDataURL();
	}
}());
