const UuidGenerator = require('../utils/UuidGenerator');
const { dynamoDocClient } = require('../../infra/config/aws-resources');
const PKConcatenator = require('../utils/PK-concatenator');

class UserRepository {
  constructor(tableName = 'Register', sortKey = 'PROFILE', user = 'USER') {
    this.tableName = tableName;
    this.sortKey = sortKey;
    this.user = user;
  }

  async create(payload) {
    const user = 'USER';
    const userId = PKConcatenator.concat(user, UuidGenerator);
    const dateTime = new Date().toISOString();

    const data = {
      PK: userId,
      SK: this.sortKey,
      ...payload,
      createdAt: dateTime
    };
    return dynamoDocClient
      .put({
        TableName: this.tableName,
        Item: data
      })
      .promise();
  }
}
module.exports = UserRepository;
