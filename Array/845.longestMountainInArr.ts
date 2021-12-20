function longestMountain(arr: number[]): number {

    let increase = 1;
    let decrease = 0;

    let curNum = arr[0];

    const allMountainLenArr = [0];

    let isUp = true;
    let sum = 0;
    if (arr.length <= 1) return 0;
    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > curNum) {
            console.log(curNum);
            if (!isUp) {
                sum += decrease;
                allMountainLenArr.push(sum);
                sum = 0;
                increase = 1;
                decrease = 0;
            }
            increase += 1;
            isUp = true;
        } else if (arr[i] < curNum) {
            if (isUp) {
                sum += increase;
                // allMountainLenArr.push(sum);
            }
            decrease += 1;
            isUp = false;

            console.log('increase', increase);
            console.log('decrease', decrease);
            if (i === arr.length - 1) {
                sum = decrease + increase;
                allMountainLenArr.push(sum);
            }
        } else {
            return 0;
        }
        curNum = arr[i];
    }
    console.log('allMountainLenArr', allMountainLenArr)
    return Math.max(...allMountainLenArr);
};

console.log(longestMountain([0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]))


