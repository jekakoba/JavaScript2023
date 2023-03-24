"use strict"
/*
Задача 10  Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.
*/

//Спробував зробити через функцію перший раз

const prices = [200, 150, 700, 1000]
const TAX = 20

function getTaxPrices(newPrices, TAX) {
	return newPrices.map(price => price * (TAX / 100))
}


const taxPrices = getTaxPrices(prices, TAX)
console.log(taxPrices);

document.write(`Прайс з цінами — ${prices} <br>
Величина сплаченого податку — ${taxPrices}`
)