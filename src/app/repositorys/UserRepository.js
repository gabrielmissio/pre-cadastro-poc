const {dynamoDocClient} = require('../../infra/config/aws-resources')

class UserRepository {
  constructor(tableName = 'Register', sortKey = 'PROFILE') {
    this.tableName = tableName;
    this.sortKey = sortKey;
  }

  async findById(id) {
    return dynamoDocClient
      .get({
        TableName: this.tableName,
        Key: {
          PK: id,
          SK: this.sortKey
        }
      })
      .promise();
  }
}
module.exports = new UserRepository();
