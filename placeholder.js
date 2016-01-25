(function placeholder() {
	var img = document.getElementsByTagName('img');
	if(img.length > 0) {
		var	canvas = document.createElement('canvas'), // In memory canvas
			ctx = canvas.getContext("2d");
		for(var i=0; i<img.length; i++){
			var im = img[i],
				src = im.src;
			if(src.match(/img.js/)){
				src = decodeURIComponent( src );
				var pt = src.split("img.js")[1].split("&")[0].split('/'),
					_size = pt[1].split("x"),
					size = {w:_size[0], h:(_size[1]||_size[0])},
					txt = src.split("&text=")[1]||size.w+'×'+size.h,
					fontSize = ~~(size.w / txt.length);
				canvas.width=size.w;
				canvas.height=size.h;
				// BG
				ctx.fillStyle = "#"+(pt[2]||"ddd"); 
				ctx.fillRect(0, 0, size.w, size.h); 
				// TEXT
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.font = fontSize+'pt Calibri';
				ctx.fillStyle = "#"+(pt[3]||"aaa"); // Text style
				ctx.fillText(txt, size.w/2, size.h/2); // TEXT
				im.src=canvas.toDataURL();
				im.width=size.w;
				im.height=size.h;
			}
		}
	}
}());