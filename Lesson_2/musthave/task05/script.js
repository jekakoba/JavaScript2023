"use strict"
let centimeters = parseFloat(prompt("Введіть кількість сантиметрів"))

let meters = centimeters / 100
let kilometers = centimeters / 100000

document.write(`
<div>Кількість сантиметрів — ${centimeters}см</div>
<div>Кількість метрів в сантиметрах — ${meters}м</div>
<div>Кількість кілометрів в сантиметрів —${kilometers}км</div>
`)

