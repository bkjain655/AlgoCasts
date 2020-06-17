// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// With out tempArr
function levelWidth(root) {
    const counter = [0];
    let arr = [root,'s'];
    while(arr.length > 1) {
        const n = arr.shift();
        if(n === 's') {
            counter.push(0);
            arr.push('s');
            continue;
        }
        counter[counter.length - 1] += 1;
        arr.push(...n.children);
    }
    return counter;
}

module.exports = levelWidth;

// With TempArr variable
// function levelWidth(root) {
//     const levelWidths = [];
//     let arr = [root];
//     while(arr.length) {
//         const tempArr = [];
//         levelWidths.push(arr.length);
//         arr.forEach(c => tempArr.push(...c.children));
//         arr = tempArr;
//     }
//     return levelWidths;
// }