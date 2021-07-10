/**without using any kind of loops determine if an array contains an element N
in a nested array
example
array=[15,6,[5,1],[10,[20,[0]]]]
contains(array,0)=> return true

contains(array,-1)=> return false 

*/

let array = [15,6,[5,1],[10,[20,[0]]]];
array = array.flat(Infinity);
array.includes(0);
array.includes(-1);


// uncomplete
//
// let search = (array) => {
//     for(let x = 0; x > array.length; x++){
//         if(Array.isArray(array[x])) {
//             array[x] = search(array[x]);
//         }
//     }
//     return array;
// }