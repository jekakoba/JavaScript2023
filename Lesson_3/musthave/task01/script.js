"use strict"
/*
З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.
*/

const fistrChildName = prompt("Введіть ім'я першої дитини")
const quantityCandyFirstChild = parseFloat(prompt("Введіть кількість цукерок у першої дитини"))

const secondChildName = prompt("Введіть ім'я першої дитини")
const quantityCandySecondChild = parseFloat(prompt("Введіть кількість цукерок у другої дитини"))


if (quantityCandyFirstChild > quantityCandySecondChild) {
	document.write(` <div>У дитини з ім'ям ${fistrChildName}  цукерок більше</div>`)

} else if (quantityCandyFirstChild < quantityCandySecondChild) {
	document.write(` <div>У дитини з ім'ям ${secondChildName}  цукерок більше</div>`)
} else if (quantityCandyFirstChild === quantityCandySecondChild)
	document.write(` Кількість цукерок однакова</div>`)


