"use strict"
/*
Задача 6  Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
*/


const elements = [5, 16, 2, -18, -26, 10, 4]

elements.forEach(
	(element, index, baseArrRef) => {

		if (element > baseArrRef[0]) baseArrRef[index] *= 2
		console.log(baseArrRef);
	});