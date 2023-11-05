// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
var maxProfit = function(prices) {
    if (prices.length === 1) {
      return 0
    }
  
    let maximumProfit = 0
    let minimumPrice = prices[0]
  
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minimumPrice) {
        minimumPrice = prices[i]
      }
  
      const profit = prices[i] - minimumPrice
      if (profit > maximumProfit) {
        maximumProfit = profit
      }
    }
  
    return maximumProfit
  };