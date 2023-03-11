"use strict"
/*
Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).
*/


const MIN_NUM = 1
const MAX_NUM = 10
const userNumber = parseInt(prompt(`Загадайте ціле число від ${MIN_NUM} до ${MAX_NUM}`, 3))




while (true) {
	const randomNumber = MIN_NUM + Math.floor(Math.random() * (MAX_NUM - MIN_NUM + 1))
	const numberComputer = confirm(`Ваше число ${randomNumber}?`)
	if (userNumber !== randomNumber)
		alert(`Ні. Це не те число.`)

	else if (userNumber === randomNumber) {
		alert(`Комп'ютер вгадав`)
		break
	}

}