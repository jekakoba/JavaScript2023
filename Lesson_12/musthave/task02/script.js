"use strict"
// Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.

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
Масив з числами — ${randomNumber} <br>
`)

//======================================================================================//

const swap = (array, i, j) => {
	let temp = array[i]
	array[i] = array[j]
	array[j] = temp
	return 1
}

function shakerSort(array) {
	let leftIndex = 0
	let rightIndex = array.length - 1
	let count = 0
	while (leftIndex < rightIndex) {

		for (let i = leftIndex; i < rightIndex; i++) {
			if (array[i] > array[i + 1])
				count += swap(array, i, i + 1)

		}
		rightIndex--

		for (let i = rightIndex; i > leftIndex; i--) {
			if (array[i] < array[i - 1])
				count += swap(array, i, i - 1)

		}
		leftIndex++
	}

	return [array, count]
}

//=============================================Результат======================================================//

const [array, count] = shakerSort(randomNumber)


document.write(`
Впорядкований масив  з числами — ${array} <br>
Кількість обмінів під час сортування змішуванням — ${count}
`)































// const swap = (arr, i, j) => {
// 	let temp = arr[i]
// 	arr[i] = arr[j]
// 	arr[j] = temp
// }

// function shakerSort(array) {

// 	let leftIndex = 0
// 	let rightIndex = array.length - 1

// 	while (leftIndex < rightIndex) {


// 		for (let i = leftIndex; i < rightIndex; i++) {
// 			if (array[i] > array[i + 1]) {
// 				swap(array, i, i + 1)
// 			}

// 		}
// 		rightIndex--

// 		for (let i = rightIndex; i > leftIndex; i--) {
// 			if (array[i] < array[i - 1]) {
// 				swap(array, i, i - 1)
// 			}

// 		}
// 		leftIndex++
// 	}

// 	return array
// }

// shakerSort(arr)
// console.log(arr);