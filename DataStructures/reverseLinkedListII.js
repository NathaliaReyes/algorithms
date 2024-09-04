/**
 * Given the head of a singly linked list and two integers left and right where 
 * left <= right, reverse the nodes of the list from position left to position right, 
 * and return the reversed list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var createLinkedList = function(arr){
  let head = new ListNode(arr[0]);

  return head;
}

// let head = [1, 2, 3, 4, 5];
let leftLim = 0;
let rightLim = 0;
let subArr = [];
function reverseBetween(head, left, right) {
  for(let i = 0; i < head.length; i++) {
    if(head[i] === left){
      leftLim = left;
      subArr.push(leftLim);
    }
    if(head[i] === right){
      rightLim = right;
      subArr.push(rightLim);
    }
  }
  console.log(subArr);

};
reverseBetween([1,2,3,4,5], 2, 4);