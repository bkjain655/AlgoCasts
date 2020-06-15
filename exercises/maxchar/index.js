// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {}, maxChar = str.charAt(0), maxCount = maxChar ? 1 : 0;
    for (const char of str) {
        chars[char] = chars[char] + 1 || 1;
        if(chars[char] > maxCount){
            maxChar = char;
            maxCount = chars[char];
        }
    }
    return maxChar;
}

module.exports = maxChar;
