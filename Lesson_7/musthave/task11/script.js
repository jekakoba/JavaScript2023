"use strict"
/*
Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.
*/

function getAveragePositiveTemperature() {
	let countPositiveTemperature = 0
	let sum = 0
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] > 0) {
			sum += arguments[i]
			countPositiveTemperature++
		}
	}
	return sum / countPositiveTemperature
}

const averagePositiveTemperature = getAveragePositiveTemperature(10, 27, -3, 5, -7, 4, - 10, 21, -17)

document.write(
	`Покази температури — 10, 27, -3, 5, -7, 4,- 10, 21, -17 <br>
	Середнє значення додатних показів температури — ${averagePositiveTemperature}`
)
