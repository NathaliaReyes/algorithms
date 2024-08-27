// 1. Declare a variable that will store the reversed value
// 2. iterate over the string
// 3. return the value

// let str = 'Nathalia';
let reversed = '';

function reverseString(str) {
  // for(let i = 0; i < str.length; i++){
  //   reversed = str[i] + reversed;
  // }
  // return reversed;

  //another solution:
  for(let char of str){
    reversed = char + reversed;
  }
  return reversed;
}

console.log(reverseString('Nathalia'));

//Now, let's find a way to solve using the reverse method
// 1. Convert the string into an array --> split() method
// 2. Apply the method to the array 
// 3. convert back the array to string and return it--> join() method

function methodReverse(str){
  let res = str.split('').reverse().join('');
  return res;
}
console.log(methodReverse('Silvia'));

// Now let's try to reverse an integer
function reverseInt(n){
  let resultado = n.toString().split('').reverse().join('');
  return parseInt(resultado) * Math.sign(n);
  // console.log(resultado);
  
}
console.log(reverseInt(-2300));

