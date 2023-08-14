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

let buttonTable = document.getElementById('createTable')

//Функція рандомних чисел 
function getRandomNumbers(min, max) {
	const numbers = []
	for (let i = 0; i < 5; i++) {
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
		numbers.push(randomNumber)
	}
	return numbers
}


buttonTable.addEventListener("click", function (e) {
	const targetElement = e.target
	if (targetElement) {
		createTable()
	}
});


function createTable() {

	// Мінімальне та максимальне значення
	let minValue = parseFloat(document.getElementById('minValue').value)
	let maxValue = parseFloat(document.getElementById('maxValue').value)


	//Кількість стовпців
	let countRows = parseFloat(document.getElementById('rows').value)
	//Кількість рядків
	let countColumn = parseFloat(document.getElementById('column').value)

	let randomNumbers = getRandomNumbers(minValue, maxValue)

	// створення таблиці
	let table = document.createElement('table')
	let tableBox = document.querySelector('.table-box')

	//створюємо рядки
	for (let i = 0; i < countRows; i++) {
		let rows = document.createElement('tr')

		//створюємо стовпці
		for (let j = 0; j < countColumn; j++) {
			let colums = document.createElement('td')
			colums.innerText = randomNumbers[j]
			rows.append(colums)
		}
		table.append(rows)
	}
	tableBox.append(table)
}


