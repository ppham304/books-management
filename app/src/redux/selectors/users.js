export const getListUser = (state) => {
	return state.users.listUser;
}

export const getUserDetail = (state) => {
	return state.users.userDetail;
}

export const getDisplayAddUser = (state) => {
	return state.users.displayAddUser;
}

export const getIsGettingListUser = (state) => {
	return state.users.isGettingListUser;
}

export const getAction = (state) => {
	return state.users.action;
}

export const getError = (state) => {
	return state.users.listError;
}
