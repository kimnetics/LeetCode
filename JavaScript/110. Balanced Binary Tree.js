// https://leetcode.com/problems/balanced-binary-tree
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (root == null) {
    return true
  }

  let isBalanced = true

  const processNode = function (root, initialDepth) {
    initialDepth++

    let leftDepth = initialDepth
    let rightDepth = initialDepth
    if (root.left) {
      leftDepth = processNode(root.left, initialDepth)
    }
    if (root.right) {
      rightDepth = processNode(root.right, initialDepth)
    }

    if (Math.abs(leftDepth - rightDepth) > 1) {
      isBalanced = false
    }

    return Math.max(leftDepth, rightDepth)
  }

  processNode(root, 0)

  return isBalanced
};