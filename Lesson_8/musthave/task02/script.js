"use strict"
/*
	  Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
•	номери днів, протягом яких кількість відвідувачів була меншою за 20;
•	номери днів, коли кількість відвідувачів була мінімальною;
•	номери днів, коли кількість відвідувачів була максимальною;
•	загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

*/


//============================================================================//

//Кількість клієнтів протягом тижня
function getCountClientsOfWeek() {
	const arrayClients = []
	const daysWeek = 7
	for (let i = 1; i <= daysWeek; i++) {
		let randomCountClients = Math.floor(1 + Math.random() * 100)
		arrayClients.push(randomCountClients)

	}
	return arrayClients
}

//============================================================================//

// номери днів, протягом яких кількість відвідувачів була меншою за 20;
function getCountClientsLessThan20(clients) {
	let daysClientsLessThan20 = []
	for (let i = 0; i < clients.length; i++) {
		if (clients[i] < 20) {
			daysClientsLessThan20.push(i + 1)
		}
	}
	return daysClientsLessThan20

}

//============================================================================//

// номер дня, коли кількість відвідувачів була мінімальною;

function getMinCountClients(clients) {
	let minNum = Infinity
	let minVisitorsOfTheDay = 1
	for (let i = 0; i < clients.length; i++) {
		if (clients[i] < minNum) {
			minNum = clients[i]
			minVisitorsOfTheDay = i + 1
		}

	}
	return minVisitorsOfTheDay
}

//============================================================================//

// номер дня, коли кількість відвідувачів була максимальною;

function getMaxCountClients(clients) {
	let maxDays = []
	let maxNum = Math.max(...clients)
	for (let i = 0; i < clients.length; i++) {
		if (clients[i] === maxNum)
			maxDays.push(i + 1)
	}
	return maxDays
}

//============================================================================//

// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

function getCountClientsOfTheWorkingDays(clients) {
	let minDays = []
	let minNum = Math.min(...clients)
	for (let i = 0; i < clients.length; i++) {
		if (clients[i] === minNum)
			minDays.push(i + 1)
	}
	return minDays
}

//============================================================================//

// загальну кількість клієнтів у вихідні дні.
function getCountClientsOfTheWeekendDays(clients) {
	let clientsOfTheWeekendDays = 0
	for (let i = 5; i < clients.length; i++) {
		clientsOfTheWeekendDays += clients[i]
	}

	return clientsOfTheWeekendDays
}

const clients = getCountClientsOfWeek()

document.write(`
<div style="text-align: left">
	 Кількість клієнтів — ${clients}<br>
	•Номери днів, протягом яких кількість відвідувачів була меншою за 20 — ${getCountClientsLessThan20(clients)}<br>
	•Номер дня, коли кількість відвідувачів була мінімальною — ${getMinCountClients(clients)}<br>
	•Номер дня, коли кількість відвідувачів була максимальною — ${getMaxCountClients(clients)}<br>
	•Загальна кількість клієнтів у робочі дні — ${getCountClientsOfTheWorkingDays(clients)}<br>
	•Загальна кількість клієнтів у вихідні дні — ${getCountClientsOfTheWeekendDays(clients)} <br>
</div>

`)