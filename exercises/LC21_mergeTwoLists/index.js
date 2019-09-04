/*First need to know how to merge two sorted arrays
*/
function mergeTwoLists(l1, l2) {
    const dummyHead = {next: null}
    // tail represents our current node
    let tail = dummyHead;

    /* while both linked lists have not been exhausted yet*/
    while(l1 && l2){
        if(l1.val < l2.val){
            tail.next = l1;
            // have current move up one aswell
            tail = tail.next;
            // we move the l1 pointer up so that we can exhaust that list
            l1 = l1.next
        } else {
            tail.next = l2;
            tail = tail.next;
            l2 = l2.next;
        }
    }
    /* if this while loop finishes then that means one of our lists has been exhausted 
    hence we'll have our l1 or l2 point to the unexhausted list 
    the one that's unexhausted will be a truthy value that's why tail.next will point to it */

    tail.next = l1 || l2;
    return dummyHead.next;
}

module.exports = mergeTwoLists;
