



/**
 * 
 * @param words 
 * Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
 * @param chars 

RePhrase: 
chars 有沒有包含word的所有元素，有的話把該長度累計，求總累計數值。

Psuedo Code:
1. 用


 */





function countCharacters(words: string[], chars: string): number {
    let countSum = 0;
    words.forEach((word) => {
        let cpChars = chars;
        let cpWord = word;
        for (let i = 0; i < word.length; i++) {
            let charIdx = cpChars.indexOf(word[i]);
            if (charIdx > -1) {
                cpChars = cpChars.replace(word[i], '');
                cpWord = cpWord.replace(word[i], '');
            } else {
                continue;
            }
            if (cpWord === '') countSum += word.length;

        }
    })
    return countSum;
};

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));