const UserRepository = require('../repositorys/UserRepository');
const PKConcatenator = require('../utils/PK-concatenator');
const NotFound = require('../errors/NotFound');

class UserService {
  async getById({ id }) {
    const tablePK = PKConcatenator.concat('USER', id);
    const user = await UserRepository.findById(tablePK);

    if (Object.keys(user).length === 0) throw new NotFound('User');

    return user;
  }
}
module.exports = new UserService();
