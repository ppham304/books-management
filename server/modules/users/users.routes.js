const BaseRouter = require('../base/base.routes');
const UsersController = require('./users.controller');

class UsersRouter extends BaseRouter {
	constructor(controller) {
		super(controller);
	}
}

module.exports = new UsersRouter(UsersController);
