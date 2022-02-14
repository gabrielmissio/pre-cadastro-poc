const UserRepository = require('../repositorys/UserRepository');
const concat = require('../utils/PartitionKeyConcatenator');
const UuidGenerator = require('../utils/UuidGenerator');

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
}
module.exports = new UserService();
