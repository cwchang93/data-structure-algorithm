/*
Q2.1: Please implement below multiply function to make it work.
multiply(2)(5); // 10

function multiply(num) {
  // your code here
}


Q2.2: Similar to 3.1, but now multiply allow arbitrary number of parameters, please implement below multiply function to make it work.
multiply(2)(5); // 10
multiply(3)(4)(5); // 60
multiply(2)(3)(4)(5); // 120

function multiply(num) {
  // your code here
}
*/

// 2.1
function multiply(num){

  return function double(num2) {
    return num * num2;
  }

}


