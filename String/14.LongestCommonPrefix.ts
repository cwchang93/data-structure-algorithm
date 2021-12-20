/**
 *
 * @param strs
 * find common prefix
 *
 * Concept
 * strs[0][0]
 *
 *
 */

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  const numOfEle = strs.length;
  let commonPrefix = "";
  for (let i = 0; i < strs[0].split("").length; i++) {
    let tmpPrefix = strs[0][i];
    let commonLen = 0;
    console.log("tmpPrefix", tmpPrefix);
    for (let j = 0; j < strs.length; j++) {
      console.log("strs[j][i]", strs[j][i]);
      console.log("i", i, "j", j);
      if (strs[j][i] === tmpPrefix) {
        commonLen += 1;
      } else {
        console.log("else");
        return commonPrefix;
      }
      if (commonLen === numOfEle) {
        commonPrefix += tmpPrefix;
      }
    }
  }
  return commonPrefix;
}
longestCommonPrefix(["fir", "far"]);

// forEach 裡面包的return只會中斷部份
// function longestCommonPrefix(strs: string[]): string {
//     if (strs.length === 0) return '';
//     const numOfEle = strs.length;
//     let commonPrefix = "";
//     strs[0].split('').forEach((str,i)=>{
//     let tmpPrefix=strs[0][i];
//     let commonLen = 0;
//     console.log('tmpPrefix', tmpPrefix);
//       for (let j=0;j<strs.length; j++) {
//           console.log('strs[j][i]',strs[j][i]);
//           console.log('i', i, 'j', j);
//             if (strs[j][i] === tmpPrefix){
//                 commonLen +=1;
//             } else {
//                 console.log('else');
//                 return commonPrefix;
//             }
//             if (commonLen === numOfEle) {
//                 commonPrefix+=tmpPrefix
//             }
//       }
//       console.log('commonPrefix',commonPrefix);
//    });
//    return commonPrefix;
// };
