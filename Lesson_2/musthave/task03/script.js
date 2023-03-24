"use strict"

/*
 Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
*/
//Отримуємо теперішню дату
const todayDate = new Date();

//Отримуємо теперішній рік
const currYear = todayDate.getFullYear();


//Отримуємо теперішній місяць
const currMonth = todayDate.getMonth() + 1;


//Отримуємо теперішній число місяця
const currDay = todayDate.getDate();



// Просимо користувача ввести свій рік народження
const userYear = parseInt(prompt("Введіть свій рік народження", 1990))


//Вираховуємо кількість років
const result = currYear - userYear
	;

//Виводимо данні в HTML для наглядності
document.write(`
<div>Теперішня дата: ${currDay} ${currMonth} ${userYear}</div>
<div>Дата народження: 01.01. ${userYear}</div>
<div>Вам ${result} років.</div>
`)
