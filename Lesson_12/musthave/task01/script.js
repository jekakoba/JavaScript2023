"use strict"

// Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою

//======================================================================================//

function getRandomNumber(length, minValue, maxValue) {
	let arr = []
	for (let i = 0; i < length; i++) {
		const random = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
		arr.push(random)
	}

	return arr
}

const randomNumber = getRandomNumber(30, -10, 20)

document.write(`
Масив з числами — ${randomNumber}
`)

//======================================================================================//

function getBubble(arr) {
	let changet
	let count = 0
	do {
		changet = false
		for (let i = 1; i < arr.length; i++) {
			if (arr[i - 1] > arr[i]) {
				let temp = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = temp
				changet = true
				count++
			}

		}

	} while (changet);

	return [arr, count]
}

//=============================================Результат======================================================//

const [arr, count] = getBubble(randomNumber)

document.write(`
<p>Впорядкований масив с числами — ${arr}</p>
<p>Кількість обмінів під час сортування бульбашкою — ${count}</p>
`)
