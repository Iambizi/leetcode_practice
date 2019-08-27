/*Two strings are anagrams of each other if they contain the exact char
in the exact same number
*/

function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    // create a character count object
    const sCharCounts = {};

    //Fill sCharcounts object with a for loop
    for (let i = 0; i < s.length; i++) {
        //current char
        const sChar = s[i];
        /* If a char is already in our object we just increase its count by 1
        otherwise if char nor already present we set the character count to 1
        */
        sCharCounts[sChar] = sCharCounts[sChar] + 1 || 1;
    }
    // now we loop trough char in t string and compare them to char in s string
    for (let i = 0; i < t.length; i++) {
        const tChar = t[i];
        /* returns false if tChar not present in sCharCounts
        also accounts for if tChar present but equal to 0 which would be falsy and return false also*/
        if (!sCharCounts[tChar]) {
            return false;
        } else {
            // we use up that t string character to make sure they have the same quantities
            sCharCounts[tChar]--
        }
    }

    return true;
}

module.exports = isAnagram;
