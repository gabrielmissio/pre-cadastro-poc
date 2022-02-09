const { Router } = require('express');
const user = require('./user.router');

module.exports = (server) => {
  server.use((req, res, next) => {
    user(server, new Router());
    next();
  });
};
