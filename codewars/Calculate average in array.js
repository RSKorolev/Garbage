function findAverage(array) {
    if (array.length >= 1) {
        let sum = 0;
        for (let i = 0; i < array.length; i++)

            sum += array[i];
        return sum / array.length;
    } else {
        return 0
    }
}