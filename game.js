var canvas = document.getElementById("canvas");
var pintor = canvas.getContext("2d");

var pausado = false;

var x = 200;
var y = 240;

var lobos = [];

var ovejas = [];

var jugador;

function Oveja() {
	this.x = Math.floor(Math.random()*800);
	this.y = Math.floor(Math.random()*600);
}

Oveja.prototype.pintar = function oveja_pintar() {
	pintor.fillStyle = "white";
	pintor.fillRect(this.x, this.y, 15, 15);
};

Oveja.prototype.actualizar = function oveja_actualizar(dt) {
};

function Lobo() {
	this.x = Math.floor(Math.random()*800);
	this.y = Math.floor(Math.random()*600);
}

Lobo.prototype.pintar = function lobo_pintar() {
	pintor.fillStyle = "grey";
	pintor.fillRect(this.x, this.y, 12, 12);
};

Lobo.prototype.actualizar = function lobo_actualizar(dt) {
};

function Jugador() {
	this.x = Math.floor(Math.random()*800);
	this.y = Math.floor(Math.random()*600);
}

Jugador.prototype.pintar = function jugador_pintar() {
	pintor.fillStyle = "#f80";
	pintor.fillRect(this.x, this.y, 25, 25);
};

Jugador.prototype.entrada = function jugador_entrada(keyCode) {
	if(keyCode == 87) {
		this.y = this.y - 25;
	}
	if(keyCode == 65) {
		this.x = this.x - 25;
	}
	if(keyCode == 68) {
		this.x = this.x + 25;
	}
	if(keyCode == 83) {
		this.y = this.y + 25;
	}
};

function inicializar() {
	var i;

	//Crear ovejas
	for(i = 0; i < 8; ++i) {
		ovejas[i] = new Oveja();
	}

	//Crear lobos
	for(i = 0; i < 2; ++i) {
		lobos[i] = new Lobo();
	}

	//Crear jugador
	jugador = new Jugador();
}

function jugar() {
	if(pausado) {
		pintor.fillStyle = "#fff";
		pintor.fillRect(0, 0, 100, 30);
		pintor.font = "20px Georgia";
		pintor.fillStyle = "pink";
		pintor.fillText("Pausado", 20, 20);
	} else {
		actualizar();
		pintar();
	}
}

function actualizar() {
	var dt = 1000/25;

	ovejas.forEach(function (oveja) {
		oveja.actualizar(dt);
	});

	lobos.forEach(function (lobo) {
		lobo.actualizar(dt);
	});
}

function pintar() {
	pintor.fillStyle = "pink";
	pintor.fillRect(0, 0, 800, 600);

	ovejas.forEach(function (oveja) {
		oveja.pintar();
	});

	lobos.forEach(function (lobo) {
		lobo.pintar();
	});

	jugador.pintar();
}

window.addEventListener("keydown", function(event) {
	if (pausado) {
		if (event.keyCode == 80) {
			pausado = false;
		}
	}
	else {
		jugador.entrada(event.keyCode);
		if(event.keyCode == 80) {
			pausado = true;
		}
	}
});

inicializar();

window.setInterval(jugar, 25);
