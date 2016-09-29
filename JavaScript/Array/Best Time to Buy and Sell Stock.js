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

9.29更新
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var minPrice = Number.MAX_VALUE;
  var maxProfit = 0;
  for (var i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
          minPrice = prices[i];
      } else if (prices[i] - minPrice > maxProfit) {
          maxProfit = prices[i] - minPrice;
      }
  }
  return maxProfit;
};
/*
Complexity Analysis
Time complexity O(n)
Space complexity O(1)
*/