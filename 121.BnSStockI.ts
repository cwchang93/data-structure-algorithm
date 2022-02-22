/**
 *
 * @param prices
 * 找出array裡面右邊比左邊最大的差距
 * 1. 土炮：雙迴圈
 * 2. tmpMin, tmpMax
 * 跑回圈
 * profit = 值 - tmp最小
 *
 */

function maxProfit(prices:number[]):number{
    let lowest = prices[0];
      let profit = 0;
    for (let i=1;i<prices.length; i++) {
        const currentProfit = prices[i] - lowest;
          if (currentProfit > profit) profit =currentProfit;
        if (prices[i]< lowest) lowest = prices[i];
    }
    return profit;
}

// function maxProfit(prices: number[]): number {
//     let profit = 0;
//     for(let i=0; i< prices.length; i++) {
//         for(let j=i+1; j<prices.length; j++) {
//             if (prices[j] - prices[i] > profit) {
//                 profit = prices[j] - prices[i];
//             }
//         }
//     }
//     return profit
// };


    // const hashTable = { }
    // let profit = 0;
    // for (let i=0; i<prices.length; i++) {
    //     if (prices[0] - ){

    //     }
    // }
