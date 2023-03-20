"use strict"
/*
Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель.
*/

const CELL_X = parseInt(prompt("Введіть кількість клітинок по осі Х", 10)),
	CELL_Y = parseInt(prompt("Введіть кількість клітинок по осі Y", 10))

let positionShell_X = Math.floor(1 + Math.random() * `${CELL_X}`),
	positionShell_Y = Math.floor(1 + Math.random() * `${CELL_Y}`)


const quantityShells = parseInt(prompt("Введіть кількість снарядів", 5))


for (let i = 0; i < quantityShells; i++) {

	let shotPositionX = parseInt(prompt(`Введіть позицію для пострілу по осі Х від 1 до ${CELL_X}`)),
		shotPositionY = parseInt(prompt(`Введіть позицію для пострілу по осі Y від 1 до ${CELL_Y}`))


	if (shotPositionX === positionShell_X && shotPositionY === shotPositionY) {
		alert(`Ви попали та потопили корабель!`)
		break
	}
	else
		alert(`Мимо!`)
}