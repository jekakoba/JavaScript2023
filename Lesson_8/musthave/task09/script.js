"use strict"
/*
Задача 9 Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.
*/

//================Вводимо потрібні данні===============================================

let countCells = parseInt(prompt("Введіть кількість клітинок", 10))
let countShip = parseInt(prompt("Введіть кількість одиночних кораблів", 3))

//===================Виставляємо кораблі=================================//

function createShips(countCells, countShip) {
	let arr = new Array(countCells).fill(0);

	for (let i = 0; i < countShip; i++) {
		let position;

		do {
			position = Math.floor(Math.random() * countCells);
		}
		while (arr[position] !== 0);
		arr[position] = 1;
	}
	return arr

}

const ships = createShips(countCells, countShip)

console.log(ships);

//=============================================================================//

//======================Стріляємо по кораблям==============================//

function isShotsOnTheShips(ships, countCells) {
	let hits = 0 // кількість влучань
	let isSunk = true // корабель потоплений 

	while (isSunk) {
		let guess = parseInt(prompt(`Введіть позицію для пострілу (0-${countCells})`, 3))
		if (guess < 0 || guess > `${countCells}`) {
			alert("Некоректне значення! Спробуйте ще раз")
		} else {

			if (ships[guess]) {
				alert("Попадання!")
				ships[guess] = 0
				hits++
				if (hits === 3) {
					alert("Всі кораблі потоплені! Ви перемогли!")
					isSunk = false
				}


			} else {
				alert("Промах!")
			}
		}

	}
}
isShotsOnTheShips(ships, countCells)
