function lowestCommonAncestor(root, p, q) {
    //Start at Root
    //If Root val < than both Input Node Vals move right
    //If Root val > than both Input Node vals move left
    //If Root val is neither, we are the Lowest Common Ancestor
    const pVal = p.val;
    const qVal = q.val;

    let currentNode = root;

    while(currentNode){
        const currentVal = currentNode.val;
        if(currentVal < pVal && currentVal < qVal){
            currentNode = currentNode.right;
        }else if(currentVal > pVal && currentVal > qVal){
            currentNode = currentNode.left;
        }else {
            return currentNode;
        }
    }
}

module.exports = lowestCommonAncestor;
