// if no score property: we suppose his/her score is 0
// KEY: remember to fill 0 in the score first
const users = [
  { id: 1001, name: "Jack", score: 120 },
  { id: 502, name: "Rose", score: 210 },
  { id: 303, name: "Tom" },
  { id: 2010, name: "Mike", score: 210 },
  { id: 2010, name: "Mike", score: 100 },
  { id: 2333, name: "Rose", score: 300 },
  { id: 90, name: "JW", score: 100 },
  { id: 90, name: "Zack", score: 50 },
  { id: 3000, name: "Jason", score: 50 },
  { id: 5302, name: "Jason", score: -80 },
];

function getFirstOneHundred(userList) {
  return userList.filter((eachUser) => eachUser.score === 100)[0];
}

function getScoreGreaterOneHundred(userList) {
  return userList.filter((eachUser) => eachUser.score > 100);
}

function getFirstAndSecond(userList) {
  const [first, second] = userList.sort((a, b) => {
    if (a.score - b.score > 0) {
      // 後面> 前面 ->  >0 正 1 ++ 得正 => 後面比前面大：ascend
      return 1;
    } else if (a.score - b.score < 0) {
      // 後面 < 前面 ->  <0 負 -1 負負得正 => 降冪相反 : ascend
      return -1;
    } else {
      return 0;
    }
  });
  return [first, second];
}

function removeDuplicateAndPrintAllUsersBtw1Sec(users) {
  const uniqueIds = [];
  const uniqueUsers = users.filter((eachObj) => {
    const isDuplicate = uniqueIds.includes(eachObj.id);
    if (isDuplicate) {
      return false;
    } else {
      uniqueIds.push(eachObj.id);
      return true;
    }
  });
  console.log("uniqueUsers", uniqueUsers);
  const sortedArr = uniqueUsers.sort((a, b) => {
    if (a.id - b.id > 0) {
      return 1;
    } else if (a.id - b.id < 0) {
      return -1;
    }
    return 0;
  });
  console.log("sortedArr", sortedArr);
  sortedArr.forEach((eachUser, index) => {
    setTimeout(() => {
      console.log(eachUser);
    }, 1000 * index);
  });
}

// function removeDuplicateObjects(arr, property) {
//   return [...new Map(arr.map((obj) => [obj[property], obj])).values()];
// }

console.log(removeDuplicateAndPrintAllUsersBtw1Sec(users));
