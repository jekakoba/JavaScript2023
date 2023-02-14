"use strict"
//Просимо користувача ввести перше і друге число
const a = parseFloat(prompt("Введіть перше число"))
const b = parseFloat(prompt("Введіть друге число"))


//Отримуємо суму чисел
const sum = a + b
//Отримуємо добуток чисел
const multiplication = a * b
//Отримуємо частку чисел
const fraction = a / b


//Виводимо таблицю в HTML для наглядності
document.write(`
 <table>
<tbody>
	<tr>
		<th colspan="2">Числа</th>
		<th>Сума</th>
		<th>Добуток</th>
		<th>Частка</th>
	</tr>
	<tr>
		<th style="background-color: rgba(0, 0, 255, 0.442);">${a}</th>
		<th style="background-color: rgba(0, 0, 255, 0.442);">${b}</th>
		<th style="background-color: rgba(225, 61, 11, 0.442);">${sum.toFixed(2)}</th>
		<th style="background-color: rgba(12, 100, 6, 0.442);">${multiplication.toFixed(2)}</th>
		<th style="background-color: rgba(129, 118, 5, 0.442);">${fraction.toFixed(2)}</th>
	</tr>
</tbody>
</table>
`)