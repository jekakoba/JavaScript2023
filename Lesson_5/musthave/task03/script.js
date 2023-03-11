"use strict"
/*
Вивести таблицю з одним рядком і  7 стовпцями.
*/

const columns = 7;
let columsCell = "";
for (let i = 1; i <= columns; i++) {
	columsCell += `<td class="answer-block__td">${i}</td>`
}
document.write(`
	<table class="answer-block__table">
	<tbody>
		<tr>
		${columsCell}
		</tr>
	</tbody>
</table>
	`)

