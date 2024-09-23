/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
// s= [(){}[]]; --> true

var isValid = function(s) {
    const map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }

    let stack = [] 
    stack.push(s[0]) // fill the stack with the first element of the array --> (

    for(let i = 1; i < s.length; i++){
        let stackElem = stack[stack.length-1] // --> (

        if(map[stackElem] == s[i]){ // --> va a comparar ( == ) es true por lo tanto va a sacar el elemento del stack, si no es igual va a agregar el elemento al stack 
            // en la primera iteracion es true entonces el stack queda vacio, en la segunda iteracion el stack queda vacio
            stack.pop(); 
        }else {
            stack.push(s[i]);
        }
    }
    return stack.length == 0;
};

console.log(isValid("(){}[()")); // false
console.log(isValid("(){}[]")); // true
console.log(isValid("({[]})")); // true