// https://leetcode.com/problems/product-of-array-except-self/
var productExceptSelf = function(nums) {
  const left = []
  let leftProduct = 1
  for (let i = 0; i < nums.length; i++) {
    left[i] = leftProduct
    leftProduct *= nums[i]
  }

  const right = []
  let rightProduct = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    right[i] = rightProduct
    rightProduct *= nums[i]
  }

  const output = []
  for (let i = 0; i < nums.length; i++) {
    output[i] = left[i] * right[i]
  }
  return output
};
