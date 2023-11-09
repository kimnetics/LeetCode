// https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function(s) {
  let maxLength = 0

  let left = 0
  const chars = new Set()
  for (let right = 0; right < s.length; right++) {
    while (chars.has(s[right])) {
      chars.delete(s[left])
      left++
    }
    chars.add(s[right])
    maxLength = Math.max(maxLength, chars.size)
  }

  return maxLength
};
