/**with using any kind of loops determine if an array contains an element N
in a nested array
example
array=[15,6,[5,1],[10,[20,[0]]]]
contains(array,0)=> return true

contains(array,-1)=> return false 

*/

let array = [15, 6, [5, 1], [10, [20, [0]]]];

const contains = (arr, num) => {
  let exist = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      exist++;
      continue;
    }
    if (Array.isArray(arr[i])) {
      exist += contains(arr[i], num);
    }
  }
  if (exist === 0) {
    return false;
  } else {
    return true;
  }
};
console.log(contains(array, 0));
/*
function contains(arr, arg) {
  let totalArr = 0;
  for (x = 0; x < arr.length; x++) {
    console.log(arr[x]);
    if (arr[x].length) {
      contains(arr[x]);
    } else {
      totalArr++;
    }
  }
  return totalArr;
}

contains(array, 5);
*/
