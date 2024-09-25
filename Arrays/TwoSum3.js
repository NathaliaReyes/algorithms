/**Given an array of integers nums and an integer target, return indices of the two numbers such 
 * that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element 
twice.You can return the answer in any order */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Pseudocode:
// Create a Map that will store the values of the array (as keys) and their indices (as values).
// Loop through the array:
//   - Calculate the difference between the target and the current element in the array.
//   - If the difference exists in the Map, return the indices of the current element and the element corresponding to the difference.
//   - If the difference does not exist, store the current element and its index in the Map.

const twoSum = (nums, target) => {
    let storedIndexes = new Map();
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(storedIndexes.has(diff)){
            return [storedIndexes.get(diff), i]; // return the indexes
        }
        storedIndexes.set(nums[i], i) // will set the key as the current number, and the value as their index
    }

}

console.log(twoSum([1,3,34,7,11,23], 18));