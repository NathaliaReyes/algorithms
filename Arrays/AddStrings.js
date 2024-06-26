/**
 * Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
Example 1:
Input: num1 = "11", num2 = "123"
Output: "134"

Example 2:
Input: num1 = "456", num2 = "77"
Output: "533"

Example 3:
Input: num1 = "0", num2 = "0"
Output: "0"
 */

// PseudoCode:
// create a function that receives two strings

function addStrings(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length -1;
  let carry = 0;
  let result = "";

  while(i >= 0 || j >= 0) {
    let sum = carry;
    if(i >= 0) {
      sum += parseInt(num1[i--]);
    }
    if(j >= 0) {
      sum += parseInt(num2[j--]);
    }
    result = sum % 10 + result;
    carry = Math.floor(sum/10)
  }
  if(carry){
    result = carry + result;
  }
  return result;

}

console.log(addStrings("8", "2"));
console.log("Hello");