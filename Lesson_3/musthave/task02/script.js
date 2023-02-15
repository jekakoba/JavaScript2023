"use strict"
/*
З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.
*/

const priceProduct = parseFloat(prompt("Введіть ціну товару"))
const quantityMoney = parseFloat(prompt("Введіть кількість грошей"))
const lotteryTicket = 4

if (quantityMoney < priceProduct) {
	document.write(`У Вас не вистачає коштів. Знайдіть роботу`)
} else if (quantityMoney >= priceProduct) {
	document.write(`Дякуємо за покупку! `)

}
let remainderBalance = quantityMoney - priceProduct
console.log(remainderBalance);
if (remainderBalance >= lotteryTicket) {
	document.write(`У Вас вистачає коштів, пропонуємо купити лотерею за ${lotteryTicket}грн`)
}







