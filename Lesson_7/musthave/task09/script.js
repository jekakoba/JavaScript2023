"use strict"
/*
 Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>
*/



function showBanner(title, link, image) {
	let showBlock = `<h1 class="baner-title">${title}</h1>
					<a target="_blank" class="baner-link" href="https://${link}">
						${image}
					</a>`
	return showBlock
}

const title = prompt("Введіть заголовок")
const link = prompt("Введіть своє посилання на сайт")
const image = `<img width="200px" height="200px"  src="img/1.png" alt="">`


document.write(showBanner(title, link, image))

