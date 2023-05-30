"use strict"
//Задача 4 Розробити клас MultChecker для перевірки таблиці множення
// Поля
// Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// Кількість правильних відповідей
// Кількість неправильних відповідей
// Методи
// Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render - виведення інформації про тестування на екран

class MultChecker {
	constructor(firstNum) {
		this.firstNum = firstNum
		this.correctAnswers = 0
		this.incorrectAnswers = 0
		this.userAnswer = null
	}
	//Визначаємо рандмоне друге число (від 0 до 10 включно)
	getRandomNum() {
		return Math.floor(Math.random() * 11)
	}
	// Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
	// Перевірка правильності вказаної відповіді
	createExample() {
		this.randomNum = this.getRandomNum()
		for (let i = 0; i < 10; i++) {
			const randomNum = this.getRandomNum();
			this.userAnswer = parseInt(prompt(`Скільки буде ${this.firstNum} * ${randomNum}`));
			if (this.userAnswer === this.firstNum * randomNum) {
				alert("Правильно!");
				this.correctAnswers++;
			} else {
				alert("Неправильно!");
				this.incorrectAnswers++;
			}
		}
	}
	// render - виведення інформації про тестування на екран
	render() {
		alert(`Кількість правильних відповідей — ${this.correctAnswers}\nКількість неправильних відповідей — ${this.incorrectAnswers}`)
	}
}
let r = new MultChecker(7)
r.createExample()
r.render()


