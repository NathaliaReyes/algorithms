// Given two binary strings a and b, return their sum as a binary string.

// Input: a = "11", b = "1"
// Output: "100"

// En este caso se espera que haga 3 iteraciones, la primera para 1+1, la segunda para 1+1 y la
// tercera para el carry o remainder.

var addBinary = function (a, b) {
  let i = a.length-1;
  let j = b.length-1;
  let carry = 0;
  let result = [];

  while(i >= 0 || j >= 0 || carry){
    let sum = carry;
    if(i >= 0){
      sum += parseInt(a[i]);
      i--;
    }
    if(j >= 0){
      sum += parseInt(b[j]);
      j--;
    }

    result.unshift(sum%2);

    carry = Math.floor(sum/2);
  }
  // retorna [1,0,0]:
  // return result;

  // retorna 100 which is a String
  return result.join('');
};

let a = "11";
let b = "1";
console.log(addBinary(a,b));