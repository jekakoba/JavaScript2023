"use strict"
/*
Задача 4  Дано масив елементів. Вивести на екран елементи, що більші за 100

*/
const elements = [25, 16, 2, 102, 377, 43, 101, 203, 5, 555, 18, 26]
document.write(`Масив з числами ${elements}<br>`)

for (const element of elements) {
	if (element > 100) document.write(`${element}, `)

}

