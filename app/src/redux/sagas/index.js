import { all } from 'redux-saga/effects'

import BooksSaga from './books';
import UsersSaga from './users';


export default function* rootSaga() {
	yield all([
		BooksSaga(),
		UsersSaga(),
	])
}