"use strict"
/*
 Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).
*/

const MIN_NUM = 1
const MAX_NUM = 10
const userNumber = parseInt(prompt(`Загадайте ціле число від ${MIN_NUM} до ${MAX_NUM}`, 3))

let numberComputer
let attempt = 3
for (let i = 0; i < 3; i++) {
	attempt--
	const randomNumber = MIN_NUM + Math.floor(Math.random() * (MAX_NUM - MIN_NUM + 1))
	numberComputer = confirm(`Ваше число ${randomNumber}?`)
	if (userNumber !== randomNumber)
		alert(`Ні. Це не те число. (Залишилося ${attempt} спроб)`)

	else if (userNumber === randomNumber) {
		alert(`Комп'ютер вгадав Ваше число`)
		break
	}

}

