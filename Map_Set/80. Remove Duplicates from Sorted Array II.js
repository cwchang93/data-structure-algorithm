/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    const map = new Map();
    nums.forEach((ele, index) => {
        if (map.get(ele) === 2) {
            nums[index] = '_';
        } else if (map.get(ele) === 1) {
            map.set(ele, 2);
        } else {
            map.set(ele, 1);
        }

    })
    console.log('nums', nums);

    let idx = 0;
    let k = 0;
    map.forEach((val, key) => {

        for (let i = 0; i < val; i++) {
            nums[idx] = key;
            idx++;
        }
        k += val;
    })
    console.log('nums', nums)
    console.log('k', k)
    nums.splice(k, nums.length - k);

};