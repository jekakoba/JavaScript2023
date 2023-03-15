"use strict"
/*
 Створити функцію, яка за номером місяця повертає його назву.
*/

function getMonthOfYear(numMonth) {
	let resultMonth
	switch (numMonth) {
		case 1: resultMonth = "Січень"
			break
		case 2: resultMonth = "Лютий"
			break
		case 3: resultMonth = "Березень"
			break

		case 4: resultMonth = "Квітень"
			break

		case 5: resultMonth = "Травень"
			break
		case 6: resultMonth = "Червень"
			break

		case 7: resultMonth = "Лиипень"
			break
		case 8: resultMonth = "Серпень"
			break
		case 9: resultMonth = "Вересень"
			break

		case 10: resultMonth = "Жовтень"
			break
		case 11: resultMonth = "Листопад"
			break
		case 12: resultMonth = "Грудень"
			break

		default: resultMonth = "Error"

	}
	return resultMonth
}

const numMonth = parseInt(prompt("Введіть номер місяць пори року", 3))
const message = getMonthOfYear(numMonth)
document.write(`Це місяць — ${message}`)



