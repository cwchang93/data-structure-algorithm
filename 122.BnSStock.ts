/**
 * 
 * @param prices 
 * 
 * Can buy and sells multiple times, but can't make it at the same day!
 * 
 * Concept: buy at low points, sell at (relative) high point
 * Key: if it's gonna become low => sell instead!!  
 * prices[0]   prices[1]  
 * if later > previous => keep it; if < => sell it beforehand
 * after sold it => buy again and sell it at the relative high points
 * 
 */



function maxProfit(prices: number[]): number {

    let totalProfit = 0;
    let lowPoint = prices[0];
    let currentProfit = 0;
    for(let i =0; i< prices.length; i++) {
        if (i!==0&& prices[i]<prices[i-1]) {
            totalProfit += currentProfit;
            lowPoint = prices[i]; 
            currentProfit =0;
        }
        if (prices[i]> lowPoint) {
            currentProfit = prices[i] - lowPoint;
        } 
        if (i === prices.length -1 && currentProfit>0) totalProfit+=currentProfit; 
    }

    return totalProfit

};