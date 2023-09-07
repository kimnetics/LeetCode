// https://leetcode.com/problems/top-k-frequent-elements/
var topKFrequent = function(nums, k) {
  const numberCount = {}
  for (const num of nums) {
    if (!numberCount[num]) {
      numberCount[num] = 1
    } else {
      numberCount[num]++
    }
  }

  return Object.entries(numberCount).sort((a, b) => b[1] - a[1]).slice(0, k).map(x => x[0])
};
