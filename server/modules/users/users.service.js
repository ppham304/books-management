const BaseService = require('../base/base.service');
const UsersModel = require('./users.model');

class UsersService extends BaseService {
	constructor(collection) {
		super(collection);
	}
}

const service = new UsersService(UsersModel);

module.exports = service;
