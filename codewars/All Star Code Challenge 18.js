function strCount(str, letter) {
    let arr = str.split('');
    let count = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === letter) {
            count++;
        }
    }
    return count
}