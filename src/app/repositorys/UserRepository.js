const { dynamoDocClient } = require('../../infra/config/aws-resources');

class UserRepository {
  async findById(id) {
    return dynamoDocClient
      .get({
        TableName: this.tableName,
        Key: {
          PK: id,
          SK: 'PROFILE'
        }
      })
      .promise();
  }
}
module.exports = new UserRepository();
