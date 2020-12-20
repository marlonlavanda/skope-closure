//En este ejemplo el resultado es 2 xq el hositing eleva las declaraciones.Es lo mismo que haber escrito var a; al principo del ejercicio
a = 2;
var a;
console.log(a);

//el hoisting funciona solo en las declaraciones y no en las asignaciones

console.log(a);
var a = 2;

//en este caso JS devuelve Sofi aunque se llame a la función antes de ser declarada
nameOfDog("Sofi");

function nameOfDog(name) {
  console.log(name);
}
