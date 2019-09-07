// again we'll solve this with a helper method recursion
function levelOrder(root) {
    // Our initial array of sub array
    const res = [];

    function helper(node, depth){
        if(!node) return;
    // if our res array doesnt hold the correct sub array we will input it
        if(!res[depth]){
            res[depth] = [];
        }
        res[depth].push(node.val);
        // call helper function on left and right child as well: 'depth + 1' cause were going one level down
        helper(node.left, depth + 1)
        helper(node.right, depth + 1)
    }
    helper(root, 0);
    return res;
}

module.exports = levelOrder;
