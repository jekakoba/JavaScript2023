"use strict"
/*
З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
*/

const userYear = parseInt(prompt("Введіть свій вік"))

if (userYear < 6) {
	document.write(`Ви ще ходите в садочок`)
} else if (userYear >= 6 && userYear <= 17) {
	document.write(`Ви — школяр`)
} else if (userYear >= 18 && userYear <= 23) {
	document.write(`Ви — студент`)
} else if (userYear >= 24 && userYear <= 59) {
	document.write(`Ви — працівник`)
} else {
	document.write(`Ви — пенсіонер`)
}




