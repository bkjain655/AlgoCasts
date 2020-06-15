// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}
module.exports = anagrams;


// function anagrams(stringA, stringB) {
//     const strAMap = getCharMap(stringA);
//     const strBMap = getCharMap(stringB);
//     let isAnagram = Object.keys(strAMap).length === Object.keys(strBMap).length;
//     for (const key in strAMap) {
//         if (strAMap.hasOwnProperty(key)) {
//             isAnagram = isAnagram && strAMap[key] === strBMap[key];
//         }
//     }
//     return isAnagram;
// }

// function getCharMap(str) {
//     const charMap = {};
//     str = str.match(/\w/gi).join('').toLowerCase();
//     for (const char of str) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }