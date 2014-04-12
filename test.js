

$(document).ready(function(){
	var source = $("#source")[0];
	var display = $("#display")[0];
	var width = $("#source").css(width);
	$("#source").drawLine({
		strokeStyle: "#a55",
		strokeWidth: 10,
		x1: 0, y1: 0,
		x2: 600, y2: 50,
	});

	$("#display").drawImage({
		source: source,
		cropFromCenter: false,
	});

	$("#display").click(function(){
	// iterate over the width of the source canvas

		$.each(display, function (index, width){
			$("#display").drawImage({
				source: source,
				x: index,
				cropFromCenter: false,
			});
		})
	});
});

