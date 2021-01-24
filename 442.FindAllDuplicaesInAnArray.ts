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

function findDuplicates(nums: number[]): number[] {
    nums.sort();
    console.log(nums);
    let tmpNum; 
    const duplicateArr = [];
    for (let i=0; i< nums.length; i++) {
        if (tmpNum === nums[i]) duplicateArr.push(nums[i]);
         else tmpNum = nums[i];
    }
    return duplicateArr;
};

console.log(findDuplicates([4,3,2,7,8,3,2,1,9,10,9]))