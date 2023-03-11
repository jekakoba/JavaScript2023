"use strict"
/*
Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.
*/

const firstUserNumber = parseFloat(prompt("Ведіть перше число", 3))
const secondUserNumber = parseFloat(prompt("Ведіть друге число", 6))
let sum = 0
let counter = 0
for (let numbers = firstUserNumber; numbers <= secondUserNumber; numbers++) {
	if (numbers % 2 !== 0 && counter < 5) {
		counter++
		sum += numbers
	}

}
document.write(`
Сума 5 непарних чисел, що знаходяться між заданими проміжками — ${sum}
`)

