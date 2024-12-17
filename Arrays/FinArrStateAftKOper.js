var FinalArrayStateAfterKOper = function(nums, k, multiplier) {
    for(let i = 0; i < k; i++){
        let index = nums.indexOf(Math.min(...nums));
        nums[index] = nums[index] * multiplier;
    }
    return nums;
} 

console.log(FinalArrayStateAfterKOper([2,1,3,5,6], 5, 2));