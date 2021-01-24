function fizzBuzz(n: number): string[] {
    const arr = [];
    for(let i=1; i<=n; i++) {
        let tmpStr ='';
        if (i%3 ===0) tmpStr += "Fizz";
        if (i%5 ===0) tmpStr +="Buzz";
        if (!tmpStr) tmpStr = String(i);
        arr.push(tmpStr);
    }
    console.log(arr);
    return arr;
};

fizzBuzz(25);