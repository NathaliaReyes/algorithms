// Given an array of integers nums which is sorted in ascending order, and an integer target, 
// write a function to search target in nums. If target exists, then return its index. 
// Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

function BinarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;
 
    while (left <= right) {
        // Calculate the midpoint to prevent integer overflow
        let mid = Math.floor(left + (right - left) / 2);
 
        if (arr[mid] === target) {
            // Found the target element
            return mid;
        } else if (arr[mid] < target) {
            // Adjust the search range to the right half
            left = mid + 1;
        } else {
            // Adjust the search range to the left half
            right = mid - 1;
        }
    }
 
    return -1; // Element not found
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let target = 9;
console.log(BinarySearch(arr,target));