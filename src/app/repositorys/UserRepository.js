const { randomUUID } = require('crypto');
const { dynamoDocClient } = require('../../infra/config/aws-resources');
const PKConcatenator = require('../utils/PK-concatenator');

class UserRepository {
  constructor(tableName = 'Register', sortKey = 'PROFILE', user = 'USER', uuid = randomUUID()) {
    this.tableName = tableName;
    this.sortKey = sortKey;
    this.user = user;
    this.uuid = uuid;
  }

  async create(payload) {
    const user = 'USER';
    const userId = PKConcatenator.concat(user, this.uuid);
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
