import { service } from './config';

export const getListBook = () => {
	return service.request({
		method: 'GET',
		url: `/api/books`,
	});
}

export const getBookDetail = (id) => {
	return service.request({
		method: 'GET',
		url: `/api/books/${id}`,
	});
}

export const addBook = (data) => {
	return service.request({
		method: 'POST',
		url: `/api/books`,
		data: data,
	});
}

export const updateBook = (id, data) => {
	return service.request({
		method: 'PUT',
		url: `/api/books/${id}`,
		data: data,
	});
}

export const deleteBook = (id) => {
	return service.request({
		method: 'DELETE',
		url: `/api/books/${id}`,
	});
}
