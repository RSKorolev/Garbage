var humanYearsCatYearsDogYears = function (humanYears) {
    if (humanYears == 1) return [1, 15, 15];
    if (humanYears == 2) return [2, 15 + 9, 15 + 9];
    return [humanYears, 15 + 9 + (4 * (humanYears - 2)), 15 + 9 + (5 * (humanYears - 2))];
}


console.log(humanYearsCatYearsDogYears(90));


