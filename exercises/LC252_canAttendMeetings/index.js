// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true

const canAttendMeetings = intervals => {
    // separate start and end times in 2 distinctive arrays and sort them from lease to greates
    // we loop through Starts array
    /* check if the start time at one index ahead is less than end time at current index 
    
    If so it overlaps and you can't attend meeting*/
    //hence return false
    const starts = [];
    const ends = [];

    //Fill up starts and ends
    for (let i = 0; i < intervals.length; i++) {
        const subArray = intervals[i];
        starts.push(subArray[0]);
        ends.push(subArray[1]);
    }
    // sorting both array from least to greatest
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    for (let i = 0; i < starts.length; i++) {
        if (starts[i + 1] < ends[i]) return false;
    }
    // when the loop finishes finishes and never returns false then we return true
    return true;
};

module.exports = canAttendMeetings;
