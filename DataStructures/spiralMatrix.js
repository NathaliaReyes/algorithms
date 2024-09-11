// Leetcode problem 54. Spiral matrix:

// Given an m x n matrix, retunr all elements of the matrix in spiral order

var spiralOrder = function(matrix){
    //case of 3 x 3 matrix
    let left = 0;
    let top = 0;
    let right = matrix[0].length-1; //2
    let bottom = matrix.length-1; //2
    let size = matrix[0].length * matrix.length; //9  // 123 456 789
    let nums = [];

    while(nums.length < size){
        for(let i = left; i <= right; i++){  // 1 2 3
            nums.push(matrix[top][i]);
        }
        top++;
        for(let i = top; i <= bottom; i++){ // 6 9
            nums.push(matrix[i][right]);
        }
        right--;
        for(let i = right; i >= left; i--){ // 8 7
            nums.push(matrix[bottom][i])
            // console.log(nums);
        }
        bottom--;
        for(let i = bottom; i >= top; i--){ // 4   
            nums.push(matrix[i][left])
        }
        left++;
    }

    return nums;
}

console.log(spiralOrder([[1,2,3], [4,5,6], [7,8,9]]));