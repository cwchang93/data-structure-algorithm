
// var
// for (var i = 0; i < 3; i++) {

//    debugger;
//    setTimeout(() => {
//       console.log(i);
//    }, 1000);

// }


// dive in deeper

var i=0;

if (i<3) {
   setTimeout(() => {
    console.log(i);
 }, 1000);
}

i++;

if (i<3) {
   setTimeout(() => {
    console.log(i);
 }, 1000);
}

i++;

if (i<3) {
   setTimeout(() => {
    console.log(i);
 }, 1000);
}

i++;


// IIFE
// for (var i = 0; i < 3; i++) {

//   (function(i){
//      setTimeout(() => {
//       console.log(i);
//    }, 1000);
//   })(i);

// }

// // Closure
// for (var i=0; i<3; i++) {

//    function timeoutFunc(i){
//       setTimeout(() => {
//          console.log(i)
//       }, 1000*i);
//    }

//    timeoutFunc(i);
// }