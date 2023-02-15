"use strict"
/*
З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
*/

const dayOfWeek = parseInt(prompt("Введіть номер дня тижня (1-7)", 1))

if (dayOfWeek === 1) {
	document.write(`Понеділок`)
} else if (dayOfWeek === 2) {
	document.write(`Вівторок`)
} else if (dayOfWeek === 3) {
	document.write(`Середа`)
} else if (dayOfWeek === 4) {
	document.write(`Четвер`)
} else if (dayOfWeek === 5) {
	document.write(`П'ятниця`)
} else if (dayOfWeek === 6) {
	document.write(`Субота`)
} else if (dayOfWeek === 7) {
	document.write(`Недлія`)
} else {
	document.write(`Неоректне значення!`)
}