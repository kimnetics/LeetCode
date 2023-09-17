// https://leetcode.com/problems/evaluate-reverse-polish-notation/
var evalRPN = function(tokens) {
  const stack = []
  const operators = ['+', '-', '*', '/']
  for (const token of tokens) {
    if (operators.includes(token)) {
      const number1 = parseInt(stack.pop())
      const number2 = parseInt(stack.pop())
      let calc
      switch (token) {
        case '+':
          calc = number2 + number1
          break
        case '-':
          calc = number2 - number1
          break
        case '*':
          calc = number2 * number1
          break
        case '/':
          calc = parseInt(number2 / number1)
          break
      }
      stack.push(calc)
    } else {
      stack.push(token)
    }
  }

  return stack.pop()
};