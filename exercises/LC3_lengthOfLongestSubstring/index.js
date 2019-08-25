// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

// Solving this using sliding window approach
function lengthOfLongestSubstring(s) {
    // our sliding window
    let windowCharsMap = {};
    let windowStart = 0;

    let maxLength = 0;
    // increments from this for loop represents where we are on in our for loop
    for (let i = 0; i < s.length; i++) {
        //current character
        const endChar = s[i];
        //checking if the current character as already been found in the window
        if (windowCharsMap[endChar] >= windowStart) {
            windowStart = windowCharsMap[endChar] + 1
        }
        // as window increases, if duplicate value is found, this also updates index of duplicate character
        windowCharsMap[endChar] = i;
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }
    return maxLength;
}

module.exports = lengthOfLongestSubstring;
