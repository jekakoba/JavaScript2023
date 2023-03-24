"use strict"
/*
Задача 5 Дано масив елементів. Знайти добуток додатних елементів
*/
//=================================================================//


const elements = [25, 16, 2, -102, -377, -43, -101, -203, 5, -555, -18, -26]
document.write(`Масив з числами ${elements} <br>`)

let product = 1

for (const element of elements) {
	if (element > 0)
		product *= element
}

document.write(`Добуток додатних елементів — ${product}`)