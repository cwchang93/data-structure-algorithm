

function removeDuplicates(nums: number[]): number {
    const hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
            hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
        } else {
            hashMap.set(nums[i], 1);
        }

    }

};