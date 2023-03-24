"use strict"
/*
Задача 2 Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
*/

const quantityElements = parseInt(prompt("Введіть кількість елементів масиву", 5));

let halfArray = quantityElements / 2
let arr = new Array(quantityElements).fill(0)

arr.forEach((elem, index, baseArrRef) => {
	if (index < halfArray) baseArrRef[index] = 1;
	else
		baseArrRef[index] = 7;
});


document.write(arr);

