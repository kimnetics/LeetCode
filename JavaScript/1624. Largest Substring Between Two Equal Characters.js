// https://leetcode.com/problems/largest-substring-between-two-equal-characters/
var maxLengthBetweenEqualCharacters = function(s) {
  let maxLength = -1
  const letterStart = {}

  const chars = Array.from(s)
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]
    if (char in letterStart) {
      const length = i - letterStart[char] - 1
      maxLength = Math.max(maxLength, length)
    } else {
      letterStart[char] = i
    }
  }

  return maxLength
};