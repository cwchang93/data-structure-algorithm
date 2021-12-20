// Input: s = "bcabc"
// Output: "abc"

/**
 * 1. remove duplicate string
 * 2. list all kinds of 
 * @param s 
 * 
 * 重複的字母刪掉，並依照原本的排序且依照lexicographical order 
 * 一定是小寫
 * 
 */

function removeDuplicateLetters(s: string): string {
    const stack = []
    const counter = Array(26).fill(0)
    const used = Array(26).fill(false)
    const arr = s.split('')
    const aCode = 'a'.charCodeAt(0)
    let output = '';
    for (let c of arr) {
        counter[c.charCodeAt(0) - aCode]++
    }
    for (let c of arr) {
        const cCode = c.charCodeAt(0);
        counter[c.charCodeAt(0)];
        counter[cCode - aCode]--
        if (used[cCode - aCode]) {
            continue
        }
        while (stack.length > 0) {
            const topCode = stack[stack.length - 1].charCodeAt(0)
            if (topCode > cCode && counter[topCode - aCode] > 0) {
                used[topCode - aCode] = false;
                stack.pop()
            } else {
                break
            }
        }
        stack.push(c)
        used[cCode - aCode] = true
    }
    for (let c of stack) {
        output += c
    }
    return output;
};

console.log(removeDuplicateLetters(""))