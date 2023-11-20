// let age = prompt('Введите число');
// if (age >= 14 && age <= 90) alert('Число находится в диапаоне от 14 до 90');

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

// let age = prompt('Введите число');
// if (!(age >= 14 && age <= 90)) alert('Число не находится в диапаоне от 14 до 90');

// let age = prompt('Введите число');
// if (age < 14 || age > 90) alert('Число не находится в диапаоне от 14 до 90');



// https://learn.javascript.ru/task/check-login

let password = 0;
let user = prompt('Кто там?');
if (user == null || user == '') {
    alert('Отменено');
}
else if (user == !'') {
    alert('Я вас не знею');
} else if (user == 'Админ') {
    password = prompt('Пароль?');
    if (password == 'Я главный') {
        alert('Здравствуйте!');
    } else if (password == null || password == '') {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
}
else {
    alert('Я вас не знею')
}
