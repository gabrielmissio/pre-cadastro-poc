const UserController = require('../app/controllers/UserController');

module.exports = (server, routes, prefix = '/api/v1/user') = > {
    routes.post('/', UserController.create);
    server.use(prefix, routes);
}