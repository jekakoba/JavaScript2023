"use strict"
/*
 Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).
*/


const firstRandomNumber = Math.floor(1 + Math.random() * 4),
	secondRandomNumber = Math.floor(1 + Math.random() * 4),
	thirdRandomNumber = Math.floor(1 + Math.random() * 4)


let images = ""

for (let i = 1; i < 4; i++) {
	let indexImage
	switch (i) {
		case 1: indexImage = firstRandomNumber
			break;

		case 2: indexImage = secondRandomNumber
			break;
		case 3: indexImage = thirdRandomNumber
			break;

		default:
			break;
	}
	images += document.write(`<img width="100" height="100" src="img/${indexImage}.png" alt="">`)
}

let winMoney = 0

if (firstRandomNumber === secondRandomNumber && firstRandomNumber == thirdRandomNumber) {
	switch (firstRandomNumber) {
		case 1: winMoney = 'Ви виграли — 100грн'
			break;

		case 2: winMoney = 'Ви виграли —200грн'
			break;

		case 3: winMoney = 'Ви виграли —500грн'
			break;

		case 4: winMoney = 'Ви виграли —1000грн'
			break;
		default:
			break;
	}

} else winMoney = `Спробуйте ще раз`
document.write(`

<p style="padding-top: 30px;" class="answer-block__info">${winMoney}</p>
`)