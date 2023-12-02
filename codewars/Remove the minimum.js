function removeSmallest(numbers) {
    if (numbers.length <= 1) return [];
    let minValue = numbers[0];
    let minValueIndex = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (minValue > numbers[i]) {
            minValue = numbers[i]
            minValueIndex = i
        }
    }
    console.log(minValueIndex, minValue);
    return numbers.filter((a, index) => index != minValueIndex)
}

console.log(removeSmallest([1, 1, 1, 3, 4])); //[1,1,3,4]



