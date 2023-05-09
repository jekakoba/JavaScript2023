"use strict"

// Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
// —назва компанії на час розробки (назву періодично змінюють)
// — власник компанії
// — споснсори (масив спонсорів)
//        прізвище спонсора
//    	  ім’я  спонсора
//        сума вкладень спонсора
// — рік випуску
// — вартість сайту


// Знайти:
// 1) загальну вартість усіх сайтів
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
// 5) знайти рік, коли прибуток був найбільшим
// 6) упорядкувати список за спаданням прибутку
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000



//======================================================================================//



let sitesCompany = [

	{
		title: "Global",
		owner: "Jeka Koba",
		sponsors: [
			{ lastName: "Petrov", firstName: "Andrii", investments: 1000000, },
			{ lastName: "Ivanov", firstName: "Miki", investments: 700, },
			{ lastName: "Valentin", firstName: "Andrii", investments: 5800, },
		],
		year: 2023,
		price: 50000,
	},



	{
		title: "Optimus",
		owner: "Maradona",
		sponsors: [
			{ lastName: "Voronin", firstName: "Misha", investments: 1000, },
			{ lastName: "Rebrob", firstName: "Ruslan", investments: 10000, },
			{ lastName: "Mudryk", firstName: "Evgen", investments: 50, },
		],
		year: 2001,
		price: 1000,
	},

	{
		title: "Pro liga",
		owner: "Potter",
		sponsors: [
			{ lastName: "Blohin", firstName: "Igor", investments: 4860, },
			{ lastName: "Xavi", firstName: "Artem", investments: 187000, },
			{ lastName: "Ederson", firstName: "Ishtvan", investments: 100, },
		],
		year: 2008,
		price: 7000,
	},

	{
		title: "Sun",
		owner: "Anonymous",
		sponsors: [
			{ lastName: "Zidan", firstName: "Marta", investments: 4860, },
			{ lastName: "Messi", firstName: "Vassil", investments: 18700, },
			{ lastName: "Ronaldo", firstName: "Oleg", investments: 100, },
		],
		year: 2015,
		price: 500,
	},
]


// Знайти:
// 1) загальну вартість усіх сайтів

//==================================for of============================//
let totalPrice = 0
for (const sites of sitesCompany) {
	totalPrice += sites.price
}
console.log(totalPrice);

//===================================for============================//

// let totalPrice = 0

// for (let siteNum = 0; siteNum < sitesCompany.length; siteNum++) {
// 	totalPrice += sitesCompany[siteNum].price

// }

// console.log(totalPrice);


//=================================reduce=========================//

// const totalPrice = sitesCompany.reduce(
// 	(prevSume, site) => prevSume += site.price
// 	, 0)

// console.log(totalPrice);


// let copySitesCompany = JSON.parse(JSON.stringify(sitesCompany))
// console.log(copySitesCompany);


//==========================================================//
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.

//Показуємо просто кількість

const countSitesBetween2000_2009 = sitesCompany.reduce((prevValue, site) => {
	return site.year > 2000 && site.year < 2009 ? prevValue + 1 : prevValue
}, 0)
console.log(countSitesBetween2000_2009);

//==========================================================//

// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000

let countSites = 0

for (const site of sitesCompany) {
	let sumPriceMore_100000 = site.sponsors.reduce((prevValue, sponsor) =>
		prevValue + sponsor.investments
		, 0)
	if (sumPriceMore_100000 > 100000)
		countSites++
}

console.log(countSites);

//==========================================================//

// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)

let sponsorsList = []
for (const site of sitesCompany) {
	for (const sponsor of site.sponsors) {
		sponsorsList.push(`${sponsor.firstName} ${sponsor.lastName}`)
	}
}
console.log(sponsorsList);

// const sponsorsList = sitesCompany.flatMap(site => site.sponsors.map(sponsor => `${sponsor.lastName} ${sponsor.firstName}`));
// console.log(sponsorsList);

//=================================================================//
// 5) знайти рік, коли прибуток був найбільшим

const maxPrice = sitesCompany.reduce((prevMax, site) => {
	return site.price > prevMax ? site.year : prevMax;
}, 0);

console.log(maxPrice);

//=================================================================//
// 6) упорядкувати список за спаданням прибутку

const sortPrice = sitesCompany.sort((site1, site2) => {
	return site2.price - site1.price
})
console.log(sortPrice);


//=================================================================//

// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

let priceSmall_10000 = JSON.parse(JSON.stringify(sitesCompany)).filter(site => site.price < 10000)
let priceMore_10000 = JSON.parse(JSON.stringify(sitesCompany)).filter(site => site.price > 10000)

console.log(priceSmall_10000);
console.log(priceMore_10000);
//=================================================================//


//=======================Полігон з практикою==============================================//

//Вік авто

// let auto = {
// 	model: "Audi",
// 	year: 2000,
// 	color: "black",
// 	weight: 4000,
// 	num: 2094,
// 	userAuto: "Jeka",
// }


// const totalYearAuto = 2023 - auto.year
// console.log(totalYearAuto);


//==================Загальна вага 3х авто============================//

// let auto1 = {
// 	model: "Audi",
// 	year: 2000,
// 	color: "black",
// 	weight: 4000,
// 	num: 2094,
// 	userAuto: "Jeka",
// }
// let auto2 = {
// 	model: "Audi",
// 	year: 2000,
// 	color: "black",
// 	weight: 4000,
// 	num: 2094,
// 	userAuto: "Jeka",
// }
// let auto3 = {
// 	model: "Audi",
// 	year: 2000,
// 	color: "black",
// 	weight: 4000,
// 	num: 2094,
// 	userAuto: "Jeka",
// }


// const totalSumWeight = auto1.weight + auto2.weight + auto3.weight
// console.log(totalSumWeight);


//==============Загальна вага 5х авто===========================//

// let autoList = [
// 	{
// 		model: "Audi",
// 		year: 2000,
// 		color: "black",
// 		weight: 4000,
// 		num: 2094,
// 		userAuto: "Jeka",
// 	},
// 	{
// 		model: "Audi",
// 		year: 2000,
// 		color: "black",
// 		weight: 4000,
// 		num: 2094,
// 		userAuto: "Jeka",
// 	},
// 	{
// 		model: "Audi",
// 		year: 2000,
// 		color: "black",
// 		weight: 4000,
// 		num: 2094,
// 		userAuto: "Jeka",
// 	},
// 	{
// 		model: "Audi",
// 		year: 2000,
// 		color: "black",
// 		weight: 6000,
// 		num: 2094,
// 		userAuto: "Jeka",
// 	},
// 	{
// 		model: "Audi",
// 		year: 2000,
// 		color: "black",
// 		weight: 2000,
// 		num: 2094,
// 		userAuto: "Jeka",
// 	},

// ]

// for of
// let totalSumWeight = 0
// for (const auto of autoList) {
// 	totalSumWeight += auto.weight
// }

// console.log(totalSumWeight);

// for

// let totalSumWeight = 0

// for (let autoNum = 0; autoNum < autoList.length; autoNum++) {
// 	totalSumWeight += autoList[autoNum].weight
// }

// console.log(totalSumWeight);

// reduce

// const totalSumWeight = autoList.reduce(
// 	(prevSum, auto) => prevSum + auto.weight
// 	, 0)

// console.log(totalSumWeight);




// Задача. Дано список книг (назва, автор, рік видання, вартість, кількість одиниць).
// Знайти:
// 1.кількість книг, що було видано після 2000 року
// 2 знайти загальну вартість кожної із книг
// 3.знайти загальну вартість усіх книг
// 4.визначити, чи є книга, що була видана у 2000 році
// 5.визначити, чи усі книги були визаді після 2005 року
// 6.сформувати список книг, ціна яких менше за 1000 грн
// 7.знайти загальну вартість книг, які було видано у 2000 році
// 8.знайти першу книгу, вартість якої більше за 3000грн
// 9.знайти номер першої книги, вартість якої більше за 3000грн

// let bookList = [ //50 000  + 1000 +5000 + 20 000 + 20 000 + 40 000 = 136 000
// 	{
// 		title: "Animal",
// 		author: "Jeka",
// 		year: 1997,
// 		price: 500,
// 		count: 100,
// 	},
// 	{
// 		title: "Job and relax",
// 		author: "Andrey",
// 		year: 2004,
// 		price: 100,
// 		count: 50,
// 	},
// 	{
// 		title: "Sun",
// 		author: "Inna",
// 		year: 2010,
// 		price: 100,
// 		count: 10,
// 	},
// 	{
// 		title: "Goog",
// 		author: "Petro",
// 		year: 2000,
// 		price: 5000,
// 		count: 4,
// 	},
// 	{
// 		title: "God of war",
// 		author: "Jeka",
// 		year: 2023,
// 		price: 1000,
// 		count: 20,
// 	},
// 	{
// 		title: "Anonymous",
// 		author: "Olga",
// 		year: 2000,
// 		price: 1000,
// 		count: 40,
// 	},
// ]


//========= 1.кількість книг, що було видано після 2000 року=============

// for of
// let totalBooksAfter_2000 = 0

// for (const book of bookList) {
// 	if (book.year > 2000) totalBooksAfter_2000++
// }

// console.log(totalBooksAfter_2000);


//for
// let totalBooksAfter_2000 = 0

// for (let bookNum = 0; bookNum < bookList.length; bookNum++) {
// 	if (bookList[bookNum].year > 2000) totalBooksAfter_2000++
// }

// console.log(totalBooksAfter_2000);


//reduce
// const totalBooksAfter_2000 = bookList.reduce(
// 	(prevValue, book) => book.year > 2000 ? prevValue + 1 : prevValue
// 	, 0)

// console.log(totalBooksAfter_2000);



//================== 2 знайти загальну вартість кожної із книг================//
//for of
// let totalPriceEveryBook = 0

// for (const book of bookList) {
// 	totalPriceEveryBook += book.price
// }

// console.log(totalPriceEveryBook);

//for
// let totalPriceEveryBook = 0
// for (let bookNum = 0; bookNum < bookList.length; bookNum++) {

// 	totalPriceEveryBook += bookList[bookNum].price
// }
// console.log(totalPriceEveryBook);

//===================3.знайти загальну вартість усіх книг============//

//for of
// let totalPriceBooks = 0

// for (const book of bookList) {
// 	totalPriceBooks += book.price * book.count
// }

// console.log(totalPriceBooks);

//for

// let totalPriceBooks = 0

// for (let bookNum = 0; bookNum < bookList.length; bookNum++) {
// 	totalPriceBooks += bookList[bookNum].price * bookList[bookNum].count
// }

// console.log(totalPriceBooks);


//reduce

// const totalPriceBooks = bookList.reduce(
// 	(prevPrice, book) => prevPrice += book.price * book.count
// 	, 0)
// console.log(totalPriceBooks);


//===================== 4.визначити, чи є книга, що була видана у 2000 році==========================//

// let isBookIn_2000 = bookList.some(book => book.year === 2000
// )

// console.log(isBookIn_2000);



//============== 5.визначити, чи усі книги були визаді після 2005 року=================================//

// let isBookAfter_2005 = bookList.every(book => book.year > 2005
// )
// console.log(isBookAfter_2005);



// =========================== 6.сформувати список книг, ціна яких менше за 1000 грн====================//

// let listBooksSmaller_100 = bookList.filter(book => book.price < 1000

// )
// console.log(listBooksSmaller_100);



//=============== 7.знайти загальну вартість книг, які було видано у 2000 році=============================//


// const totalPriceBooks_2000 = bookList.reduce(
// 	(prevSum, book) => book.year === 2000 ? prevSum += book.price * book.count : prevSum
// 	, 0)
// console.log(totalPriceBooks_2000);


// ====================== 8.знайти першу книгу, вартість якої більше за 3000грн=============================//

// const bookMore_3000 = bookList.find(book => book.price > 3000)
// console.log(bookMore_3000);




// ================= 9.знайти номер першої книги, вартість якої більше за 3000грн==========================//

// const bookIndex = bookList.findIndex(book => book.price > 3000)
// console.log(bookIndex);

//===========================================================================================//
// let user = {
// 	user: "Jeka",
// 	age: 25,
// 	gender: "man",
// }

// // delete user["age"]
// delete user.age
// user.status = "God"
// console.log(user);
//===========================================================================================//

// for (const propertyName in user) {
// 	document.write(`${propertyName} — ${user[propertyName]}<br>`)
// }



//Задача. Дано масив імен. Підхраувати кількість входжень кожного імені за зразком.


// let names = [
// 	"Ivan",
// 	"Petro",
// 	"Jeka",
// 	"Olga",
// 	"Petro",
// 	"Jeka",
// 	"Petro",
// 	"Jeka",
// 	"Olga",
// 	"Petro",
// 	"Jeka",
// 	"Jeka",
// ]


// let newNames = {}


// for (const name of names) {
// 	if (name in newNames)
// 		newNames[name]++
// 	else newNames[name] = 1
// }

// for (const key in newNames) {
// 	document.write(`${key}: ${newNames[key]}<br>`)
// }

// let model = "BMW"
// let year = 20
// let owner = "jeka"


// let user = {
// 	model,
// 	year,
// 	owner,
// }


// for (const key in user) {
// 	document.write(`${[key]}:${user[key]}<br>`)
// }


// Задача. Розробити функцію, яка б генерувала випадковим чином покази годинника
// (години, хвилини, секунди)

// генеруємо випадкові числа
// function getRandomNum(min, max) {
// 	return min + Math.floor(Math.random() * (max - min + 1))
// }

// function getTime() {
// 	let hours = getRandomNum(0, 11)
// 	let minutes = getRandomNum(0, 59)
// 	let seconds = getRandomNum(0, 59)
// 	return { hours, minutes, seconds }
// }

// let { hours, minutes, seconds } = getTime()
// document.write(`${hours}:${minutes}:${seconds}`)

// let totalTime = getTime()
// document.write(`${totalTime.hours}:${totalTime.minutes}:${totalTime.seconds}`)


//=========================================================================================

// Задача. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити,
// який буде місяць через N місяців.

// let userDate = {
// 	day: 20,
// 	month: 3,
// 	year: 2023,
// }



// function getMonth({ month }, N) {
// 	return ((month - 1 + N) % 12) + 1
// }

// const N = parseInt(prompt("Введіть кількість місяців"), 3)
// const month = getMonth(userDate, N)
// console.log(month);

//=========================================================================================

// Задача. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити,
// який буде рік через N місяців.


// let userDate = {
// 	day: 20,
// 	month: 3,
// 	year: 2023,
// };

// function getYear({ day, month, year }, N) {
// 	const newMonth = (month - 1 + N) % 12 + 1;
// 	const yearsToAdd = Math.floor((month - 1 + N) / 12);
// 	const newYear = year + yearsToAdd;
// 	return {
// 		day,
// 		month: newMonth,
// 		year: newYear,
// 	};
// }

// const N = parseInt(prompt("Введіть кількість місяців"), 10);
// const { year } = getYear(userDate, N);

// console.log(year);




//=========================================================================================

// Задача. Для рядка тексту вивести на екран кількість входжень кожної літери (побудувати об’єкт, у якому поля
// 	літери, а значення кількість входжень
// 	Наприклад, для слова «HELLO »


// const word = prompt("Введіть слово на англійській мові")

// function getCountEntryLetter(word) {
// 	let entryLetter = {}
// 	let letters = word.split("")


// 	for (const letter of letters) {
// 		if (letter in entryLetter)
// 			entryLetter[letter]++
// 		else entryLetter[letter] = 1
// 	}
// 	for (const key in entryLetter) {
// 		document.write(`${key.toUpperCase()}:${entryLetter[key]}<br>`)
// 	}
// }

// const countEntryLetter = getCountEntryLetter(word)


