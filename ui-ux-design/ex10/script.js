class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        if (this.root === null) {
            this.root = new Node(data);
        } else {
            const node = this.root;
            const searchTree = (node) => {
                if (data < node.value && node.left) {
                    searchTree(node.left);
                } else if (data < node.value) {
                    node.left = new Node(data);
                } else if (data > node.value && node.right) {
                    searchTree(node.right);
                } else if (data > node.value) {
                    node.right = new Node(data);
                }
            };
            return searchTree(node);
        }
    }

    find(data) {
        // Check if root exist
        if (this.root === null) {
            return false;
        }
        // If exist
        let node = this.root;
        let found = false;
        while (node && !found) {
            if (data < node.value) {
                node = node.left;
            } else if (data > node.value) {
                node = node.right;
            } else {
                found = node;
            }
        }
        return found ? true : false;
    }

}

const tree = new Tree();

// Root
tree.insert(20);

// First left
tree.insert(5);
// Second left
tree.insert(3);
// Second right
tree.insert(12);
// Third left
tree.insert(8);
// Third right
tree.insert(13);
// Fourth left
tree.insert(6);

// First right
tree.insert(25);
// Second left
tree.insert(21);
// Second right
tree.insert(28);


console.log(tree);

console.log(tree.find(13));
