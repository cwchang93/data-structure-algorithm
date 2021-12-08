// function findDuplicates(nums: number[]): number[] {
//     const hashMap = {};
//     const twiceArr=[];
//     for (let i=0;i<nums.length;i++) {
//         if (hashMap[nums[i]]) {
//             hashMap[nums[i]] = hashMap[nums[i]]+1;
//             twiceArr.push(nums[i]);
//         } else {
//             hashMap[nums[i]] = 1;
//         }
//     }
//     return twiceArr;
// };

// console.log(findDuplicates([4,3,2,7,8,3,2,1]))

// function findDuplicates(nums: number[]): number[] {
//     nums.sort();
//     console.log(nums);
//     let tmpNum; 
//     const duplicateArr = [];
//     for (let i=0; i< nums.length; i++) {
//         if (tmpNum === nums[i]) duplicateArr.push(nums[i]);
//          else tmpNum = nums[i];
//     }
//     return duplicateArr;
// };


// 因為題目給 1<= a[i <=n ] n = size of array; 因此可知特定長度的array中的element 一定是從1開始到array的長度
// 所以可以拿數字來當作index 做記號！

function findDuplicates(nums: number[]): number[] {
    const duplicateArr = [];  // 回傳的東西不算在空間複雜度
    for (let i = 0; i < nums.length; i++) {
        const newIdx = Math.abs(nums[i]) - 1;
        if (nums[newIdx] < 0) duplicateArr.push(Math.abs(nums[i]));
        nums[newIdx] = -nums[newIdx] // *= -1
    }
    return duplicateArr;
};


// from AC
function findDuplicates(nums: number[]): number[] {
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1
        if (nums[index] > 0) {
            nums[index] *= -1;
        } else {
            ans.push(index + 1);
        }
    }
};

console.log(findDuplicates([4, 3, 2, 7, 8, 3, 2, 1, 9, 10, 9]))