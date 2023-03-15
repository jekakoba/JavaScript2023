"use strict"
/*
Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
*/

function getDayOfWeek(day) {
	let numberDay
	switch (day) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5: numberDay = "Робочий"
			break

		case 6:
		case 7: numberDay = "Вихідний"
			break

		default: numberDay = "Error"
	}
	return numberDay
}
const day = parseInt(prompt("Введіть день тижня(Від 1 до 7)", 3))
const message = getDayOfWeek(day)
document.write(`Цей день — ${message}`)