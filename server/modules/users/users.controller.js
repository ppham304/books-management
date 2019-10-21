const BaseController = require('../base/base.controller');
const UsersService = require('./users.service');

class UsersController extends BaseController {
	constructor(service) {
		super(service);
	}
}

module.exports = new UsersController(UsersService);
