import * as BooksType from '../types/books'

const initState = {
	listBook: [],
	bookDetail: {},
	displayUpdateBook: false,
	isGettingListBook: false,
	isGettingBook: false,
	isAddingBook: false,
	isUpdatingBook: false,
	isDeletingBook: false,
	action: '',
	error: '',
}

function booksReducer(state = initState, action) {
	switch(action.type) {
		case BooksType.GET_LIST_BOOK:
			return {
				...state,
				isGettingListBook: true,
				error: '',
			};
		case BooksType.GET_LIST_BOOK_SUCCESS:
			return {
				...state,
				isGettingListBook: false,
				listBook: action.payload.data,
			};
		case BooksType.GET_LIST_BOOK_FAILED:
			return {
				...state,
				isGettingListBook: false,
				error: action.payload.error,
			};
		case BooksType.GET_BOOK_DETAIL:
			return {
				...state,
				isGettingBook: true,
				action: 'view',
				error: '',
			};
		case BooksType.GET_BOOK_DETAIL_SUCCESS:
			return {
				...state,
				isGettingBook: false,
				bookDetail: action.payload.data,
			};
		case BooksType.GET_BOOK_DETAIL_FAILED:
			return {
				...state,
				isGettingBook: false,
				action: '',
				error: action.payload.error,
			};
		case BooksType.DISPLAY_ADD_BOOK:
			return {
				...state,
				action: 'add',
				error: '',
			};
		case BooksType.ADD_BOOK:
			return {
				...state,
			};
		case BooksType.ADD_BOOK_SUCCESS:
			return {
				...state,
				isAddingBook: false,
				listBook: [
					...state.listBook,
					action.payload.data,
				],
				action: '',
			};
		case BooksType.ADD_BOOK_FAILED:
			return {
				...state,
				isAddingBook: false,
				error: action.payload.error,
				action: '',
			};
		case BooksType.DISPLAY_UPDATE_BOOOK:
			return {
				...state,
				action: 'update',
			};
		case BooksType.CLOSE_UPDATE_BOOK:
			return {
				...state,
				action: 'view',
			};
		case BooksType.UPDATE_BOOK:
			return {
				...state,
				isUpdatingBook: true,
				error: '',
			};
		case BooksType.UPDATE_BOOK_SUCCESS:
			const { listBook } = state;
			let clonedListBook = [...listBook];
			clonedListBook = clonedListBook.map((book) => {
				if(book._id == action.payload.data._id)
					book = action.payload.data;
				return book;
			});
			return {
				...state,
				listBook: clonedListBook,
				bookDetail: action.payload.data,
				isUpdatingBook: false,
				action: 'view',
			};
		case BooksType.UPDATE_BOOK_FAILED:
			return {
				...state,
				isUpdatingBook: false,
				error: action.payload.error,
			};
		case BooksType.DELETE_BOOK:
			return {
				...state,
				isDeletingBook: true,
				error: '',
			};
		case BooksType.DELETE_BOOK_SUCCESS:
			return {
				...state,
				isDeletingBook: false,
			};
		case BooksType.DELETE_BOOK_FAILED:
			return {
				...state,
				isDeletingBook: false,
				error: action.payload.error,
			};
		case BooksType.CLOSE_FORM:
			return {
				...state,
				action: '',
			};
		default:
			return state;
	}
}

export default booksReducer;
