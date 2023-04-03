"use strict"
// Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.

//===================================================================================================//

//Генеруємо випадкові числа в заданому діапазоні

function randomNumber(length, minValue, maxValue) {
	let array = []

	for (let i = 0; i < length; i++) {
		const random = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
		array.push(random)
	}
	return array
}

const numbers = randomNumber(30, -20, 30)
document.write(`
Масив з рандомними числами — ${numbers}<br>
`)

//===================================================================================================//

function insertSort(array) {
	let count = 0
	for (let k = 1; k < array.length; k++) {
		const curentElement = array[k]
		let i = k - 1
		while (i >= 0 && array[i] > curentElement) {
			array[i + 1] = array[i]
			i--
			count++
		}

		array[i + 1] = curentElement

	}

	return [array, count]
}

//=============================================Результат======================================================//

const [array, count] = insertSort(numbers)


document.write(`
Впорядкований масив з числами — ${array}<br>
Кількість обмінів під час сортування включеннями — ${count}
`)