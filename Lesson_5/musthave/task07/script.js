"use strict"
/*
 Вивести на екран N абзаців (N вводиться користувачем) за зразком:
*/

const quantityParagraphs = parseInt(prompt("Введіть кількість абзаців", (5)))
document.write(`
<h1>Заголовок ${quantityParagraphs}</h1>
`)
for (let i = 1; i <= quantityParagraphs; i++) {
	document.write(`
	
<p style="color:rgb(173, 173, 175)"> Розділ ${quantityParagraphs}, Параграф ${i}</p>
`)
}