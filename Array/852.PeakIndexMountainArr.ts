/**
 * 
 * @param arr 
 * @returns 
 * 
 * find the maximum Num, and return it's index
 * Sol 1. Based on all mountains array => just return prevIdx when find the number is lower than prevOne
 * 
 * Sol 2. Brute force: for loop find Max one
 * 
 * Sol 3. sort and find the last index
 */

// sol1
// function peakIndexInMountainArray(arr: number[]): number {

//     let prevNum = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > prevNum) {
//             prevNum = arr[i];
//         } else {
//             return i - 1
//         }
//     }
// };


// sol 2 
function peakIndexInMountainArray(arr: number[]): number {
    const duplicateArr = [...arr];
    const peakNum = duplicateArr.sort((a, b) => a - b)[arr.length - 1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === peakNum) return i;
    }
};

console.log(peakIndexInMountainArray([0, 1, 0]))
