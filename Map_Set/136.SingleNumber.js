/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    const hashMap = new Map();

    nums.forEach((ele) => {
        if (hashMap.get(ele)) {
            hashMap.set(ele, hashMap.get(ele) + 1)
        } else {
            hashMap.set(ele, 1)
        }
    })

    for (let [val, key] of hashMap) {
        if (val === 1) {
            return key;
        }
    }
};

var singleNumber = function(nums) {
    const numSet = new Set(nums);

    const sumNumSet = [...numSet].reduce((acc, num) => acc += num, 0);
    const sumNums = nums.reduce((acc, num) => acc += num, 0);
    return 2 * sumNumSet - sumNums;
};

var singleNumber = function(nums) {
    let sum = 0;

    for (let num of nums) {
        sum ^= num;
    }
    return sum;
};