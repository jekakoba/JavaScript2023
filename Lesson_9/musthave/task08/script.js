"use strict"
/*
Задача 8  Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

*/

//===========================================================================================================//
document.write("Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»<br>") // для наглядності

const carsNumbers = ["BA1023AC", "8777", "AO2811PO", "AE0998BA", "BH2771OB", "AX2219XO"]

const newArrayCarsNumbers = carsNumbers.filter((element) => element[0] === "A")

document.write(newArrayCarsNumbers)



