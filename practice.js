//practice No- 1 
/* masterObject = {
    name: "Shafique",
    age: 36,
    language: { main: "English", optional: "Math", additional: "Islamic Studies" },
    friends: ["Ohid", "Jahid", "Sadik", "Saidul", "Mijan"],
    nameFunction: function () {
        return this.name;
    }
}; */
// console.log(masterObject.nameFunction());;

//practice No- 2 
/* let stringVar = `I am ${masterObject.name}. My language is ${masterObject.language.main}. My best friend is ${masterObject.friends[1]}.`;
// console.log(stringVar);

//practice No- 3.1
const arrowFunc = () => {
    return 44 + 45;

}
 */
// consolelog(arrowFunc());

//practice No- 3.2
/* const arrowFunc2 = num => {
    let result = num / 7;
    return result;
}
console.log(arrowFunc2(49)); */

//practice No- 3.3
/* const arrowFunc3 = (num1, num2) => {
    let result = num1 + num2 / 2;
    return result;
} */
// console.log(arrowFunc3(30, 38));

//practice No- 3.4
/* const arrowFunc4 = (num1, num2) => {
    let add = (num1 + 7) + (num2 + 7);
    return add;
} */
// console.log(arrowFunc4(30, 30));

// practice No- 4
/* const multiNum = [23, 3245, 42, 424, 455, 231, 36, 66, 45];
const separate = multiNum.map(num => num / 7); */
// console.log(separate);

// practice No- 5
const multiNum = [23, 3245, 42, 424, 455, 231, 36, 66, 45];
const separate = multiNum.map(num => num / 7);
console.log(separate);
