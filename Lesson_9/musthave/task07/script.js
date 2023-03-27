"use strict"
/*
Задача 7 Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.
*/

//================================================================================//


const prices = [200, 150, 1200, 700, 1700, 1540, 654, 126]

const discount = 30

prices.forEach(
	(priceElement, index, baseArrRef) => {
		if (priceElement > 1000) {
			baseArrRef[index] = priceElement - (priceElement / 100 * discount)
		}
	});

