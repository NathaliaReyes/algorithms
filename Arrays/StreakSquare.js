/**
 * @param {number[]} nums
 * @return {number}
 */

// Tips to keep in mind:
// for...in loop iterates over the enumerable properties of an object, but the order is not strictly arbitrary. this means that the order of the properties is not guaranteed to be the same as the order in which they were added to the object.
// for...of loop iterates over the values of an array, in the order of the values.
var longestSquareStreak = function (nums) {
    var makeSet = function (nums) {
        let hashTable = {}
        for (let num of nums) {
            hashTable[num] = num * num;
        }
        return hashTable;
    }

    /**
     * @param {number[]} nums
     * @return {number}
    */
    let numSet = makeSet(nums);
    // console.log(numSet);

    var findLengthPowerChain = (num, numSet) => {
        let length = 0;
        while (numSet[num]){
            length++;
            num = numSet[num];
        }
        return length;
    }

    let longestPowerChain = 1;
    for (var num in numSet) {
        let lengthPowerChain = findLengthPowerChain(num, numSet)
        if (lengthPowerChain > longestPowerChain){
            longestPowerChain = lengthPowerChain;
        }
    }
    
    if(longestPowerChain === 1){
        return -1;
    }
    return longestPowerChain;
};

console.log(longestSquareStreak([2,3,5,6,7]));
