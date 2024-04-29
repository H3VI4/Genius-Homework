// --1--
// У вас є масив об’єктів fruits, і в кожному з них є name // Напишіть код, який перетворює їх в масив імен.
//
// //
//
// const fruits = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// let result = fruits.map((item) => item.name);
// console.log(result);

// --2--
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let a = 2; a <= 10; a += 2) {
//   console.log(a);
// }

// --3--
// Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }

// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }

// --4--
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// while (true) {
//   let nmbr = prompt("Введіть число більше 100");

//   if (nmbr === null || nmbr === "") {
//     break;
//   }

//   if (Number(nmbr) > 100) {
//     alert("Ви ввели число більше за 100!");
//     break;
//   } else {
//     alert("Введіть число більше за 100!");
//   }
// }

// --5--
// Вирахуйте середній вік
// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// let sumvik = girls.reduce((summ, item) => summ + item.age, 0);

// let averagevik = sumvik / girls.length;

// console.log(averagevik);
