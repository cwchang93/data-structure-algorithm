/**
 Do not return anything, modify nums in-place instead.
1. https://leetcode.com/submissions/detail/447052874/   one loop
2. https://leetcode.com/submissions/detail/447046368/   one loop * 2 
 */

function rotate(nums: number[], k: number): void {
    const timesOfRotate = k % nums.length;
    if (nums.length === 0 || nums.length === 1 || timesOfRotate === 0) return;
    const newArr = [...nums];
    const len = nums.length;
    let idx = len - timesOfRotate;

    for (let i = 0; i < len; i++) {
        nums[i] = newArr[idx];
        idx += 1;
        if (idx === len) idx = 0;
    }
    console.log(nums);
};

console.log(rotate([0, 1, 2, 3], 0))


// for (let i = len - timesOfRotate; i < len; i++) {
//     nums[idx] = newArr[i]
//     idx += 1;
// }
// for (let j = 0; j < len - timesOfRotate; j++) {
//     nums[idx] = newArr[j];
//     idx += 1;
// }