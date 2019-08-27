/*Given a string determine if it is a palindrome, considering only alphanumeric
characters and ignoring cases.*/

/*Palindrome is a word or sequence that reads the same forward or backwords
Ex: lol */

/*Aproach is to rethink palindroms as words where each half mirrors each other
and write solution based on that that check for that mirroring
approach works for even and odd strings
*/
function isPalindrome(s) {
    // Sanitize input string by removing non alphanumeric char and lowercasing it
    s = s.toLowerCase().replace(/[\W_]/g, '');

    // Create a left and right pointer, initially at start and end input string
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        // we need to move the left pointer up and right pointer down to prevent infinite loop
        left++;
        right--;
    }
    // if the while loop finishes running then we have a palindrome hence return true
    return true;
}

module.exports = isPalindrome;
