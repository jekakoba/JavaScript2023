"use strict"
// Задача 2.  Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// Поля(властивості)
// Масив, у якому зберігається поле з зайцями
// Методи (дії)
// Метод пострілу (задається позиція пострілу)
// Виведення ігрового поля
//======================================================================================//

//===========Зробив по дубовову без генерування поля та значень 1 та 0==================================//

function ShootingRange(arr) {
	// Масив, у якому зберігається поле з зайцями
	this.field = arr
}
// Метод пострілу (задається позиція пострілу)
ShootingRange.prototype.shot = function () {
	let isDead = true // всі зайці знищені(
	let hits = 0 // кількість влучань
	while (isDead) {
		let guess = parseInt(prompt(`Введіть позицію для пострілу (Від 0 до ${this.field.length - 1})`))
		if (isNaN(guess)) {
			break
		} else {
			if (this.field[guess] === 1) {
				alert("Попадання!")
				this.field[guess] = 0
				hits++
				if (hits === 6) {
					alert("Ви влучили у всіх зайців")
					isDead = false
				}
			} else {
				alert("Промах!")
			}
		}
	}
}
// Виведення ігрового поля
ShootingRange.prototype.showFieldGame = function () {
	return console.log(this.field);
}

const shooting = new ShootingRange([0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0])
//Гра

// shooting.shot()

// Виведення ігрового поля

// shooting.showFieldGame()
