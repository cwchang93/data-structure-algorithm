/**
 * Process
 * use shorter Arr to mapping element in Longer Arr and push into New Arr
 * @param nums1 
 *  
 * 
 * @param nums2 
 */

function intersect(nums1: number[], nums2: number[]): number[] {
    let longArr, shortArr;
    if (nums1.length > nums2.length) {
        longArr = nums1;
        shortArr = nums2;
    } else {
        longArr = nums2;
        shortArr = nums1;
    }
    const finalArr = [];
    shortArr.forEach((ele, i) => {
        if (longArr.includes(ele) && !finalArr.includes(ele)) {
            finalArr.push(ele);
        }
    })
    return finalArr
};