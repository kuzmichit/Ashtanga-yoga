export const changeMonth = (direction, stateMonth) => {
	//const direzione = Number(e.currentTarget.dataset.direction);
	// Gestisce l'avanzamento (1) e il ritorno indietro (-1) in una sola riga
	const newStateMonth = stateMonth = (stateMonth + direction + 12) % 12;

	// Impostiamo la nuova data (JavaScript gestisce automaticamente il cambio d'anno se sfori 0 o 11)

	return stateMonth;
}

// quando click controllo date solo giorni successivi o attuale
export const checkDate = () => {

}