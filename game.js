var canvas = document.getElementById("canvas");
var pintor = canvas.getContext("2d");

var x = 200;
var y = 240;

var ovejas = [
	25, 30,
	50, 50,
	80, 80,
	233, 245
];

var pausado = false;

function jugar() {
	if(pausado) {
		pintor.fillStyle = "#fff";
		pintor.fillRect(0, 0, 100, 30);
		pintor.font = "20px Georgia";
		pintor.fillStyle = "pink";
		pintor.fillText("Pausado", 20, 20);
	} else {
		pintar();
	}
}

function pintar() {
pintor.fillStyle = "pink";
pintor.fillRect(0, 0, 800, 600);

pintor.fillStyle = "#fff";
var oveja;
for(oveja = 0; oveja < (ovejas.length/2); oveja++) {

pintor.fillRect(
ovejas[2*oveja],
ovejas[(2*oveja)+1],
15,
15);

}

pintor.fillStyle = "#f50";
pintor.fillRect(x, y, 25, 25);
}

window.addEventListener("keydown", function(event) {
											
if (pausado) {
	
	if (event.keyCode == 80) {
		pausado = false;
	}
	
}
else {
	if(event.keyCode == 87) {
		y = y - 25;
	}
	if(event.keyCode == 65) {
		x = x - 25;
	}
	if(event.keyCode == 68) {
		x = x + 25;
	}
	if(event.keyCode == 83) {
		y = y + 25;
	}
	if(event.keyCode == 80) {
		if (pausado) {
			pausado = false;
		}
		else
		{
			pausado = true;
		}
	}
}
});


window.setInterval(jugar, 25);
