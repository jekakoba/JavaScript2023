"use strict"
// Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.

const names = ["Pavlo", "Peter", "Andrii", "Olga", "Ivan", "Evgen", "Anna", "Igor"]

const namesSort = [...names]

function getBubble(arr) {
	let changet

	do {
		changet = false
		for (let i = 1; i < arr.length; i++) {
			if (arr[i - 1] > arr[i]) {
				let temp = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = temp
				changet = true
			}

		}

	} while (changet);

	return arr
}

const sort = getBubble(namesSort)


//==================================================================================================//

function getBinarySearch(array, name) {
	let left = 0
	let right = array.length - 1

	while (left <= right) {

		let mid = Math.floor((left + right) / 2)

		if (array[mid] === name)
			return mid
		else if (array[mid] < name)
			left = mid + 1
		else
			right = mid - 1
	}

	return "Такого імені немає в масиві"
}

const binarySearch = getBinarySearch(sort, "Olga")

//==================================================================================================//

document.write(`
<p>Масив з іменами — ${names}
<p> Впорядкований масив з іменами в алфавітному порядку — ${namesSort}</p>
<p>Індекс імені "Olga" — ${binarySearch}</p>
`)




























// function binarySearch(arr, name) {
// 	let left = 0;
// 	let right = arr.length - 1;

// 	while (left <= right) {
// 		let mid = Math.floor((left + right) / 2);

// 		if (arr[mid] === name) {
// 			return mid;
// 		} else if (arr[mid] < name) {
// 			left = mid + 1;
// 		} else {
// 			right = mid - 1;
// 		}
// 	}

// 	return "Немає такого імені";
// }

// const search = binarySearch(names, "Olga")
// console.log(search);