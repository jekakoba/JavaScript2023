"use strict"
/*
Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.
*/

const fisrtNumber = parseFloat(prompt("Введіть перше число", 3))
const secondNumber = parseFloat(prompt("Введіть друге число", 8))
const thirdNumber = parseFloat(prompt("Введіть третє число", 2))


//Кількість парних
function getQuantityEven(num1, num2, num3) {
	let countQuantityEven = 0;
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] % 2 === 0) {
			countQuantityEven++
		}
	}
	return countQuantityEven
}


//Кількість додатних
function getPositiveNumbers(num1, num2, num3) {
	let countPositiveNumbers = 0;
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] > 0) {
			countPositiveNumbers++
		}
	}
	return countPositiveNumbers
}

//Кількість більших за 100
function getMoreHundred(num1, num2, num3) {
	let countMoreHundred = 0;
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] > 100) {
			countMoreHundred++
		}
	}
	return countMoreHundred
}


const quantityAdd = getQuantityEven(
	fisrtNumber,
	secondNumber,
	thirdNumber,
)
const positiveNumbers = getPositiveNumbers(
	fisrtNumber,
	secondNumber,
	thirdNumber,
)
const moreHundred = getMoreHundred(
	fisrtNumber,
	secondNumber,
	thirdNumber,
)

document.write(
	`Кількість парних чисел — ${quantityAdd}<br>
	Кількість додатних чисел — ${positiveNumbers}<br>
	Кількість чисел більших за 100 — ${moreHundred}
	`)
