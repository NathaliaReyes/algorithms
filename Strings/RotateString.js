/**
 * Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

var rotateString = function(s, goal) {
    if(s.length !== goal.length){
        return false;
    }

    let array = s.split('');
    for(let i = 0; i < s.length; i++) {
        let first = array.shift();
        array.push(first);
        let str = array.join('');
        if(str === goal){
            return true;
        }
    }
    return false;
};
console.log(rotateString('abcde', 'cdeab'));