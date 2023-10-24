// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
var findMin = function(nums) {
  let low = 0
  let high = nums.length - 1

  // Is there only one element or is array in sorted order?
  if (nums[0] <= nums[high]) {
    return nums[0]
  }

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    if (nums[mid] < nums[mid - 1]) {
      return nums[mid]
    } else if (nums[mid] < nums[nums.length - 1]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1
};