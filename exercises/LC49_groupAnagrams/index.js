// Anagrams: words or names that have the exact same characters, but re-arranged


function groupAnagrams(strs) {
    let grouped = {};

    // 1st split strings into array of characters
    // Then we use array.sort() to re arrange the char alphabetically
    // once sorted we turn them back into a string and if their anagrams they should be the same word

    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        const key = word.split('').sort().join('');

        // if string array doesnt already exist in grouped array
        if (!grouped[key]) {
            grouped[key] = []
        };

        grouped[key].push(word);
    }
    /* when we pass an object to Object.values(object) it will give us back an array of the values in that object.    
        ex:    const object1 = {
                a: 'somestring',
                b: 42,
                c: false
            };
            console.log(Object.values(object1));
        // expected output: Array ["somestring", 42, false] 
    */

    // the leetcode test requires that we return an array of all the anagrams grouped together in an array.
    /* ex: [
        Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
        
        Output:
        [
        ["ate","eat","tea"],
        ["nat","tan"],
        ["bat"]
        ]
    ] 
    */
    return Object.values(grouped);

}

module.exports = groupAnagrams;
