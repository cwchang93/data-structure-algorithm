// function isPowerOfTwo(n: number): boolean {
//     if (n === 1) return true;
//     if (n <= 0) return false;
//     let tmpN = n;
//     for (let i=0; i< n; i++) {
//         tmpN %=2;
//         if (tmpN === 1) {
//             return true;
//         } else if (tmpN % 1 !== 0){
//             return false;
//         }
//     }
// }


/**
 * 
 * @param n Runtime: 112 ms, faster than 37.50% of TypeScript online submissions for Power of Two.
 */

function isPowerOfTwo(n: number): boolean {
    let i = 1;
    if (n===1) return true;
    while( i <n ) {
        if (i*2 ===n) return true; 
        i *=2;
    }
    if (i>n || n<0) return false;
}; 

console.log(isPowerOfTwo(8));

// function isPowerOfTwo(n: number): boolean {

//     for (let i=0; i< n; i++){
//         if (2 ** i === n) return true;
//     }
//     return false;
// }; 