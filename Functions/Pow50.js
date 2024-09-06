/**
 * Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
 */
// I am using binary exponentiation meaning divide n in the half and multiply the base by 2
// 2^13 --> 2^6 * 2^6 * 2 --> 4^6 * 2 --> 16^3 *2 --> 256 ^ 1 * 32 = 8192
// x = 2
// n = 13
function Pow(x,n){
    let result = 1;
    let absN = Math.abs(n);
    if(x === 0) return 0;
    if(absN === 0) return 1;
    while(absN > 0){
        if(absN % 2 === 1){
            result *= x;
        }
        x *= x;
        absN = Math.floor(absN/2);
    }
    return absN < 0 ? 1/result : result;  //cover the case that n is negative --> x^-n = 1/x^n
}

console.log(Pow(2,13));