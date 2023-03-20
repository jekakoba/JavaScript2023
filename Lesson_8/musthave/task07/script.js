"use strict"
/*
Задача 7 Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
	за весь рік;
	у першій половині року;
	у другій половині року;
	за літо;
	за ІІ квартал;
	за парні місяці (з парними номерами);
	за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
*/

//Вводимо платіжки протягом року

//================================================================================//
function createPaymentOfTheYear(itemsNumber5) {
	let array = []
	for (let i = 1; i <= 12; i++) {
		let inputPayment = parseFloat(prompt(`Введіть платіжку за ${i} місяць`))
		array.push(inputPayment)
	}
	return array
}

const paymentList = createPaymentOfTheYear(12)

//================================================================================//

//Знаходимо суму за заданий період року
function getIncomSum(paymentList, startMonthNum, endMonthNum) {
	let sum = 0
	for (let month = startMonthNum; month <= endMonthNum; month++) {
		sum += paymentList[month]

	}
	return sum
}

//================================================================================//
//Знаходимо суму за парні місяці року
function getSumPairedMonthOfYear(paymentList, startMonthNum, endMonthNum) {

	let sum = 0
	for (let month = startMonthNum; month <= endMonthNum; month++) {
		if (month % 2 === 0) {
			sum += paymentList[month - 1]
		}

	}
	return sum
}
//===============================================================================//
//Сума платіжок за місяці, які є початковими у сезоні (весна, літо, осінь, зима)
function getSumStartsMonthOfTheYear(paymentList, startMonthNum, endMonthNum) {
	let sum = 0
	for (let month = startMonthNum; month <= endMonthNum; month++) {
		if (month % 3 === 0) {
			sum += paymentList[month - 1]
		}

	}
	return sum
}

//================================================================================//

document.write(`
<div">
		Платіжки протягом року — ${paymentList}	<br>
		Сума платіжок за весь рік — ${getIncomSum(paymentList, 1, 12)}<br>
		Сума платіжок за першу половину року — ${getIncomSum(paymentList, 1, 6)}<br>
		Сума платіжок за другу половину року — ${getIncomSum(paymentList, 7, 12)}<br>
		Сума платіжок за літо — ${getIncomSum(paymentList, 6, 8)}<br>
		Сума платіжок за II квартал — ${getIncomSum(paymentList, 4, 6)}<br>
		Сума платіжок за парні місяці року — ${getSumPairedMonthOfYear(paymentList, 2, 12)}<br>
		Сума платіжок за місяці, які є початковими у сезоні (весна, літо, осінь, зима) — ${getSumStartsMonthOfTheYear(paymentList, 3, 12)}<br>
</div>

`)