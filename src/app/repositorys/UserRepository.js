const dotenv = require('dotenv');
const { dynamoDocClient } = require('../../infra/config/aws-resources');

dotenv.config();

class UserRepository {
  constructor(sortKey = 'PROFILE', user = 'USER') {
    this.sortKey = sortKey;
    this.user = user;
  }

  async create(payload) {
    return dynamoDocClient
      .put({
        TableName: process.env.AWS_DYNAMO_TABLENAME,
        Item: payload
      })
      .promise();
  }
}
module.exports = new UserRepository();
