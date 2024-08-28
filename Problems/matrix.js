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
    console.log(minValues);
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i][0]; // Initialize as the first element of the row
        console.log(max);
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > max) { //2<1 || 2<4 ||5<3
                max = arr[i][j];  //arr[i][j] is the 2nd position, it will push 2,4,5
            }
        }
        maxValues.push(max); 
    }
    console.log('max values:',maxValues);
    // Search for the smallest number in the column
    for (let j = 0; j < arr.length; j++) { //iterates [1,2] 
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][j] < minValues[j]) {
                console.log(arr[i][j]) //1  //2
                // console.log(minValues[j])
                minValues[j] = arr[i][j];
            }
        }
    }
    console.log('min Values: ',minValues);

    // Now find both: the largest number in teh row and samellest in the column
    // find from the maxValues the smallest one: [2, 4, 5]
    let result = Math.min(...maxValues);
    console.log(result);
}
matrix(arr);
