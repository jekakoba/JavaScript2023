"use strict"
/*
Задача 4  Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
•	починаються на букву «А»;
•	перша і остання літери співпадають;
•	складаються з більше ніш 5 символів

*/
const carsNumbers = ["BA1023AC", "8777", "AO2811PO", "AE0998BA", "BH2771OB", "AX2219XO"]

//============================================================================================//

//Отримуємо кількість номерів, які починаються на літеру A 
function getFirstLetter_A(carsNumbers) {
	let result = 0
	for (let i = 0; i < carsNumbers.length; i++) {
		if (carsNumbers[i][0] === "A")
			result++
	}
	return result
}

//============================================================================================//


//Отримуємо кількість номерів, у яких перша і остання літери співпадають 
function getFirstLetterAndLastLetter(carsNumbers) {
	let result = 0
	for (let i = 0; i < carsNumbers.length; i++) {
		const firstLetter = carsNumbers[i][0]
		const lastLetter = carsNumbers[i][carsNumbers[i].length - 1]
		if (firstLetter === lastLetter)
			result++
	}
	return result
}


//============================================================================================//
// Отримуємо кількість номерів, які складаються з більше ніш 5 символів

function getNumbersMoreFiveSymbol(carsNumbers) {
	let result = 0
	for (let i = 0; i < carsNumbers.length; i++) {
		if (carsNumbers[i].length > 5)
			result++
	}
	return result
}

//============================================================================================//
document.write(`
	Номерні знаки — ${carsNumbers} <br>
	Кількість номерів, які починаються на літеру A — ${getFirstLetter_A(carsNumbers)} <br>
	Кількість номерів, у яких перша і остання літери співпадають —  ${getFirstLetterAndLastLetter(carsNumbers)} <br>
	Кількість номерів, які складаються з більше ніш 5 символів —  ${getNumbersMoreFiveSymbol(carsNumbers)}
`)
