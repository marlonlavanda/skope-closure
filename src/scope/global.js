var hello = "Confirma ";
let world = "mijin";
const helloWorld = "Confirma mijin";

// console.log(hello);

// const anotherFunction = () => {
//   console.log(hello);
//   console.log(world);
//   console.log(helloWorld);
// };

// anotherFunction();

const helloWorld = () => {
  globalVar = "I am global";
};

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
  var localVar = (globalVar = "I am Global");
};

anotherFunction();
console.log(globalVar);
