class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
    
        const insertRec = (current) => {
            if (current === null) {
                return newNode;
            }
    
            if (data < current.data) {
                current.left = insertRec(current.left);
            } else {
                current.right = insertRec(current.right);
            }
    
            return current;
        };
    
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.root = insertRec(this.root);
        }
    }
    
    search(data) {
        const searchRec = (current) => {
            if (current === null) {
                return false;
            }
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                return searchRec(current.left);
            } else {
                return searchRec(current.right);
            }
        };
    
        return searchRec(this.root);
    }
    

    inOrder() {
        const result = [];
    
        const inOrderRec = (current) => {
            if (current !== null) {
                inOrderRec(current.left);
                result.push(current.data);
                inOrderRec(current.right);
            }
        };
    
        inOrderRec(this.root);
        return result;
    }
    
    delete(data) {
        this.root = this._deleteRec(this.root, data);
    }

    _deleteRec(current, data) {
        if (current === null) {
            return null;
        }

        if (data < current.data) {
            current.left = this._deleteRec(current.left, data);
        } else if (data > current.data) {
            current.right = this._deleteRec(current.right, data);
        } else {
            if (current.left === null && current.right === null) {
                return null;
            }
            if (current.left === null) {
                return current.right;
            }
            if (current.right === null) {
                return current.left;
            }

            const minLargerNode = this._findMin(current.right);
            current.data = minLargerNode.data;
            current.right = this._deleteRec(current.right, minLargerNode.data);
        }

        return current;
    }


}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(7));  
console.log(bst.search(8)); 

console.log(bst.inOrder());  

bst.delete(5);
console.log(bst.inOrder()); 
