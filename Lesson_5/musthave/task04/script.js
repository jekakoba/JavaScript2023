"use strict"
/*
Вивести таблицю з 3 рядків і 7 стовпців
*/

const row = 3
const columns = 7




document.write(`
<table class="answer-block__table">
`)
for (let i = 1; i <= row; i++) {
	document.write(`<tr>`)
	for (let j = 1; j <= columns; j++) {
		document.write(`<td class="answer-block__td">${j}</td>`)
	}
	document.write(`

	</tr>
	`)
}

document.write(`
</table>
`)

