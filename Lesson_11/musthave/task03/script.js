"use strict"
// Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

//===============================================================================================//
// Створюємо поле бою

function createBattlefield(row, column) {
	const table = []
	for (let i = 0; i < row; i++) {
		let row = []
		for (let j = 0; j < column; j++) {
			row.push(0)
		}
		table.push(row)
	}
	return table
}

const battlefield = createBattlefield(6, 6)
//===============================================================================================//

// Розміщуємо кораблі

function toPlaceShips(battlefield) {
	const rows = battlefield.length
	const colums = battlefield[0].length

	for (let i = 0; i < 5; i++) {
		const x = Math.floor(Math.random() * rows);
		const y = Math.floor(Math.random() * colums);
		if (battlefield[x][y] === 0) {
			battlefield[x][y] = 1
		}
	}
	return battlefield
}

const ships = toPlaceShips(battlefield)

//===============================================================================================//

//Стріляємо по кораблях 
let ammunition = parseInt(prompt("Введіть кількість снарядів", 5)) // кількість снарядів
function getShotOnShips(ships, ammunition) {

	let hits = 0 // кількість влучань

	while (ammunition > 0 && hits < 5) {

		let shot_X = parseInt(prompt("Введіть позицію для пострілу по Х (Від 0 до 5)", 3))

		let shot_Y = parseInt(prompt("Введіть позицію для пострілу по Y (Від 0 до 5)", 5))

		ammunition--
		if (ships[shot_X][shot_Y]) {
			alert("Попадання!")
			hits++
			ships[shot_X][shot_Y] = 0
		} else alert("Промах!")

	} alert("Гра закінчена");
}
getShotOnShips(ships, ammunition)
