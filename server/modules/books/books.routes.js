const BaseRouter = require('../base/base.routes');
const BooksController = require('./books.controller');

class BooksRouter extends BaseRouter {
	constructor(controller) {
		super(controller);
	}
}

module.exports = new BooksRouter(BooksController);
