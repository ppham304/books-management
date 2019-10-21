export const getListBook = (state) => {
	return state.books.listBook;
}

export const getBookDetail = (state) => {
	return state.books.bookDetail;
}

export const getDisplayUpdateBook = (state) => {
	return state.books.displayUpdateBook;
}

export const getIsGettingListBook = (state) => {
	return state.books.isGettingListBook;
}

export const getIsGettingBook = (state) => {
	return state.books.isGettingBook;
}

export const getIsAddingBook = (state) => {
	return state.books.isAddingBook;
}

export const getIsDeletAddingBook = (state) => {
	return state.books.isDeletingBook;
}

export const getAction = (state) => {
	return state.books.action;
}

export const getError = (state) => {
	return state.books.error;
}
