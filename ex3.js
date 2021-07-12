/**
 * JSON.stringify()
Docs=>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
JSON.parse()
Docs=>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

*/

function Stringify(params) {
  //TODO:
}

function parseMe(str) {
  //TODO
}

let obj = { Stringify, parseMe };

module.exports = obj;

console.log(JSON.stringify(new Date(2021, 07, 10, 14, 57, 5)));

const user = {
  name: "Danielle",
  age: 24,
  city: "Seattle",
  admin: false,
};
console.log(JSON.stringify(user));
//console.log(JSON.parse(user));
let obj1 = JSON.parse('{"x":"50"}');

let obj2 = { x: 50 };
let str = JSON.stringify(obj2);

console.log(str);

let obj6 = { a: 200, b: 300, c: "ahmed" };

let str6 = JSON.stringify(obj6);

console.log(typeof str6);
console.log(str6);
str6;

const obj11 = { name: "John", age: 30, city: "New York", date: new Date() };
const myJSON = JSON.stringify(obj11);

console.log(myJSON);
