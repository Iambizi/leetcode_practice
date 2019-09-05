const reverseList = head => {
    let prev = null;
    let current = head;

    while(current){
        let temp = current.next;
        // change direction
        current.next = prev;

        //Move prev and current up by 1
        prev = current;
        current = temp;
    }
    return prev;
};

module.exports = reverseList;
