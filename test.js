var linear = $('#source').createGradient({
  x1: 0, y1: 0,
  x2: 200, y2: 0,
  c1: 'rgb(0, 0, 0)',
  c2: '#0f0',
  c3: 'blue',
  c4: '#009c60',
  c5: '#000099'
});

$(document).ready(function(){
	$("#source").drawRect({
		fillStyle: linear,
		x: 0, y: 0,
		width: 600,
		height: 50,
		fromCenter: false
	});
	$("#display").drawImage({
		source: $("#source"),
	});
});
