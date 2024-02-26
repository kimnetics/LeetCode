// https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
var maxDepth = function(root) {
  if (root == null) {
    return 0
  }

  const processNode = function (root, initialDepth) {
    initialDepth++

    let returnDepth = initialDepth
    if (root.left) {
      returnDepth = Math.max(returnDepth, processNode(root.left, initialDepth))
    }

    if (root.right) {
      returnDepth = Math.max(returnDepth, processNode(root.right, initialDepth))
    }

    return returnDepth
  }

  return processNode(root, 0)
};