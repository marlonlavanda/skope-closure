const buildCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  };
  return displayCount;
};

const myCount = buildCount(1);
//Al ejecutar buildCount(1), se declara una varible let con elvalor de 1. Esta variable solo vive dentro del scope buildCount el cual ahora está siendo almacenado en myCount.
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
