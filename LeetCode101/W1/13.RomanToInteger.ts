function romanToInt(s: string): number {
  const romanNumObj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  const specialRoObj = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  }
  const deductTypeArr = ['I', 'X', 'C'];

  let totalNum = 0;
  let skipFlag = false;

  for (let i = 0; i < s.length; i++) {
    if (skipFlag) {
      skipFlag = false;
      continue;
    }

    if (deductTypeArr.includes(s[i])) {
      const conbimeRoman = s[i] + s[i + 1];
      if (s[i + 1] && Object.keys(specialRoObj).includes(conbimeRoman)) {
        totalNum += specialRoObj[conbimeRoman];
        skipFlag = true;
      } else {
        totalNum += romanNumObj[s[i]];
      }
    } else {
      totalNum += romanNumObj[s[i]];
    }
  }

  return totalNum;

};



/**
 * 13. Roman to Integer  (2022/12/10)
Time: 40 mins (1st time try)
Flow:
1. list all roman to number possibilities
2. for loop each alphabet
    => check if need to skip (skipFlag)
    =>  check if special (e.g. I.X.C)
         => check if specialCombine (e.g. IV, IX ... )
              => specialCombine -> special add
              ^ if no add itSelf
     ^ if no add itSelf
 */