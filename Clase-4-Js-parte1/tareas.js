// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  var array = ['first', 'second', 'third', 'fourth', 'fifth'];
return(array[0]);
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var array = ['first', 'second', 'third', 'fourth', 'fifth'];
  return(array[4]);
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var array = ['primero', 'segundo', 'tercero', 'cuarto', 'quinto'];
  return(array.length);
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  const array = [1, 2, 3, 4, 5];
const length = array.length;
for (var i = 0; i < length; i++) {
  array[i] += 1;
}

return (array);
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  const array = ['primero', 'segundo', 'tercero', 'cuarto', 'quinto'];
  const nombre = "sexto";
  array.push(nombre);
  return(array);
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa e
  
  const array = ['segundo', 'tercero', 'cuarto', 'quinto','sexto'];
  const elemento = "primero";
  
  return array.unshift(elemento);

  
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let palabras = ["Hoy", " cursamos", " una", " materia."];
  let textoCompleto = palabras[0] + palabras[1] + palabras[2] + palabras[3];
  return (textoCompleto);
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var array = ["Verde", "Rojo", "Celeste"];

var elemento = array.indexOf("Rojo");

if(elemento !== -1){
  return ("True");
}else{
  return("false");
}

}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  let total=0
  let numeros = [10, 20, 30, 40, 50];
  for(let i of numeros) total+=i;
  return (total);

}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  
  var suma = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    suma = suma + resultadosTest[i];
  }
  return suma / resultadosTest.length;


}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeroMayor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numeroMayor) {
      numeroMayor = numeros[i];
    }
  }
  return numeroMayor;




}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
  var contador = 0;
  for (let i = 0; i < arreglo.lengtht ;i++) {
    if(arreglo[i] > 19){
    contador++;
    }
    
  }
  return contador;

}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
   
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
  }
  return "Es dia laboral"; 

} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí


  let  numero = n.toString();
  if(numero[0] === "6"){
    return true;
  }else{
    return false;
  }
  

}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] !== arreglo[0]){
      return false;
    }
  }
  return true;


} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:



  let meses  = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] === "Enero"|| array[i] === "Marzo" || array[i]==="Noviembre"){
      meses.push(array[i]);
    }if(meses.length === 3){
      return meses;
    }else if(i === array.length - 1 ){
      return "No se encontraron los meses pedidos";
    }
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let mayorACien = [];
  for(let i = 0; i <  array.length; i++){
    if (array[i] > 100){
      msyoresACien.push(array[i]);
    }
  }
  return mayoresACien;
}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
