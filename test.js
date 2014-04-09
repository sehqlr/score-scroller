// Rewrite this in jQuery. Use for and while loops as normal. Consider using jQuery plugin for canvas
$(document).ready(function(){
	var src_cxt = $('#source').getContext('2d');
	src_cxt.beginPath();
	src_cxt.lineTo(600, 50);
	src_cxt.strokeStyle = '#a55';
	src_cxt.stroke();
});

var display_canvas = document.getElementById('display');
var display_context = display_canvas.getContext('2d');

var draw_slice = function (src, src_x, src_y) {
	display_context.drawImage(src, src_x, src_y);
};

var animate = function (start, finish) {
	while (start < finish) {
		window.setTimeout(draw_slice(start, 0), 1000);
		start++;
	}
};

source_canvas.addEventListener("click", draw_whole);
display_canvas.addEventListener("click", draw_slice(source_canvas, 0, 0));
