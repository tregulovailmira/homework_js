//Таски на переменные
// 1) Создайте две переменные a и b. Выведите в консоль результ их умножения.

let a = 10;
let b = 20;
function multiplication (multiplier1, multiplier2) {
    return multiplier1 * multiplier2;
}
console.log(`Product: ${multiplication(a, b)}`);

// 2) Создайте две переменные c и d. Выведите в консоль результат деления.

let c = 10;
let d = 20;
function division (dividend, divisor) {
    return dividend / divisor;
}
console.log(`Quotient: ${division(c, d)}`);

// 3) Создайте две переменные e и f. Выведите в консоль результат сложения.

let e = 10;
let f = 20;
function addition (summand1, summand2) {
    return summand1 + summand2;
}
console.log(`Sum: ${addition(e, f)}`);

// 4) Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль

let numberVariable = 11;
let booleanVariable = true;
let stringVariable = "java script";
let numberVariable2 = "100";
function variableOutput (variable1, variable2, variable3, variable4) {
    console.log(variable1, variable2, variable3, variable4);
}

variableOutput(numberVariable, booleanVariable, stringVariable, numberVariable2);

// 5) Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --

let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num = ++num; // либо num++ без присвоения
num = --num; //либо num-- без присвоения

//Таски на prompt:
//1) Запросить число у пользователя и возвести его в квадрат

function square(number) {
    return number ** 2;
}
let numberSquare = Number(prompt("Enter a number for squaring"));
console.log(`Square of number: ${square(numberSquare)}`);

//2) Вывести среднее арифметическое двух чисел. Числа спрашивать у пользователя.

function average(num1, num2) {
    return (num1 + num2) / 2;
}
let number1 = Number(prompt("Enter a number1 for calculating average"));
let number2 = Number(prompt("Enter a number2 for calculating average"));
console.log(`Average of two numbers: ${average(number1, number2)}`);

//3) Перевести число минут в секунды. Число спрашивать у пользователя.

function minutesToSeconds(minutes) {
    return minutes * 60;
}
let minutes = Number(prompt('Enter a number of minutes'));
console.log(`${minutes} minutes contains ${minutesToSeconds(minutes)} seconds`);

/*4) Создайте переменные greeting со значением'Hello, ' и userName.Спросите имя пользователя и занесите данное значение
в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'.*/

let greetings = 'Hello, ';
let userName = prompt('Enter your name');
console.log(greetings, userName);


