const { Router } = require('express');
const BooksRouter = require('./books/books.routes');
const UsersRouter = require('./users/users.routes');

const rootRouter = new Router();

rootRouter.use('/books', BooksRouter.router);
rootRouter.use('/users', UsersRouter.router);

module.exports = rootRouter;
