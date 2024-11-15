/**
 * You are given a 2D integer array items where items[i] = [pricei, beautyi] denotes the price and beauty of an item respectively.
You are also given a 0-indexed integer array queries. For each queries[j], you want to determine the maximum beauty of an item whose 
price is less than or equal to queries[j]. If no such item exists, then the answer to this query is 0.
Return an array answer of the same length as queries where answer[j] is the answer to the jth query.

Example 1:

Input: items = [[1,2],[3,2],[2,4],[5,6],[3,5]], queries = [1,2,3,4,5,6]
Output: [2,4,5,5,6,6]
Explanation:
- For queries[0]=1, [1,2] is the only item which has price <= 1. Hence, the answer for this query is 2.
- For queries[1]=2, the items which can be considered are [1,2] and [2,4]. 
  The maximum beauty among them is 4.
- For queries[2]=3 and queries[3]=4, the items which can be considered are [1,2], [3,2], [2,4], and [3,5].
  The maximum beauty among them is 5.
- For queries[4]=5 and queries[5]=6, all items can be considered.
  Hence, the answer for them is the maximum beauty of all items, i.e., 6.

 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */

// sort the items array based on the price, from low to high


var maximumBeauty = function (items, queries) { // items= [[1,2],[3,2],[2,4],[5,6],[3,5]]    queries = [1,2,3,4,5,6]

  items.sort((a, b) => a[0] - b[0]);
  let maxBeauty = [];
  let currentMaxBeauty = 0;

  for (let [price, beauty] of items) {
    currentMaxBeauty = Math.max(currentMaxBeauty, beauty);
    maxBeauty.push([price, currentMaxBeauty]);
  }

  const result = new Array(queries.length).fill(0);
  queries.forEach((query, index) => {
    let start = 0;
    let end = maxBeauty.length - 1;
    while (start <= end) {
      const mid = Math.floor((end + start) / 2);
      if (maxBeauty[mid][0] <= query) {
        result[index] = maxBeauty[mid][1];
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  });
  return result;

};

console.log(maximumBeauty([[1,2],[3,2],[2,4],[5,6],[3,5]], [1,2,3,4,5,6]))