// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/
var numberOfBeams = function(bank) {
  const lasers = bank.map((row) => row.split('1').length - 1)
    .filter((count) => count > 0)

  let beams = 0

  lasers.slice(1).reduce((accumulator, currentValue) => {
      beams += accumulator * currentValue
      return currentValue
    },
    lasers[0]
  )

  return beams
};