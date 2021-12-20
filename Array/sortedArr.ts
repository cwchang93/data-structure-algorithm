// Given 2 sorted Array, merged into one array.
const array1 = [0, 3, 4, 31];
const array2 = [1, 4, 6, 30];
// -> [0, 1, 3, 4, 4, 6, 30, 31]

function merged(arr1: number[], arr2: number[]): number[] {

    const oriArr = [...array1, ...array2];
    const sortedArr = [];
    let ori1 = arr1[0];
    let ori2 = arr2[0];
    let idx1 = 0;
    let idx2 = 0;
    for (let i = 0; i < oriArr.length; i++) {
        if (typeof ori2 === 'undefined') {
            sortedArr.push(ori1);
            idx1+=1;
            break;
        } else if (typeof ori1 === 'undefined'){
            sortedArr.push(ori2)            
            idx2+=1;
            break;
        }

        if (ori1 < ori2) {
            sortedArr.push(ori1);
            if (idx1 < arr1.length) {
                idx1 += 1;
            }
            ori1 = arr1[idx1];
        } else {
            sortedArr.push(ori2);
            if (idx2 < arr2.length) {
                idx2 += 1;
            }
            ori2 = arr2[idx2];
        }
    }

    return sortedArr;
}

console.log(merged(array1, array2))
