


// const arr = [1,2,3,4];


// arr.forEach((ele)=>{
//   arr.push((ele+200))
//   console.log(ele);
// })


let arr = new Set([1,2,3,4]);

for (let it=arr.values(), val = null; val = it.next().value;) {
  arr.add(val+100);
  console.log('first', val)
}
