// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     const cols = 2 * n - 1;
//     for(let row = 0; row < n; row++) {
//         let stair = '';
//         let min = Math.floor(cols / 2) - row;
//         let max = Math.floor(cols / 2) + row;
//         for(let col = 0; col < cols; col++) {
//             stair += col >= min  && col <= max ? '#' : ' ';
//         }
//         console.log(stair);
//     }
// }

function pyramid(n, row = 0, stair = '') {
    if(n === row) {
        return;
    }

    if(stair.length === 2 * n - 1){
        console.log(stair);
        return pyramid(n, row + 1);
    }
    let mid = Math.floor((2 * n - 1)  / 2);
    stair += (stair.length >= mid - row) && (stair.length <= mid + row) ?'#' : ' ';
    return pyramid(n, row, stair);
}
/**
 * n = 3
 * row  - #
 *  1  -   3
 *  2  -  2,3,4
 *  3  - 1,2,3,4,5
 */

module.exports = pyramid;
