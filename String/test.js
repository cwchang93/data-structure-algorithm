function longestCommonSubStr(str) {

    const strArr = str.split('');
    let longestLen = 0;
    for (let i = 0; i < strArr.length; i++) {

        const base = [];
        let len = 0;
        for (let j = i; j < strArr.length; j++) {
            if (base.includes(strArr[j])) {
                if (len > longestLen) {
                    longestLen = len;
                }
                len = 0;
            } else {
                base.push(strArr[j]);
                len += 1;
            }
        }
    }
    return longestLen;

}