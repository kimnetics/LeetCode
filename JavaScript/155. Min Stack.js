// https://leetcode.com/problems/min-stack/
var MinStack = function () {
  this.stack = []
  this.minStack = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)

  if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(val)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const popped = this.stack.pop()

  if (popped === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop()
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : null
}
