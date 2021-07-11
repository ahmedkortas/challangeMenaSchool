/**Create a function that will reverse all the element inside a nested array

exp

[1,2,3,4] => [4,3,2,1]
[1,[2,3],4]=>[4,[3,2],1]
[9,[5,[10,30]],6]=> [6,[[30,10],5]9]
 
 */


function reverseNestedArray(array) {
  //TODO
    for (let i = array.length - 1; i >= 0; i--) {
      if (typeof array[i] === "object") {
        reverseNestedArray(array[i]);
      }
    }
    array.reverse();
    return array;
}
let arr1 = [9, [5, [10, 30]], 6];
// let arr1 = [1, [2, 3], 4];
// let arr1 = [1, 2, 3, 4];
let reverseArray = reverseNestedArray(arr1);
console.log(reverseArray);


module.exports = reverseNestedArray;
