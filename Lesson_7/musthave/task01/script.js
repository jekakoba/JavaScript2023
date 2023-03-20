"use strict"
/*
Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.
*/

function getSeasonfYear(numMonth) {
	let resultSeason
	switch (numMonth) {
		case 12:
		case 1:
		case 2: resultSeason = "Зима"
			break

		case 3:
		case 4:
		case 5: resultSeason = "Весна"
			break

		case 6:
		case 7:
		case 8: resultSeason = "Літо"
			break

		case 9:
		case 10:
		case 11: resultSeason = "Осінь"
			break

		default: resultSeason = "Error"

	}
	return resultSeason
}

const numMonth = parseInt(prompt("Введіть номер місяць пори року", 3))
const message = getSeasonfYear(numMonth)
document.write(`Пора року — ${message}`)
