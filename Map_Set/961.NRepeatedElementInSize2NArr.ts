/**
 * 
 * @param nums 
 * 
 * Sol 1
 * 1. sort and return num if the same;
 * 
 * 2. hashMap to record times of element
 * 
 */

// Sol 1  5.26%
// function repeatedNTimes(nums: number[]): number {
//     const sortedArr = [...nums].sort();
//     for (let i = 0; i < sortedArr.length; i++) {
//         if (sortedArr[i] === sortedArr[i + 1]) return sortedArr[i];
//     }
// };

// Sol 2 
function repeatedNTimes(nums: number[]): number {
    const hashMap = {};
    for (let num of nums) {
        if (hashMap[num]) {
            hashMap[num] += 1;
        } else {
            hashMap[num] = 1;
        }
    }
    for (let key in hashMap) {
        if (hashMap[key] > 1) return parseInt(key);
    }
};

// console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]));