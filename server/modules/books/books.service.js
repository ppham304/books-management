const BaseService = require('../base/base.service');
const BooksModel = require('./books.model');

class BooksService extends BaseService {
	constructor(collection) {
		super(collection);
	}
}

module.exports = new BooksService(BooksModel);
