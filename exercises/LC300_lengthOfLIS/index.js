// we will use a dp array to help solve this problem
function lengthOfLIS(nums) {
    // edge case cause if no number in sequence then biggest increase is indeed 0
    if (nums.length === 0) return 0;
    // our dp array is the same length as our input array and initially filled with ones
    let dpSubsequence = new Array(nums.length).fill(1);
    let maxSoFar = 1;

    // j and i markers that loop through our input array
    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (nums[j] > nums[i]) {
                dpSubsequence[j] = Math.max(dpSubsequence[i] + 1, dpSubsequence[j])
            }
        }
        maxSoFar = Math.max(maxSoFar, dpSubsequence[j]);
    }
    return maxSoFar;
}

module.exports = lengthOfLIS;
