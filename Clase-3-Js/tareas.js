// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:

var numero1 = 4;
var numero2 = 3;
  if (numero1 == numero2){
   return ("Numero 1, Numero 2 son iguales! y valen: "+numero1+"");
    }
    else{
      if (numero1 > numero2)
    {
      return ("Numero 1 es Mayor y vale: "+numero1+"");
        }
    else{
      return ("Numero 2 es Mayor y vale: "+numero2+"");
        }
      }      
        
}


function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  
  var edad = 0;

 
        if (edad > 18)
              {
              return ("Allowed");
              }
              else{
              return ("Not allowed");
   }
 
}

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  
  var status = 0;
  if(status == 1){
    return "Online";
}
else if(status == 2){
    return "Away";
}
else 
    return "Offline";
}




function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

  
  let idioma = prompt("Ingrese un idioma");
  switch (idioma) {
    case '0':
    case 'aleman':
      alert( 'Guten Tag!' );
      break;
  
    case 'mandarin':
      alert( 'mandarin' );
      break;
  
    case 'ingles':
      alert( 'Hello!' );
      break;
    default:
      alert( 'undefined' );
  }


}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Pista: Puedes usar el statement Switch.


  let color = prompt("Ingrese un idioma");
  switch (color) {
    case '0':
    case 'blue':
      alert( 'This is blue' );
      break;
  
    case 'red':
      alert( 'This is red' );
      break;
  
    case 'green':
      alert( 'This is green' );
      break;

    case 'orange':
        alert( 'This is orange' );
        break;

    default:
      alert( 'Color not found' );
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

  
  var numero;
  if(numero == 10 || numero == 5  ){
    return "true";

  }else{
    return "false";
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  var numero;
  if(numero >= 20 || numero <= 50  ){
    return "true";

  }else{
    return "false";
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var numero;
  if(numero==Math.floor ){
    return "true";

  }else{
    return "false";
  }

}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  if(numero / 3){
    return'fizz';
    }
    else if (numero / 5){
    return'buzz';
    }
    else if (numero % 3 && numero % 5){
    return'fizzbuzz';
    }

}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  //Tu código:

  var num1 = 10;
  var num2 = 20;
  var num3 = 30;
  if(num1 > num2 && num1 > num3  && num1 > 0 )
  
  {
    return "Número 1 es mayor y positivo";

  }else if (num1 < 0 ||num2 < 0 || num3 < 0){
    return "Hay valores negativos";
  }else if(num3 > num2 && num3 > num1){
    num3++;
    return num3;
  }else if(num1 == 0 || num2 == 0|| num3 == 0) {
    return "Error";
  }
 
}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //sie su valor es tru y “Soy falso” si su valor es false.
  //Escribe tu código aquí:
  const valor = new Boolean(false);
if (valor=true) {
  return 'Soy verdadero';

}else{
  return 'Soy falso';
}
}

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí:

  var numero = '123'
  if (numero('123') === 123) {
    return 'true';
  
  }else{
    return 'false';
  }
}

// ---------- Puntos extra ----------

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Tu código:
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  //Tu código:
}

// No modificar nada debajo de esta línea, sino no correrán los test.
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile
};