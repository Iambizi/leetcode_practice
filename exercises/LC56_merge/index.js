const merge = intervals => {
    //First sort all intervals by their starting value from least to greatest
    if (!intervals.length) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    const res = [intervals[0]];

    for (let i = 0; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastInterval = res[res.length - 1]

        // check to see if intervals overlap
        if (currentInterval[0] <= lastInterval[1]) {
            // whichever is greater will be new value for latest interval
            lastInterval[1] = Math.max(currentInterval[1], lastInterval[1]);
        } else {
            res.push(currentInterval);
        }
    }
    return res;
};

module.exports = merge;
