// https://leetcode.com/problems/longest-consecutive-sequence/
var longestConsecutive = function(nums) {
  const numsSorted = nums.sort((a, b) => a - b)

  let longestLength = 0
  let end = nums[0]
  let currentLength = 1

  for (let i = 1; i < numsSorted.length; i++) {
    if (end === numsSorted[i]) {
    } else if ((end + 1) === numsSorted[i]) {
      currentLength++
    } else {
      if (currentLength > longestLength) {
        longestLength = currentLength
      }
      currentLength = 1
    }
    end = numsSorted[i]
  }

  if ((end !== undefined) && (currentLength > longestLength)) {
    longestLength = currentLength
  }

  return longestLength
};