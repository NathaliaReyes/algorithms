/**
 * A string s is called happy if it satisfies the following conditions:
s only contains the letters 'a', 'b', and 'c'.
s does not contain any of "aaa", "bbb", or "ccc" as a substring.
s contains at most a occurrences of the letter 'a'.
s contains at most b occurrences of the letter 'b'.
s contains at most c occurrences of the letter 'c'.
Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, 
return any of them. If there is no such string, return the empty string "".
A substring is a contiguous sequence of characters within a string.

Example 1:
Input: a = 1, b = 1, c = 7
Output: "ccaccbcc"
Explanation: "ccbccacc" would also be a correct answer.
Example 2:

Input: a = 7, b = 1, c = 0
Output: "aabaa"
Explanation: It is the only correct answer in this case.
 */

//Pseudocode:
/**
 create a heap array to store the ocurrences and letter and populate it
 sort the heap in decreasing order
 create a variable to store the first element of the heap (most ocurrences)
 create an if statement that checks if the caracter is already twice in the result
 and if not added to the heap
 */

var longestDiverseString = function(a, b, c) {
    let maxHeap = [];

    if(a > 0) maxHeap.push([a, 'a']);
    if(b > 0) maxHeap.push([b, 'b']);
    if(c > 0) maxHeap.push([c, 'c']);

    let result = '';

    while(maxHeap.length > 0){
        maxHeap.sort((x,y) => y[0] - x[0]);
        let first = maxHeap.shift();

        if(result.length >= 2 && result[result.length-1] === first[1] && result[result.length-2] === first[1]){
            
            if(maxHeap.length === 0)break;

            let second = maxHeap.shift();
            result = result + second[1];
            second[0]--;

            if(second[0] > 0){
                maxHeap.push(second);
            }

            maxHeap.push(first);

        }else {
            result += first[1];
            first[0]--;

            if(first[0] > 0){
                maxHeap.push(first);
            }
        }
    }
    return result;

};

console.log(longestDiverseString(1,1,7));