"use strict"
//Задача 1
// Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)














//Практика


// class Person {

// 	static maxYoungLimited = 45
// 	static count = 0

// 	constructor(name, age) {
// 		this.name = name
// 		this.age = age
// 	}

// 	isYoung() {
// 		if (this.age < Person.maxYoungLimited) return "Молодий"
// 		return "Старий"
// 	}

// 	static arePersonSomeYears(person1, person2) {

// 		person1.age === person2.age ? Person.count++ : Person.count
// 	}
// }


// let s1 = new Person("Ivan", 40)
// let s2 = new Person("Olga", 40)
// let s3 = new Person("Jeka", 46)

// console.log(s3.isYoung());
// Person.arePersonSomeYears(s1, s2);
// console.log(Person.count);


// Задача. Реалізувати конвертер валют. Курси валют та методи
// перетвоення повинні бути статичними


// class Converter {
// 	static dollarRate = 37
// 	static euroRate = 40

// 	static dollarToGrivna(dollarValue) {
// 		return dollarValue * Converter.dollarRate
// 	}

// 	static euroToGrivna(euroValue) {
// 		return euroValue * Converter.euroRate
// 	}

// 	static hryvniaToDollar(hryvniaValue) {
// 		return hryvniaValue / Converter.dollarRate
// 	}


// 	static hryvniaToEuro(hryvniaValue) {
// 		return hryvniaValue / Converter.euroRate
// 	}
// }

// document.write(`З доларів в гривні — ${Converter.dollarToGrivna(100)}<br>
// З євро в гривні — ${Converter.euroToGrivna(20)}<br>
// З гривні в долари — ${Converter.hryvniaToDollar(370)}<br>
// З гривні в євро — ${Converter.hryvniaToEuro(800)}
// `)



// Задача.
// Розробити "Рекламний агент". Випадковим чином у зададному діапазоні задається інтервал,і через
// згенеровану кількість секунд виводиться деяка реклама. Після цього знову генерується випадковий інтервал.
// У процесі роботи для усіх раніше створених об"єктів рекламних агентів мінімальне/максимальне значення інтевалу можуть  змінюватись

// class Reklama {

// 	static minValue
// 	static maxValue

// 	constructor(message, minValue, maxValue) {
// 		this.message = message
// 		Reklama.minValue = minValue
// 		Reklama.maxValue = maxValue

// 	}


// 	get RandomInterval() {
// 		document.write(`<br> min = ${Reklama.minValue}
// 		max = ${Reklama.maxValue}<br>`)
// 		return Reklama.minValue + Math.floor(Math.random() * Reklama.maxValue - Reklama.minValue)
// 	}

// 	start() {
// 		setTimeout(() => {
// 			document.write(`${this.message}<br>`)
// 			this.start()
// 		}, this.RandomInterval * 1000)
// 	}
// }

// for (let i = 0; i < 10; i++) {
// 	let s = new Reklama(`hello${i}<br>`, 0, 5)
// 	s.start()
// }


// setTimeout(() => {
// 	Reklama.minValue = 2
// 	Reklama.maxValue = 8
// }, 2000)



// Задача. Статистика методів.
// Дано клас Масив, який зберігає масив і має методи для знаходження суми, добутку, максимального.
// Користувач може створити довільну кількість об’єктів даного класу. Підрахувати загальну кількість викликів
// кожного із методів (незалежно від об’єкта)

// class MyArray {
// 	static countMethodSum = 0
// 	static countMethodProduct = 0
// 	static countMethodMaxNum = 0
// 	static countClass = 0
// 	constructor(arrayList) {
// 		this.arrayList = [...arrayList]
// 		MyArray.countClass++
// 	}

// 	getSum() {
// 		MyArray.countMethodSum++
// 		return this.arrayList.reduce((prevSum, number) => prevSum += number)
// 	}

// 	getProduct() {
// 		MyArray.countMethodProduct++
// 		return this.arrayList.reduce((prevProducr, number) => prevProducr * number)
// 	}

// 	getMaxNum() {
// 		MyArray.countMethodMaxNum++
// 		return Math.max(...this.arrayList)
// 	}

// 	static getResult() {
// 		return `Методів суми — ${MyArray.countMethodSum}<br>
// 		Методів добутку — ${MyArray.countMethodProduct}<br>
// 		Методів максимального числа — ${MyArray.countMethodMaxNum}<br>
// 		Кількість об'єктів — ${MyArray.countClass}
// 		`
// 	}

// }

// let s1 = new MyArray([20, 10, 2, 24, 11, 4])
// let s2 = new MyArray([236, 10, 2, 24, 11, 4])
// let s3 = new MyArray([200, 10, 2, 24, 11, 4])
// let s4 = new MyArray([10, 10, 2, 24, 11, 4])
// let s5 = new MyArray([1, 10, 2, 24, 11, 4])

// document.write(`Sum1=${s1.getSum()}<br>`)
// document.write(`Sum2=${s5.getSum()}<br>`)
// document.write(`Sum3=${s2.getSum()}<br>`)
// document.write(`Sum4=${s1.getSum()}<br>`)
// document.write(`Product1=${s2.getProduct()}<br>`)
// document.write(`Product2=${s1.getProduct()}<br>`)
// document.write(`MaxNum1=${s5.getMaxNum()}<br>`)
// document.write(`MaxNum2=${s1.getMaxNum()}<br>`)
// document.write(`MaxNum3=${s1.getMaxNum()}<br>`)

// document.write(`Статистика:<br> ${MyArray.getResult()}`)


// Задача. Черговий.
// Дано спосок студентів одного курсу (ПІБ, курс). Розробити менеджер чергових, який
// дозволяє випадковим чином обирати і запам ятовувати обраного чергового студента


// class DutyStudent {
// 	static duty

// 	constructor(studentsList) {
// 		if (DutyStudent.duty)
// 			return DutyStudent.duty


// 		this.studentsList = studentsList
// 		this.currentDutyStudent = this.getRandomDudyStudent()

// 		DutyStudent.duty = this
// 	}

// 	getRandomDudyStudent() {
// 		const randomIndexStudent = Math.floor(Math.random() * this.studentsList.length)
// 		return this.studentsList[randomIndexStudent]
// 	}

// 	toString() {
// 		return `Duty — ${this.currentDutyStudent}`
// 	}
// }


// let stundets = ["Ivan", "Jeka", "Olga", "Andrew", "Mykola"]

// let s1 = new DutyStudent(stundets)
// document.write(`${s1} <br>`)
// let s2 = new DutyStudent(stundets)
// document.write(`${s2} <br>`)
// let s3 = new DutyStudent(stundets)
// document.write(`${s3} <br>`)
// let s4 = new DutyStudent(stundets)
// document.write(`${s4} <br>`)




// Задача. Описати клієнта банку
// -----
// Властивості
// -
// ПІБ
//  ім’я
//  прізвище
// -
// адреса
//  код
//  місто
//  вулиця
//  номер будинку
// -
// номер рахунку
// -
// кількість грошей


// class Person {
// 	constructor({ firstName, lastName }) {
// 		this.firstName = firstName
// 		this.lastName = lastName
// 	}

// 	get fullName() {
// 		return this.firstName + " " + this.lastName
// 	}

// 	set fullName(value) {
// 		let split = value.split(" ")
// 		this.firstName = split[0]
// 		this.lastName = split[1]
// 	}
// 	toString() {
// 		return `${this.firstName}  ${this.lastName}`
// 	}
// }


// class Address {
// 	constructor({ zipCode, city, street, num }) {
// 		this.zipCode = zipCode
// 		this.city = city
// 		this.street = street
// 		this.num = num
// 	}

// 	toString() {
// 		return `Zipp Code — ${this.zipCode}<br>
// 		city — ${this.city}<br>
// 		street — ${this.street}<br>
// 		number house — ${this.num}<br>
// 		`
// 	}
// }

// class Client {
// 	#balance
// 	constructor(initData) {
// 		this.title = new Person(initData)
// 		this.address = new Address(initData)
// 		this.accountNumber = initData.accountNumber
// 		this.Balance = initData.balance
// 	}

// 	get Balance() {
// 		return this.#balance
// 	}

// 	set Balance(value) {
// 		if (value < 0) throw new Error("The value incorrect")
// 		this.#balance = value
// 	}

// 	toString() {
// 		return `Full name — ${this.title}<br>Address:<br>${this.address}<br>${this.accountNumber}<br>${this.Balance}`
// 	}
// }

// let client1 = new Client({
// 	firstName: "jeka", lastName: "koba",
// 	zipCode: 48763, city: "Kiev", street: "Vishneva", num: 94,
// 	accountNumber: 39736267, balance: 10000
// })


// document.write(client1)
// function getRandomIndex() {
// 	return Math.floor(Math.random() * students.length)
// }

// let randomIndex = getRandomIndex();


// ====================Видалення студента по конкретному імені========================
// let students = ["jeka", "olga", "ivan", "inna", "Andrew", "ishtvan", "petro"]


// function deleteRandomStudents(removeStudent) {
// 	return students.filter((name) => name !== removeStudent)
// }


// let newArrStudents = deleteRandomStudents("olga")
// console.log(newArrStudents);

//========================= Видалення студента по рандомному індексу=========================

// let students = ["jeka", "olga", "ivan", "inna", "Andrew", "ishtvan", "petro"]

// function getRandomIndex() {
// 	return Math.floor(Math.random() * students.length)
// }



// function deleteRandomStudents() {
// 	if (students.length === 0)
// 		return;
// 	let randomIndex = getRandomIndex();
// 	return students.splice(randomIndex, 1)
// }



// let newArr = deleteRandomStudents() // видалине ім'я зберігається в цій змінній
// console.log(newArr);

// console.log(students);

class Student {
	// constructor({ firstName, surname, classNum }) {
	// 	this.firstName = firstName
	// 	this.surname = surname
	// 	this.classNum = classNum
	// }

	constructor(initData) {
		Object.assign(this, initData)
	}

	toString() {
		return `${this.firstName} ${this.surname} - ${this.classNum} class`
	}
}




class Workshop {
	// constructor({title,workingDay}){
	// 	this.title = title
	// 	this.workingDay = workingDay
	// }

	constructor(initData) {
		Object.assign(this, initData)
		this.participants = []
	}

	//Додавання студента
	addStudent(newStudent) {
		this.participants.push(
			{
				id: new Data().getTime(),
				data: newStudent
			}
		)
	}

	//Видалення студента
	removeStudent(studentToRemove) {
		this.participants = this.participants.filter(stundent => stundent !== studentToRemove)
	}


	//Чи належить цей учень до гуртка?
	isStudentVisitingWorkshop(student) {
		return this.participants.includes(student)
	}

}





let workshops = {
	math: new Workshop({ title: "Math", workingDay: 2 }),
	history: new Workshop({ title: "History", workingDay: 1 }),
	geography: new Workshop({ title: "Geography", workingDay: 4 }),
}




let stundetsList = [
	new Student({ firstName: "jeka1", surname: "koba1", classNum: 5 }),
	new Student({ firstName: "jeka2", surname: "koba2", classNum: 7 }),
	new Student({ firstName: "jeka3", surname: "koba3", classNum: 3 }),
	new Student({ firstName: "jeka4", surname: "koba4", classNum: 10 }),
	new Student({ firstName: "jeka5", surname: "koba5", classNum: 6 }),
	new Student({ firstName: "jeka6", surname: "koba60", classNum: 11 })
]

// stundetsList.forEach((student) => {
// 	document.write(`${student}<br>`);
// });