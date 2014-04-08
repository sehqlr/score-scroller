var source_canvas = document.getElementById('source');
var source_context = source_canvas.getContext('2d');

source_context.draw_whole = function () {
	source_context.beginPath();
	source_context.moveTo(0,0);
	source_context.lineTo(600, 50);
	source_context.lineWidth = 10;
	source_context.strokeStyle = '#a55';
	source_context.stroke();
};

var display_canvas = document.getElementById('display');
var display_context = display_canvas.getContext('2d');

var draw_slice = function (src_x, src_y) {
	display_context.drawImage(source_canvas, src_x, src_y);
};

var animate = function (start, finish) {
	while (start < finish) {
		window.setTimeout(draw_slice(start, 0), 1000);
		start++;
	}
};
