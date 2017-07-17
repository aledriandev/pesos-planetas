var masa= parseInt(prompt("Ingrese su masa: ", "50"));
var planeta= prompt("En que planeta?", "Mercurio");
function pesoPlanetas(masa,planeta){
	if(planeta=="Mercurio")
	alert("Tu peso es: "+ masa*0.38);
	else if(planeta=="Venus")
	alert("Tu peso es: "+ masa*0.91);
	else if(planeta=="Marte")
	alert("Tu peso es: "+ masa*0.38);
	else if(planeta=="Tierra")
	alert("Tu peso es: "+ masa);
	else if(planeta=="Jupiter")
	alert("Tu peso es: "+ masa*2.54);
	else if(planeta=="Saturno")
	alert("Tu peso es: "+ masa*1.08);
	else if(planeta=="Urano")
	alert("Tu peso es: "+ masa*0.91);
	else if(planeta=="Neptuno")
	alert("Tu peso es: "+ masa*1.19);
	else if(planeta=="Pluton")
	alert("Tu peso es: "+ masa*0.06);

}
pesoPlanetas(masa,planeta);
