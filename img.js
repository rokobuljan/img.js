(function placeholder() {
	var img = document.querySelectorAll("img[src^='img.js'], [data-imgjs]");
	if (!!img.length) {
		var	canvas = document.createElement('canvas'), // In memory canvas
			ctx = canvas.getContext("2d");
		for(var i=0; i<img.length; i++) {
			var im = img[i],
				hasData = !!im.dataset.imgjs,
				src = im.src || im.dataset.imgjs;
			src = decodeURIComponent( src );
			var _src = hasData ? "/"+src : src.split("img.js")[1],
				pt = _src.split("&")[0].split('/'),
				_size = pt[1].split("x"),
				size = {w:_size[0], h:(_size[1]||_size[0])},
				txt = src.split("&text=")[1]||size.w+'×'+size.h,
				fontSize = ~~(size.w / txt.length);

			canvas.width  = im.width  = size.w;
			canvas.height = im.height = size.h;
			// BG
			ctx.fillStyle = "#"+(pt[2]||"ddd"); 
			ctx.fillRect(0, 0, size.w, size.h); 
			// TEXT
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.font = fontSize+'pt Calibri';
			ctx.fillStyle = pt[3] ? "#"+pt[3] : "rgba(255,255,255,0.7)"; // Text style
			ctx.fillText(txt, size.w/2, size.h/2); // TEXT
			im.src = canvas.toDataURL();
		}
	}
}());
