//Con este ejemplo estamos accediendo a una variable local dentro de una función
const fruits = () => {
  var fruit = "apple";
  console.log(fruit);
};

fruits();
console.log(fruit);
//desde el entorno global no podemos acceder a una variable que fue definida en un entorno local de una función
const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  // let y = 2;
  //Las variables declaradas con let o const no pueden ser redeclaras como ocurren con las variables que se declaran con var
  // Las variables declaradas con var nos pueden generar problemas a futuro así que es mejor no usarlas
  console.log(x);
  console.log(y);
};

anotherFunction();
