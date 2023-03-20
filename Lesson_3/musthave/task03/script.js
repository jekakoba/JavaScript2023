"use strict"
/*
Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
*/

let numberEnter = parseInt(prompt("Введіть число від 1 до 5"))

let min = 1
let max = 5

//Рандомне число від 1 до 5
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(randomNumber);

if (numberEnter === randomNumber)
	document.write(`Ви вгадали число! Вітаємо`)
else {
	numberEnter = parseInt(prompt("Ви не вгадали число! Остання спроба"))
	if (numberEnter === randomNumber) {
		document.write(`Ви вгадали число! Вітаємо`)
	} else document.write(`Ви не вгадали число. Спроб більше немає`)
}



