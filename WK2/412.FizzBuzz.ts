function fizzBuzz(n: number): string[] {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        let tmpStr = '';
        if (i % 3 === 0) tmpStr += "Fizz";
        if (i % 5 === 0) tmpStr += "Buzz";
        if (!tmpStr) tmpStr = String(i);
        arr.push(tmpStr);
    }
    console.log(arr);
    return arr;
};

fizzBuzz(25);


/** 2022/12/28 the same
 * function fizzBuzz(n: number): string[] {

   const answer = [];

   for (let i=1; i<= n; i++ ) {
       let str =''
       if (i % 3 === 0) {
           str += "Fizz"
       }
       if (i % 5 === 0) {
           str += "Buzz"
       }

       if (!str) {
           str = String(i)
       }
       answer.push(str)

   }
    return answer;
};
 *
 *
 *
 */