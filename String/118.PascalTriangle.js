/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {


    const originArr = [
        [1]
    ]
    if (numRows === 1) {
        return originArr;
    } else {
        originArr.push([1, 1]);
        if (numRows === 2) return originArr;
    }

    function genMiddle(arr) {
        const middleArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (i !== arr.length - 1) {
                const added = arr[i] + arr[i + 1];
                middleArr.push(added);
            }
        }
        return middleArr;
    }

    let tmpMiddleArr = [1, 1];
    let fullMiddleArr;
    for (let i = 3; i <= numRows; i++) {
        const resultMiddleArr = genMiddle(tmpMiddleArr);
        fullMiddleArr = [1, ...resultMiddleArr, 1];
        originArr.push(fullMiddleArr);
        tmpMiddleArr = fullMiddleArr;
        if (i === numRows) return originArr;
    }
    // return fullMiddleArr;

};

console.log(generate(5));