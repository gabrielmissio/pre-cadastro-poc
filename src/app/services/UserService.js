const UserRepository = require('../repositories/UserRepository');
const UuidGenerator = require('../utils/UuidGenerator');
const concat = require('../utils/PartitionKeyConcatenator');
const NotFound = require('../errors/NotFound');

class UserService {
  async create(payload) {
    const userId = concat('USER', UuidGenerator);
    const datetime = new Date().toISOString();

    const data = {
      PK: userId,
      SK: 'PROFILE',
      ...payload,
      createdAt: datetime
    };
    const user = await UserRepository.create(data);
    return user;
  }

  async getById({ id }) {
    const tablePK = concat('USER', id);
    const user = await UserRepository.findById(tablePK);

    if (Object.keys(user).length === 0) throw new NotFound('User');

    return user;
  }
}
module.exports = new UserService();
