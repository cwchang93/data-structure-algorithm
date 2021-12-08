// hashmap
function restoreString(s: string, indices: number[]): string {
    const hashTable = {};
    for (let i = 0; i < indices.length; i++) {
        hashTable[indices[i]] = s[i];
    }
    let shffledStr = '';
    Object.keys(hashTable).forEach((ele, i) => {
        shffledStr += hashTable[i]
    })

    return shffledStr;
};

console.log(restoreString('aiohn', [3, 1, 4, 2, 0]))