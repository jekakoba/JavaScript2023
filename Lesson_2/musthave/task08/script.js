"use strict"
// Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

//Випадкове число від 1 до 12 (+1 тому що починаємо відлік не з 0 а з 1)
const month = Math.floor(Math.random() * 12) + 1

//Випадкове число від 0 до 6 (*7 тому що починаємо відлік з 0)
const day = Math.floor(Math.random() * 7)

document.write(`
<div>Випадковий номер місяця — ${day}</div>
<div>Випадковий номер дня — ${month}</div>
<div>Їхня сума — ${month + day}</div>
`)
