"use strict"
/*
Користувача поступово вводить показники температури протягом року. Знайти середню температуру.
*/


const year = 365
let countDay = 0
let averageValue = 0
for (let i = 0; i < year; i++) {
	let temperature = parseFloat(prompt(`Введіть температуру ${i + 1} дня`))
	if (!isFinite(temperature)) {
		alert(`Некоректне значення! Спробуйте ще раз`)
		i--
	} else {
		countDay += temperature
	}
}
averageValue = countDay / year
alert(`Середня температура за рік складає ${averageValue.toFixed(2)} градусів.`)