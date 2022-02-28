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
// map 
/* const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)
function myFunction(num) {
  return num * 10;
}; */
// console.log(newArr);

// forEach 
/* const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element)); */

// filter 
/* const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length < 10);
console.log(result); */

// find 
/* const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found); */

// Practice No - 6 
// destructuring
/* const myCar = {
    make: 'Ford',
    price: 3000000,
    model: 'Mustang',
    year: 1969
};
myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;
myCar['price'] = 3000000;
const balance = myCar.price;
console.log(balance);
 */

// Practice No - 7 
// JSON Placeholder 
function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data))
};
loadPhotos();
function displayPhotos(photos){
    const ul = document.getElementById('photos');
    for(const photo of photos){
        const li = document.createElement('li');
        li.innerText = `Id: ${photo.id}, Title: ${photo.title}, ${photo.url}`;
        ul.appendChild(li);
    }
};

