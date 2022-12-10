function validAnagram(s, t) {
  const obj1 = {};
  const obj2 = {};
  if (s.length !== t.length) return false;
  let flag = true;
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  Object.keys(obj1).map((ele) => {
    if (obj1[ele] !== obj2[ele]) {
      flag = false;
    }
  });
  return flag;
}

console.log(validAnagram("rat", "car"));
