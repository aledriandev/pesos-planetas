var masa= parseInt(prompt("Ingrese su masa: "));
var planeta= prompt("En que planeta?");

function pesoPlaneta(masa,planeta){
	if(planeta=="Mercurio")
		alert("Tu peso en Mercurio es: "+ masa*0.38);
	else if(planeta.toLoweCase()=="venus")
		alert("Tu peso en Venus es: "+ masa*0.91);
	else if(planeta.toLoweCase()=="marte")
		alert("Tu peso en Marte es: "+ masa*0.38);
	else if(planeta.toLoweCase()=="tierra")
		alert("Tu peso en la Tierra es: "+ masa);
	else if(planeta.toLoweCase()=="jupiter")
		alert("Tu peso en Jupiter es: "+ masa*2.54);
	else if(planeta.toLoweCase()=="saturno")
		alert("Tu peso en Saturno es: "+ masa*1.08);
	else if(planeta.toLoweCase()=="urano")
		alert("Tu peso en Urano es: "+ masa*0.91);
	else if(planeta.toLoweCase()=="neptuno")
		alert("Tu peso en Neptuno es: "+ masa*1.19);
	else if(planeta.toLoweCase()=="pluton")
		alert("Tu peso en Pluton es: "+ masa*0.06);
}

pesoPlaneta(masa,planeta)