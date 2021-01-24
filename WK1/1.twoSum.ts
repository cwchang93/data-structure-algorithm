// hash map

function twoSum(nums:number[], target:number):number[] {

    const hashMap = {}
    for (let i=0; i<nums.length; i++) {
        if (hashMap[target - nums[i]] === undefined) {
            hashMap[nums[i]] = i;
        } else {
            return [i, hashMap[target - nums[i]]];
        }
    }


}
