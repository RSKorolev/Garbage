function rowSumOddNumbers(n) {
    let i = 1;
    let arr = [];
    while (arr.length < n) {
        arr.push(n * (n - 1) + 1 * i)
        i += 2;
    }
    return arr.reduce((a, b) => a + b)
}

console.log(rowSumOddNumbers(2))