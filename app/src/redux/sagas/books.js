import { put, takeLatest, all, call } from 'redux-saga/effects';

import * as booksAPI from '../api/books';
import * as BooksAction from '../actions/books';
import * as BooksType from '../types/books';

export function* watchGetListBook() {
	yield takeLatest(BooksType.GET_LIST_BOOK, getListBookSaga);
}

export function* getListBookSaga() {
	try {
		const response = yield call(booksAPI.getListBook);
		const { data } = response;
		yield put(BooksAction.getListBookSuccess(data));
	} catch (error) {
		yield put(BooksAction.getListBookFailed(error));
	}
}

export function* watchGetBookDetail() {
	yield takeLatest(BooksType.GET_BOOK_DETAIL, getBookDetailSaga);
}

export function* getBookDetailSaga(action) {
	try {
		const response = yield call(booksAPI.getBookDetail, action.payload.id);
		const { data } = response;
		yield put(BooksAction.getBookDetailSuccess(data));
	} catch (error) {
		yield put(BooksAction.getBookDetailFailed(error));
	}
}

export function* watchAddBook() {
	yield takeLatest(BooksType.ADD_BOOK, addBookSaga);
}

export function* addBookSaga(action) {
	try {
		const response = yield call(booksAPI.addBook, action.payload.data);
		const { data } = response;
		yield put(BooksAction.addBookSuccess(data));
	} catch (error) {
		yield put(BooksAction.addBookFailed(error));
	}
}

export function* watchUpdateBook() {
	yield takeLatest(BooksType.UPDATE_BOOK, updateBookSaga);
}

export function* updateBookSaga(action) {
	try {
		const response = yield call(booksAPI.updateBook, action.payload.id, action.payload.data);
		const { data } = response;
		yield put(BooksAction.updateBookSuccess(data));
	} catch (error) {
		yield put(BooksAction.updateBookFailed(error));
	}
}

export function* watchDeleteBook() {
	yield takeLatest(BooksType.DELETE_BOOK, deleteBookSaga);
}

export function* deleteBookSaga(action) {
	try {
		yield call(booksAPI.deleteBook, action.payload.id);
		yield put(BooksAction.deleteBookSuccess());
		yield call(getListBookSaga);
	} catch (error) {
		yield put(BooksAction.deleteBookFailed(error));
	}
}

export default function* Saga() {
	yield all([
		watchGetListBook(),
		watchGetBookDetail(),
		watchAddBook(),
		watchUpdateBook(),
		watchDeleteBook(),
	]);
}