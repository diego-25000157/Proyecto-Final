//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3;// 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%
var recargo_propiedades = 0.35; // 35%
var salario_asegurado = 0.05; // 0.5%

var flag = true;

//noprotect
while(flag){
    var recargo = 0
    var recargo_total = 0
    var precio_final = 0

//Mensajes de alerta para ingresar datos 

var nombre = prompt("Ingrese su nombre, por favor")

var salario = prompt("Ingrese el salario del asegurado", "Ingrese solo numeros")
var salario = parseInt(salario)

var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
var casado = prompt("¿Está casado actualmente?")

var propiedades = prompt("¿Cuantas propiedades tiene a su nombre?", "Ingrese solo numeros")
var propiedades = parseInt(propiedades)


//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge


//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)

//convirtiendo la edad del cónyuge si se esta casado/a
//if("SI" == casado.toUpperCase()){
//  edad_conyuge_numero = parseInt(edad_conyuge)/
//}
var hijos = prompt("¿Tiene hijos o hijas?", "si/no")

//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos = 0

if("SI" == hijos.toUpperCase()){
    cantidad_hijos = prompt("¿Cuantos hijos tiene?", "Ingrese solo numeros")
    cantidad_hijos = parseInt(cantidad_hijos)
}else{
    cantidad_hijos = parseInt(0);
}

if("SI" == casado.toUpperCase()){
    edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "Ingrese solo numeros")
    edad_conyuge_numero = parseInt(edad_conyuge)
}else{
    edad_conyuge_numero = parseInt(0);
}

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<=24){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * edad_18
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
}
//aqui puede colocar un else if() con el siguiente rango
else if(edad_numero>=25 && edad_numero<=49){
    recargo = precio_base * edad_25
    recargo_total = recargo_total + recargo
}
else if(edad_numero>=50){
    recargo = precio_base * edad_50
    recargo_total = recargo_total + recargo
}


if(edad_conyuge_numero>=18 && edad_conyuge_numero<=24){
    recargo = precio_base * casado_18
    recargo_total = recargo_total + recargo
}
else if(edad_conyuge_numero>=25 && edad_conyuge_numero<=49){
    recargo = precio_base * casado_25
    recargo_total = recargo_total + recargo
}
else if(edad_conyuge_numero>=50){
    recargo = precio_base * casado_50
    recargo_total = recargo_total + recargo
}



/**
 *  Recargo por la cantidad de hijos 
 */  
recargo_total += cantidad_hijos * (precio_base * hijos_recargo);
/**
 *  Recargo por la cantidad de propiedades 
 */  
recargo_total += propiedades * (precio_base * recargo_propiedades);
/**
 *  Recargo por salario
 */  
recargo_total += salario * salario_asegurado;

/* precio Final */

precio_final = precio_base + recargo_total

//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)
var salir = prompt("Si desea salir escriba la palabra SALIR").toUpperCase();
    if(salir === "SALIR"){
        flag = false;
    }
}