/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 */

// PseudoCode:

// create a function
// order ascending the array
// loop through the array and verify the sum of the indexes === target
// return the indexes in a new array
function twoSum(arr, target) {
  // It is not necessary to sort the array
  // let arraySorted = arr.sort();
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j ++) {
      if(array[i] + array[j] === target) {
        return [i,j]
      }
    }
  }
  return []
}

let target = 5
let array = [2, 8, 1, 3, 5];
console.log(twoSum(array, target));