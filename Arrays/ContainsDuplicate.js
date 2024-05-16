/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true
Example 2:
Input: nums = [1,2,3,4]
Output: false
Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 */
// pseudocode
// create a function that takes an array
// loop through the array to each element
function containsDuplicate(myArr){
    let mySet = new Set(myArr);
    console.log(typeof(mySet));
    let newArray = [...mySet];
    console.log(typeof(newArray));
    // Se usa size para el set porque es un tipo de estructura diferente y se usa size
    // para contar el numero de elementos ÚNICOS en el array.
    return mySet.size !== myArr.length;
}

console.log(containsDuplicate([2,1,1,3]));
