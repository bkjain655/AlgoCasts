// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    if(n === row) {
        return;
    }

    if(stair.length === n){
        console.log(stair)
        return steps(n, row + 1, '');
    }

    if(stair.length > row) {
        stair += ' ';
    } else {
        stair += '#';
    }
    return steps(n, row, stair);
}

module.exports = steps;

// function steps(n) {
//     for(let i = 1; i <= n; i++) {
//         console.log(generate('#',i) + generate(' ',(n-i)));
//     }
// }

// function generate(char, num) {
//     let retVal = '';
//     for(let i = 0; i < num; i++) {
//         retVal += char;
//     }
//     return retVal;
// }