"use strict"
// Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
const secunds = parseFloat(prompt("Введіть кількість секунд, що пройшли з початку доби"))
//Кількість хвилин
let minutes = secunds / 60;
//Кількість годин
let hours = secunds / 3600;

document.write(`
<div>Введена кількість секунд — ${secunds} </div>
<div>Значення в хвилинах —  ${minutes.toFixed(2)}</div>
<div>Значення в годинах— ${hours.toFixed(2)} </div>
`)