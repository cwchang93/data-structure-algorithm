
// sol 1: hashTable

// sol 2: tmp
function majorityElement(nums: number[]): number {

    nums.sort();
    let tmpNum=nums[0];
    let count =0;
    for (let i=0;i<nums.length;i++) {
        if (nums[i] === tmpNum) count +=1;
        else tmpNum = nums[i];
        if (count >= nums.length/2) {
            return nums[i];
        }
    }
};

console.log(majorityElement([2,2,1,1,1,2,2]));