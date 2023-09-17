// https://leetcode.com/problems/daily-temperatures/
var dailyTemperatures = function(temperatures) {
  const stack = []
  const output = new Array(temperatures.length).fill(0)
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const index = stack.pop()
      output[index] = i - index
    }
    stack.push(i)
  }

  return output
};