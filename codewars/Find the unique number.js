function findUniq(arr) {
    let unicValue = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i+1]) {
            unicValue = arr[i]
        }
    } return unicValue
}



console.log(findUniq([1, 2, 1, 1, 1,]));