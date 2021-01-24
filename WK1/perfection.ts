
function perfection (num:number){ 
    let sum =0;
    for(let i=1; i< ((num+1)/2); i++){
        if (num% i === 0) {
            sum+=i;
        }
    }
    switch(true) {
        case sum > num: 
            console.log('ABUNDANT');
            break;
        case sum === num:
            console.log('Perfect');
            break;
        case sum < num: 
            console.log('deficient');
            break;
    }
}

/**
 * 1. 跑回圈時不用每個都跑=> 因為因數是成對的
 * 2. 三種狀況可以用switch case, switch true然後下面寫不同狀況
 */


// function perfection (num:number){ 
//     let sum =0;
//     const factorArr = [];
//     for(let i=1; i< ((num+1)/2); i++){
//         // for(let i=1; i< num; i++) {
//         console.log('called', i);

//         if (num% i === 0) {
//             sum+=i;
//             factorArr.push(i)
//         }
//     }
//     console.log('factorArr', factorArr);
//     switch(true) {
//         case sum > num: 
//             console.log('ABUNDANT');
//             break;
//         case sum === num:
//             console.log('Perfect');
//             break;
//         case sum < num: 
//             console.log('deficient');
//             break;
//     }
// }

// const inputNum = Number(prompt('Enter the Number:'));
// perfection(inputNum);

perfection(100);