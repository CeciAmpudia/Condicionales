// #1 APROBADO O REPROBADO
/*var n1 = prompt("Primera nota: ")
var n2 = prompt("Segunda nota: ")
var n3 = prompt("Tercera nota: ")
var promedio = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3

if (promedio >= 6){
alert("Aprobado porque sacaste de promedio: " + promedio.toFixed(2))
}else {
alert("Reprobado porque sacaste de promedio: " + promedio.toFixed(2))
} */


// #2 CUAL ES EL NUMERO MAS GRANDE?
/* var a = prompt("Primer numero")
var b = prompt("Segundo numero")

if (a > b) {
	alert("El primer numero es el mas grande: " + a)
} else if (b > a) {
	alert("El segundo numero es el mas grande: " + b)
} else {
	alert("Los numeros son iguales")
} */



// #3 POSITIVO O NEGATIVO
/* var numero = prompt("Dame un numero")

if (numero > 0) {
	alert("Este numero es positivo " + numero)
} else if (numero < 0) {
	alert("Este numero es negativo " + numero)
} else {
	alert("Este numero es neutro")
} */


// #4 ALMACENES “EL HARAPIENTO DISTINGUIDO”
/* var pt = prompt("Precio del traje: ")

if (pt >= 2500.00) {
	var dsc = 0.15 * pt
	var total = pt - dsc

	alert("Descuento: " + dsc)
	alert("Total: " + total)
} else if (pt < 2500.00) {
	var dsc = 0.08 * pt
	var total = pt - dsc

	alert("Descuento: " + dsc)
	alert("Total: " + total)
} */



// #5 EL MAYOR DE LOS NUMEROS
/* var c1 = prompt("Primera cantidad: ")
var c2 = prompt("Segunda cantidad: ")
var c3 = prompt("Tercera cantidad: ")

if ((c1 > c2) && (c1 > c3)) {
	alert("La primer cantidad es mayor " + c1)
} else if ((c2 > c1) && (c2 > c3)) {
	alert("La segunda cantidad es mayor " + c2)
} else if ((c3 > c1) && (c3 > c2)) {
	alert("La tercera cantidad es mayor " + c3)
} */


// #6 BANQUETES "LA LANGOSTA AHUMADA"
/* var p = prompt("Personas en el evento:")

if (p <= 200) {
	var ps = p * 95
	alert("El presupuesto es de: $" + ps)
} else if ((p > 200) && (p <= 300)) {
	var ps = p * 85
	alert("El presupuesto es de: $" + ps)
} else if (p > 300) {
	var ps = p * 75
	alert("El presupuesto es de: $" + ps)
} */


// #7 VIAJE ESCOLAR
/* var na = prompt("Cuantos alumnos iran al viaje?")

if (na >= 100) {
	var c = na * 65
	alert("El cobro por alumno es: $65")
	alert("Pago a los autobuses: $" + c)
} else if ((na >= 50) && ( na < 100)) {
	var c = na * 70
	alert("El cobro por alumno es: $70")
	alert("Pago a los autobuses: $" + c)
} else if ((na >= 30) && ( na < 50)) {
	var c = na * 95
	alert("El cobro por alumno es: $95")
	alert("Pago a los autobuses: $" + c)
} else if (na < 30) {
	var ca = 4000.00 / na
	alert("Pago por alumno es:" + ca)
	alert("Pago a los autobuses es de $4000.00")
} */


// #8 COMPAÑIA DE AUTOBUSES
/* var ta = prompt("Tipo de autobus")
var km = prompt("Km recorridos")

switch(ta) {
	case "A": var cp = km * 2.0;
			  var ct = cp * 20;
			  alert("El costo por persona es: $" + cp);
			  alert("El costo total es: $" + ct);
  	break;
  	case "B": var cp = km * 2.5;
			  var ct = cp * 20;
			  alert("El costo por persona es: $" + cp);
			  alert("El costo total es: $" + ct);
    break;
    case "C": var cp = km * 3.0;
			  var ct = cp * 20;
			  alert("El costo por persona es: $" + cp);
			  alert("El costo total es: $" + ct);
    break;
    deafault: alert("No existe");
} */

// #9 HAMBURGUESAS "EL NAUFRAGO SATISFECHO"
/* var th = prompt("Tipo de Hamburguesa")
var nh = prompt("Numero de Hamburguesas")
var pt = prompt("Pago con tarjeta?")

if (th === "sencilla") {
	var t = nh * 20.00

		if (pt === "si") {
			var ct = (0.05 * t) + t;
			alert("Total: $" + ct);
		} else {
			alert("Total: $" + t);
		};
} else if (th === "doble") {
	var t = nh * 25.00

		if (pt === "si") {
			var ct = (0.05 * t) + t;
			alert("Total: $" + ct);
		} else {
			alert("Total: $" + t);
		};
} else if (th === "triple") {
	var t = nh * 30.00

		if (pt === "si") {
			var ct = (0.05 * t) + t;
			alert("Total: $" + ct);
		} else {
			alert("Total: $" + t);
		};
} */


// #10 FABRICAS "EL COMETA"
