const BaseController = require('../base/base.controller');
const BooksService = require('./books.service');

class BooksController extends BaseController {
	constructor(service) {
		super(service);
	}
}

module.exports = new BooksController(BooksService);
