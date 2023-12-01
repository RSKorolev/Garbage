function correct(string) {
    let arr = string.split('');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '5') {
            arr[i] = 'S';
        } else if (arr[i] == '0') {
            arr[i] = 'O';
        } else if (arr[i] === '1') {
            arr[i] = 'I';
        } else {
            arr

        }
    }
    return arr.join('')

} console.log(correct("L0ND0N"));