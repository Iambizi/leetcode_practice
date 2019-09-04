/*Linked lists are a data structure that stores multiple values in a linear fashio

 If each node has just one pointer to another node (most frequently called next) 
 then the list is considered a singly linked list (or just linked list) 
 whereas if each node has two links (usually previous and next) 
 then it is considered a doubly linked list.

*/
function removeNthFromEnd(head, n) {

    let dummyHead = { next: head };
    let slow = dummyHead;
    let fast = dummyHead;

    //Move fast N nodes ahead of slow
    for (let i = 1; i <= n; i++) {
        fast = fast.next;
    }

    //Move slow and fast up one node at a time until fast is last node
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return dummyHead.next;
}

module.exports = removeNthFromEnd;
