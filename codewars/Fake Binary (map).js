function fakeBin(x) {
    let arr = x.split('')
    console.log(arr);
    let newArr = arr.map((item) => {
        if (item < 5) {
            item = 0;
        } else {
            item = 1;
        }
        return item;
    })
    return newArr.join('');
}

