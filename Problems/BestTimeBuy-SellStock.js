/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different 
day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit,
return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 */


/**
 * @param {number[]} prices
 * @return {number}
 */

// PseudoCode:
// loop through the prices array and find the minimum price, save the index of the minimum price
// loop through the prices array starting from the index of the minimum price and find the maximum price
// return the difference between the maximum and minimum price
// if the prices array is empty return 0
// if the prices array has only one element return 0

let prices = []
let min = Infinity;
let max = 0;
let indexMin = 0;

var minimumPrice = (prices) => {

    for(let i = 0; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i]
            indexMin = prices.indexOf(min);
        }
    }
    return min;
    // console.log(min)
    // console.log(indexMin)
}

var maxPrice = function(prices) {
    let indexMax = 0;
    for(let i = indexMin; i < prices.length; i++){
        if(prices[i] > max){
            max = prices[i];
            indexMax = prices.indexOf(max);
        }
    }
    return max;
    // console.log(max)
    // console.log(indexMax)
};

var maxProfit = (prices) => {
    if(prices == [] || prices.length == 1){
        return 0
    }else {
        minimumPrice(prices);
        maxPrice(prices);
        let profit = max-min;
        return profit;
    }
}

// minimumPrice(prices);
console.log(maxProfit(prices));