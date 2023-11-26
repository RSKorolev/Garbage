function squareDigits(num) {
    arr = String(num).split('');
    newArr = arr.map(b => Math.pow(b, 2));
    return Number(newArr.join(''));
}