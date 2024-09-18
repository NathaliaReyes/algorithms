/**
 * @param {number[]} nums
 * @return {string}
 */

//nums is an array of integers  --> [3,30,34,5,9]  output: "9534330" ina  string

// 1. function that sort the numbers by the first digit 
// nums = [3,30,34,5,9];

const arraySorted = (nums) => {
    nums.sort((a,b) => {  // 3,30
        let str1 = a.toString();
        let str2 = b.toString();

        let order1 = str1 + str2;   //330
        let order2 = str2 + str1;   //303

        return order2.localeCompare(order1);
    })
    return nums.join('');
}


console.log(arraySorted([3,30,34,5,9]))