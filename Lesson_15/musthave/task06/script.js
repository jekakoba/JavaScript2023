"use strict"
//Задача 6 Розробити клас «Керівник танців»
// Поля
// Масив імен хлопців
// Масив імен дівчат
// Методи
// Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців

const boysList = ["Jeka", "Oleg", "Ivan", "Igor", "Andrii"]
const girlsList = ["Olga", "Olena", "Inna", "Svetlana", "Nina"]

class Dance {
	constructor(boys, girls) {
		this.boysList = boys
		this.girlsList = girls
	}
	//Генерування рандомного індекса
	getRandomNumber(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1))
	}
	// Метод випадкового вибору імені хлопця
	getRandomBoy() {
		let randomIndex = this.getRandomNumber(0, this.boysList.length - 1)
		return this.boysList[randomIndex]
	}
	// Метод випадкового вибору імені дівчини
	getRandomGirl() {
		let randomIndex = this.getRandomNumber(0, this.girlsList.length - 1)
		return this.girlsList[randomIndex]
	}

	showDancePartner() {
		let boy = this.getRandomBoy()
		let girl = this.getRandomGirl()
		alert(`Танцюють ${boy} з ${girl} `)
	}

	// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців
	run() {
		setInterval(() => {
			this.showDancePartner()
		}, 5000);
	}
}
const DanceInstructor = new Dance(boysList, girlsList)
DanceInstructor.run()



