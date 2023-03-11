"use strict"
/*
Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня..
*/

const weeks = parseInt(prompt(`Введіть кількість тижнів`, 3))
let totalPrice = 0
for (let week = 1; week <= weeks; week++) {
	let totalPriceWeek = 0
	for (let day = 1; day <= 7; day++) {
		const moneyOfDay = parseFloat(prompt(`Введіть прибуток ${week} тижня ${day} дня`))
		if (isNaN(moneyOfDay)) {
			alert("Некоректне значення! Спробуйте ще раз");
			day--

		} else
			totalPriceWeek += moneyOfDay

	}
	document.write(`Прибуток ${week} тижня — ${totalPriceWeek}грн <br>`)
	totalPrice += totalPriceWeek

}

document.write(`Загальний прибуток становить — ${(totalPrice)}грн`)