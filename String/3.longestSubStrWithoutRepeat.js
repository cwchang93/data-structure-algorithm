/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestNum = 0;

    if (s.length === 0 || s.length === 1) {
        return s.length;
    }

    const sArr = s.split('');
    for (let i = 0; i < sArr.length; i++) {
        const strArr = [];
        for (let j = i; j < sArr.length; j++) {
            if (strArr.includes(sArr[j])) {
                break;
            } else {
                strArr.push(sArr[j]);
            }
        }
        if (strArr.length > longestNum) longestNum = strArr.length;
    }

    return longestNum;
};