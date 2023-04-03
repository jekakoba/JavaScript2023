"use strict"

// Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.

const names = ["Olga", "Evgen", "Ivan", "Andrii", "Anna", "Igor"]

document.write(`
Масив з іменами — ${names}
`)


const newNames = names.sort((name1, name2) => name1.length - name2.length);


function getBinarySearch(names) {
	let left = 0
	let right = names.length - 1

	while (left <= right) {

		let mid = Math.floor((left + right) / 2)

		if (names[mid].length === 5)
			return mid
		else if (names[mid].length < 5) {
			left = mid + 1
		} else
			right = mid - 1

	}
	return "Імені з довжиною в 5 символів немає"
}

const binarySearch = getBinarySearch(newNames)

document.write(`
<p>Відсортований масив з іменами ${newNames}</p>
<p>Позиція імені, у якого кількість символів п'ять — ${binarySearch}</p>
`)

