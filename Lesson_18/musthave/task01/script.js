'use strict'
//Задача 1. Розробити калькулятор

function sum() {
	let firstNumber = parseFloat(document.getElementById('firstNum').value)
	let secondNumber = parseFloat(document.getElementById('secondNum').value)
	let sum = firstNumber + secondNumber
	document.getElementById('result').value = sum
}
function difference() {
	let firstNumber = parseFloat(document.getElementById('firstNum').value)
	let secondNumber = parseFloat(document.getElementById('secondNum').value)
	let difference = firstNumber - secondNumber
	document.getElementById('result').value = difference
}
function multiply() {
	let firstNumber = parseFloat(document.getElementById('firstNum').value)
	let secondNumber = parseFloat(document.getElementById('secondNum').value)
	let multiply = firstNumber * secondNumber
	document.getElementById('result').value = multiply
}
function share() {
	let firstNumber = parseFloat(document.getElementById('firstNum').value)
	let secondNumber = parseFloat(document.getElementById('secondNum').value)
	let share = firstNumber / secondNumber
	document.getElementById('result').value = share
}


//Задача 2. Зробити конвертер валют (курси валют – константи у скрипті)


const euroRate = 40
const dollarRate = 37

const buttonConvert = document.getElementById('convert')

function converter(euroRate, dollarRate) {

	let grivnyaValue = parseFloat(document.getElementById('grivnya').value)

	let euroResult = grivnyaValue / euroRate
	let dollarResult = grivnyaValue / dollarRate

	document.getElementById('euro').value = euroResult.toFixed(2)
	document.getElementById('dollars').value = dollarResult.toFixed(2)
}


buttonConvert.addEventListener("click", function (e) {
	if (buttonConvert)
		converter(euroRate, dollarRate)
});


//Задача 3. Користувач задає рік народження. Визначити кількість років користувача.

function getUserAge() {
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();
	let userYear = parseInt(document.querySelector('.birthday__input').value)

	let operation = currentYear - userYear
	let result = document.querySelector('.birthday__result')
	if (operation >= 1) {
		result.innerText = `Ваш вік — ${operation}`
	}
	else {
		result.innerText = `Ваш вік — ${operation}`
	}
}

let userInput = document.getElementById('user')

userInput.addEventListener("keydown", function (e) {

	if (e.key === "Enter") {
		getUserAge()
	}
});



// Задача 4.Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)

const desireList = [
	"Кохання",
	"Дружба",
	"Щастя",
	"Незалженість",
	"Машина",
	"Телефон"
]


function getDesire(array) {
	const randomNumber = Math.floor(Math.random() * array.length)
	return array.splice(randomNumber, 1)
}


function getDesires() {
	let result = document.querySelector('.desire__result')
	for (let i = 0; i < 3; i++) {
		let div = document.createElement('div')
		div.innerText = getDesire(desireList)
		result.append(div)
	}

}

window.onload = getDesires()





// Задача 5.Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)

let minNumTable = 1;
let maxNumTable = 10;

let secondTable = document.querySelector('.table2__result');

function getRandomNumbersTable(min, max) {
	let randomNumbers = [];
	for (let j = 0; j < 4; j++) {
		let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		randomNumbers.push(randomNum);
	}
	return randomNumbers;
}

function createTable2() {
	for (let i = 0; i < 4; i++) {
		let row = document.createElement('tr');
		let randomNumbers = getRandomNumbersTable(minNumTable, maxNumTable);

		for (let j = 0; j < 3; j++) {
			let column = document.createElement('td');
			column.innerText = randomNumbers[j];
			row.append(column);
		}
		secondTable.append(row);
	}
}

window.onload = createTable2()



// Задача 6.Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується таблиця з input, куди користувач вводить оцінки.Після цього натискає на кнопку “get sum” і знаходить середнє значення.

function createInputs() {
	const countInputs = parseInt(document.getElementById('scores').value)
	const table = document.querySelector('.scores__box')
	table.innerHTML = ''
	for (let i = 1; i <= countInputs; i++) {
		const div = document.createElement('div')
		const input = document.createElement('input')
		input.classList.add('scores__input')
		input.setAttribute('placeholder', `Введіть ${i} оцінку`);
		input.setAttribute('type', 'number');
		div.append(input)
		table.append(div)
	}
}

function getAverageScore() {
	let sum = 0
	let averageScore;
	let result = document.querySelector('.scores__result')
	let inputList = document.querySelectorAll('.scores__input')
	console.log(inputList);
	//reduce
	// let sum = [].reduce.call(inputList, (prevSum, inp) => prevSum + parseFloat(inp.value), 0)
	for (const input of inputList) {
		sum += parseFloat(input.value)
	}

	averageScore = sum / inputList.length
	result.innerHTML = `Середня оцінка  = ${averageScore.toFixed(2)}`
}

function getPage() {
	document.getElementById('buttonTable').onclick = createInputs
	document.getElementById('sumScores').onclick = getAverageScore
}

window.onload = getPage



// Задача 7. Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.

function getPrice() {
	let transportList = document.getElementsByTagName('select')
	console.log(transportList);
	let foodList = document.querySelectorAll('.travel__input-checkbox')
	let guidesList = document.querySelectorAll('.travel__input-radio')

	let sum = 0
	for (const transport of transportList) {
		sum += parseFloat(transport.value)
	}

	for (const food of foodList) {
		if (food.checked)
			sum += parseFloat(food.value)
	}

	for (const guide of guidesList) {
		if (guide.checked)
			sum += parseFloat(guide.value)
	}

	let result = document.querySelector('.travel__result')
	result.innerHTML = ''
	result.prepend(`Загальна сумма — ${sum}грн`)
}



document.getElementById('totalPrice').onclick = getPrice












//=======================Практика================================

//по айді
// let p = document.getElementById('first')
// p.style.color = "red"

//по класу

// let p = document.querySelector('.edge')
// p.style.color = "red"



//По тегу
// let pList = document.getElementsByTagName('p')
// for (const p of pList) {
// 	p.style.color = "red"
// }

// let bList = document.getElementsByTagName('b')
// for (const b of bList) {
// 	b.style.color = "blue"
// }


// let newDiv = document.createElement('div')
// console.log(newDiv);

// let newElemText = document.createTextNode('hello')
// console.log(newElemText);



// Задача. Створити 2 діви з рандомними числами

//Функція рандомних чисел
/*
function getRandomNumbers() {
	const numbers = []
	for (let i = 0; i < 5; i++) {
		const randomNumber = Math.floor(Math.random() * 5) + 1
		numbers.push(randomNumber)
	}

	return numbers
}

//створюємо порожоні діви
let firstDiv = document.createElement('div')
let secondDiv = document.createElement('div')

//вставляємо рандомні числа в перший дів
const randomNumbersString_1 = getRandomNumbers().join(',')
firstDiv.innerText = randomNumbersString_1

//вставляємо рандомні числа в другий дів
const randomNumberString_2 = getRandomNumbers().join(',')
secondDiv.innerText = randomNumberString_2

//виводимо в HTML
document.body.prepend(firstDiv, secondDiv);
*/


// Задача. Створити таблицю


// let buttonTable = document.getElementById('createTable')

// //Функція рандомних чисел
// function getRandomNumbers(min, max) {
// 	const numbers = []
// 	for (let i = min; i < max; i++) {
// 		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
// 		numbers.push(randomNumber)
// 	}
// 	return numbers
// }

// let tableBox = document.getElementById('table')


// function createTable() {
// 	tableBox.innerHTML = ''

// 	// Мінімальне та максимальне значення
// 	let minValue = parseFloat(document.getElementById('minValue').value)
// 	let maxValue = parseFloat(document.getElementById('maxValue').value)


// 	//Кількість стовпців
// 	let countRows = parseFloat(document.getElementById('rows').value)
// 	//Кількість рядків
// 	let countColumn = parseFloat(document.getElementById('column').value)


// 	// створення таблиці

// 	//створюємо рядки
// 	for (let i = 0; i < countRows; i++) {
// 		let rows = document.createElement('tr')
// 		let randomNumbers = getRandomNumbers(minValue, maxValue)

// 		//створюємо стовпці
// 		for (let j = 0; j < countColumn; j++) {
// 			let colums = document.createElement('td')
// 			colums.innerText = randomNumbers[j]
// 			rows.append(colums)
// 		}
// 		tableBox.append(rows)
// 	}
// }



// buttonTable.addEventListener("click", function (e) {

// 	const targetElement = e.target
// 	if (targetElement) {
// 		createTable()

// 	}
// });


// // Задача. Створити 4 інпути для введення чисел


// let inputsList = document.querySelector('.inputs')

// for (let i = 1; i < 5; i++) {
// 	let input = document.createElement('input')
// 	input.type = "number"
// 	input.placeholder = `Введіть число для ${i} input`
// 	inputsList.append(input)

// }
