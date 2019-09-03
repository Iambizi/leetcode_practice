const eraseOverlapIntervals = intervals => {
    if (intervals.length === 0) return 0;
    //The amount of removal we did this is what the problem wants us to return 
    let count = 0;

    // sort array of intervals by starting interval times least to greatest

    intervals.sort(function (a, b) { return a[0] - b[0] });
    /* to save on space complexity we represent previous interval ending time with a variable called end*/
    let end = intervals[0][1];

    //Start for loop that iterates at second element.

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        const intervalStart = interval[0];
        const intervalEnd = interval[1];

        /*check if current element intersects with previous interval 
        if so remove the interval with the highest end*/

        if (intervalStart < end) {
            // we do removal by increasing count
            count++
            end = Math.min(intervalEnd, end)
        } else {
            end = intervalEnd;
        }
    }
    return count
};

module.exports = eraseOverlapIntervals;
