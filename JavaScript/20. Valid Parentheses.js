// https://leetcode.com/problems/valid-parentheses/
var isValid = function(s) {
  const stack = []
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (pairs[char]) {
      if (stack.length === 0) {
        return false
      }
      if (stack.pop() !== pairs[char]) {
        return false
      }
    } else {
      stack.push(char)
    }
  }
  return stack.length <= 0
};
