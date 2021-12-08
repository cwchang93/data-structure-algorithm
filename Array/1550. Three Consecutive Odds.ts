function threeConsecutiveOdds(arr: number[]): boolean {
    let oddNum = 0;
    let flag = false;
    for (let num of arr) {
        if (num % 2 !== 0) {
            oddNum += 1
        } else {
            oddNum = 0;
        }
        console.log(oddNum);
        if (oddNum === 3) {
            flag = true;
        }
    }
    return flag;
};

console.log(threeConsecutiveOdds([1, 1, 1]));

