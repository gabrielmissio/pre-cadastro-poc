const { randomUUID } = require('crypto');

class UuidGenerator {
  static generate() {
    return randomUUID();
  }
}

module.exports = UuidGenerator.generate();
