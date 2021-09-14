
// sol1 sort();
// function isAnagram(s: string, t: string): boolean {
//     return s.split('').sort().join('') === t.split('').sort().join('')
// };


function isAnagram(s: string, t: string): boolean {

    const hashMap1 = {}
    const hashMap2 = {};

    if (s.length !== t.length) return false;
    const calcNum = (originArr: string[], hashMap) => {
        originArr.forEach((ele) => {
            if (hashMap[ele]) {
                hashMap[ele] = hashMap[ele] + 1
            } else {
                hashMap[ele] = 1
            }
        })
    };

    calcNum(s.split(''), hashMap1);
    calcNum(t.split(''), hashMap2);

    const keyArr = [...new Set(s.split(''))];
    for (let i = 0; i < keyArr.length; i++) {
        if (hashMap1[keyArr[i]] !== hashMap2[keyArr[i]]) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram('anagram', 'nagaram'))

