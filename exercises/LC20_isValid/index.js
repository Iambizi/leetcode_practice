
// we solve this problem using a stack
const isValid = s => {
    let stack = [];
    let pairsHashMap = { "(": ")", "{": "}", "[": "]" };
    // we are going to iterate through every character in our input string
    // during for loop if char we are on is one the left ones we append to stack
    // if char we are on is on the right (the closing one of the pairs or inverse) we pop it off the stack
    for (let i = 0; i < s.length; i++) {
        // current char we are on
        let char = s[i];

        if (pairsHashMap[char]) {
            stack.push(char);
        } else if (pairsHashMap[stack.pop()] !== char) {
            return false;
        }
    }
    // we need to check that stack length is indeed = 0 before we return true;
    return stack.length === 0;
};

module.exports = isValid;
