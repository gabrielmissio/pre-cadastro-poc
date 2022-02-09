class Conflict extends Error {
  constructor(field) {
    super(`${field} is already in use`);
    this.name = 'Conflict';
  }
}

module.exports = Conflict;
