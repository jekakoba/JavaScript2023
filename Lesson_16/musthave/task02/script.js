"use strict"
// Задача 2.
// Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.

// визначення курсу долара, при якому сума у гривнях збільшиться на 100 — не знаю як зробити 

class TMoney {
	#sumDollar;
	#dollarRate;

	constructor(hryvnia, dollarRate) {
		this.SumDollar = hryvnia;
		this.DollarRate = dollarRate;
	}

	get DollarRate() {
		return this.#dollarRate;
	}

	get SumDollar() {
		return this.#sumDollar;
	}

	set DollarRate(value) {
		this.#dollarRate = value;
	}

	set SumDollar(value) {
		this.#sumDollar = value;
	}


	//метод додавання коштів
	increaseMoney(value) {
		this.#sumDollar += value;
	}

	//метод віднімання коштів
	decreaseMoney(value) {
		this.#sumDollar -= value;
	}


	//конвертація гривні в долари
	conversionToHryvnia() {
		return this.#sumDollar / this.#dollarRate;
	}
}
let tMoney = new TMoney(370, 37);

tMoney.increaseMoney(500);
console.log(tMoney.SumDollar);


tMoney.decreaseMoney(200);
console.log(tMoney.SumDollar);

let conversion = tMoney.conversionToHryvnia();
console.log(conversion);

document.write(`Гривні — ${tMoney.SumDollar}<br>Кількість коштів в доларах: ${conversion.toFixed(2)}`);






