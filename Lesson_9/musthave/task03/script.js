"use strict"
/*
Задача 3 Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
*/


const quantityElements = parseInt(prompt("Введіть кількість елементів", 5))

let array = new Array(quantityElements).fill(7)

array.forEach((element, index, baseArrRef) => {
	if (index < 5) baseArrRef[index] = 1
	else {
		baseArrRef[index] = 7;
	}
});

document.write(array)

