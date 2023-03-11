"use strict"
/*
Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем. Приклад:
•12
•21
•34
•51
*/

const MIN_NUM = 1
const MAX_NUM = 100
let countNumber = parseFloat(prompt("Введіть кількість випадкових чисел "))
for (let i = 0; i < countNumber; i++) {
	const randomNumber = MIN_NUM + Math.floor(Math.random() * (MAX_NUM - MIN_NUM + 1))
	document.write(`
	<ul>
	<li>${randomNumber}</li>
	</ul>
	`);
}

