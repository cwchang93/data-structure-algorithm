// let

for (let i = 0; i < 3; i++) {
  debugger;
 setTimeout(() => {
    console.log(i);
 }, 1000);
}


{

  let i =0;

  { // scope 1
    let i;
    i =0;

    if (i<3) {
      setTimeout(() => {
          console.log(i)
      }, 1000);
    }
  }
  {
    let i;
    i=0;
    i++;

    if (i<3) {
      setTimeout(() => {
          console.log(i)
      }, 1000);
    }

  }
  {
    let i;
    i=1;
    i++;

    if (i<3) {
      setTimeout(() => {
          console.log(i)
      }, 1000);
    }
  }
}


// let number = 0;
// function execute(){
//   if (number===0) {
//     let number = 1;
//     console.log(number);
//   }
//   console.log(number);
// }
// execute();