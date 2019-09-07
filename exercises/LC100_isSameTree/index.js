/*we are going to solve this with a recursive helper method*/
function isSameTree(p, q) {
    // if helper method conditions are met sameTree value will change 
    let sameTree = true;
    //our helper function
    function checkSameNode(p, q){
        // if there no nodes, if they don't exist
        if(!p && !q){
            // just stop recursive calls
            return;
        // if only one node is valid and the other isnt they cannot equal so     
        }else if(!p || !q){
            sameTree = false;
            return;
        }else if(p.val !== q.val){
            sameTree = false;
            return;
        }
        // check if their children are also the same nodes or node using recursion
        checkSameNode(p.left, q.left);
        checkSameNode(p.right, q.right);
    }
    checkSameNode(p, q);
    return sameTree;
}

module.exports = isSameTree;
