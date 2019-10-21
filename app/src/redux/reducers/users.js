import * as UsersType from '../types/users';

const initState = {
	listUser: [],
	listBook: [],
	userDetail: {},
	isGettingListUser: false,
	isGettingUserDetail: false,
	isAddingUser: false,
	isAddingBooks: false,
	isUpdatingUser: false,
	isDeletingUser: false,
	action: '',
	error: '',
}

function UsersReducer(state = initState, action) {
	const { listUser, userDetail } = state;
	let clonedListUser = [...listUser];
	switch(action.type) {
		case UsersType.GET_LIST_USER:
			return {
				...state,
				isGettingListUser: true,
				error: '',
			}
		case UsersType.GET_LIST_USER_SUCCESS:
			return {
				...state,
				listUser: action.payload.data,
				isGettingListUser: false,
			}
		case UsersType.GET_LIST_USER_FAILED:
			return {
				...state,
				isGettingListUser: false,
				error: action.payload.error,
			}
		case UsersType.GET_USER_DETAIL:
			return {
				...state,
				isGettingUserDetail: true,
				action: 'view',
				error: '',
			}
		case UsersType.GET_USER_DETAIL_SUCCESS:
			return {
				...state,
				userDetail: action.payload.data,
				isGettingUserDetail: false,
			}
		case UsersType.GET_USER_DETAIL_FAILED:
			return {
				...state,
				isGettingUserDetail: false,
				error: action.payload.error,
				action: '',
			}
		case UsersType.ADD_USER:
			return {
				...state,
				isAddingUser: true,
			}
		case UsersType.ADD_USER_SUCCESS:
			return {
				...state,
				listUser: [
					...state.listUser,
					action.payload.data,
				],
				isAddingUser: false,
				action: '',
			}
		case UsersType.ADD_USER_FAILED:
			return {
				...state,
				isAddingUser: false,
				error: action.payload.error,
			}
		case UsersType.UPDATE_USER:
			return {
				...state,
				isUpdatingUser: true,
			}
		case UsersType.UPDATE_USER_SUCCESS:
			clonedListUser = clonedListUser.map((user) => {
				if(user._id == action.payload.data._id)
					user = action.payload.data;
				return user;
			});
			return {
				...state,
				listUser: clonedListUser,
				userDetail: action.payload.data,
				isUpdatingUser: false,
				action: 'view',
			}
		case UsersType.UPDATE_USER_FAILED:
			return {
				...state,
				isUpdatingUser: false,
				action: 'view',
				error: action.payload.error,
			}
		case UsersType.DELETE_USER:
			return {
				...state,
				isDeletingUser: true,
				error: '',
			}
		case UsersType.DELETE_USER_SUCCESS:
			return {
				...state,
				isDeletingUser: false,
			}
		case UsersType.DELETE_USER_FAILED:
			return {
				...state,
				isDeletingUser: false,
				error: action.payload.error,
			}
		case UsersType.DISPLAY_ADD_USER:
			return {
				...state,
				action: 'add',
				error: '',
			}
		case UsersType.DISPLAY_VIEW_BOOKS:
			return {
				...state,
				action: 'view-book',
			}
		case UsersType.DISPLAY_EDIT_BOOKS:
			return {
				...state,
				action: 'edit-book',
				error: '',
			}
		case UsersType.DISPLAY_UPDATE_USER:
			return {
				...state,
				action: 'update',
				error: '',
			}
		case UsersType.CLOSE_UPDATE_USER:
			return {
				...state,
				action: 'view',
			}
		case UsersType.CLOSE_FORM:
			return {
				...state,
				userDetail: {},
				action: '',
			}
		case UsersType.ADD_MORE_BOOK:
			return {
				...state,
				userDetail: {
					...state.userDetail,
					borrowedBooks: [
						...state.userDetail.borrowedBooks, 
						state.listBook,
					],
				},
			}
		case UsersType.ADD_BOOKS:
			return {
				...state,
				isAddingBooks: true,
			}
		case UsersType.ADD_BOOKS_SUCCESS:
			let clonedListUser = [...listUser];
			clonedListUser = clonedListUser.map((user) => {
				if(user._id == userDetail._id)
					user = userDetail;
				return user;
			});
			return {
				...state,
				listUser: clonedListUser,
				isAddingBooks: false,
				action: 'view-book',
			}
		case UsersType.ADD_BOOKS_FAILED:
			return {
				...state,
				isAddingBooks: false,
				action: 'view-book',
				error: action.payload.error,
			}
		case UsersType.SELECTED_BOOK:
			const { borrowedBooks } = state.userDetail;
			let cloneBorrowedBooks = [...borrowedBooks];
			cloneBorrowedBooks[action.payload.index] = action.payload.item[0];
			return {
				...state,
				userDetail: {
					...state.userDetail,
					borrowedBooks: cloneBorrowedBooks,
				},
			}
		case UsersType.DELETE_USER_BOOK:
			return {
				...state,
				userDetail: {
					...state.userDetail,
					borrowedBooks: [
						...state.userDetail.borrowedBooks.slice(0, action.payload.index), 
						...state.userDetail.borrowedBooks.slice(action.payload.index + 1), 
					],
				},
			}
		default:
			return state;
	}
}

export default UsersReducer;
