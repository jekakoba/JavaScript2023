"use strict"
//Задача 1
// Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу  toString.




// Дні —  1 30
// місяці — 1-12
// в році — 365 днів


// 3:8:2023


// class TDate {
// 	#days
// 	#month
// 	#years
// 	constructor(initDays, initMonth, initYears) {
// 		this.Days = initDays
// 		this.Month = initMonth
// 		this.Years = initYears
// 	}


// 	get Days() {
// 		return this.#days
// 	}
// 	get Month() {
// 		return this.#month
// 	}
// 	get Years() {
// 		return this.#years
// 	}


// 	set Days(value) {
// 		if (value < 1 || value > 31) throw new Error("Помилка! Числа днів місяця повинні бути в діапазоні від 1 до 31")
// 		this.#days = value

// 	}

// 	set Month(value) {
// 		if (value < 1 || value > 12) throw new Error("Помилка! Числа місяців повинні бути в діапазоні від 1 до 12")
// 		this.#month = value
// 	}
// 	set Years(value) {
// 		if (value < 1) throw new Error("Помилка!")
// 		this.#years = value
// 	}

// 	// метод збільшення днів
// 	increaseDays(value) {
// 		this.Days + value
// 		this.increaseMonths(Math.floor(this.Days + value) / 31)
// 		this.Days = ((this.Days - 1 + value) % 31) + 1
// 	}
// 	//  метод зменшення днів
// 	// decreaseDays()
// 	//  метод збільшення місяця
// 	increaseMonths(value) {
// 		// this.Month + value
// 		// this.increaseYears(Math.floor((this.Month + value) / 12))
// 		// this.Month = this.Month % 12

// 	}
// 	// метод зменшення місяця
// 	// decreaseMonths()
// 	// метод збільшення року
// 	increaseYears(value) {
// 		this.Years = this.Years + value
// 	}
// 	// метод зменшення року
// 	// decreaseYears()

// 	toString() {
// 		return `${this.Days}:${this.Month}:${this.Years}`
// 	}

// }


// let dateInfo = new TDate(3, 8, 2023)


// dateInfo.increaseDays(29)
// // dateInfo.decreaseDays()
// dateInfo.increaseMonths(0)
// // dateInfo.decreaseMonths()
// dateInfo.increaseYears(0)
// // dateInfo.decreaseYears()
// document.write(dateInfo)



















//================Практика=========================//

// Приклад
// . Створити об’єкт
// -----------
// Властивості характеристики

// ПІБ (прізвище, ім"я , по батькові)
// клас, у якому навчається
// вік
// середній бал

// ------------
// Методи ( функіональні можливості)

// визначення того, ким він є (відмінник, хорошист ,
// визначити кількості років до закінчення школи


// class Pupil {
// 	#userName
// 	#class
// 	#age
// 	#avarageScore
// 	constructor(
// 		initName,
// 		minClass,
// 		maxClass,
// 		initClass,
// 		minAge,
// 		maxAge,
// 		initAge,
// 		minScore,
// 		maxScore,
// 		initAvarageScore,

// 	) {

// 		this.UserName = initName
// 		this.min = minClass
// 		this.max = maxClass
// 		this.Class = initClass
// 		this.minAge = minAge
// 		this.maxAge = maxAge
// 		this.Age = initAge
// 		this.minAvarageScore = minScore
// 		this.maxAvarageScore = maxScore
// 		this.AvarageScore = initAvarageScore
// 	}
// 	//Метод зчитування значення закритого поля (геттер) — дозволяє ззовні отримати значення закритого поля
// 	get UserName() {
// 		return this.#userName
// 	}

// 	get Class() {
// 		return this.#class
// 	}
// 	get Age() {
// 		return this.#age
// 	}

// 	get AvarageScore() {
// 		return this.#avarageScore
// 	}

// 	// get Status() {
// 	// 	if (this.AvarageScore < 4) return "Двійочник"
// 	// 	if (this.AvarageScore < 7) return "Трійочник"
// 	// 	if (this.AvarageScore < 9) return "Хорошист"
// 	// 	return "Відмінник"
// 	// }



// 	//Метод запису значення закритого поля (сеттер) — дозволяє перевірити коректність значення і зберегти


// 	set UserName(newName) {
// 		if (newName.length === 0)
// 			throw new Error("Значення некоректне")

// 		this.#userName = newName
// 	}

// 	set Class(newClass) {

// 		if (newClass < this.min || newClass > this.max)
// 			throw new Error("Перший клас — 1. Останній  — 11")
// 		this.#class = newClass
// 	}


// 	set Age(newAge) {
// 		if (newAge < this.minAge || newAge > this.maxAge)
// 			throw new Error("Вік учня школи не може бути меншим за 6 та більшим за 17")
// 		this.#age = newAge
// 	}

// 	set AvarageScore(newScore) {
// 		if (newScore < this.minAvarageScore || newScore > this.maxAvarageScore)

// 			throw new Error("Середній бал не може бути більшим за 12 та меншим за 0")
// 		this.#avarageScore = newScore
// 	}

// 	// Методи ( функіональні можливості)

// 	// визначення того, ким він є (відмінник, хорошист ,

// 	get status() {
// 		if (this.AvarageScore < 4) return "Двійочник"
// 		if (this.AvarageScore < 7) return "Трійочник"
// 		if (this.AvarageScore < 9) return "Хорошист"
// 		return "Відмінник"
// 	}

// 	// визначити кількості років до закінчення школи
// 	get getAgeCompletegSchool() {
// 		return `${this.UserName} закінчить школу черз ${this.max - this.Class} років`
// 	}


// }

// let pupil = new Pupil("Kobylinskyi Yevhenii Andreyevich", 1, 11, 8, 6, 17, 14, 0, 12, 12,)

// console.log(pupil.UserName);
// console.log(pupil.Class);
// console.log(pupil.Age);
// console.log(pupil.AvarageScore);


// // console.log(pupil.Status);

// console.log(pupil.status);
// console.log(pupil.getAgeCompletegSchool);


// // 14, 6, 17, 9



// Приклад

// Створити клас «Клієнт»

// ім’я довільний доступ (відкрите поле),
// номер рахунку тільки для читання,
// кількість грошей контрольований доступ (і читання і запис))



// class Client {
// 	#accountNumber
// 	#money
// 	constructor(name, accountNumber, money) {
// 		this.name = name
// 		this.#accountNumber = accountNumber
// 		this.Money = money
// 	}

// 	// номер рахунку тільки для читання,
// 	get AccountNumber() {
// 		return this.#accountNumber
// 	}

// 	get Money() {
// 		return this.#money
// 	}

// 	set Money(value) {
// 		if (value < 0)
// 			throw new Error("На рахунку недостатньо коштів")
// 		this.#money = value
// 	}

// 	toString() {
// 		return `Account:${this.name}  Balance:${this.Money}`
// 	}
// }


// let user = new Client("jeka", 587463, 10000)
// document.write(user)

// / Задача. Створити клас TTime для роботи із часом у форматі “години:хвилини”. Час представляється структурою із двома полями. Реалізувати методи збільшення/зменшення  часу на певну кількість годин чи хвилин.

// class TTime {
// 	constructor(initHours, initMinutes) {
// 		this.hours = initHours
// 		this.minutes = initMinutes
// 	}

// 	//метод збільшення годин
// 	increaseHourse(value) {
// 		this.hours = (this.hours + value) % 24
// 	}
// 	//метод зменшення годин
// 	decreaseHours(value) {
// 		this.hours = (this.hours - value + 24) % 24
// 	}

// 	//метод збільшення хвилин
// 	increaseMinutes(value) {
// 		this.minutes += value // 135
// 		this.increaseHourse(Math.floor(this.minutes / 60))
// 		this.minutes = this.minutes % 60
// 	}
// 	//метод зменшення хвилин


// 	decreaseMinuets(value) {
// 		this.minutes -= value;
// 		while (this.minutes < 0) {
// 			this.decreaseHours(1);
// 			this.minutes += 60;
// 		}
// 	}

// 	toString() {
// 		return `${this.hours}: ${this.minutes}`
// 	}

// }

// let time = new TTime(10, 40)
// //додавання годин
// time.increaseHourse(10)
// //віднімання годин
// time.decreaseHours(0)


// //додавання хвилин
// time.increaseMinutes(0)
// //віднімання хвилин
// time.decreaseMinuets(0)

// document.write(time)


// // console.log((10 + 20) % 24);

// // console.log((135 % 60));


// console.log((20 - 22 + 24) % 24);

// console.log((5 - 10 + 24))