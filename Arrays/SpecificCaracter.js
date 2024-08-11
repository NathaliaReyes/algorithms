// Given an array of Strings return the string that has the most repeated character

function SpecCaracter() {
  const array = ['SilviA', 'LucAs', 'Laura', 'Paula', 'Lanana', 'Cesy', 'Julianaya'];
  let arrayWithA = [];
  for(let i = 0; i < array.length; i++){
    if(array[i].includes('a') || array[i].includes('A')){
      arrayWithA.push(array[i])
      
    }
  }
  console.log(arrayWithA);
}
// Return an array with the strings that have the letter 'a' or 'A' in this case 
// the output should be ['SilviA', 'Laura', 'Paula', 'Lanana', 'Julianaya']
SpecCaracter();

// Given an array of Strings return the string or strings that has the most repeated character
function MostSpecCar(){
  const array = ['SilviA', 'LucAs', 'Laura', 'Paula', 'Lanana', 'Cesy', 'Julianaya'];

  // Function to count the number of times a character is repeated in a string
  const countA = (str) => (str.match(/a/gi) || []).length;

  // Find the maximum number of times the character 'a' or 'A' is repeated in the array
  const maxCuenta = Math.max(...array.map(countA));
  console.log(maxCuenta);

  // Filter the strings that have the maximum number of times the character 'a' or 'A' is repeated
  console.log(array.filter((str) => countA(str) === maxCuenta));
}

MostSpecCar();