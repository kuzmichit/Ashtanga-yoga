const calendar = document.querySelector('.list__day');
const calendarMonthText = calendar.querySelector('.calendar-month__text')

function CreateDayList(node) {
  const placeToInsert = node;
	
  return function (date) {
    let currentDate = new Date(+date);
    currentDate.setDate(1);
    let month = currentDate.getMonth();
    let listDay = '';
      
    // I giorni che precedono il promo di mese
    // с понедельника до первого дня месяца
    // for (let i = 0; i < dayGet(currentDate); i++) {
    //   let previousMonth = new Date(+date);
    //   previousMonth.setDate(1);
    //   previousMonth.setDate(-(previousMonth.getDay() - i) + 2);
    //   listDay += `<li class="day__item_opacity day">${previousMonth.getDate()}</li>`;
    // }

		const previousMonth = new Date(date.getFullYear(), date.getMonth(), 0);
		const lastDay = previousMonth.getDate();

			for (let i = dayGet(currentDate) - 1; i >= 0; i--) {
    listDay += `<li class="day__item_opacity day">${lastDay - i}</li>`;
}
  
    // <li> ячейки календаря с датами
    while (currentDate.getMonth() === month) {
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
    // Inserimento dell' elemento
    placeToInsert.insertAdjacentHTML('beforeend', `${listDay}`);
  };
}
  
function dayGet(d) { // получить номер дня недели, от 0 (пн) до 6 (вс)
  let day = d.getDay();
  if (day === 0) day = 7; // сделать воскресенье (0) последним днем
  
  return day - 1;
}

const setInitMonth = currentMonth => {
	calendarMonthText.insertAdjacentElement('beforeend', currentMonth)
}

const renderCalendar = () => {
	calendar.classList.remove('visually-hidden')
	const currentDate = new Date(); 

	const createDayList = CreateDayList(calendar);
	createDayList(currentDate);

}
console.log()
