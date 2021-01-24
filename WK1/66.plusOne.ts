// function plusOne(digits: number[]): number[] {
//     const digitsLen = digits.length;
//     const finalArr = [];
//     let addOneToNewDigit = false;
//     for (let i=digitsLen-1; i>=0; i-- ){
//         let pushedNum = digits[i];
//         if (i === digitsLen-1) {
//             pushedNum += 1;
//         }
//         if (addOneToNewDigit){
//             pushedNum+=1;
//         }
//         if (pushedNum === 10){
//             if (i === 0) {
//                 finalArr.unshift(1,0) 
//             } else {
//                 finalArr.unshift(0);
//             }
//             addOneToNewDigit =true;
//         } else{
//             finalArr.unshift(pushedNum);
//             addOneToNewDigit = false;
//         }
//     }
//     return finalArr;
// }
// function plusOne(digits: number[]): number[] {
//     /*  1. 判斷digits有幾位數 digitsValLen
//         2. 把值化成數字  digitsVal
//         3. 把值+1  
//         4. 把值放進array
//         5. 跟原本的digits比較差幾位數，少於digits則補0進去(到前面)  [0,0,9,9]   => 100 => [1,0,0] => [0 , 1, 0,0]
//     */
//     const digitsLen = digits.length;
//     let digitsVal =0;
//     // for(let i = digitsLen-1; i>0;i--) {
//     //     digitsVal += digits[] * 10 **i ;
//     // }
//     digits.map((ele,i)=> {
//         digitsVal += ele * 10 **(digitsLen -i -1);
//         console.log('add',digitsVal);
    
//     });
//     console.log(digitsVal);
//     digitsVal +=1;
//     const plusOneArr = String(digitsVal).split('');
//     const finalArr = [];
//     plusOneArr.map((ele,i)=>{
//         console.log('ele',ele);
//         finalArr.push(Number(ele));
//     });
//     if (finalArr.length < digitsLen){
//         const lenGap = digitsLen - finalArr.length;
//         for(let i=0; i<lenGap; i++) {
//             finalArr.push(0);
//         }
//     } 
//     console.log(finalArr);
//     return finalArr;
// };

// // plusOne([1,2,3]);
// plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);

function plusOne(digits: number[]): number[] {
    const newArr = [...digits];
    let plusOneNum = Number(newArr.join('')) +1;
    console.log('plusOneNum', plusOneNum);
    // compare length;
    let addZeroLen = 0;
    const finalDigitsArr = [];
    if ((String(plusOneNum)).length < newArr.length) {
        addZeroLen = newArr.length - (String(plusOneNum)).length;
        for(let i=0; i< addZeroLen; i++) {
            finalDigitsArr.push(0);
        }
    }

    const plusOneStrArr =  (String(plusOneNum)).split('');
    console.log(plusOneStrArr);
    for (let i=0; i< plusOneStrArr.length; i++) {
        finalDigitsArr.push(Number(plusOneStrArr[i]));
    }
    
    console.log(finalDigitsArr);
    return finalDigitsArr;
};

plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])
// plusOne([9,9,9])