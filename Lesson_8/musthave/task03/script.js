"use strict"
/*
Задача 3 Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
*/

const names = ["Оленка", "Іштван", "Юрій", "Микола", "Іван", "Оля", "Андрій", "Іван", "Євгеній"]
function getNameIvan(names) {
	let countName = 0
	for (let i = 0; i < names.length; i++) {
		if (names[i] === "Іван")
			countName++
	}
	return countName
}

document.write(`Ім'я Іван зустрічається ${getNameIvan(names)} рази`)
