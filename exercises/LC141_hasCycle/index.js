function hasCycle(head) {
    //create a slow and fast variable that are initially set to head of Linked list
    let slow = head;
    let fast = head;

    // we want to make sure fast.next does not return null and throw bug
    while (fast && fast.next) {
        //As we interate thru LL, "slow" will move up 1 node
        slow = slow.next;
        // "fast" will move up 2 nodes.
        fast = fast.next.next;
        //if LL is circular, "slow" and "fast" will eventually equal each other.
        if(slow === fast){
            return true;
        }
    }
    //if LL is not circular, "fast" will just traverse to second to last or last node of LL.
    return false;
}

module.exports = hasCycle;
