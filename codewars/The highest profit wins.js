function minMax(arr) {
    let arrSort = arr.sort((a, b) => a - b);
    console.log(arrSort);
    return [arrSort[0], arrSort[arrSort.length - 1]];
}

console.log(minMax([100, 25, 45])); // [ 25, 100 ]
