const dupArr = [1, 2, 3, 3, 2, 1];

new Set(dupArr);

// 1. set
// [...new Set(dupArr)];

// 2. extra space;
// function removeDuplicate(arr){
//     const uniqueArr = [];
//     for (let i=0; i<arr.length; i++) {
//          if (uniqueArr.includes(arr[i])) continue;
//          else uniqueArr.push(arr[i]);
//     }
//      return uniqueArr;

//  }


// 3. assign to another ()
function rmDulOptimize(arr) {
    arr.sort();
    let falseNum = 0;
    arr.forEach((ele,i)=>{
        if (ele === arr[i+1]) {
          arr[i] = false;
          falseNum +=1;
        }       
    })

    arr.sort();
    for (let i=0; i<falseNum; i++) {
       arr.pop(); 
    }
    return arr;
 }


// 4. 
// dupArr2.filter((num, i, arr) => arr.indexOf(num) === i)