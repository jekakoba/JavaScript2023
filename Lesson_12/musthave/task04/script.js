"use strict"
// Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком. Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран.


let numbers = [3, 5, 1, 4, 2]

document.write(`
Масив з числами — ${numbers}<br>
`)

//=============================================Сортування бульбашк=====================================================//

let arr_1 = [...numbers]

function getBubble(arr) {
	let changet
	let count_1 = 0
	document.write(`
	<p>Сортування "БУЛЬБАШКОЮ"</p>
	`)
	do {
		changet = false

		for (let i = 1; i < arr.length; i++) {
			if (arr[i - 1] > arr[i]) {
				let temp = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = temp
				changet = true
			}
			count_1++
			document.write(`${arr}<br>`)
		}

	} while (changet);

	return [arr, count_1]
}

const [arr, count_1] = getBubble(arr_1)

document.write(`
<p>Впорядкований масив с числами — ${arr}</p>
<p>Кількість обмінів під час сортування бульбашкою — ${count_1}</p>
`)

//==========================================Сортування "ЗМІШУВАННЯМ========================================================//

let arr_2 = [...numbers]

// Сортування змішуванням

const swap = (array, i, j) => {
	let temp = array[i]
	array[i] = array[j]
	array[j] = temp
	return 1
}

function shakerSort(array) {
	let leftIndex = 0
	let rightIndex = array.length - 1
	let count_2 = 0
	document.write(`
	<p>Сортування "ЗМІШУВАННЯМ"</p>
	`)
	while (leftIndex < rightIndex) {

		for (let i = leftIndex; i < rightIndex; i++) {
			if (array[i] > array[i + 1])
				count_2 += swap(array, i, i + 1)
			document.write(`${array}<br>`)
		}
		rightIndex--

		for (let i = rightIndex; i > leftIndex; i--) {
			if (array[i] < array[i - 1])
				count_2 += swap(array, i, i - 1)
		}
		leftIndex++

	}

	return [array, count_2]
}

const [array, count_2] = shakerSort(arr_2)

document.write(`
<p>Впорядкований масив  з числами — ${arr_2}</p>
<p>Кількість обмінів під час сортування змішуванням — ${count_2}</p>
`)

//===============================================Сортування "ВКЛЮЧЕННЯМ"===================================================//

let arr_3 = [...numbers]

function insertSort(arr_3) {
	let count_3 = 0
	document.write(`Сортування "ВКЛЮЧЕННЯМ"<br>`)
	for (let k = 1; k < arr_3.length; k++) {
		const curentElement = arr_3[k]
		let i = k - 1
		while (i >= 0 && arr_3[i] > curentElement) {
			arr_3[i + 1] = arr_3[i]
			i--
			count_3++

		}
		document.write(`${arr_3}<br>`)

		arr_3[i + 1] = curentElement

	}

	return [arr_3, count_3]
}

const [array_3, count_3] = insertSort(arr_3)

document.write(`
Впорядкований масив з числами — ${array_3}<br>
Кількість обмінів під час сортування включеннями — ${count_3}
`)