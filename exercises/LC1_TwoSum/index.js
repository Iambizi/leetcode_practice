// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,2,4], 9) --> [1,2]

function twoSum(arr, target) {
    //object will store key value pairs of numbers visited and their index
    const numsVisited = {}; //{2:0, 7:1}
    //array that will return our correct indices
    const res = [];

    for (let i = 0; i < arr.length; i++){
        // iterate through our array and find its complement number to reach target number
        const num = arr[i];
        const complement = target - num;
    //need to make our if check very specific to avoid errors if we run into a 0 in our array
        if(numsVisited[complement] !== undefined){
            /*
            if the complement to the number we were on has already been found
            we push the current indices of the number we are on to the res array
            */
            res.push(i);
            res.push(numsVisited[complement])
        }
        // set numsVisited to current index we are on.
        numsVisited[num] = i;
    }
    return res;
}

module.exports = twoSum;
