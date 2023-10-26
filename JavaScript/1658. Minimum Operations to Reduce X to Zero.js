// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
var minOperations = function(nums, x) {
  const n = nums.length

  // Find sum of unneeded nums.
  let target = nums.reduce((a, b) => a + b)
  target -= x

  // Are all nums needed?
  if (target === 0) {
    return n
  }

  // Find maximum quantity of nums that produce target.
  let left = 0
  let sum = 0
  let len = 0
  for (let right = 0; right < n; right++) {
    sum += nums[right]
    while (sum > target && left < n) {
      sum -= nums[left]
      left++
    }
    if (sum === target) {
      len = Math.max(len, right - left + 1)
    }
  }

  // Did no combination of nums provide target?
  if (!len) {
    return -1
  }

  return n - len
};