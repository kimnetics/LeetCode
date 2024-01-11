// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
var maxAncestorDiff = function(root) {
  const handleNode = function (highest, lowest, root) {
    const newHighest = Math.max(highest, root.val)
    const newLowest = Math.min(lowest, root.val)
    maxDifference = Math.max(maxDifference, newHighest - newLowest)
    if (root.left !== null) {
      handleNode(newHighest, newLowest, root.left)
    }
    if (root.right !== null) {
      handleNode(newHighest, newLowest, root.right)
    }
  }

  let maxDifference = 0
  handleNode(root.val, root.val, root)
  return maxDifference
};