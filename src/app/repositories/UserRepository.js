const dotenv = require('dotenv');
const { dynamoDocClient } = require('../../infra/config/aws-resources');

dotenv.config();

class UserRepository {
  async create(payload) {
    return dynamoDocClient
      .put({
        TableName: process.env.AWS_DYNAMO_TABLENAME,
        Item: payload
      })
      .promise();
  }

  async findById(id) {
    return dynamoDocClient
      .get({
        TableName: process.env.AWS_DYNAMO_TABLENAME,
        Key: {
          PK: id,
          SK: 'PROFILE'
        }
      })
      .promise();
  }
}
module.exports = new UserRepository();
