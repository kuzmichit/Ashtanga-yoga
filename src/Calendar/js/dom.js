export const capitalize = str => {
	if (!str) return ''; // Gestisce stringhe vuote o undefined
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const deleteNode = nodeToDelete => {
	while (nodeToDelete.firstChild) {
		nodeToDelete.firstChild.remove();
	}
}

export const setTitleMonth = date => {
	const opzioni = { month: 'long', year: 'numeric' };
	document.querySelector('.calendar-header__text').textContent =
		capitalize(date.toLocaleDateString('it-IT', opzioni));
	//console.log(calendarHeaderMonthText);
}

const removeCircleHighlight = (elem, list) => {
	let result = true;
	if (elem.getAttribute('checked')) result = false;

	for (let day of list.children) {
		if (day.classList.contains('item_checked')) {
			day.classList.remove('item_checked');
			day.removeAttribute('checked');
	}
	}
	return result;
}

const circleHighlight = (li) => {
	li.setAttribute('checked', true); 
	li.classList.add('item_checked'); // подсветить новый li
}

//accerchiamento giorno
  export const circleDayHighlight = (e) =>  {
  	e.preventDefault();
  	
    let target = e.target; // где был клик?
    if (target.tagName != 'LI') return; // не на TD? тогда не интересует
 
    
    let itemList = target.closest('UL');
    if(removeCircleHighlight(target, itemList)) circleHighlight(target); // подсветить item
  }
  
  
  