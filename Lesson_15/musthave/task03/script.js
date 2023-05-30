"use strict"
//Задача 3 Створити об’єкт «Авто». 
// Поля(властивості)
// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів
// Методи (дії)
// Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів


//Звичайний метод
//========================(для практики додав перевірки)=======================//
let auto = {
	model: "opel",
	tankSize: 20,
	availableLiters: 7,
	countSeats: 4,
	countPassengers: 2,

	// Заправка на вказану кількість літрів
	refuelingLiters: function (liters) {
		let totalLiters = this.availableLiters + liters;
		if (totalLiters <= this.tankSize) {
			this.availableLiters += liters
		}
		else {
			alert(`В бак більше не влізить! Залишок — ${totalLiters - this.tankSize}`)
		}
	},
	showCountPassengers: function () {
		document.write(`Кількість пасажирів —${this.countPassengers}`)
	},
	// Додавання пасажирів
	getSumPassengers: function (passengers) {
		let totalPassengers = this.countPassengers + passengers
		if (totalPassengers <= this.countSeats) {
			this.countPassengers += passengers
		}
		else {
			alert(`Місць більше нема! ${totalPassengers - this.countSeats} людині треба буде пройтися`)
		}
	},
	// Висадка пасажирів
	disembarkingPassengers: function (passengers) {
		let totalPassengers = this.countPassengers - passengers;
		if (totalPassengers >= 0) {
			this.countPassengers -= passengers;
			alert(`Залишилось ${totalPassengers} пасажирів`);
		} else {
			alert(`Неможливо висадити більше пасажирів, ніж є в машині`);
		}
	}
}
// Заправка на вказану кількість літрів
auto.refuelingLiters(14)

// Виведення кількості пасажирів
auto.showCountPassengers()
// Додавання пасажирів
auto.getSumPassengers(4)

// Висадка пасажирів
auto.disembarkingPassengers(1)

//========================Функція-конструктор=======================//

// Поля(властивості)
// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів
// Методи (дії)
// Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів
function Car(initModel, initTankSize, initAilableLiters, initCountSeats, initCountPassengers) {
	//===========Властивості=================//
	this.model = initModel
	this.tankSize = initTankSize
	this.availableLiters = initAilableLiters
	this.countSeats = initCountSeats
	this.countPassengers = initCountPassengers
}
//===================Методи=================//
// Заправка на вказану кількість літрів
Car.prototype.refuelingLiters = function (liters) {
	this.availableLiters += liters
}

// Виведення кількості пасажирів
Car.prototype.showCountPassengers = function () {
	document.write(this.countPassengers)
}

// Додавання пасажирів
Car.prototype.getSumPassengers = function (passengers) {
	this.countPassengers += passengers
}

// Висадка пасажирів
Car.prototype.disembarkingPassengers = function (passengers) {
	this.countPassengers -= passengers
}


const Mycar = new Car("opel", 20, 7, 4, 2)
// Заправка на вказану кількість літрів
Mycar.refuelingLiters(10)
// Додавання пасажирів
Mycar.getSumPassengers(2)
// Висадка пасажирів
Mycar.disembarkingPassengers(1)


//========================Клас=======================//
// Поля(властивості)
// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів
// Методи (дії)
// Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів

class Car2 {
	constructor(initModel, initTankSize, initAilableLiters, initCountSeats, initCountPassengers) {
		this.model = initModel
		this.tankSize = initTankSize
		this.availableLiters = initAilableLiters
		this.countSeats = initCountSeats
		this.countPassengers = initCountPassengers
	}
	// Заправка на вказану кількість літрів
	refuelingLiters(liters) {
		this.availableLiters += liters
	}
	showCountPassengers() {
		document.write(this.countPassengers)
	}
	getSumPassengers(passengers) {
		this.countPassengers += passengers
	}
	disembarkingPassengers(passengers) {
		this.countPassengers -= passengers
	}
}

const MyCar = new Car2("opel", 20, 7, 4, 2)
MyCar.refuelingLiters(10)
MyCar.getSumPassengers(2)
MyCar.disembarkingPassengers(1)