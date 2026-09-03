const dayGet = (d) => { // получить номер дня недели, от 0 (пн) до 6 (вс)
	let day = d.getDay();
	if (day === 0) day = 7; // сделать воскресенье (0) последним днем

	return day - 1;
}

export const CreateCalendar = (date) => {

		let listDay = '';
		let currentDate = new Date(+date);
		currentDate.setDate(1);
		const previousStateDate = new Date(+currentDate);
		const currentMonth = currentDate.getMonth();

		previousStateDate.setDate(0);
		for (let i = dayGet(previousStateDate); i >= 0; i--) {
			listDay += `<li class="day__item_opacity day">${previousStateDate.getDate() - i}</li>`;
		}

		// <li> ячейки календаря с датами
		while (currentDate.getMonth() === currentMonth) {
			listDay += `<li class="day__item day">${currentDate.getDate()}</li>`;
			currentDate.setDate(currentDate.getDate() + 1);
		}

		// La compilazione con i giorni che seguono dopo l'ultimo di mese
		if (dayGet(currentDate) !== 0) {
			for (let i = dayGet(currentDate); i < 7; i++) {
				listDay += `<li class="day__item_opacity day ">${currentDate.getDate()}</li>`;
				currentDate.setDate(currentDate.getDate() + 1);
			}
		}
		
		return listDay;
}