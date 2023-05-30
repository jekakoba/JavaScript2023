"use strict"
//Задача 1  Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

let obj1 = {
	numbers: [25, 32, 21, 33, 67, 2, 5],
	getSum: function () {
		let sum = 0
		this.numbers.forEach(num => {
			sum += num
		});
		return sum;
	}
}

let obj2 = {
	numbers: [2, 5, 8, 12, 17, 22],
	getProduct: function (min, max) {
		let product = 1
		this.numbers.forEach(num => {
			if (num > min && num < max) {
				product *= num
			}
		})
		return product
	}

}

let sum = obj1.getSum.call(obj1)
console.log(sum);

let product = obj2.getProduct.apply(obj2, [3, 15])
console.log(product);




//Практика//



// let user = {
// 	name: "jeka",
// 	lastName: "koba",
// 	age: 25,
// 	sayHi: function () {
// 		alert(`Привіт, ${this.name}`)
// 	}
// }

// user.sayHi()
// user["sayHi"]()

// let user = {
// 	name: "jeka",
// 	lastName: "koba",
// 	age: 25,
// 	sayHi: function () {
// 		alert(`Привіт`)
// 	},
// 	sayBy: function () {
// 		alert(`Пока`)
// 	},

// 	greeting: function () {
// 		this.sayHi()
// 		this.sayBy()
// 	}
// }

// // user.greeting()
// user["greeting"]()

//Знаходження середнього балу
//підрахувати скільки разів зустрічається вказана оцінка (потрібно додатково вказати оцінку searchScore, кількість якої підраховуємо)
// let user = {
// 	name: "jeka",
// 	age: 25,
// 	marks: [5, 4, 5, 5, 2, 4, 3, 3],

// 	getAverageScore: function () {
// 		let scores = 0
// 		for (let i = 0; i < this.marks.length; i++) {
// 			scores += this.marks[i]
// 		}
// 		return scores / this.marks.length
// 	},

// 	getCountScore: function (searchScore) {
// 		return this.marks.reduce((prevValue, score) =>
// 			score === searchScore ? prevValue + 1 : prevValue, 0)
// 	}
// }
// let averageScore = user.getAverageScore()
// let countScore = user.getCountScore(5)
// console.log(averageScore);
// console.log(countScore);



// Приклад. Створити об’єкт товар. Для товару зберігаються назва товару, ціна, кількість та вартість зберігання в день.
// Передбачити можливість знаходження загальної вартості наявної кількості одиниць, визначення вартості зберігання
// для заданої кількості днів, зменшення ціни на вказану кількість відсотків та збільшення ціни на вказану кількість
// відсотків

//====Властивості=====//
// товар
// ціна
// кількість
// вартість зберігання в день


//====Методи (Функіональні можливості)=====//

// знайти загальну вартість наявної кількості одиниць
// визначення вартості зберігання для заданої кількості днів
// зменшення ціни на вказану кількість відсотків
// збільшення ціни на вказану кількість відсотків


// let product = {
// 	title: "book",
// 	price: 200,
// 	count: 50,
// 	payment: 10,

// 	// знайти загальну вартість наявної кількості одиниць
// 	getTotalPrice: function () {
// 		return this.count * this.price
// 	},

// 	// визначення вартості зберігання для заданої кількості днів
// 	getPaymentOfDay: function (days) {
// 		return this.payment * days
// 	},
// 	// зменшення ціни на вказану кількість відсотків
// 	getPriceReductionOfPercent: function (percent) {
// 		return this.price - (this.price * percent) / 100
// 	},
// 	// збільшення ціни на вказану кількість відсотків
// 	getPriceIncreaseOfPercent: function (percent) {
// 		return this.price + (this.price * percent) / 100
// 	},
// 	// toString: function () {
// 	// 	return `${this.title}:${this.price}`
// 	// },
// 	valueOf: function () {
// 		return this.getTotalPrice()
// 	}
// }
// // загальна вартість наявної кількості одиниць
// let totalPrice = product.getTotalPrice()

// // визначення вартості зберігання для заданої кількості днів
// let paymentOfDay = product.getPaymentOfDay(10)

// // зменшення ціни на вказану кількість відсотків
// let priceReductionOfPercent = product.getPriceReductionOfPercent(20)

// // збільшення ціни на вказану кількість відсотків
// let priceIncreaseOfPercent = product.getPriceIncreaseOfPercent(20)
// console.log(totalPrice);
// console.log(paymentOfDay);
// console.log(priceReductionOfPercent);
// console.log(priceIncreaseOfPercent);

// let s = product.toString()
// document.write(s)
// document.write(product * 3)


// Приклад. Описати об’єкт «Інвойс»
// -----
// Властивості характеристики (дані)
// номер інвойса
// переліз виконаних робіт
// сума грошей
// -----
// Методи
// перетворення у рядок (вивести номер інвойса, кількість виконаних робіт, сума грошей
// перетворення у число (повертається сума грошей)
// Використовуючи такий опис створити масив інвойсів. Вивести інформацію про інвойси у формі нумерованого списку
// та знайти загальну вартість використовуючи метод перетворення об’єкта у число




// let invoicesList = [
// 	//Властивості
// 	{
// 		number: 10,
// 		completedWorks: [
// 			"design",
// 			"developer",
// 			"copyright",
// 			"writing",
// 			"reading"],
// 		price: 500,

// 		//Методи

// 		// перетворення у рядок (вивести номер інвойса, кількість виконаних робіт, сума грошей)
// 		toString: function () {
// 			return `${this.number},${this.completedWorks.length}, ${this.price}`
// 		},
// 		// перетворення у число (повертається сума грошей)
// 		valueOf: function () {
// 			return this.price
// 		}
// 	},
// 	{
// 		number: 27,
// 		completedWorks: [
// 			"button",
// 			"header",
// 			"footer"],
// 		price: 1000,
// 		toString: function () {
// 			return `${this.number},${this.completedWorks.length}, ${this.price}`
// 		},
// 		valueOf: function () {
// 			return this.price
// 		}
// 	},
// 	{
// 		number: 31,
// 		completedWorks: [
// 			"form",
// 			"validation",
// 			"graphs"],
// 		price: 2700,
// 		toString: function () {
// 			return `${this.number},${this.completedWorks.length}, ${this.price}`
// 		},
// 		valueOf: function () {
// 			return this.price
// 		}
// 	},

// ]


// // Використовуючи такий опис створити масив інвойсів. Вивести інформацію про інвойси у формі нумерованого списку
// document.write(`<ol>`)
// for (const invoice of invoicesList) {
// 	document.write(`<li>${invoice}</li>`)
// }
// document.write(`</ol>`)

// // та знайти загальну вартість використовуючи метод перетворення об’єкта у число
// let totalPrice = invoicesList.reduce((prevValue, invoice) => prevValue + invoice, 0)

// document.write(`Загальна вартість інвойсів — ${totalPrice}`)




// let user = {
// 	name: "jeka",
// 	age: 25,
// 	marks: [5, 4, 5, 5, 2, 4, 3, 3],
// }

// Object.freeze(user)
// user.age = 30
// console.log(user.marks[1] = 10);
// console.log(user);



//Функція-фабрика. Об'єкт — книга (назва книги, номер, ціна, рік)
// function getObjectBook(initTitle, initNumber, initPrice, initYear) {
// 	return {
// 		title: initTitle,
// 		number: initNumber,
// 		price: initPrice,
// 		year: initYear,
// 		toString: function () {
// 			return `${this.title} — ${this.price}`
// 		}
// 	}
// }

// const book_1 = getObjectBook("JavaScript", 1000, 500, 2018)
// const book_2 = getObjectBook("Python", 1500, 200, 2020)

// console.log(book_1.toString());
// console.log(book_2);



//Конструктор

// function Range(minValue, maxValue) {
// 	this.min = minValue
// 	this.max = maxValue

// 	//чи належить деяке число діапазону
// 	Range.prototype.isInRange = function (number) {
// 		return number >= this.min && number <= this.max
// 	},
// 		//отримання випадкового числа з діапазону
// 		this.getRandomNumber = function () {
// 			return this.min + Math.floor(Math.random() * (this.max - this.min + 1))
// 		},

// 		//рядкове прдеставлення об'єкта
// 		this.toString = function () {
// 			return `${this.min},${this.max}`
// 		}
// }

// let range = new Range(1, 10)
// //чи належить деяке число діапазону
// let number = range.isInRange(5)
// console.log(number);
// //отримання випадкового числа з діапазону
// console.log(range.getRandomNumber());
// //рядкове прдеставлення об'єкта
// console.log(range.toString());


// //Визначити вагу АВТОБУСІВ
// function Auto(initModel, initOwner, initWeight) {
// 	this.model = initModel
// 	this.owner = initOwner
// 	this.weight = initWeight
// }


// function Bus(initModel, initOwner, initWeight) {
// 	this.model = initModel
// 	this.owner = initOwner
// 	this.weight = initWeight
// }

// let transportList = [
// 	new Auto("BMW", "Jeka", 3500),
// 	new Auto("Opel", "Petro", 4500),
// 	new Auto("Lanus", "Ivan", 2500),
// 	new Bus("Shkoda", "Olga", 4500),
// 	new Bus("Golf", "Dima", 2500),
// ]
// // let sum = 0
// // for (const transport of transportList) {
// // 	if (transport instanceof Bus) {
// // 		sum += transport.weight
// // 	}
// // }
// //reduce
// let sum = transportList.reduce((prevSum, transport) => {
// 	if (transport instanceof Bus) {
// 		prevSum = transport.weight + prevSum
// 	}
// 	return prevSum
// }, 0)

// console.log(sum);






// function TestConstructor(number) {
// 	this.value = number
// }
// TestConstructor.prototype.value2 = 70

// let t1 = new TestConstructor(10)
// let t2 = new TestConstructor(20)
// console.log(t1);
// console.log(t2);


// t2.value2 = 55


// Конструктори об’єктів. Опис спільних для всіх об’єктів властивостей (prototype)
// 	Приклад. Гра «Рулетка»
// 	-----
// 	Властивості
// 	•
// 	кількість полів рулетки
// 	•
// 	мінімальне значення балів
// 	•
// 	максимальне значення балів
// 	•
// 	список згенерованих значень
// 	-----
// 	Методи
// 	•
// 	генерування полів рулетки
// 	•
// 	виведення списку згенерованих значень
// 	•
// 	приведення до рядка
// 	•
// 	крутити рулетку (отримання випадкового балу)
// 	•
// 	метод гри (користувач крутить рулетку поки не відмовиться)
// 	поки користувач хоче крутити
// 	визначаємо
// 	рандомне значення рулетки
// 	додаємо до загальної суми
// 	повідомляємо користувача про результат та загальну кількість балів



//-------------------Гра Рулетка---------------------------------------//

// function Roulette(scores, maxValue, minValue) {
// 	//----- Властивості-----//
// 	this.min = minValue
// 	this.max = maxValue
// 	this.scores = this.createField(scores)
// }

// //----- Методи-----//

// //Генерування рандомних значень
// Roulette.prototype.getRandomNumber = function (minV, maxV) {
// 	return minV + Math.floor(Math.random() * (maxV - minV + 1))
// }

// // генерування полів рулетки
// Roulette.prototype.createField = function (scores) {
// 	let scoresList = []
// 	for (let i = 0; i < scores; i++) {
// 		let random = this.getRandomNumber(this.min, this.max)
// 		scoresList.push(random)
// 	}
// 	return scoresList
// }

// // виведення списку згенерованих значень
// Roulette.prototype.showScores = function () {
// 	document.write(`<ol>`)
// 	for (const score of this.scores) {
// 		document.write(`<li>${score}</li>`)
// 	}
// 	document.write(`</ol>`)
// }
// // приведення до рядка
// Roulette.prototype.toString = function () {
// 	return `${this.min, this.max}`
// }


// // 	крутити рулетку (отримання випадкового балу)
// Roulette.prototype.getRandomScore = function () {
// 	let indexElement = this.getRandomNumber(0, this.scores.length - 1)
// 	return this.scores[indexElement]
// }


// // 	метод гри (користувач крутить рулетку поки не відмовиться)
// // 	поки користувач хоче крутити визначаємо
// // 	рандомне значення рулетки
// // 	додаємо до загальної суми
// // 	повідомляємо користувача про результат та загальну кількість балів

// Roulette.prototype.playGame = function () {
// 	let sum = 0
// 	// поки користувач хоче крутити визначаємо
// 	while (confirm("Хочете крутити рулетку?")) {
// 		// рандомне значення рулетки
// 		const randomScore = this.getRandomScore()

// 		// 	додаємо до загальної суми
// 		sum += randomScore

// 		// повідомляємо користувача про результат та загальну кількість балів
// 		alert(`Ваш виграш/програш — ${randomScore} Загальний виграш — ${sum}`)
// 	}
// 	alert(`Остаточний виграш — ${sum}`)
// }

// const roulette = new Roulette(10, -50, 50)
// const playGame = roulette.playGame()
// виведення списку згенерованих значень
// let showScores = roulette.showScores()


//=================================================================================//


// var a = 77
// let func = () => {
// 	console.log(this);
// 	console.log(this.a);
// }
// func()


// let object = {
// 	names: ["jeka", "olga", "petro"],
// 	profession: ["driver", "developer", "doctor"],
// 	showName: function () {
// 		this.names.forEach((name, index) => {
// 			document.write(`${name} ${this.profession && this.profession[index]} <br>`)
// 		})
// 	}
// }


// object.showName()

// Позичання функцій
// let obj1 = {
// 	a: 20,
// 	b: 40,
// 	showNumber: function () {
// 		document.write(this.a)
// 	}
// }

// let obj2 = {
// 	a: 50,
// 	b: 80,
// }
// obj2.show = obj1.showNumber
// obj2.show()


//call
// let obj1 = {
// 	a: 20,
// 	b: 40,
// 	showProp1: function () {
// 		document.write(this.a)
// 	},

// 	getSum: function (value1, value2) {
// 		return this.a + value1 + value2
// 	}
// }



// let obj2 = {
// 	a: 50,
// 	b: 70
// }

// // obj1.showProp1.call(obj2)

// let sum = obj1.getSum.call(obj2, 100, 50)
// document.write(sum)










// let obj1 = {
// 	a: 20,
// 	b: 40,
// 	showProp1: function () {
// 		return this.a
// 	},

// 	getSum: function (value1, value2) {
// 		return this.a + value1 + value2
// 	}
// }


// let func = obj1.showProp1.bind(obj1)
// func = func()
// console.log(func);



// Приклад. Розробити клас «Передбачувач». Дозволяє кожні вказані кількість секунд отримувати передбачення
// Властивості :
//      масив можливоих передбачень,
//      інтервал між передбаченнями
// Методи:
//      вибір випадкового передбачення
//      метод run, що ініціює запуск таймера і генерування передбачень


// class Predictor {
// 	constructor(predictorList, interval) {
// 		this.predictorList = predictorList
// 		this.interval = interval
// 	}
// 	// вибір випадкового передбачення
// 	getRandomPredictor() {
// 		const indexPredictor = Math.floor(Math.random() * this.predictorList.length)
// 		return this.predictorList[indexPredictor]
// 	}

// 	// метод run, що ініціює запуск таймера і генерування передбачень
// 	run() {
// 		setInterval(() => {
// 			alert(this.getRandomPredictor())
// 		}, this.interval * 1000);
// 	}

// }

// let predictor = new Predictor(["love", "money", "friends", "Peace"], 3)
// predictor.run()





//=====================================================
//   Дано об’єкт, що містить масив чисел. Кожну секунду виводити випадкове число з цього масиву
//=====================================================

// Класи
// class NumberList {
// 	constructor(arr) {
// 		this.numbers = arr
// 	}
// 	getRandomNum() {
// 		const indexNum = Math.floor(Math.random() * this.numbers.length)
// 		return this.numbers[indexNum]
// 	}
// 	showRandomNumber() {
// 		setInterval(() => {
// 			alert(this.getRandomNum())
// 		}, 1000);
// 	}
// }


// const numbers = new NumberList([20, 54, 32, 220, 11, 18, 488])
// numbers.showRandomNumber()


// Конструктор

// function NumberList(arr) {
// 	this.numbers = arr
// }

// NumberList.prototype.getRandomNum = function () {
// 	const indexNum = Math.floor(Math.random() * this.numbers.length)
// 	return this.numbers[indexNum]
// }
// NumberList.prototype.showRandomNumber = function () {
// 	setInterval(() => {
// 		alert(this.getRandomNum())
// 	}, 1000);
// }

// let numbers = new NumberList([20, 33, 22, 10, 2, 4, 55])
// numbers.showRandomNumber()


//=====================================================
//       Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, а у
// іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів.

//=====================================================