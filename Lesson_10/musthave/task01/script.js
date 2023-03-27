"use strict"
/*
При розв’язанні задач намагайтесь використовувати відповідні методи (map, filter, reduce,…) всюди, де це можливо
Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
	  1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
	  2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
	  3)Сформувати список з тих цін, які більші за попереднє значення
	  4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
	  5)Підрахувати кількість змін цін
	  6)Визначити, чи є ціна, що менше 1000
	  7)Визначати, чи усі ціни більше за 1000
	  8)Підрахувати кількість цін, що більше за 1000
	  9)Підрахувати суму цін, що більше за 1000
	  10)Знайти першу ціну, що більше за 1000
	  11)Знайти індекс першої ціни, що більше за 1000
	  12)Знайти останню ціну, що більше за 1000
	  13)Знайти індекс останньої ціни, що більше за 1000

*/
//=================Створюємо історію цін від 1 до 1000 за заданий період =======================///

const startVeluePeriod = parseInt(prompt("Введіть початковий діапазон періоду", 1))
const endVeluePeriod = parseInt(prompt("Введіть кінцевий діапазон періоду", 12))

function getHistoryPriseOfThePeriod(startVeluePeriod, endVeluePeriod) {
	let priceList = []
	for (let i = startVeluePeriod; i <= endVeluePeriod; i++) {
		let randomNumberPrice = Math.floor(Math.random() * 10000) + 1;
		priceList.push(randomNumberPrice)
	}

	return priceList
}

const historyPriseOfThePeriod = getHistoryPriseOfThePeriod(startVeluePeriod, endVeluePeriod)
console.log(historyPriseOfThePeriod);
document.write(`Список цін — ${historyPriseOfThePeriod}`)
//=============================================================================================//
// 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

const numberLarge_1000 = historyPriseOfThePeriod.filter(element =>
	element > 1000 ? element : 0
)
console.log(numberLarge_1000);
//=============================================================================================//
// 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
const indexNumberLarge_100 = historyPriseOfThePeriod.reduce(
	(prevValue, element, index) => {
		if (element > 1000) {
			prevValue.push(index)
		}
		else prevValue
		return prevValue
	}, [])

console.log(indexNumberLarge_100);
//=============================================================================================//
// 3)Сформувати список з тих цін, які більші за попереднє значення

//Reduce

const bigPreliminaryValue = historyPriseOfThePeriod.reduce(
	(prevValue, element, index, baseArrRef) => {
		if (element > baseArrRef[index - 1]) {
			prevValue.push(element)
		}
		else prevValue
		return prevValue
	}, [])

console.log(bigPreliminaryValue);
// Цикл

// let prevValue = []
// for (let i = 1; i <= historyPriseOfThePeriod.length; i++) {
// 	if (historyPriseOfThePeriod[i] > historyPriseOfThePeriod[i - 1])
// 		prevValue.push(historyPriseOfThePeriod[i])
// }

// console.log(prevValue);
//=============================================================================================//

// 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
const maxNum = Math.max(...historyPriseOfThePeriod)
const interestValue = historyPriseOfThePeriod.map(element =>

	((element * 100 / maxNum).toFixed(2))

)
console.log(interestValue);

//=============================================================================================//

// 5)Підрахувати кількість змін цін

//Цикл

// let countChanges = 0
// for (let i = 1; i <= historyPriseOfThePeriod.length; i++) {
// 	historyPriseOfThePeriod[i] !== historyPriseOfThePeriod[i - 1] ? countChanges++ : countChanges
// }

// console.log(countChanges);

//Reduce

const countChanges = historyPriseOfThePeriod.reduce(
	(prevChanges, element, index, baseArrRef) =>
		element !== baseArrRef[index - 1] ? prevChanges + 1 : prevChanges
	, 0)

console.log(countChanges);

//=============================================================================================//

// 6)Визначити, чи є ціна, що менше 1000

const priceLess_1000 = historyPriseOfThePeriod.some(element => element < 1000)
console.log(priceLess_1000);

//=============================================================================================//

// 7)Визначати, чи усі ціни більше за 1000
const priceMore_1000 = historyPriseOfThePeriod.every(element => element > 1000)
console.log(priceMore_1000);

//=============================================================================================//

// 8)Підрахувати кількість цін, що більше за 1000

const countPriceMore_1000 = historyPriseOfThePeriod.reduce(
	(prevCountPrice, element) =>
		element > 1000 ? prevCountPrice + 1 : prevCountPrice
	, 0)
console.log(countPriceMore_1000);

//=============================================================================================//

// 9)Підрахувати суму цін, що більше за 1000

const sumNumbersMore_1000 = historyPriseOfThePeriod.reduce(
	(prevSum, element) =>
		element > 1000 ? prevSum + element : prevSum
	, 0)


console.log(sumNumbersMore_1000);
//=============================================================================================//

// 10)Знайти першу ціну, що більше за 1000

const priceFirstNumberMore_1000 = historyPriseOfThePeriod.find(element => element > 1000)
console.log(priceFirstNumberMore_1000);

//=============================================================================================//

// 11)Знайти індекс першої ціни, що більше за 1000

const firstIndexNumberMore_1000 = historyPriseOfThePeriod.findIndex(element => element > 1000)
console.log(firstIndexNumberMore_1000);


//=============================================================================================//
// 12)Знайти останню ціну, що більше за 1000

const priceLastNumberMore_1000 = historyPriseOfThePeriod.findLast(element => element > 1000)
console.log(priceLastNumberMore_1000);

//========================================================================//
// 13)Знайти індекс останньої ціни, що більше за 1000

const lastIndexNumberMore_1000 = historyPriseOfThePeriod.findLastIndex(element => element > 1000)
console.log(lastIndexNumberMore_1000);

//========================================================================//

document.write(`
<p>1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн:</p>
<p>${numberLarge_1000}</p>
<p>2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн:</p>
<p>${indexNumberLarge_100}</p>
<p>3)Сформувати список з тих цін, які більші за попереднє значення:</p>
<p>${bigPreliminaryValue}</p>
<p>4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального:</p>
<p>${interestValue}</p>
<p>5)Підрахувати кількість змін цін:</p>
<p>${countChanges}</p>
<p>6)Визначити, чи є ціна, що менше 1000:</p>
<p>${priceLess_1000}</p>
<p>7)Визначати, чи усі ціни більше за 1000:</p>
<p>${priceMore_1000}</p>
<p>8)Підрахувати кількість цін, що більше за 1000:</p>
<p>${countPriceMore_1000}</p>
<p>9)Підрахувати суму цін, що більше за 1000:</p>
<p>${sumNumbersMore_1000}</p>
<p>10)Знайти першу ціну, що більше за 1000:</p>
<p>${priceFirstNumberMore_1000}</p>
<p>11)Знайти індекс першої ціни, що більше за 1000:</p>
<p>${firstIndexNumberMore_1000}</p>
<p>12)Знайти останню ціну, що більше за 1000:</p>
<p>${priceLastNumberMore_1000}</p>
<p>13)Знайти індекс останньої ціни, що більше за 1000:</p>
<p>${lastIndexNumberMore_1000}</p>
`)




//================================Полігон з практикою (не ДЗ)================================================================//

//Дано масив показників термометра протягом місяця. З’ясувати, чи усі показники є більшими за 10 градусів.

//========================================================================//
// const temperatures = [2, 20, 10, 7, 20]

// function isTemperaturesBig_10(temperatures, value) {

// 	for (const temp of temperatures) {
// 		if (temp <= value) return false
// 		else return true
// 	}

// }
// const temperaturesBig_10 = isTemperaturesBig_10(temperatures, 10)
//========================================================================//

// const newTemperatures = temperatures.every(temp => temp > 10)

//========================================================================//


// Задача. Дано масив показників термометра протягом місяця. З’ясувати, чи є серед них дні, коли температура була меншою за 5 градусів.

//========================================================================//
// const temperatures = [20, 20, 10, 7, 20]

// const newTemperatures = temperatures.some(temp => temp < 5)
// console.log(newTemperatures);

//========================================================================//

// Задача. Дано масив показників термометра протягом місяця. З’ясувати, чи є серед них дні, коли температура була меншою за 5 градусів.
// const temperatures = [3, 20, 10, 35, 30]

// function isTemperaturesLess_5(temperatures, value) {
// 	let less_5 = false
// 	for (let i = 0; i < temperatures.length; i++) {
// 		if (temperatures[i] < value)
// 			return less_5 = true
// 		else return false

// 	}
// }

// const temperaturesLess_5 = isTemperaturesLess_5(temperatures, 5)
// console.log(temperaturesLess_5);

//========================================================================//



// Приклад. Упорядкувати за зростанням за третьою буквою


// const names = ["Vasil", "Olga", "Andriy", "Yevhenii"]

// const newNames = names.sort((name1, name2) => {
// 	if (name1[2] > name2[2]) return -1
// 	else return 1
// }
// )

// document.write(`${newNames}`)

//========================================================================//


// Приклад. Упорядкувати числа за спаданням

// const numbers = [203, 198, 387, 1000, 23, -37, 2, 0, -40, 30, 987]

// const newNumbers = numbers.sort((num1, num2) => {
// 	if (num1 > num2) return -1
// 	return 1

// })


//========================================================================//
// // Задача. Знайти суму парних елементів

// const numbers = [203, 198, 387, 1000, 23, -37, 2, 0, -40, 30, 987]

// function getEvenNumbers(numbers) {
// 	let sum = 0
// 	for (let i = 0; i < numbers.length; i++) {
// 		const num = numbers[i];
// 		num % 2 === 0 ? sum = sum + num : sum
// 	}
// 	return sum
// }

// const evenNumbers = getEvenNumbers(numbers)
//========================================================================//






// Вивести елементи які більші за 7


// const elements = [2, 9, 39, 4, 8, 3, 1, 0, 42]

//=====================================================//
// for (let i = 0; i < elements.length; i++) {
// 	if (elements[i] > 7)
// 		document.write(`${elements[i]},`)

// }
//=====================================================//
// function getBigNum7(elements) {
// 	let newArr = []
// 	for (let i = 0; i < elements.length; i++) {
// 		if (elements[i] > 7)
// 			newArr.push(elements[i])
// 	}
// 	return newArr
// }

// document.write(`Числа більші за 7 — ${getBigNum7(elements)}`)
//=====================================================//

// for (const number of elements) {
// 	if (number > 7)
// 		document.write(`${number},`)
// }
//=====================================================//
// const elements = [2, 9, 39, 4, 8, 3, 1, 0, 42]

// elements.forEach(num => {
// 	if (num > 7)
// 		document.write(num)
// });

//=====================================================//

//  Елементи які більші за 7 замінити на 0

// const elements = [2, 9, 39, 4, 8, 3, 1, 0, 42]

// elements.forEach((num, index, baseArrRef) => {
// 	if (num > 7) {
// 		baseArrRef[index] = 0
// 	}
// });

//=====================================================//

//Приклад. Масив цін товарів. Знайти суму цін, які більші за 100.


// const elements = [2, 9, 390, 400, 8, 3, 1, 0, 42]
// let sum = 0
// elements.forEach(el => {
// 	if (el > 100) sum = sum + el

// });

// console.log(sum);

//=====================================================//

// MAP

// const elements = [2, 9, 5]

// let arr = Array.from(elements, el => el * 3)

// console.log(arr);
//=====================================================//

// const elements = [2, 9, 5]

// const arr = elements.map(el => el * 3)
// console.log(arr);

//=====================================================//

//перший елемент який більший за 10
// const elements = [2, 9, 5, 76, 34, 30]


// const element = elements.find(
// 	(el, index, baseArrRef) => el > 10)
// console.log(element);

//=====================================================//

// Запитати кількість елементів в масиві
// Запитати діапазон рандомних чисел
// Відсортувати від найбільшого значення до найменшого


//===========================================================================================//

// const countElements = parseInt(prompt("Введіть кількість елементів в масиві", 50))
// const startValue = parseInt(prompt("Введіть початковий діапазон чисел", 1))
// const endValue = parseInt(prompt("Введіть кінцевий діапазон чисел", 100))

//===========================================================================================//

// Створюємо масив з рандомними числами у заданому діапазоні
// function getArrayElements(countElements, startValue, endValue) {

// 	let arrayNumbers = []
// 	for (let i = 0; i < countElements; i++) {
// 		let randomNumbers = startValue + Math.floor(Math.random() * (endValue - startValue + 1))
// 		arrayNumbers.push(randomNumbers)
// 	}
// 	return arrayNumbers
// }


// const arrayElements = getArrayElements(countElements, startValue, endValue)
// console.log(arrayElements);

//===========================================================================================//

//сортуємо числа за спаданням
// function getSortDownNumbers(arrayElements) {
// 	const sortNumbersarray = arrayElements.sort(
// 		(item1, item2) => {
// 			if (item1 > item2) return -1
// 			else
// 				if (item1 < item2) return 1
// 		}

// 	)

// 	return sortNumbersarray
// }

// const sortDownNumbers = getSortDownNumbers(arrayElements)
// console.log(sortDownNumbers);
//===========================================================================================//


//Знайти добуток від'ємних чисел


// Через цикл та функцію

// let numbers = [2, 17, -3, 8, -4, -5, 10, 27]

// function getProductNegativeNumbers(prevNegativeProduct, element) {
// 	return element < 0 ? prevNegativeProduct * element : prevNegativeProduct
// }



// let prevNegativeProduct = 1
// for (let i = 0; i < numbers.length; i++) {
// 	let element = numbers[i];
// 	prevNegativeProduct = getProductNegativeNumbers(prevNegativeProduct, element)
// }

// const productNegativeNumbers = numbers.reduce(getProductNegativeNumbers, 1)

// console.log(productNegativeNumbers);


//=================================================================================//

// let numbers = [2, 17, -3, 8, -4, -5, 10, 27]
// const productNegativeNumbers = numbers.reduce(
// 	(prevNegativeProduct, element) =>
// 		element < 0 ? prevNegativeProduct * element : prevNegativeProduct,

// 	1)

// console.log(productNegativeNumbers);

//=================================================================================//



//Знайти суму парних елементів
//==============================================================================================//

//Через цикл та функцію

// let numbers = [2, 17, 3, 8, 4, 5, 10, 27]

// function getSumEvenNumbers(prevSumEvenNumbers, element, index, baseArrRef) {
// 	return element % 2 === 0 ? prevSumEvenNumbers += element : prevSumEvenNumbers
// }


// let prevSumEvenNumbers = 0
// for (let i = 0; i < numbers.length; i++) {
// 	let element = numbers[i];
// 	let index = i
// 	let baseArrRef = numbers
// 	prevSumEvenNumbers = getSumEvenNumbers(prevSumEvenNumbers, element, index, baseArrRef)
// }


// const sumEvenNumbers = numbers.reduce(getSumEvenNumbers, 0)
// console.log(sumEvenNumbers);

//==============================================================================================//



// let numbers = [2, 17, 3, 8, 4, 5, 10, 27]

// const sumEvenNumbers = numbers.reduce(
// 	(prevSumEvenElement, element) =>
// 		element % 2 === 0 ? prevSumEvenElement += element : prevSumEvenElement,
// 	0)

// console.log(sumEvenNumbers);

//==============================================================================================//


// Підрахувати кількість сімок

// let numbers = [2, 17, 7, 8, 7, 5, 7, 27]
//==============================================================================================//
// Цикл
// let count_SEVEN = 0
// for (let i = 0; i < numbers.length; i++) {
// 	if (numbers[i] === 7) count_SEVEN++

// }
//==============================================================================================//
// reduce

// const count_SEVEN = numbers.reduce((prevCountSeven, number) =>
// 	number === 7 ? prevCountSeven + 1 : prevCountSeven
// 	, 0)

// console.log(count_SEVEN);