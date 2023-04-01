"use strict"

// Задача 1. Знайти суми елементів у вказаній області

let arr = [
	[2, 18, 3, 1],
	[9, 0, 1, 6],
	[14, 56, 10, 17],
	[83, 0, 2, 19],
	[53, 99, 2, 12],
	[62, 11, 0, 22],
]

console.log(arr);

//=================================================================================================================================//


//Ліва верхня область

let sum1 = 0

for (let rowNumber = 0; rowNumber < Math.floor(arr.length / 2); rowNumber++) {
	for (let columnNumber = 0; columnNumber < Math.floor(arr[rowNumber].length / 2); columnNumber++) {
		sum1 += arr[rowNumber][columnNumber]
	}
}

console.log(sum1);

//=================================================================================================================================//


//Права верхня область
let sum2 = 0

for (let rowNumber = 0; rowNumber < Math.floor(arr.length / 2); rowNumber++) {
	for (let columnNumber = Math.floor(arr[rowNumber].length / 2); columnNumber < arr[rowNumber].length; columnNumber++) {
		sum2 += arr[rowNumber][columnNumber]
	}
}

console.log(sum2);

//=================================================================================================================================//


//Ліва нижня область

let sum3 = 0

for (let rowNumber = Math.floor(arr.length / 2); rowNumber < arr.length; rowNumber++) {
	for (let columnNumber = 0; columnNumber < Math.floor(arr[rowNumber].length / 2); columnNumber++) {
		sum3 += arr[rowNumber][columnNumber]
	}
}

console.log(sum3);

//=================================================================================================================================//

//Права нижня область

let sum4 = 0

for (let rowNumber = Math.floor(arr.length / 2); rowNumber < arr.length; rowNumber++) {
	for (let columnNumber = Math.floor(arr[rowNumber].length / 2); columnNumber < arr[rowNumber].length; columnNumber++) {
		sum4 += arr[rowNumber][columnNumber]

	}
}

console.log(sum4);

//=================================================================================================================================//

//Задача 5. Суму парних рядків
let sumPairedLines = 0

for (let rowNumber = 0; rowNumber < arr.length; rowNumber++) {
	for (let columnNumber = 0; columnNumber < arr[rowNumber].length; columnNumber++) {
		if (columnNumber % 2 === 0)
			sumPairedLines += arr[rowNumber][columnNumber]
	}
}

console.log(sumPairedLines);

//=================================================================================================================================//

// 6) Задача 6. Суму непарних стовпців

let sumOddColums = 0

for (let columnNumber = 0; columnNumber < arr[0].length; columnNumber++) {

	if (columnNumber % 2 !== 0) {
		for (let rowNumber = 0; rowNumber < arr.length; rowNumber++) {
			sumOddColums += arr[rowNumber][columnNumber]
		}
	}
}

console.log(sumOddColums);

//=================================================================================================================================//



//7) Сума у парних рядках – непарні стовпці, у непарних – парні.


let sumInEvenLine = 0
let sumInOddLine = 0

for (let columnNumber = 0; columnNumber < arr.length; columnNumber++) {
	if (columnNumber % 2 !== 0) {
		for (let rowNumber = 0; rowNumber < arr[columnNumber].length; rowNumber++) {
			if (rowNumber % 2 === 0)
				sumInEvenLine += arr[columnNumber][rowNumber]
		}
	}
}


console.log(sumInEvenLine);

for (let columnNumber = 0; columnNumber < arr.length; columnNumber++) {
	if (columnNumber % 2 === 0) {
		for (let rowNumber = 0; rowNumber < arr[columnNumber].length; rowNumber++) {
			if (rowNumber % 2 !== 0)
				sumInOddLine += arr[columnNumber][rowNumber]
		}
	}
}

console.log(sumInOddLine);

document.write(`
<p>Масив с числами — [[${arr[0]}],[${arr[1]}],[${arr[2]}],[${arr[3]}],[${arr[4]}],[${arr[5]}]]<br></p>
<p style="font-size:30px;">Задача №1</p>
<p>Сума лівої верхньої області — ${sum1}</p>
<p>Сума правої верхньої області — ${sum2}</p>
<p>Сума лівої нижньої області — ${sum3}</p>
<p>Сума правої нижньої області — ${sum4}</p>
<p>Суму парних рядків — ${sumPairedLines}</p>
<p>Суму непарних стовпців — ${sumOddColums}</p>
<p>Сума у парних рядках – непарні стовпці —${sumInEvenLine}<br> у непарних – парні — ${sumInOddLine}</p>
<p></p>
<p></p>
`)

//=================================================================================================================================//


//==============================================================Полігон з практикою (Не ДЗ)==============================================================



// //Генерую кількість чисел (захотів щоб довжина їх була 5)
// function generateRandomNumbers() {
// 	let randomEl = []
// 	for (let i = 0; i < 5; i++) {
// 		let ran = Math.floor(Math.random() * 51)
// 		randomEl.push(ran)
// 	}
// 	return randomEl
// }

// const randomNumbers = generateRandomNumbers()

// //=================================================================================//

// // Генеруємо одновимірний масив
// function generaneRandomArray(rowsNumber) {
// 	let arr = []
// 	for (let i = 0; i < rowsNumber; i++) {
// 		let randomNumElements = generateRandomNumbers()
// 		arr.push(randomNumElements)
// 	}
// 	return arr
// }

// let array = generaneRandomArray(2)
// console.log(array);

// //=================================================================================//

// //Генеруємо двовимірний масив

// function generateArrTable(rowsNumber, columnNumber) {
// 	const table = []

// 	for (let i = 0; i < rowsNumber; i++) {
// 		const randomRow = generaneRandomArray(columnNumber)
// 		table.push(randomRow)

// 	}

// 	return table
// }

// const table = generateArrTable(2, 2)
// console.log(table);

//=================================================================================//

// let arr = [
// 	[2, 18, 3, 20, 87, 89, 5, 32, 10, 17],
// 	[9, 0, 1, 10, 32, 100, 8, 22, 10, 29],
// 	[14, 56, 37, 13, 3, 3, 61, 12, 0, 19],
// 	[83, 0, 2, 11, 32, 98, 15, 10, 6, 1],
// 	[53, 99, 2, 10, 3, 22, 32, 84, 13, 4],
// 	[62, 11, 0, 100, 90, 87, 38, 19, 8, 8],
// ]




// const countWeeks = parseInt(prompt("Введіть кількість тижнів", 5))

// let minValue = 1
// let maxValue = 1000


// //Генеруємо рандомний приубток по дням
// function getRandomNumber(minValue, maxValue) {
// 	return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
// }


// //Генеруємо одновимірний масив

// function generateRandomArray(countWeeks, minValue, maxValue) {
// 	const arr = []
// 	for (let i = 0; i < countWeeks; i++) {
// 		let randomPrice = getRandomNumber(minValue, maxValue)
// 		arr.push(randomPrice)
// 	}
// 	return arr
// }

// //Генеруємо двовимірний масив

// function generaneArrayTable(rowsNumber, columsNumber, minValue, maxValue) {
// 	const table = []
// 	for (let i = 0; i < rowsNumber; i++) {
// 		const randomRow = generateRandomArray(columsNumber, minValue, maxValue) // генеруємо рядок
// 		table.push(randomRow)
// 	}
// 	return table
// }



// //Знаходимо суму

// function getSum(table) {
// 	let sum = 0

// 	for (let rowNumber = 0; rowNumber < table.length; rowNumber++) {
// 		for (let columnNumber = 0; columnNumber < table[rowNumber].length; columnNumber++) {
// 			sum += table[rowNumber][columnNumber]

// 		}


// 	}

// 	return sum
// }

// let array = generateRandomArray(countWeeks, minValue, maxValue)
// console.log(array);

// let table = generaneArrayTable(countWeeks, 7, minValue, maxValue)
// console.log(table);

// let totalSum = getSum(table)
// console.log(totalSum);