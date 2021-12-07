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
var searchBST = function(root, val) {

    if (root == null) {
        return null;
    }

    if (root.val > val) searchBST(root.right, val);

    if (root.val === val) return root;

    // if (root.val < val) searchBST(root.right, val);

    return searchBST(root.right, val)

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


var searchBST = function(root, val) {

    if (root == null) {
        return null;
    }



    if (root.val == val) {
        return root;
    }

    if (root.val > val) {
        return searchBST(root.right, val);
    }

    // if (root.val < val) searchBST(root.right, val);

    return searchBST(root.right, val)
};