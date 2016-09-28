/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var maxProfit = 0;
  for (var i = 0; i < prices.length - 1; i++) {
      for (var j = i + 1; j < prices.length; j++) {
        var profit = prices[j] - prices[i];
        if (profit > maxProfit) {
          maxProfit = profit;
        }
      }
  }
  return maxProfit;
};