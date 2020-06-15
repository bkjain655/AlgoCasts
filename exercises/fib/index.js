// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if( n === 1) return 1;
    if( n === 0) return 0;

    return fib(n-1) + fib(n - 2);
}

module.exports = fib;

// function fib(n) {
//     const fib = [0,1];
//     for(let i = 2; i <= n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib[n];
// }