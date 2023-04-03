// Existing Array.reduce() function
const array = [10, 20, 30, 40];
const reducer = (accumulator, currentValue) => {
  return accumulator + currentValue;
}
const result = array.reduce(reducer);
console.log(result);
// expected output: 100


// Your code goes here
function customReduce(arr, reducer, initialValue = 0) {
  // Write Code
}

const customResult = customReduce(array, reducer, 0);
console.log(customResult);


function customReduce(arr, reducer, initialValue = 0) {

  let accVal = initialValue;

  arr.forEach((ele)=>{
      accVal = reducer(accVal, ele)
  })

  return accVal

}