// Se pueden crear clousers de diferentes maneras y tb de forma involuntaria, esto significa que no tenemos control de lo que estamos creando. Hay que tener cuidado con nuestras asignaciones o bloques de código que de alguna manera no podemos controlar. A veces, esto sucede pq no establecimos nuestos elementos correctamente . Con el uso de cloruser y scope podemos optimizar nuestros proyectos sin nigún problema

const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFunction();
