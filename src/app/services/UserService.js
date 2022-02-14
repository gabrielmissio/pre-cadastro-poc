const UserRepository = require('../repositories/UserRepository');
const concat = require('../utils/PartitionKeyConcatenator');
const NotFound = require('../errors/NotFound');

class UserService {
  async getById({ id }) {
    const tablePK = concat('USER', id);
    const user = await UserRepository.findById(tablePK);

    if (Object.keys(user).length === 0) throw new NotFound('User');

    return user;
  }
}
module.exports = new UserService();
