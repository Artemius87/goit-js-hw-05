//22.12  Генератор случ чисел принимает Калбек функцию, которая должна
//превратить нечётные в чётные и получить массив с нечётными
//которые и возвращаем максимальное нечётоне число

// const generateRandomArr = (count, min, max, callback) => {
//   let arr = [];
//   for (let i = 0; i < count; i++)
//     arr.push(parseInt(Math.random() * (max - min) + min));
//   if (callback !== undefined) return callback(arr);
//   return arr;
// };

// console.log(
//   generateRandomArr(100, 10, 100, (arr) =>
//     Math.max(...arr.map((item) => ++item).filter((item) => item % 2 !== 0))
//   )
// );
//-------
//генерируем случайную строку из символов и чисел - отфильтровать
// строку по цифрам - получить среднее арифметическое .
// const baseSrting = "abcdefghijklmnopqrstuvwxyz0123456789";
// const generateRandomString = (length, callback) => {
//   let randomValue = "";
//   for (let i = 0; i < length; i++)
//     randomValue += baseSrting[parseInt(Math.random() * baseSrting.length)];

//   if (callback !== undefined) return callback(randomValue);
//   return randomValue;
// };

//в переменную tempFn мы присваиваем функцию которая
// являеться параметром callback функции
// const tempFn = (str) => {
//   const arrayNum = str
//     .split("")
//     .filter((item) => !Number.isNaN(Number(item)))
//     .map((item) => (item = parseInt(item)));
//   let total = 0;
//   arrayNum.forEach((element) => {
//     total += element;
//   });
//   return total / arrayNum.length;
// };

// console.log(generateRandomString(250, tempFn));

// 23.12 Написать функцию которая возращала обьект
// который в себе содержит (метод sum  и поле value)
// функцию и результат работы

// const sum = (num) => {
//   let value = num;

//   const fnSum = (num2) => {
//     value += num2;
//     return { s: fnSum, value };
//   };
//   return { value, s: fnSum };
// };

// console.log(sum(1).s(2).s(3).s(15).value); //21
//     ----------
//Отрефакторим наш код - магазин
const catalog = {
  list: [],

  add: function (...products) {
    products.forEach((product) => {
      (product.id = this.list.length + 1), this.list.push(product);
    });
  },
  remove: function (id) {
    this.list.forEach((element, key) => {
      if (element.id === id) this.list.splice(key, 1);
    });
  },
  create: function (name, type, quantity, price) {
    return { name, type, quantity, price };
  },

  getProduktById: function (id) {
    let index;
    this.list.forEach((element, key) => {
      if (element.id === id) index = key;
    });
    if (!index) return {};
    return { value: this.list[index], key: index };
  },
  change: function (id, props) {
    let productObject = this.getProduktById(id).key;
    if (!productObject) return false;
    for (let key in props) this.list[productObject][key] = props[key];
  },
  filterType: function (type) {
    let response = [];
    for (let product of this.list)
      if (product.type === type) response.push(product);

    return response;
  },
  count: function () {
    let total = 0;
    this.list.forEach((element) => {
      total += element.quantity;
    });
    return total;
  },
  calculate: function (id, quantity) {
    let product = this.getProduktById(id).value;
    return product.price * quantity;
  },
};

let product = catalog.create("apple", "phone", 100, 1000);

let product2 = catalog.create("samsung", "phone", 100, 500);
catalog.add(product, product2);
console.log(catalog.list);
console.log(catalog.calculate(2, 3));
catalog.remove(1);
console.log(catalog.list);
// catalog.change(2, { name: "samsung" });
// console.log(catalog.filterType("TV"));
// console.log(catalog.count());
