import * as UsersType from '../types/users';

export function getListUser() {
	return {
		type: UsersType.GET_LIST_USER,
	}
}

export function getListUserSuccess(data) {
	return {
		type: UsersType.GET_LIST_USER_SUCCESS,
		payload: {
			data: data,
		}
	}
}

export function getListUserFailed(error) {
	return {
		type: UsersType.GET_LIST_USER_FAILED,
		payload: {
			error: error,
		}
	}
}

export function getUserDetail(id) {
	return {
		type: UsersType.GET_USER_DETAIL,
		payload: {
			id: id,
		}
	}
}

export function getUserDetailSuccess(data) {
	return {
		type: UsersType.GET_USER_DETAIL_SUCCESS,
		payload: {
			data: data,
		}
	}
}

export function getUserDetailFailed(error) {
	return {
		type: UsersType.GET_USER_DETAIL_FAILED,
		payload: {
			error: error,
		}
	}
}

export function addUser(data) {
	return {
		type: UsersType.ADD_USER,
		payload: {
			data: data,
		}
	}
}

export function addUserSuccess(data) {
	return {
		type: UsersType.ADD_USER_SUCCESS,
		payload: {
			data: data,
		}
	}
}

export function addUserFailed(error) {
	return {
		type: UsersType.ADD_USER_FAILED,
		payload: {
			error: error,
		}
	}
}

export function updateUser(id, data) {
	return {
		type: UsersType.UPDATE_USER,
		payload: {
			id: id,
			data: data,
		}
	}
}

export function updateUserSuccess(data) {
	return {
		type: UsersType.UPDATE_USER_SUCCESS,
		payload: {
			data: data,
		}
	}
}

export function updateUserFailed(error) {
	return {
		type: UsersType.UPDATE_USER_FAILED,
		payload: {
			error: error,
		}
	}
}

export function deleteUser(id) {
	return {
		type: UsersType.DELETE_USER,
		payload: {
			id: id,
		}
	}
}

export function deleteUserSuccess() {
	return {
		type: UsersType.DELETE_USER_SUCCESS,
	}
}

export function deleteUserFailed(error) {
	return {
		type: UsersType.DELETE_USER_FAILED,
		payload: {
			error: error,
		}
	}
}

export function getDisplayAddUser() {
	return {
		type: UsersType.DISPLAY_ADD_USER,
	}
}

export function getDisplayUpdateUser() {
	return {
		type: UsersType.DISPLAY_UPDATE_USER,
	}
}

export function getCloseUpdateUser() {
	return {
		type: UsersType.CLOSE_UPDATE_USER,
	}
}

export function getDisplayViewBooks() {
	return {
		type: UsersType.DISPLAY_VIEW_BOOKS,
	}
}

export function getDisplayEditBooks() {
	return {
		type: UsersType.DISPLAY_EDIT_BOOKS,
	}
}

export function getCloseForm() {
	return {
		type: UsersType.CLOSE_FORM,
	}
}

export function addMoreBook() {
	return {
		type: UsersType.ADD_MORE_BOOK,
	}
}

export function addBooks(id, data) {
	return {
		type: UsersType.ADD_BOOKS,
		payload: {
			id: id,
			data: data,
		}
	}
}

export function addBooksSuccess(data) {
	return {
		type: UsersType.ADD_BOOKS_SUCCESS,
		payload: {
			data: data,
		}
	}
}

export function addBooksFailed(error) {
	return {
		type: UsersType.ADD_BOOKS_FAILED,
		payload: {
			error: error,
		}
	}
}

export function selectedBook(item, index) {
	return {
		type: UsersType.SELECTED_BOOK,
		payload: {
			item: item,
			index: index,
		}
	}
}

export function deleteBook(index) {
	return {
		type: UsersType.DELETE_USER_BOOK,
		payload: {
			index: index,
		}
	}
}
