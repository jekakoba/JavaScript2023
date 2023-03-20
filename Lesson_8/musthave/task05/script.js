"use strict"
/*
Задача 5 Дано послідовність оцінок учня. Підрахувати кількість:
1)	двійок
2)	кількість хороших оцінок (добре, відмінно);
3)	кількість оцінок, які нижче середнього.
*/

//=================================================================//

//Отримуємо рандомну кількість оцінок

const countScore = parseInt(prompt("Введіть кількість оцінок учня", 5))
function getCountScoreStudent() {
	let scoresStudent = []
	for (let i = 0; i < countScore; i++) {
		let randomBalls = Math.floor(1 + Math.random() * 12)
		scoresStudent.push(randomBalls)
	}
	return scoresStudent
}



//=================================================================//

//Кількість двійок

function getDeuceScoreStudent(scores) {
	let deuceScore = 0
	for (let i = 0; i < scores.length; i++) {
		if (scores[i] === 2)
			deuceScore++
	}
	return deuceScore
}

//=================================================================//

//Кількість хороших оцінок (добре, відмінно);
function showGoodScore(scores) {
	let countGoodScore = 0
	for (let i = 0; i < scores.length; i++) {
		if (7 <= scores[i] && scores[i] <= 12)
			countGoodScore++
	}
	return countGoodScore
}

//===================================================================//

//Кількість оцінок, які нижче середнього.
function showBadScore(scores) {
	let countBadScore = 0
	for (let i = 0; i < scores.length; i++) {
		if (7 > scores[i] && scores[i] >= 1)
			countBadScore++
	}
	return countBadScore
}


const scores = getCountScoreStudent()

document.write(`
<div style="text-align: left">
	Оцінки — ${scores}<br>
	Кількість двійок — ${getDeuceScoreStudent(scores)}<br>
	Кількість хороших оцінок (7-12) — ${showGoodScore(scores)}<br>
	Кількість оцінок, які нижче середнього (1-7) — ${showBadScore(scores)}<br>
</div>

`)




