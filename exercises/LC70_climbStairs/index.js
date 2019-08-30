// We can notice patterns in how we determine the number of ways to get to said steps
// const climbStairs = n => {
//     //for steps 1 to 3 the number of ways to get to that step matches the number
//     if (n <= 3) return n;

//     let ways = [0, 1, 2, 3]
//     /* for step 4 There is a fibonacci sequence 
//     meaning we can add up the previous two values from the 4th step 
//     to give you the number of ways to get to said step and so on*/
//     for (let i = 4; i <= n; i++) {
//         ways.push(ways[i - 1] + ways[i - 2]);
//     }

//     return ways[n];
// };

// current space complexity is o(n) because 
// If we were asked to reduce space complexity to o(1) instead we'll use pointer variables for the values we add (first and start)
// with following solution we would avoid creating an array that relies on imput for it's size

function climbStairs(n) {
    if (n === 1) {
        return n;
    }

    let first = 1;
    let second = 2;

    //logic of the fibonacci sequence
    for (let i = 3; i <= n; i++) {
        const third = first + second;
        first = second;
        second = third;
    }

    return second;
}

module.exports = climbStairs;
