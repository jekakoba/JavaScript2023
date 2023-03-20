"use strict"
/*
Вивести таблицю
*/


const row = 3
const columns = 3
let counter = 0

document.write(`
<table class="answer-block__table">
`)
for (let i = 1; i <= row; i++) {
	document.write(`<tr>`)
	for (let j = 1; j <= columns; j++) {
		counter++
		document.write(`<td class="answer-block__td">${counter}</td>`)
	}
	document.write(`</tr>`)
}
document.write(`
</table>
`)