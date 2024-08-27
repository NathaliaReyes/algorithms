// Given an array of integers, declare the first element as the minValue
// Then retrieve the higher substraction of the maxValue - minValue 
// If there is not a higher value than the minValue retrieve -1

let array = [4, 3, 10, 1, 8];

function HigherSub(array) {
  let minValue = array[0];
  let answer = -1;

  for (let i = 1; i < array.length; i++) {
    if(array[i] > minValue){
      let currentAnswer = array[i] - minValue;
      if(currentAnswer > answer){
        answer = currentAnswer;
      }
    }
    // console.log(answer);
  }
  // console.log(minValue);
  return answer;
}

console.log(HigherSub(array));