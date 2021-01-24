function isIsomorphic(s: string, t: string): boolean {
    const hashTable = {};
    const duplicateArr = [];
    for (let i = 0; i < s.length; i++) {
        if (hashTable[s[i]] && hashTable[s[i]] !== t[i]) {
            console.log('falseif')
            return false
        } else {
            hashTable[s[i]] = t[i];
            if (s[i] === t[i]) duplicateArr.push(t[i])
        }
        if (duplicateArr.includes(t[i]) && t[i] !== s[i]) return false;
    }
    return true;
};

// function isIsomorphic(s: string, t: string): boolean {
//     const hashTable = {};
//     s.split('').forEach((ele, i) => {   // foreach 會把每個都跑完
//         if (hashTable[s[i]] && hashTable[s[i]] !== t[i]) return false
//         else hashTable[s[i]] = t[i]
//     });
//     return true;
// };


console.log(isIsomorphic('paper', 'title'));