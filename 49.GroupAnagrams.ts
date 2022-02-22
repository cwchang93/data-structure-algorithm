function groupAnagrams(strs: string[]): string[][] {

    const mainArr = [];

    function ifAnagrams(str1: string, str2: string) {
        return str1.split('').sort().join('') === str2.split('').sort().join('');
    }
    const subArr = [];
    for (let i = 0; i < strs.length; i++) {
        const baseArr = [strs[i]];

        for (let j = i + 1; j < strs.length; j++) {
            const sortStr = strs[j].split('').sort().join('');
            if (ifAnagrams(strs[i], strs[j])) {
                // if (ifAnagrams(strs[i], strs[j]) && !subArr.includes(sortStr)) {
                baseArr.push(strs[j]);
                // subArr.push(strs[j].split('').sort().join(''));
            }
        }

        mainArr.push(baseArr);
    }
    return mainArr;

};



console.log(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
)