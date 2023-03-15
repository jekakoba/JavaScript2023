"use strict"
/*
Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).
*/



function getTable(rows, columns, message) {
	document.write(`<table class="answer-block__table">`)
	for (let i = 1; i <= rows; i++) {
		document.write(`<tr>`)
		for (let j = 1; j <= columns; j++) {
			document.write(`<td class="answer-block__td">${message}</td>`)
		}
	}

	document.write(`</table>`)
}


const rows = parseInt(prompt("Введіть кількість рядків", 3))
const columns = parseInt(prompt("Введіть кількість колонок", 5))
const message = prompt("Введіть Ваше повідомлення")

const table = getTable(rows, columns, message)
