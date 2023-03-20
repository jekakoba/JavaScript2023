"use strict"
/*
Задача 8  Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.
*/

//===========================================================================================================//

//Генеруємо рандомні значеня від -500 до 500
function getRandomValueElement() {
	const arrValueElements = []
	const MIN_NUM = -500
	const MAX_NUM = 500
	for (let i = MIN_NUM; i < MAX_NUM; i++) {
		let randomNumbers = MIN_NUM + Math.floor(Math.random() * (MAX_NUM - MIN_NUM + 1))
		arrValueElements.push(randomNumbers)
	}

	return arrValueElements
}

//===========================================================================================================//

//Отримуємо сумарний виграш
function getWinSum() {
	let totalWinSum = 0
	let userCountElement = parseInt(prompt("Введіть кількість елементів для гри", 5))
	for (let i = 1; i <= userCountElement; i++) {
		let userElement = parseInt(prompt(`Введіть номер елементу від 1 до ${userCountElement}. Зупинитися та забрати поточний виграш нажміть "Відміна"`))
		if (isNaN(userElement))
			break

		totalWinSum += randomValueElement[userElement]
	}
	return totalWinSum
}

//===========================================================================================================//

const randomValueElement = getRandomValueElement()

const winSum = getWinSum(randomValueElement)

document.write(`Сумарний виграш — ${winSum}грн`)