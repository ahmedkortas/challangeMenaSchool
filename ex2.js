
/**without using any kind of loops determine if an array contains an element N
in a nested array
example
array=[15,6,[5,1],[10,[20,[0]]]]
contains(array,0)=> return true

contains(array,-1)=> return false 

*/
function finedElement (array , N) {
   
     for(let i=0; i<array.length; i++){

         if(array[i] === N ){
    return true;
}

if (Array.isArray(array[i])) {
   if(finedElement (array[i] ,N)) {
       return true;
   }
}
     }
     
     return false;
 } 

    console.log(finedElement ([15,6,[5,1],[10,[20,[0]]]] ,3));


