"use strict"

const a = parseFloat(prompt("Введіть значення змінної a"))
const b = parseFloat(prompt("Введіть значення змінної b"))
const c = parseFloat(prompt("Введіть значення змінної c"))

//Змінні
document.write(`
<div>Значення змінної a — ${a}</div>
<div>Значення змінної b — ${b}</div>
<div>Значення змінної c — ${c}</div>
`);

// Перший вираз —  a + 12 + b
const sum1 = a + 12 + b
document.write(`
<div>S <sub>1</sub> = ${sum1} </div>
`);

// Другий вираз — S2=a+b2a 
const sum2 = Math.sqrt((a + b) / (2 * a))
document.write(`

<div>S <sub>2</sub> = ${sum2} </div>
`);



//  Третій вираз — S4=sin⁡(a-b) 
const sum3 = Math.cbrt((a + b) * c)
document.write(`
<div>S <sub>3</sub> = ${sum3} </div>
`);

//  Четвертий вираз — S3=3(a+b)c 
const sum4 = Math.sin(a / (-b))
document.write(`
<div>S <sub>4</sub> = ${sum4} </div>
`);