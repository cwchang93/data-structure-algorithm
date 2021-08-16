function findDuplicate(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        const tmpNum = nums[i];
        nums[i] = -1;
        if (nums.includes(tmpNum)) {
            return tmpNum
        }
    }
};

console.log(
    findDuplicate(
        [1, 3, 4, 2, 2])
)

// function findDuplicate(nums: number[]): number {
//     const cpSortedNums = [...nums].sort();
//     for (let i = 1; i < cpSortedNums.length; i++) {
//         if (cpSortedNums[i] === cpSortedNums[i - 1]) {
//             return cpSortedNums[i];
//         }
//     }
// };