/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const originArr = [
        [1]
    ]
    if (rowIndex === 0) {
        return originArr[0];
    } else if (rowIndex === 1) {
        return [1, 1];
    }

    let numRows = rowIndex + 1;

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
        // if (i === numRows) return originArr;
    }
    // console.log('fullMiddleArr', fullMiddleArr)
    return fullMiddleArr;
};

console.log(getRow(0))
console.log(getRow(4))
console.log(getRow(5))