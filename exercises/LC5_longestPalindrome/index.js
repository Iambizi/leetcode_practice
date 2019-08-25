//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"


function longestPalindrome(s) {

    // we solve this by using a technique called expand around the center
    // Essentiallu we check that values at right and left equal each other
    let startIndex = 0;
    let maxLength = 1;

    //helper function
    function expandAroundMiddle(left, right) {
        // as long when we check, left is greatear than 0 and right is less than the lenght of the string 
        //and that both left and right equal
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentPallength = right - left + 1;
            if (currentPallength > maxLength) {
                maxLength = currentPallength;
                startIndex = left;
            }
            left -= 1;
            right += 1;
        }
        // this helper function will also update startIndex and maxLength correspondingly
    }
    for (let i = 0; i < s.length; i++) {
        // determines where 'middle' is for odd numbered strings 
        expandAroundMiddle(i - 1, i + 1);
        // determines where 'middle' is for even numbered strings
        expandAroundMiddle(i, i + 1);
    }

    return s.slice(startIndex, startIndex + maxLength);

}

module.exports = longestPalindrome;
