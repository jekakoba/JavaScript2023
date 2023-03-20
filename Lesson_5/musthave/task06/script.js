"use strict"
/*
Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком
(Числа від 1 до 27)
*/


const row = 3
const columns = 3
let counter = 0
let tables = 3


for (let i = 1; i <= tables; i++) {
	document.write(`
<table class="answer-block__table">
`)
	for (let j = 1; j <= row; j++) {
		document.write(`<tr>`)
		for (let d = 1; d <= columns; d++) {
			counter++
			document.write(`<td class="answer-block__td">${counter}</td>`)

		}
		document.write(`</tr>`)
	}
	document.write(`
	</table>`)
}
