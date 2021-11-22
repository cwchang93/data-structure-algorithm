/**
 * Input: nums = [1,1,1,2,2,3], k = 2
   Output: [1,2]
 * @param nums 
 * @param k 
 */
function topKFrequent(nums, k) {
  let map = new Map();

  nums.forEach((eachNum) => {
    if (map.get(eachNum)) {
      const numAmount = map.get(eachNum);
      map.set(eachNum, numAmount + 1);
    } else {
      map.set(eachNum, 1);
    }
  });

  // sort
  const sortMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  const finalArr = [];
  sortMap.forEach((val, key) => {
    let idx = 0;
    if (idx < k) {
      finalArr.push(key);
      idx++;
    }
  });
  return finalArr;
}

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

topKFrequent(nums, k);

// Map Sort
// https://stackoverflow.com/questions/37982476/how-to-sort-a-map-by-value-in-javascript
