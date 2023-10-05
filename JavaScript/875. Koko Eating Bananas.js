// https://leetcode.com/problems/koko-eating-bananas/
var minEatingSpeed = function(piles, h) {
  let low = 1
  let high = Math.max(...piles)

  while (low < high) {
    const mid = Math.floor((high + low) / 2)
    let hoursNeeded = 0
    for (const pile of piles) {
      hoursNeeded += Math.ceil(pile / mid)
    }
    if (hoursNeeded <= h) {
      high = mid
    } else {
      low = mid + 1
    }
  }

  return low
};