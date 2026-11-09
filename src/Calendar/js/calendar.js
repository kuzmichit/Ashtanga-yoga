import '/src/scss/main.scss';
import '../css/calendar.css'
import { changeMonth} from './logic.js';
import { deleteNode, setTitleMonth, circleDayHighlight } from './dom.js';
import { CreateCalendar } from './calendar_factory.js';

const listDaysNode = document.querySelector('.list__days');
const buttonNextMonth = document.querySelector('.button__right');
const buttonPreviousMonth = document.querySelector('.button__left');

let stateDate = new Date();
let stateMonth = stateDate.getMonth();

const renderCalendar = () => {
	setTitleMonth(stateDate);
	// Inserimento dell' elemento
	const newCalendar = CreateCalendar(stateDate);
	listDaysNode.insertAdjacentHTML('beforeend', `${newCalendar}`);
}


const handleChangeMonth = (e) => {
	e.preventDefault();
	const direction = +e.target.dataset.direction;
	stateMonth = changeMonth(direction, stateMonth);
	
	deleteNode(listDaysNode);
	stateDate.setMonth(stateMonth);
	renderCalendar(stateDate);
}

buttonNextMonth.addEventListener('pointerdown', handleChangeMonth)
buttonPreviousMonth.addEventListener('pointerdown', handleChangeMonth)
listDaysNode.addEventListener('pointerdown', circleDayHighlight)

renderCalendar();