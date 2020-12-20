const person = () => {
  var saveName = "Name";
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};

//Al inicializar newPerson no se utiliza var, let o const porque JS permite no usar el syntax vat si se inicializa directamente una variable.
newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Marlon");
console.log(newPerson.getName());
