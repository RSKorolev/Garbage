function squareSum(numbers) {
    let newArr = numbers.reduce((prew, item) => {
        return prew + Math.pow(item, 2);
    }, 0)
    return newArr
}