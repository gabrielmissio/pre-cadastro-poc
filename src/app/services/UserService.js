const UserRepository = require('../repositorys/UserRepository');

class UserService {
  constructor() {
    this.userRepository = UserRepository;
  }
}
module.exports = new UserService();
