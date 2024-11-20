/**
 * You are given a string s consisting of the characters 'a', 'b', and 'c' and a non-negative integer k. Each minute, 
 * you may take either the leftmost character of s, or the rightmost character of s.
Return the minimum number of minutes needed for you to take at least k of each character, or return -1 if it is not possible 
to take k of each character.
Example 1:

Input: s = "aabaaaacaabc", k = 2
Output: 8
Explanation: 
Take three characters from the left of s. You now have two 'a' characters, and one 'b' character.
Take five characters from the right of s. You now have four 'a' characters, two 'b' characters, and two 'c' characters.
A total of 3 + 5 = 8 minutes is needed.
It can be proven that 8 is the minimum number of minutes needed.
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {  //s="aabaaaacaabc" k=2  output should be 8
    let countA = 0;
    let countB = 0;
    let countC = 0;

    for (char of s) {
        if (char === "a") countA++;
        if (char === "b") countB++;
        if (char === "c") countC++;
    }

    if (countA < k || countB < k || countC < k) return -1;

    let max = 0;
    let j = 0;

    let extraA = countA - k;
    let extraB = countB - k;
    let extraC = countC - k;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") extraA--;
        if (s[i] === "b") extraB--;
        if (s[i] === "c") extraC--;

        while (extraA < 0 || extraB < 0 || extraC < 0) {
            if (s[j] === "a") extraA++;
            if (s[j] === "b") extraB++;
            if (s[j] === "c") extraC++;
            j++;
        }
        max = Math.max(max, i - j + 1);
    }
    return s.length - max;
};

console.log(takeCharacters("aabaaaacaabc", 2));