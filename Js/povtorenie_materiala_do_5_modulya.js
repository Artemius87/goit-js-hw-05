// 1 Задача - Написать функцию Camelize(str), которая преобразует строки вида < my - short - string > B < myShortString >.
// То есть все дефисы удаляются а все слова после них получают заглавную букву.

// const toCamelCase = function (str) {
//   let splittedStr = str.split("-");
//   let res = splittedStr[0];
//   for (let i = 1; i < splittedStr.length; i++) {
//     let temp = splittedStr[i][0].toUpperCase() + splittedStr[i].slice(1);
//     res += temp;
//   }
//   return res;
// };

// console.log(toCamelCase("my-short-string"));

// // 2 задача - Удалить значения из массива(те которые между "от" и "до")
// let arr = [1, "от", 1, 2, 3, 4, 5, 6, 7, 8, 9, "до", 10];

// const deleted = function (arr, from, to) {
//   let first = arr.indexOf(from);
//   let second = arr.indexOf(to);
//   arr.splice(first, second + 1 - first);
//   return arr;
// };
// console.log(deleted(arr, "от", "до"));

// 3 - Задача - у нас есть обьект:
// Напишите деструктиризируещее присваивание, которое :
// Свойство name присвоит в переменную name.
// Свойство years присвоит в переменную years.
// Свойство isAdmin присвоит в переменную isAdmin(false, если нет такого свойства)

// let user = {
//   name: "John",
//   years: 20,
//   isAdmin: true,
// };
// const { name, years, isAdmin = false } = user;
// console.log(name, years, isAdmin);

// 4 - Задача - Дан массив с числами - Создать из него новый массив только с чётными числами
// let a = [1, 3, 5, 4, 7, 9, 6];
// let b = [];
// const isEven = function (n) {
//   return n % 2 === 0;
// };
// const fn = function (arr) {
//   for (let num of arr) {
//     isEven(num) ? b.push(num) : "";
//   }
//   return b;
// };
// console.log(fn(a));

// Задача 5 - Написать игру камень ножницы бумага -
//     Варианты выбора нужно сохранить в массив
// пользователь вводит свой Вариант
// компьютер выбирает свой рандомный вариант из массива
// проверяет выбор пользователя и компьютера
// обрабатывает все варианты:
// 1.Вариант где побеждает пользователь.
// 2.Вариант где побеждает компьютер.
// // 3.Вариант где ничья.
// let userChoice = prompt("Ваш выбор");
// const choice = ["камень", "ножницы", "бумага"];
// let machineChoice;
// const theGame = function (userInput) {
//   machineChoice = choice[Math.floor(Math.random() * choice.length)];
//   if (userInput === machineChoice) {
//     alert("Ничья");
//   } else if (userInput === "камень" && machineChoice === "ножницы") {
//     alert("победа");
//   } else if (userInput === "камень" && machineChoice === "бумага") {
//     alert("проиграл");
//   } else if (userInput === "ножницы" && machineChoice === "бумага") {
//     alert("победа");
//   } else if (userInput === "ножницы" && machineChoice === "камень") {
//     alert("проиграл");
//   } else if (userInput === "бумага" && machineChoice === "камень") {
//     alert("победа");
//   } else if (userInput === "бумага" && machineChoice === "ножницы") {
//     alert("проиграл");
//   }
// };
// theGame(userChoice);
// console.log(machineChoice);

//-----РЕКУРСИЯ--------Рекурсивный способ : упрощение задачи и вызов функцией самой себя
// const pow = function (n, q) {
//   if (q === 1) {
//     return n;
//   } else {
//     return n * pow(n, (q -= 1));
//   }
// };
// console.log(pow(3, 3)); // "n" умножаеться сама на себя при каждом заходе в функцию пока "q" не станет "1" на этом функция выводит "n"

// ВТОРОЙ СПОСОБ
// const recursion = function (n) {
//   console.log(n);
//   if (n >= 10) {
//     return n;
//   } else {
//     recursion((n += 1));
//   }
// };
// recursion(0);

//----------------ОБЬЕКТЫ------
//Задача - Создать кассира который получает список продуктов и деньги, подсчитывает общую стоимость продуктов, и в зависимости от того
// хватает денег или нет , уведомляет покупателя о результате
// const list = {
//   apple: 250,
//   bananas: 240,
//   lemon: 35,
// };
// const balance = 5200;
// const cashier = function (list, money) {
//   let sum = 0;
//   for (let product in list) {
//     sum += list[product];
//   }
//   if (balance < sum) {
//     console.log("недостаточно средств");
//   } else {
//     console.log("спасибо за покупку");
//   }
// };
// cashier(list, balance);

//------- CALLBACK ФУНКЦИИ

// const greeting = function (name) {
//   let res = name();
//   console.log(`Hello ${res}`);
// };
// const nameAsker = function () {
//   return prompt(`enter your name`);
// };
// greeting(nameAsker);

//калькулятор функция
let num = 0;
const fn = (action, q) => {
  num = action(num, q);
  return num;
};
let sum = (n, q) => n + q;
let min = (n, q) => n - q;
console.log(fn(sum, 10));
console.log(fn(sum, 20));
