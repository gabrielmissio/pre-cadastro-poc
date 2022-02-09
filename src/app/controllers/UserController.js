const UserService = require('../services/UserService');

class UserController {
  constructor() {
    this.userService = UserService;
  }
}

module.exports = new UserController();
