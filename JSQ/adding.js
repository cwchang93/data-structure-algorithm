// 請寫出以下能夠符合以下兩種條件的function
// input plus(2,3)  // 5
// input plus(2)(3)  //6


function plus(...args) {
    const arr = args;
    let result = 0;
    // function adding(num) {
    //     return num;
    // }
    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        return result;
    } else {
        return function(num) {
            return args[0] + num;
        }
    }

}

console.log(plus(2)(3));
console.log(plus(2, 3));