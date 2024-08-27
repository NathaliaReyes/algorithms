// Retrieve the largest number in a row and smallest in the column
// given 
// 2 2
// 1 2
// 3 4  --> output 2

let arr = [
    [1, 2], //2     1,2 --> 2
    [4, 2], //4
    [3, 5] //5 -->
]

function matrix(arr){ 
    let maxValues = []; 
    let minValues = new Array(arr[0].length).fill(Infinity);
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i][0]; // Initialize as the first element of the row
        // console.log(max);
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
        maxValues.push(max); 
    }
    console.log(maxValues);
    // Search for the smallest number in the column
    for (let j = 0; j < arr[0].length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][j] < minValues[j]) {
                minValues[j] = arr[i][j];
            }
        }
    }
    console.log(minValues);

    // Now find both: the largest number in teh row and samellest in the column
    let result = null;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === maxValues[i] && arr[i][j] === minValues[j]) {
                result = arr[i][j];
            }
        }
    }

    console.log(result);
}
matrix(arr);
