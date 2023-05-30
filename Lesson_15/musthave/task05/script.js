"use strict"
//Задача 5 Розробити клас Baner
// Поля
// Масив об’єктів ( графічних зображень та посилань на сайти)


// методи
// Метод випадкового вибору об’єкта (графічного зображення та посилання)
// Метод виведення випадкового банера


//Класи
class Baner {
	constructor(items) {
		this.banersItems = items
	}
	getRandomIndex() {
		return Math.floor(Math.random() * this.banersItems.length)
	}

	showBaner() {
		const randomindex = this.getRandomIndex()
		const banerItem = this.banersItems[randomindex]
		document.write(`
		<div  class="baner">
		<a target="_blank" href="${banerItem.linkSite}" class="baner__link">
			<img style="width: 100%;" class="baner__image" src="${banerItem.baner}" alt="baner">
		</a>
	</div>
		`)
	}
}

//================Спільний масив====================//
const items = [
	{
		baner: "1.jpg",
		linkSite: "https://www.youtube.com/"
	},
	{
		baner: "2.jpg",
		linkSite: "https://www.google.com/"
	},
	{
		baner: "3.jpg",
		linkSite: "https://www.ukr.net/"
	}
]
//==========================//

const myBaners = new Baner(items)
myBaners.showBaner()

//Конструктор

function Baner2(items) {
	this.banersItems = items
}
Baner2.prototype.getRandomIndex = function () {
	return Math.floor(Math.random() * this.banersItems.length)
}


Baner2.prototype.showBaner = function () {
	const randomIndex = this.getRandomIndex()
	const banerItem = this.banersItems[randomIndex]
	document.write(`
<div  class="baner">
	<a  target="_blank" href="${banerItem.linkSite}" class="baner__link">
		<img style="width: 100%;" class="baner__image" src="${banerItem.baner}" alt="baner">
	</a>
</div>
	`)
}


const myBaner2 = new Baner2(items)
myBaner2.showBaner()