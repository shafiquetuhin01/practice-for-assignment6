masterObject = {
    name: "Shafique",
    age: 36,
    language: { main: "English", optional: "Math", additional: "Islamic Studies" },
    friends: ["Ohid", "Jahid", "Sadik", "Saidul", "Mijan"],
    nameFunction: function () {
        return this.name;
    }
};
console.log(masterObject.nameFunction());;
