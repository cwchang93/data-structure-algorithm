function containsDuplicate(nums: number[]): boolean {
  const comparedArr = [];
  let flag = false;
  nums.forEach((ele: number) => {
    if (comparedArr.includes(ele)) {
      flag = true;
    }
    comparedArr.push(ele);
  })
  return flag;

};