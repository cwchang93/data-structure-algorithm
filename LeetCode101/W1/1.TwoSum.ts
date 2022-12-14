function twoSum(nums: number[], target: number): number[] {

    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        const anotherNum = target - nums[i];
        if (obj[anotherNum] && i !== obj[anotherNum]) {
            return [i, obj[anotherNum]]
        }
    }


};