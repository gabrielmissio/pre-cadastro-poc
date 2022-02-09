const dynamoDocClient = require('../../infra/config/aws-resources');

class UserRepository {
  constructor() {
    this.dynamoDocClient = dynamoDocClient;
  }
}
module.exports = UserRepository;
