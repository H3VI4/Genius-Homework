// Якщо змінна більше нуля - виведіть true, менше - false //Перевірте це на варіантах 1, 0, -3.
// let x = 1;

// if (x > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let x = 0;

// if (x > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let x = -3;

// if (x > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна ="test" - виведіть true, //Перевірте це на варіантах 'test', "qwerty", true

// let x = "test";

// if ((x === "test")) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let x = "test";

// if (x === "qwerty") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let x = "test";

// if (x === true) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна більше 10 - відніміть 5, //менше - додайте 5, результат виведіть в консоль //Перевірте це на варіантах 1, 10, 13.

// let x = 1;
// if (x > 10) {
//   console.log(x - 5);
// } else {
//   console.log(x + 5);
// }

// let x = 10;

// if (x > 10) {
//   console.log(x - 5);
// } else if (x === 10) {
//   console.log(x);
// } else {
//   console.log(x + 5);
// }

// let x = 13;
// if (x > 10) {
//   console.log(x - 5);
// } else {
//   console.log(x + 5);
// }

//Зробіть сервіс який отримує число від 1 до 12 // виведіть місяць який дорівнює числу

// const num = prompt("Введіть число від 1 до 12");
// let month;
// switch (num) {
//   case "1":
//     month = "Січень";
//     console.log(`${month}`);
//     break;

//   case "2":
//     month = "Лютий";
//     console.log(`${month}`);
//     break;

//   case "3":
//     month = "Березень";
//     console.log(`${month}`);
//     break;

//   case "4":
//     month = "Квітень";
//     console.log(`${month}`);
//     break;

//   case "5":
//     month = "Травень";
//     console.log(`${month}`);
//     break;

//   case "6":
//     month = "Червень";
//     console.log(`${month}`);
//     break;

//   case "7":
//     month = "Липень";
//     console.log(`${month}`);
//     break;

//   case "8":
//     month = "Серпень";
//     console.log(`${month}`);
//     break;

//   case "9":
//     month = "Вересень";
//     console.log(`${month}`);
//     break;

//   case "10":
//     month = "Жовтень";
//     console.log(`${month}`);
//     break;

//   case "11":
//     month = "Листопад";
//     console.log(`${month}`);
//     break;

//   case "12":
//     month = "Грудень";
//     console.log(`${month}`);
//     break;

//   default:
//     alert("Некоректне число");
// }

//Зробіть сервіс який отримує тризначне число //Поверніть користувачу сумму цих чисел

// let service = Number(prompt("Enter the value"));
// let sum = 0;
// while (service / 10 != 0) {
//   sum += service % 10;
//   service = parseInt(service / 10);
// }
// console.log(sum);
// alert("Your sum is: " + sum);
