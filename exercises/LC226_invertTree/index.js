//we solve this with helper method recursion
function invertTree(root) {
    // helper function that helps with inverting all children nodes
    function helper(node){
        if(!node) return;
        // create temp var to store old value of node.left
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
        
        helper(node.left);
        helper(node.right);
    }
    helper(root);
    return root;
}

module.exports = invertTree;
