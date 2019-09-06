function isValidBST(root) {
    /* 
        start a root node to traverse left and right node 
        As we traverse down to the left, set Max to previous value
        As we traverse down to the right, set Min to previous value

        also make sure current node has value greater than the Min and less than Max
    */
    let validity = true;

    function helper(node, min, max){
        //base cases
        // if we are not on valid node then just return
        if(!node) return;
        //check that min < node < max
        if(
            (min !== null && node.val <= min) || 
            (max !== null && node.val >= max)
            ){
                validity = false;
                return;
        }
        /* 
        at this point we have a valid node who's value is in between min and max
        */
        // as we traverse left tree keep max as is and set max to node value
        helper(node.left, min, node.val)
        // as we traverse right tree set min to node value and keep max as is
        helper(node.right, node.val, max)
    }
    // helper function is defined, now we call it on the root argument
    // we set min and max to null 
    helper(root, null, null);
    // then return validity variable that evaluates to true or false based on above logic 
    return validity;
}

module.exports = isValidBST;
