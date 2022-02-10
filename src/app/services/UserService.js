const UserRepository = require('../repositorys/UserRepository');

class UserService {
  async create(payload) {
    const user = new UserRepository();
    const result = await user.create(payload);
    return result;
  }
}
module.exports = new UserService();
