const { v4: uuidv4 } = require('uuid');
const { dynamoDocClient } = require('../../infra/config/aws-resources');
const PKConcatenator = require('../utils/PK-concatenator');

class UserRepository {
  constructor(tableName = 'Register', sortKey = 'PROFILE') {
    this.tableName = tableName;
    this.sortKey = sortKey;
  }

  async create(payload) {
    const v4 = uuidv4();
    const user = 'USER';
    const userId = PKConcatenator.concat(user, v4);
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
