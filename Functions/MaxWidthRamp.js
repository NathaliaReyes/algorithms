/**
 * A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i.

Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp in nums, return 0.
Example 1:

Input: nums = [6,0,8,2,1,5]
Output: 4
Explanation: The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.
Example 2:

Input: nums = [9,8,1,0,1,9,4,0,4,1]
Output: 7
Explanation: The maximum width ramp is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// Pseudocode:
// create 2 stacks for left and right
// iterate over the array and find the shorter number push it to the leftStack
// iterate over the array and find the longest number and push it to the rightStack
// return width from j - i

var maxWidthRamp = function(nums) {
    let leftStack = [];
    let maxWidth = 0;

    for (let i = 0; i < nums.length; i++) { // Input: nums = [9,8,1,0,1,9,4,0,4,1]
        if(leftStack.length === 0 || nums[i] < nums[leftStack[leftStack.length-1]]) {
            leftStack.push(i);
        }
    }

    for(let j = nums.length-1; j >= 0; j--){
        while(leftStack.length !== 0 && nums[j] >= nums[leftStack[leftStack.length-1]]){
            let i = leftStack.pop();
            maxWidth = Math.max(maxWidth, j-i);
        }
    }
    return maxWidth;
};

console.log(maxWidthRamp([9,8,1,0,1,9,4,0,4,1]));