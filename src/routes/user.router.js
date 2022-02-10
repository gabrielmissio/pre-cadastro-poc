module.exports = (server, routes, prefix = '/api/v1/user') => {
  server.use(prefix, routes);
};
