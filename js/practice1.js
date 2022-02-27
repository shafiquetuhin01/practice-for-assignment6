// 1st practice 
masterObject = {
    name: "Shafique",
    age: 36,
    language: { main: "English", optional: "Math", additional: "Islamic Studies" },
    friends: ["Ohid", "Jahid", "Sadik", "Saidul", "Mijan"],
    nameFunction: function () {
        return this.name;
    }
};
// console.log(masterObject.nameFunction());;

// 2nd practice 
let stringVar = `I am ${masterObject.name}. My language is ${masterObject.language.main}. My friends are ${masterObject.friends[1]}.`;
console.log(stringVar, "shfosglk");
