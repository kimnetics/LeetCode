// https://leetcode.com/problems/diameter-of-binary-tree/
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let diameter = 0

  const calculateDiameter = function (node) {
    if (!node) {
      return 0
    }

    const left = calculateDiameter(node.left)
    const right = calculateDiameter(node.right)
    diameter = Math.max(diameter, left + right)

    return Math.max(left, right) + 1
  }

  calculateDiameter(root)

  return diameter
};