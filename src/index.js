const express = require('express');
const routes = require('./routes');
const handler = require('./app/middlewares/errorMiddleware');

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.errors();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }

  errors() {
    this.express.use(handler);
  }
}

module.exports = new App().express;
