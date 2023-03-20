"use strict"
/*
Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)
*/

let numImage = Math.floor(1 + Math.random() * 4)
let image = `<img width="200px" height="200px" src="img/${numImage}.png" alt="">`
function showImage(img) {
	imageBox = document.write(`${img}`)
	return imageBox
}

document.write(`${showImage(image)}`)
