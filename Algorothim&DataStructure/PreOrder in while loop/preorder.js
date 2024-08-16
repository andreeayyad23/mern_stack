class TreeNode{
    constructor(val, right, left){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function preorderTraversal(root) {
    const result = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);

        if (node.right) {
            stack.push(node.right)
        }

        if (node.left) {
            stack.push(node.left)
            
        }
    }
    return result;
}

    
const root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(4));
root.right = new TreeNode(3);

console.log(preorderTraversal(root)); 
console.log(root.right)
