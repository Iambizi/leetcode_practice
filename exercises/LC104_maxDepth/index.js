// we solve this using helper method recursion
function maxDepth(root) {
    let maxDepth = 0;

    //our helper function
    function dive(node, currentDepth){
        // base case to avoid infinite recursion
        /*
            if we reach this scenario were some kind of depth has been reached 
            cause we exhausted our tree, then we need to update our maxDepth var
        */
        if(!node){
            // set to previously set maxDepth or currentDepth -1
            maxDepth = Math.max(currentDepth -1, maxDepth );
            return;
        }
        // call helper function on left and right child as well: 'depth + 1' cause were going one level down
        dive(node.left,currentDepth + 1)
        dive(node.right,currentDepth + 1)
    }
    /* 
        once we call our helper function and it does its recursions, 
        maxDepth will be updated correctly 
    */
    dive(root, 1);
    return maxDepth;
}

module.exports = maxDepth;
