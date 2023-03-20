"use strict"
/*
Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)
*/

let numImage = Math.floor(1 + Math.random() * 4)
function showImage(numImage) {
	return `${numImage}`
}
document.write(`<img width="200px" height="200px" src="img/${showImage(numImage)}.png" alt="">`)


