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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const output = [];

    if (!root) return output;

    function helper(node, output) {
        if (!node) return;
        if (node.left !== null) helper(node.left, output);
        output.push(node);
        if (node.right !== null) helper(node.right, output);
    }

    helper(root, output)

    return output;

};


// var inorderTraversal = function(root) {
//     const stack = [];
//     const output = [];

//     while(root || stack.length > 0) {
//         if(root) {
//             stack.push(root);
//             root = root.left;
//         } else {
//             root = stack.pop();
//             output.push(root.val);
//             root = root.right;
//         }
//     }

//     return output;
// };