// https://leetcode.com/problems/car-fleet/
var carFleet = function(target, position, speed) {
  if (position.length === 1) {
    return 1
  }

  const pairs = []
  for (let i = 0; i < position.length; i++) {
    pairs.push([position[i], speed[i]])
  }
  pairs.sort((a, b) => a[0] - b[0])

  const stack = []
  for (let i = pairs.length - 1; i >= 0; i--) {
    const distance = target - pairs[i][0]
    const arrivalTime = distance / pairs[i][1]
    if (stack.length === 0 || arrivalTime > stack[stack.length - 1]) {
      stack.push(arrivalTime)
    }
  }
  return stack.length
};