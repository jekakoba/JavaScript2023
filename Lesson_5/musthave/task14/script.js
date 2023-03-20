"use strict"
/*
Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести).
*/

const totalPrice = 1000
alert(`З Вас — ${totalPrice}грн`)
let amountClientMoney = 0 // початкова сума, сплачена користувачем



while (amountClientMoney < totalPrice) {
	const remainingAmount = totalPrice - amountClientMoney // Залишок до сплати
	let paidAmount = parseFloat(prompt(`Введіть кошти. Залишилося сплатити ${remainingAmount}грн`))

	if (isNaN(paidAmount)) {
		alert("Некоректне значення!");
		continue;
	}
	amountClientMoney += paidAmount;
}
alert(`Дякуємо за покупку! Ваша решта: ${(amountClientMoney - totalPrice).toFixed(2)}грн`)



