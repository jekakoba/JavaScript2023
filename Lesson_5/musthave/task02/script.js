"use strict"
/*
Створити 10 елементів для введення цін продуктів

*/

for (let i = 1; i <= 10; i++) {
	document.write(`
	<div>
	<label for="${i}">Product №${i}</label>
	<input id="${i}" type="text">
</div>
	`
	)

}






