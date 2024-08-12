// Given an array of numbers and a target number, return the indexes of the two numbers that 
// add up to the target number


function TwoSum(){
  let array = [2,3,4];
  let target = 7;
  for(i = 0; i < array.length; i++){
    for(j = 0; j < array.length; j++){
      if(array[i] + array[j] === target){
        // let result = [];
        // result.push(array.indexOf(array[i]));
        // result.push(array.indexOf(array[j]));
        return [i,j];
      }

    }
  }
  return [];
}

console.log(TwoSum());