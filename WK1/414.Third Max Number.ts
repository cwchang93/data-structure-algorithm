/**
    找出第三大的變數
PS: Input: 
- length >= 3 =>  
- length < 3 => find the Max 

思維：
Sol1: O(1);
1. 先把Array的element排序[大到小 or 小到大]
PS. 這邊直接用sort的話會有問題=> e.g. [1,10,2,21,3] 的狀況
2. 刪掉重複的element （只找獨一無二的element）用 [...new Set()]
3. 直接array[]  找出array 元素

Sol2: O(n);Math.max(...<array>) 
1. 找出unique的array;
2.  找出array最大值; 把最大值刪掉或替代成最小值 (for loop 跑2次 or find? indexOf)
3. 替代2次後的Math.max就是最大值
 * 
 */

function thirdMax(nums: number[]): number {

    const uniqueArr = [...new Set(nums)];
    if (uniqueArr.length === 3) {
        return Math.min(...uniqueArr);
    } else if (uniqueArr.length<3) { 
        return Math.max(...uniqueArr);
    } else {
        let tmpMax = Math.max(...uniqueArr);
        uniqueArr.forEach((eachNum,i)=>{
            if (eachNum === tmpMax){
                uniqueArr[i] = Math.min(...uniqueArr);
            }
        })
        tmpMax = Math.max(...uniqueArr);
        uniqueArr.forEach((eachNum,i)=>{
            if (eachNum === tmpMax){
                uniqueArr[i] = Math.min(...uniqueArr);
            }
        });
        // console.log(uniqueArr);
        return Math.max(...uniqueArr);

    }

};

thirdMax([1,2,3,4,5,5,10,-11])