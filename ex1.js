export default reverseNestedArray;

/**Create a function that will reverse all the element inside a nested array

exp

[1,2,3,4] => [4,3,2,1]
[1,[2,3],4]=>[4,[3,2],1]
[9,[5,[10,30]],6]=> [6,[[30,10],5]9]
 
 */
var array = [9, [5, [10, 30]], 6];

var test = array
  .map(function reverseNestedArray(items) {
    items.reverse();
  })
  .reverse();

console.log(test);
console.log(reverseNestedArray([1, 2, 3, 4]));
console.log(reverseNestedArray([9, [5, [10, 30]], 6]));
