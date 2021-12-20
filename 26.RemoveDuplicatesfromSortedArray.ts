/*
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
*/

function removeDuplicates(nums: number[]): number {

    const tmpArr = [];
    const originArrLen = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (!tmpArr.includes(nums[i])) {
            tmpArr.push(nums[i])
        }
    }

    for (let j = 0; j < tmpArr.length; j++) {
        nums[j] = tmpArr[j];
    }

    for (let k = 0; k < originArrLen - tmpArr.length; k++) {
        nums.splice(nums[nums.length - 1], 1)
    }
    return nums.length;
}

// function removeDuplicates(nums: number[]): number {
//     let start = nums[0];
//     let end = nums[nums.length - 1];
//     let len = end - start + 1;
//     let originNumLen = nums.length;

//     for (let i = 1; i < len; i++) {
//         start += 1
//         nums[i] = start;
//     }
//     for (let j = len; j < originNumLen; j++) {
//         nums.splice(nums.length - 1, 1);
//     }
//     return nums.length;
// };

// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
removeDuplicates([1, 1, 2]);