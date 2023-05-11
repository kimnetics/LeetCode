const permuteNums = function (nums) {
  const result = []

  // Are there no numbers?
  const numsLength = nums.length
  if (numsLength === 0) {
    return result
  }

  // Are we on deepest level of recursion?
  if (numsLength === 1) {
    result.push([...nums])
    return result
  }

  // Get current number.
  const currentNum = nums[0]

  // Get permutations for remaining numbers.
  const remainingNums = [...nums.slice(1)]
  const remainingNumsPermuted = permuteNums(remainingNums)

  // Add current number to result.
  result.push([currentNum])

  // Loop through permutations of remaining numbers.
  const remainingNumsPermutedLength = remainingNumsPermuted.length
  for (let i = 0; i < remainingNumsPermutedLength; i++) {
    // Add permutation to result.
    result.push([...remainingNumsPermuted[i]])
    // Add current number concatenated with permutation to result.
    result.push([currentNum].concat(remainingNumsPermuted[i]))
  }

  return result
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  return [[]].concat(permuteNums(nums))
}