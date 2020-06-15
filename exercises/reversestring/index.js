// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return str.split('').reverse().join('');

    // let reversed = '';
    // for( char of str) {
    //     reversed = char + reversed;
    // }
    // return reversed;
    
    return str.split('').reduce((pv, cv) => cv + pv, '');
}

module.exports = reverse;
