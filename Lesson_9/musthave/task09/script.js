"use strict"
/*
Задача 9  Дано масив імен. Сформувати масив з перших літер цих імен.
*/



const names = ["Андрій", "Борис", "Роман", "Афанасій", "Микола"]
const newArrayNames = names.map(element => element = element[0])

document.write(newArrayNames)

