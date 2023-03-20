"use strict"
/*
Створити окремі функції, які переводять:
	Сантиметри у дюйми;  /2.54
	Кілограми у фунти; * 2,205
	Кілометри у милі. /1,609
*/



function getInches(centimeters) {
	return centimeters / 2.54

}
function getPounds(kilograms) {
	return kilograms * 2.205
}
function getMiles(kilometers) {
	return kilometers / 1.609
}


const numberValue = parseFloat(prompt(`Введіть число`, 3))


const centimeters = getInches(numberValue)
document.write(`${numberValue} сантиметрів — це ${centimeters.toFixed(2)} дюймів <br>`)

const kilograms = getPounds(numberValue)
document.write(`${numberValue} кілограм — це ${kilograms.toFixed(2)} фунтів <br>`)

const kilometers = getMiles(numberValue)
document.write(`${numberValue} кілометрів — це ${kilometers.toFixed(2)} миль`)