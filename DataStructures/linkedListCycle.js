/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously 
following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer 
is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Steps to test it:
// Define a class ListNode
// Create a linkedlist
// Declare the cycle in the position pos
// Call the function hasCycle()

function ListNode(val) { //Definition for singly-linked list
  this.val = val;
  this.next = null;
}

var createLinkedList =  function(arr, pos) {
  let head = new ListNode(arr[0]); //3
  let current = head; // 3
  let cycleNode = null;

  for(let i = 1; i < arr.length; i++){
    current.next = new ListNode(arr[i]); //2
    current = current.next;
    if(i === pos){
      cycleNode = current
    }
  }

  if(cycleNode !== null){
    current.next = cycleNode;
  }

  return head;
}

let arr = [3, 2 , 0 ,-4];
let pos = 1;
let head = createLinkedList(arr, pos);

var hasCycle = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

console.log(hasCycle(head));