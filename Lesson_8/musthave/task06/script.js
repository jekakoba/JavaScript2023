"use strict"
/*
Задача 6  Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
Приклад збереження даних
let productsPrices = [1000, 20, 31]
let productsTitles = [‘cheese’, ‘juice’, ‘bread’]
*/

const userCash = parseFloat(prompt("Введіть кількість Ваших грошей", 1000))

let productsPrices = [1000, 20, 31]
let productsTitles = ['cheese', 'juice', 'bread']

function getProduct(userCash, productsPrices, productsTitles) {
	let availableProduct = []
	for (let i = 0; i <= productsPrices.length; i++) {
		if (productsPrices[i] <= userCash) {
			availableProduct.push(productsTitles[i])
		}
	}

	return availableProduct
}
const product = getProduct(userCash, productsPrices, productsTitles)

document.write(`Товари, які може дозволити собі покупець —${product}`)

