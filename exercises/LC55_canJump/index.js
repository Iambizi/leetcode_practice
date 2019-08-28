function canJump(nums) {
    /*along with our array of non negative numbers
    we are also going to create a dp array of boolean values 
    that are either false or true based on wether we can get to the next step
    */

    //but we set the rest to false
    let dpPositions = new Array(nums.length).fill(false);
    // first step is set to true cause thats where we start 
    dpPositions[0] = true;

    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (dpPositions[i] && i + nums[i] >= j) {
                dpPositions[j] = true;
                break;
            }
        }
    }
    return dpPositions[dpPositions.length - 1];
}

module.exports = canJump;
