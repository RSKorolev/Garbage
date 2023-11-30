function sumArray(array) {
    if (array == [] || array == null || array.length < 3) {
        return 0;
    } else {
        let newArr = array.sort((a, b) => a - b).splice(1, array.length - 2);
        return newArr.reduce((prw, item) => {
            return prw + item
        }, 0)
    }

}

console.log(sumArray([1, 3, 4,]));   //3