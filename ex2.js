/**without using any kind of loops determine if an array contains an element N
in a nested array
example
array=[15,6,[5,1],[10,[20,[0]]]]
contains(array,0)=> return true

contains(array,-1)=> return false 

*/

let array = [15,6,[5,1],[10,[20,[0]]]];
// call a function and add the new value in new varibals
let newArray = search(array);

// search in array unnisted
newArray.includes(0);
newArray.includes(-1);


// complete

let search = (array) => {
    for(let x = 0; x < array.length; x++){
        // if the current index === array 
        // will Recursion the function and parameter = current index 
        if(Array.isArray(array[x])) {
            array[x] = search(array[x])
        }
    }
    // when finshed the loop
    return array.flat();
}