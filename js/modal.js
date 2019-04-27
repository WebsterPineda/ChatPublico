$(document).ready(function(){
	setTimeout(mostrarModal(), 1500);
});

var modal = document.getElementById('Mymodal');

//$("#btnIngresar").click(Mostrar);

function Ingresar(){
	var usuario = document.getElementById('txtUsuario').value;
	if (usuario.trim() === "")
	{
		console.log("campo vacio");
		return false;
	}
	alert("Bienvenido " + usuario);
	setTimeout(OcultarModal(), 1500);
}

function mostrarModal() {
	modal.style.display = "show";
	$("#Mymodal").fadeIn(750);
}

function OcultarModal(){
	modal.style.display = "hide";
	$("#Mymodal").delay(10).fadeOut(450);
}