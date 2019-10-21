import * as BooksType from '../types/books';

export function getListBook() {
	return {
		type: BooksType.GET_LIST_BOOK,
	}
}

export function getListBookSuccess(data) {
	return {
		type: BooksType.GET_LIST_BOOK_SUCCESS,
		payload: {
			data: data,
		}
	}
}

export function getListBookFailed(error) {
	return {
		type: BooksType.GET_LIST_BOOK_FAILED,
		payload: {
			error: error,
		}
	}
}

export function getBookDetail(id) {
	return {
		type: BooksType.GET_BOOK_DETAIL,
		payload: {
			id: id,
		},
	}
}

export function getBookDetailSuccess(data) {
	return {
		type: BooksType.GET_BOOK_DETAIL_SUCCESS,
		payload: {
			data: data,
		}
	}
}

export function getBookDetailFailed(error) {
	return {
		type: BooksType.GET_BOOK_DETAIL_FAILED,
		payload: {
			error: error,
		}
	}
}

export function addBook(data) {
	return {
		type: BooksType.ADD_BOOK,
		payload: {
			data: data,
		}
	}
}

export function addBookSuccess(data) {
	return {
		type: BooksType.ADD_BOOK_SUCCESS,
		payload: {
			data: data,
		}
	}
}

export function addBookFailed(error) {
	return {
		type: BooksType.ADD_BOOK_FAILED,
		payload: {
			error: error,
		}
	}
}

export function updateBook(id, data) {
	return {
		type: BooksType.UPDATE_BOOK,
		payload: {
			id: id,
			data: data,
		}
	}
}

export function updateBookSuccess(data) {
	return {
		type: BooksType.UPDATE_BOOK_SUCCESS,
		payload: {
			data: data,
		}
	}
}

export function updateBookFailed(error) {
	return {
		type: BooksType.UPDATE_BOOK_FAILED,
		payload: {
			error: error,
		}
	}
}

export function deleteBook(id) {
	return {
		type: BooksType.DELETE_BOOK,
		payload: {
			id: id
		}
	}
}

export function deleteBookSuccess(dataAfterDeleted) {
	return {
		type: BooksType.DELETE_BOOK_SUCCESS,
	}
}

export function deleteBookFailed(error) {
	return {
		type: BooksType.DELETE_BOOK_FAILED,
		payload: {
			error: error,
		}
	}
}

export function displayAddBook(data) {
	return {
		type: BooksType.DISPLAY_ADD_BOOK,
	}
}

export function displayBookDetail(data) {
	return {
		type: BooksType.DISPLAY_BOOK_DETAIL,
	}
}

export function getDisplayUpdateBook() {
	return {
		type: BooksType.DISPLAY_UPDATE_BOOOK,
	}
}

export function getCloseUpdateBook() {
	return {
		type: BooksType.CLOSE_UPDATE_BOOK,
	}
}

export function closeForm() {
	return {
		type: BooksType.CLOSE_FORM,
	}
}
