const myArray = [];
for (let i = 1; i <= 5; i++) {
    myArray.push(i)
};
//myArray должно быть равно [1, 2, 3, 4, 5].


const myArray = [];
for (let i = 1; i <= 9; i += 2) {
    myArray.push(i);
};
// myArray должно быть равно [1, 3, 5, 7, 9].


const myArray = [];
for (let i = 9; i >= 0; i -= 2) {
    myArray.push(i);
};
//myArray должно быть равно [9, 7, 5, 3, 1].


const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
};
//сумма массива 

//Функция возвращает произведение всех чисел в подмассивах arr.

function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    return product;
};