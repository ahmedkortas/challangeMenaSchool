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
