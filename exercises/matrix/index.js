// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];
    for(let i = 0 ; i < n; i++) {
        results.push([]);
    }
    let val = 1, startRow = 0, startCol = 0, endRow = n - 1, endCol = n - 1;
    while(startRow <= endRow && startCol <= endCol) {
        for(let i = startCol; i <= endCol; i++){
            results[startRow][i] = val++;
        }
        startRow++;
        for(let i = startRow; i <= endRow; i++) {
            results[i][endCol] = val++;
        }
        endCol--;
        for(let i = endCol; i >= startCol; i--) {
            results[endRow][i] = val++;
        }
        endRow--;
        for(let i = endRow; i >= startRow; i--) {
            results[i][startCol] = val++;
        }
        startCol++;
    }
    return results;
}

module.exports = matrix;
