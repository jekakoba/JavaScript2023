"use strict"
/*
Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.
*/

function getNegativeTemperature() {
	let countNegativeTemperature = 0
	for (let i = 0; i < arguments.length; i++) {

		if (arguments[i] < 0) {
			countNegativeTemperature++
		}
	}
	return countNegativeTemperature
}

const negativeTemperature = getNegativeTemperature(10, 27, -3, 5, -7, 4, - 10, 21, -17)

document.write(
	`Покази температури — 10, 27, -3, 5, -7, 4 - 10, 21, -17 <br>
	Кількість від’ємних показів температури — ${negativeTemperature}`
)


