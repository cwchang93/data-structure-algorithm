/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

// time O(log N)
// Space: O(log N)

// Recursive
var searchBST = function(root, val) {

    if (root == null) {
        return null;
    }

    if (root.val > val) searchBST(root.right, val);

    if (root.val === val) return root;

    // if (root.val < val) searchBST(root.right, val);

    return searchBST(root.right, val)

};

// Iteration 
var searchBST = function(root, val) {
    while (root.val != null) {
        if (root.val == val)
            return root
        else if (val < root.val)
            root = root.left
        else
            root = root.right
    }
    return false
};

// Stack
var searchBST = function(root, val) {
    if (!root) return root;
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        if (node.val === val) return node;
        if (node.val > val) {
            if (node.left) stack.push(node.left);
        } else {
            if (node.right) stack.push(node.right);
        }
    }
    return null;
};


// var searchBST = function(root, val) {

//     if (root.val === val) return root;

//     function helper(node) {
//         if (!node.left) {
//             helper(node.left)
//         }
//         if (node.val === val) return node;
//         if (!node.right) {
//             helper(node.right);
//         }
//     }

//     return helper(root);
// };