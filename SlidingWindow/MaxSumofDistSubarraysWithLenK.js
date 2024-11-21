/**
 * You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that 
 * meet the following conditions:
The length of the subarray is k
Return the maximum subarray sum of all the subarrays that meet the conditions. 

A subarray is a contiguous non-empty sequence of elements within an array.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) { // nums = [1, 5, 4, 2, 9, 9, 9];      k = 3;

    if(k > nums.length){ //in case k is 4 and nums.length=3 --> [1,5,4] is not possible
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;
    
    for(i = 0; i < k; i++){
        maxSum += nums[i];
    }
    tempSum = maxSum;

    for(let i = k; i < nums.length; i++){
        tempSum = tempSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;

};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));