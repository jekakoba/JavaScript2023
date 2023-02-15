"use strict"
/*
З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
*/

const numberOfMonth = parseInt(prompt("Введіть номер місяця (1-12)", 1))


if (numberOfMonth < 1 || numberOfMonth > 12) {
	document.write("Некоректне значення!")

} else if (numberOfMonth >= 3 && numberOfMonth < 6) {
	document.write("Весна")
} else if (numberOfMonth >= 6 && numberOfMonth < 9) {
	document.write("Літо")
} else if (numberOfMonth >= 9 && numberOfMonth < 12) {
	document.write("Осінь")
} else {
	document.write("Зима")
}