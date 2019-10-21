import { combineReducers } from 'redux'

import BooksReducer from './books';
import UsersReducer from './users';

const rootReducer = combineReducers({
	books: BooksReducer,
	users: UsersReducer,
})

export default rootReducer;