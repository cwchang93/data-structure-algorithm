/*
    column =>  1-9
    row => 1-9
    3 x 3 => 1-9

    determine if there's the dulplicate num(1-9) in those three situations;

    1. Column 
    2. row 
    

*/


function isValidSudoku(board: string[][]): boolean {
    function checkIfValid(inputArr:string[]) {
        const hashTable = {};
        for (let i=0; i< inputArr.length; i++) {
            if (inputArr[i] === ".") continue;
            if (!hashTable[inputArr[i]]) {
                hashTable[inputArr[i]] = 1;
            } else {
                return false;
            }
        }
        return true;
    }

    let sqLeft = [];
    let sqMiddle = [];
    let sqRight = [];
    for (let row =0; row< board.length; row++) {
        // check row 
        if (!checkIfValid(board[row])) return false;
        const columnArr = [];
      
        for (let col=0; col<board[row].length; col++) {
            // check column
            columnArr.push(board[col][row]);
            if (col <3) {
                sqLeft.push(board[row][col]);
            } else if ( 3<= col && col <6) {
                sqMiddle.push(board[row][col])
            } else {
                sqRight.push(board[row][col])
            }
            if (sqRight.length ===9) {
                if (!checkIfValid(sqRight) || !checkIfValid(sqMiddle) || !checkIfValid(sqLeft)  ) {
                    return false;
                }
                sqLeft = [];
                sqMiddle = [];
                sqRight = [];
            } 
        }
        if (!checkIfValid(columnArr)) return false;
    }
    return true;

};

// valid (true) => no duplicate; notValid(false) => duplicate num;

var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
      let row = new Set()
      let column = new Set()
      let box = new Set()
      
      for (let j = 0; j < 9; j++) {
        let rowCheck = board[i][j]
        let columnCheck = board[j][i]
        let boxCheck = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]  
        if (rowCheck !== '.') {
          if (row.has(rowCheck)) return false
          row.add(rowCheck)
        }
        
        if (columnCheck !== '.') {
          if (column.has(columnCheck)) return false
          column.add(columnCheck)
        }
        
        if (boxCheck !== '.') {
          if (box.has(boxCheck)) return false
          box.add(boxCheck)          
        }        
      } 
    }
  return true
};



// console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));
console.log(isValidSudoku([
[".",".","4",".",".",".","6","3","."],
[".",".",".",".",".",".",".",".","."],
["5",".",".",".",".",".",".","9","."],
[".",".",".","5","6",".",".",".","."],
["4",".","3",".",".",".",".",".","1"],
[".",".",".","7",".",".",".",".","."],
[".",".",".","5",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."]]
));
// `
// [[".",".","4",".",".",".","6","3","."],
// [".",".",".",".",".",".",".",".","."],
// ["5",".",".",".",".",".",".","9","."],
// [".",".",".","5","6",".",".",".","."],
// ["4",".","3",".",".",".",".",".","1"],
// [".",".",".","7",".",".",".",".","."],
// [".",".",".","5",".",".",".",".","."],
// [".",".",".",".",".",".",".",".","."],
// [".",".",".",".",".",".",".",".","."]]
// `


