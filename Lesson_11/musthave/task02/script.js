"use strict"
// Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// 1) загальний прибуток кожного масиву за тиждень;
// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
// 3) загальний прибуток за робочі дні
// 4) загальний прибуток за вихідні дні
// 5) максимальний прибуток за середу
// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
// 7) відсортувати кожен тиждень за зростанням
// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

//===========================================================================//

// Кількість магазинів
const countStore = parseInt(prompt("Введіть кількість магазинів", 5))

//Рандомний прибуток
function generateRandomProfit() {
	return Math.floor(Math.random() * 1001)
}
const randomProfit = generateRandomProfit()

//===========================================================================//

//Формуємо одновимірний масив
function generateRandomArray(rowsNumber) {
	let arr = []
	for (let i = 0; i < rowsNumber; i++) {
		let random = generateRandomProfit()
		arr.push(random)
	}
	return arr
}

const randomArray = generateRandomArray(countStore)
//===========================================================================//

//Формуємо двовимірний масив
function generateTable(rowsNumber, columsNumber) {
	const table = []

	for (let i = 0; i < rowsNumber; i++) {
		const randomRow = generateRandomArray(columsNumber);
		table.push(randomRow)

	}
	return table
}

const table = generateTable(countStore, 7)
console.log(table);

//===========================================================================//

//1) загальний прибуток кожного масиву за тиждень;

for (let store = 0; store < table.length; store++) {
	let weekSum = 0
	for (let day = 0; day < table[store].length; day++) {
		weekSum += table[store][day]
	}
	console.log(`Прибуток ${store + 1} магазину за тиждень — ${weekSum}`);
}

//===========================================================================//

// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);

for (let day = 0; day < table[0].length; day++) {
	let sum2 = 0
	for (let store = 0; store < table.length; store++) {
		sum2 += table[store][day]

	}
	console.log(`Загальний прибуток усіх магазинів за ${day + 1} день: ${sum2} `);
}

//===========================================================================//

// 3) загальний прибуток за робочі дні

let sumOfWorkingDays = 0

for (let store = 0; store < table.length; store++) {
	for (let day = 0; day < 5; day++) {
		sumOfWorkingDays += table[store][day]
	}

}
console.log(`Загальний прибуток за робочі дні — ${sumOfWorkingDays}`);

//===========================================================================//

// 4) загальний прибуток за вихідні дні

let sumOfWeekendsDays = 0

for (let store = 0; store < table.length; store++) {
	for (let day = 5; day < 7; day++) {
		sumOfWeekendsDays += table[store][day]
	}

}

console.log(`Загальний прибуток за вихідні дні — ${sumOfWeekendsDays}`);

//===========================================================================//

// 5) максимальний прибуток за середу
let arr = [
	[2, 18, 3, 1, 35, 43, 2],
	[9, 0, 1, 6, 20, 3084, 488],
	[14, 56, 10, 17, 4987, 40, 0],
	[83, 0, 2, 19, 409, 2299, 3],
	[53, 99, 2, 12, 3008, 377, 1],
	[62, 11, 0, 22, 2098, 387, 3],
]
let maxNum = 0

for (let day = 0; day < arr.length; day++) {
	if (arr[day][2] > maxNum) {
		maxNum = arr[day][2];
	}
}
console.log(arr);
console.log(maxNum);


//===========================================================================//
// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
// For..of
let arrMore_200ForOf = []

for (const row of table) {
	for (const element of row) {

		if (element > 200)
			arrMore_200ForOf.push(element)

	}
}



console.log(arrMore_200ForOf);

//============================================================//

// 7) відсортувати кожен тиждень за зростанням

let newArr = table

for (let i = 0; i < newArr.length; i++) {
	newArr[i].sort((a, b) => a - b)
}
console.log(newArr)
//============================================================//

// 8,9 поки не знаю як робити