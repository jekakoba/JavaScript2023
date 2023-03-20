"use strict"
/*
Створити окремі функції, які для 4 чисел знаходять:
1)суму;
2)добуток;
3)середнє арифметичне;
4)мінімальне значення.
*/

const fisrtNumber = parseFloat(prompt("Введіть перше число", 3))
const secondNumber = parseFloat(prompt("Введіть друге число", 8))
const thirdNumber = parseFloat(prompt("Введіть третє число", 2))
const fourthNumber = parseFloat(prompt("Введіть четверте число", 5))


function getSum(num1, num2, num3, num4) {
	return num1 + num2 + num3 + num4
}
function getProduct(num1, num2, num3, num4) {
	return num1 * num2 * num3 * num4
}
function getAverageScore(num1, num2, num3, num4) {
	return (num1 + num2 + num3 + num4) / 4
}
function getMinNumber(num1, num2, num3, num4) {
	let min = Infinity
	if (num1 > 0 && num1 < min) return min = num1
	if (num1 > 0 && num2 < min) return min = num2
	if (num1 > 0 && num3 < min) return min = num3
	if (num1 > 0 && num4 < min) return min = num4
}


const sumNumbers = getSum(
	fisrtNumber,
	secondNumber,
	thirdNumber,
	fourthNumber
)
const productNumbers = getProduct(
	fisrtNumber,
	secondNumber,
	thirdNumber,
	fourthNumber
)
const averageScore = getAverageScore(
	fisrtNumber,
	secondNumber,
	thirdNumber,
	fourthNumber
)
const minNumber = getMinNumber(
	fisrtNumber,
	secondNumber,
	thirdNumber,
	fourthNumber
)

document.write(
	`Сума чисел — ${sumNumbers}<br>
	Добуток чисел — ${productNumbers}<br>
	Середнє арифметичне — ${averageScore}<br>
	Мінімальне значення — ${minNumber}
	`)
