function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0) return [];
    let count = 0;
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            count += 1
        };
    }
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            newArr.push(input[i]);
        };
    }
    let sumNewArr = newArr.reduce((prew, a) => prew + a);
    return [count, sumNewArr]
}



console.log(countPositivesSumNegatives([1, 2, 3, 4, -5, 6, -6, 7, -11])); //[6, -22]