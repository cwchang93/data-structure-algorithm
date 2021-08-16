function singleNumber(nums: number[]): number {
    const hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        if (!hashMap[nums[i]]) {
            hashMap[nums[i]] = 1;
        } else {
            hashMap[nums[i]] = hashMap[nums[i]] + 1;
        }
    }
    // use for in b/c it can return;
    for (let key in hashMap) {
        if (hashMap[key] === 1) return parseInt(key)
    }
};

console.log(singleNumber([4, 1, 2, 1, 2]));