//practice No- 1 
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

//practice No- 2 
let stringVar = `I am ${masterObject.name}. My language is ${masterObject.language.main}. My best friend is ${masterObject.friends[1]}.`;
// console.log(stringVar);

//practice No- 3.1
const arrowFunc = () => {
    return 44 + 45;

}
// console.log(arrowFunc());

//practice No- 3.2

