"use strict"
/*
Задача 1.  Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.
*/

const quantityElements = parseInt(prompt("Введіть кількість елементів", 5))

let arr = new Array(quantityElements)
arr.fill(0)
console.log(arr);

