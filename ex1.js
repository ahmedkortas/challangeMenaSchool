/**Create a function that will reverse all the element inside a nested array

exp

[1,2,3,4] => [4,3,2,1]
[1,[2,3],4]=>[4,[3,2],1]
[9,[5,[10,30]],6]=> [6,[[30,10],5]9]
 
 */

function reverseNestedArray(array) {
    // create new empty arr
    let newArr = [];
    //TODO
    // loop on array but reverse
    for(let x = array.length - 1; x >= 0; x--){
        // if the current index === array 
        // will Recursion the function and parameter = current index 
        if(Array.isArray(array[x])){
            array[x] = reverseNestedArray(array[x]);
        }
        // add the value in new array
        newArr.push(array[x]);
    }
    
    return newArr;
}


module.exports = reverseNestedArray;