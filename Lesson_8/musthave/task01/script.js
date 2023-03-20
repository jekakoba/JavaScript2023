"use strict"
/*
Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).
*/

// 1-2 -  двійочник
//3 - трійочник
// 4-5 - хорошист
//5 - відмінник

// Вводимо оцінки з К предметів.
const schoolSubjects = parseInt(prompt("Введіть кількість предметів", 5))

//Кількість оцінок
function getScoreStudent() {
	let itemsScore = []
	for (let i = 0; i < schoolSubjects; i++) {
		let randomBalls = Math.floor(1 + Math.random() * 5)
		itemsScore.push(randomBalls)
	}
	return itemsScore
}

const scores = getScoreStudent(schoolSubjects)

//Знаходимо середнє значення оцінок
function getAverageScoreStudent(scores) {
	let sum = 0;
	for (let i = 0; i < scores.length; i++) {
		sum += scores[i]
	}
	return sum / scores.length

}

// Визначаємо статус студента
function getAverageStatusStudent(scores) {
	let minScore = Math.min(...scores)
	let result = ''
	switch (minScore) {
		case 1:
		case 2: result = "Двійочник"
			break;

		case 3: result = "Трійочник"
			break;


		case 4: result = "Хорошист"
			break

		default: result = "Хорошист"
			break;
	}

	return result
}

document.write(`
<div">
Кількість оцінок — ${scores}<br>
Середня оцінка — ${getAverageScoreStudent(scores)}<br>
Учень  — ${getAverageStatusStudent(scores)}
</div>
`)