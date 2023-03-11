"use strict"
/*
Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами..
*/

const firstUserNumber = parseFloat(prompt("Ведіть перше число", 3))
const secondUserNumber = parseFloat(prompt("Ведіть друге число", 6))

let sum = 0
for (let numbers = firstUserNumber; numbers <= secondUserNumber; numbers++) {
	if (numbers % 2 !== 0)
		sum += numbers
}
document.write(`
Сума непарних чисел в заданому проміжку — ${sum}
`)

