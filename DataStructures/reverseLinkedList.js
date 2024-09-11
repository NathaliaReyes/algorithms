/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * Steps to solve it:   
 * 1. Create prev variable and assign it to null
 * 2. Loop through the linked list (while head !== null)
 *      a. Create nextNode variable and assign it to head.next 
 *      b. Assign head.next to prev
 *      c. Assign prev to head
 *      d. Assign head to nextNode
 * 3. Return prev
 */

/**
 * Definition for singly-linked list.
 function ListNode(val, next) {
 this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */



//Example of use:
//1. Define a ListNode class to create nodes for the linked list
//2. Create a linked list from an array of values
//3. Call the reverseList function with the head of the linked list
// 4. Traverse the reversed list and log the values

class ListNode{
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

// let arr = [1, 2, 3, 4, 5];
function createLinkedList(arr){   //Recorrer la linkedlist & retornar head
    let head = new ListNode(arr[0]);
    let current = head;
    for(let i = 1; i < arr.length; i++){
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

//Function to print the linked list:
function printLinkedList(head){
    let current = head;
    let result = [];
    while(current !== null){
        result.push(current.val);
        current = current.next;
    }
    return result.join(' ');
}

function reverseList(head) {       // [1,2,3,4,5] => [5,4,3,2,1]
    let prev = null;
    let current = head;   //1
                                             //1st Iter    //2nd iter   //3rd iter   //4th iter    //5th iter
    while(current !== null){                 //1:current    2             3            4             5
        let nextNode = current.next;         //2:nextNode   3             4            5             null
        current.next = prev;                 //2:prev       3             4            null          null
        prev = current;                      //prev:1       2             3            4             5
        current = nextNode;                  //current:2    3             4            5             null   => head = null
    }

    return prev;
};

//create a linked list from an array
let head = createLinkedList([1, 2, 3, 4, 5])
 //Linked list before be reversed:
 console.log('list before be reversed: ', printLinkedList(head));

 // Reverse the linked list:
 let reversedHead = reverseList(head);
 //Linked list after is reversed:
 console.log('list reversed: ', printLinkedList(reversedHead));
 console.log(typeof(printLinkedList(reversedHead)));
