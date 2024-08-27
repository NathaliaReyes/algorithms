// There is a set of N jars containing chocolates. Some of them may be empty. Determine the  maximum 
// number of chocolates Andrew can pick from the jars given that he cannot pick from jars next to each other.
// Write an algorithm to find the maximum number of chocolates that can be picked from the jars in such a way
// that the chocolates are not picked from jars next to each other.

//Example: 
//Input = 6  -- 5, 30,99, 60, 5, 10 --> output: 114

// Explanation: Andrew picks from the 1st (5), 3rd (99),  and 6th(10) jars, So teh output is 114

function Jars(array){
  let result = 0;
  for(let i = 0; i < array.length; i += 2){
    // console.log(array[i]);
    if(array[i] > array[i+1]){
      result += array[i];
    }else{
      result += array[i+1];
    }
  }
  return result;
}

console.log(Jars([1, 7, 3, 91, 12, 66, 54, 60])); //224 