const dynamoDocClient = require('../../infra/config/aws-resources');

class UserRepository {
  constructor(tableName = 'Register', sortKey = 'PROFILE') {
    this.tableName = tableName;
    this.sortKey = sortKey;
  }
}
module.exports = UserRepository;
