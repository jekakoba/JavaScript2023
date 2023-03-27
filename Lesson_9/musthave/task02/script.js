"use strict"
/*
Задача 2 Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
*/

const quantityElements = parseInt(prompt("Введіть кількість елементів масиву", 5));

let halfArray = Math.floor(quantityElements / 2)

let arr = new Array(quantityElements).fill(1, 0, halfArray).fill(7, halfArray)
document.write(arr);


