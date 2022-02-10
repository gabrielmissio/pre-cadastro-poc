const UserController = require('../app/controllers/UserController');
const errorHandler = require('../app/middlewares/errorMiddleware');

module.exports = (server, routes, prefix = '/api/v1/user') => {
  routes.post('/', UserController.create, errorHandler);
  server.use(prefix, routes);
};
