// input
const arr = ["red", "orange", "yellow", "green", "blue", "purple", "black", "white"];

// output
// ["abckl", "aegnor", "belu", "der", "eegnr", "ehitw", "ellowy", "elppru"]


function reverseArr(arr: string[]) {
    return arr.map((ele: string) => ele.split('').reverse().join('')).sort();
}

console.log(reverseArr(arr));

