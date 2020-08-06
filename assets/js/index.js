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

//Таски на условия:
//1) Спросить переменную у юзера. Если переменная равна числу 10, то выведите 'Верно', иначе выведите 'Неверно'.

function checkVariable(variable) {
    if (variable === 10) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}
let variable = Number(prompt('Enter a variable'));
checkVariable(variable);

/*2) Напишите две проверки.
     Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
     Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'
Проверьте работу скрипта при test, равном true, false.*/

let test = false;
console.log(`test = ${test}`)
checkTrueVariable(test);
checkFalseVariable(test);

function checkTrueVariable(variable) {
    if (variable) { //variable === true
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

function checkFalseVariable(variable) {
    if (!variable) { //variable !== true
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

/*3) Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн., а
 скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер.*/

let buyingSum = Number(prompt('Enter a buying sum in UAH:'));
console.log(calculateSumWithSale(buyingSum));
function calculateSumWithSale(buyingSum) {
    if (buyingSum > 0 && buyingSum <= 500) {
        return `Sum to pay: ${+buyingSum.toFixed(2)} UAH`;
    } else if (buyingSum > 500 && buyingSum <= 800) {
        console.log('Your sale - 3%');
        return `Sum to pay: ${+(buyingSum * 0.97).toFixed(2)} UAH`
    } else if (buyingSum > 800) {
        console.log('Your sale - 5%');
        return `Sum to pay: ${+(buyingSum * 0.95).toFixed(2)} UAH`;
    } else {
        return "Enter a correct value";
    }
}

//Таски на циклы. Каждую задачу решить всеми тремя циклами!
//1) Вывод чисел от 25 до 0 (порядок уменьшения)

let i;
for (i = 25; i >= 0; i--) {
    console.log(i);
}

i = 25;
while (i >= 0) {
    console.log (i);
    i--;
}

i = 25;
do {
    console.log(i);
    i--;
} while (i >= 0)

// //2) Вывод чисел от 10 до 50, которые кратны 5

for (i = 10; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
        continue;
    }
}

i = 10;
while (i <= 50) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
}

i = 10;
do {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
} while (i <= 50)


//3)  Найти сумму чисел в пределах от 1 до 100.

let sum = 0;
for (i = 1; i <=100; i++) {
    sum += i;
}
console.log(`Sum of numbers from 1 to 100 ${sum}`);

sum = 0;
i = 0;
while (i <= 100) {
    sum += i;
    i++;
}
console.log(`Sum of numbers from 1 to 100 ${sum}`);

sum = 0;
i = 0;
do {
    sum += i;
    i++;
} while (i <= 100)
console.log(`Sum of numbers from 1 to 100 ${sum}`);

//4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

let answer = 0;
for(;;) {
    answer = Number(prompt('Resolve the example: 2+2*2=?'));
    if (answer === 6) {
        console.log('Correct!');
        break;
    }
}

while (true) {
    answer = Number(prompt('Resolve the example: 2+2*2=?'));
    if (answer === 6) {
        console.log('Correct!');
        break;
    }
}

do {
    answer = Number(prompt('Resolve the example: 2+2*2=?'));
    if (answer === 6) {
        console.log('Correct!');
        break;
    }
} while (true)

//Таска на функции
/*1) Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
    Ожидаемый вывод:
    isAdult(20); // true
isAdult(4); // false */

isAdult(11);
isAdult(25);
function isAdult (age) {
    if (age > 0 && age < 18) {
        console.log(false);
    } else if (age >= 18) {
        console.log(true);
    }
}