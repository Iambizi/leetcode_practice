function coinChange(coins, amount) {
    /* create dp array fill with infinty value except for value at index 0, start at 0*/
    let dpMinCoins = new Array(amount + 1).fill(Infinity);
    dpMinCoins[0] = 0;

    //nested for loops fill up our dp array 
    for (let i = 1; i < dpMinCoins.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            const coinValue = coins[j];
            if (coinValue <= i) {
                dpMinCoins[i] = Math.min(dpMinCoins[i - coinValue] + 1, dpMinCoins[i])
            }
        }
    }
    const answer = dpMinCoins[dpMinCoins.length - 1];
    // to account for last test when change is not possible we se 
    return answer === Infinity ? -1 : answer;
}

module.exports = coinChange;
