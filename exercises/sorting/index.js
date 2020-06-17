// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length ; i++) {
        let indexOfMin = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[indexOfMin])
                indexOfMin = j;
        }
        if(i !== indexOfMin) {
            const temp = arr[i];
            arr[i] = arr[indexOfMin]
            arr[indexOfMin] = temp;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length === 1) { return arr; }
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let results = [];
    while(left.length > 0 && right.length > 0) {
        if(left[0] < right[0]) {
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }
    results = results.concat(...left).concat(...right);
    return results;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
