"use strict"
// Задача 2. Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
//======================================================================================//
function getYear({ month, year }, N) {
	const addedYears = Math.floor((month + N) % 12)
	return addedYears + year
}
const dataInfo = {
	day: 12,
	month: 8,
	year: 2023,
}
const N = parseInt(prompt(`Введіть кількість місяців`))
const year = getYear(dataInfo, N)

console.log(year);