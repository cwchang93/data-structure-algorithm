/**
 * 
 * @param nums 
 * Input: [0,1,0,3,12]
   Output: [1,3,12,0,0]

    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.

 */

/**
 * 1. 先判斷有幾個0
 * 2. create新的array把0篩選掉 =>
 * 3. 用原本的array跑2次回圈 
 *    第一次塞沒有0的array裡面的值，
 *    第二次塞0
 */

/**  15mins */
function moveZeroes(nums: number[]): void {

    const nonZeroArr = [...nums].filter((ele)=> ele!==0);
    let numOfZero = 0;
    nums.forEach((ele)=> {if (ele ===0) numOfZero+=1});

    const zeroArr = new Array(numOfZero).fill(0);
    const combinedArr = nonZeroArr.concat(zeroArr)
    for (let i=0; i<nums.length; i++) {
        nums[i] = combinedArr[i]
    }

};