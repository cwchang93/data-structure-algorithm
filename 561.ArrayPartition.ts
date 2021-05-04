/**
 *
 * @param nums
 *
 * Psuedo Code:
 *  https://leetcode.com/problems/array-partition-i/
 *
 * DESP: output=> find the max of minimum pairs
 * means the even num won't be added cuz it will be filtered due to min pairs
 * 
 * 1. sort array
 * 2. add all even idx num (from 0 )
 * 
 */

function arrayPairSum(nums: number[]): number {
    const sortedArr = nums.sort((a, b) => a - b);
    let num = 0;
    sortedArr.forEach((ele, i) => {
        if (i % 2 === 0) num += ele;
    })
    return num;
};


