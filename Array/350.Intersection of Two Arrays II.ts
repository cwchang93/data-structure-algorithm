/**
 * Process
 * use shorter Arr to mapping element in Longer Arr and push into New Arr
 * @param nums1 
 *  
 * 
 * @param nums2 
 */

// function intersect(nums1: number[], nums2: number[]): number[] {
//     let longArr, shortArr;
//     const finalArr = [];
//     if (nums1.length > nums2.length) {
//         longArr = nums1;
//         shortArr = nums2;
//     } else {
//         longArr = nums2;
//         shortArr = nums1;
//     }

//     shortArr.forEach((ele, i) => {
//         if (longArr.includes(ele)) {  //&& !finalArr.includes(ele)
//             finalArr.push(ele);
//             longArr[longArr.indexOf(ele)] = false;
//         }
//     })
//     return finalArr
// };


function intersect(nums1: number[], nums2: number[]): number[] {
    return nums1.filter(value => nums2.includes(value));
};



console.log(intersect([3, 1, 1, 2], [1, 1]));