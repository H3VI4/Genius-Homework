// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//   name: "Іван",
//   averageScore: 33,
//   missedLessons: 2,
//   showInfo: function (occupation) {
//     console.group(`${name} інфо:`);
//     console.log(`Студент: ${this.name}`);
//     console.log(`Спеціальність: ${occupation}`);
//     console.log(`Середній бал: ${this.averageScore}`);
//     console.log(`Пропущено занять: ${this.missedLessons}`);
//     console.groupEnd();
//   },
// };

// student.showInfo();

// student2 = {
//   name: "Петро",
//   occupation: "Інженер",
//   averageScore: 90,
//   missedLessons: 10,
// };

// student.showInfo.bind(student2)();

// student3 = {
//   name: "Василь",
//   averageScore: 50,
//   missedLessons: 4,
// };

// student.showInfo.call(student3, "Механік");

// student4 = {
//   name: "Коля",
//   averageScore: 90,
//   missedLessons: 78,
// };

// student.showInfo.apply(student4, ["Хірург"]);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке при натисканні на кнопку css - має видати коротке визначення що це таке

// function showHtml() {
//   console.log(
//     "HTML - це мова гіпертекстової розмітки. Це стандартна мова розмітки для створення веб-сторінок і веб-додатків."
//   );
// }

// function showCss() {
//   console.log(
//     "CSS - це мова стилів для веб-сторінок, яка визначає зовнішній вигляд елементів HTML, таких як кольори, шрифти, розміри та розташування."
//   );
// }

// document
//   .querySelector("#html")

//   .addEventListener("click", showHtml);

// document
//   .querySelector("#css")

//   .addEventListener("click", showCss);

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару. функція має повертати назву товару і вартість
// перевірити на варіантах: 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// function shop(name, price, quantity) {
//   let summ = Number(price) * Number(quantity);
//   return console.log(
//     ` ${quantity}кг ${name} коштує ` + summ.toFixed(2) + `грн`
//   );
// }

// shop("banana", 30, 4.5);
// shop("cherry", 58, 1.3);
// shop("orange", 89, 3.4);
