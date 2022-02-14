class PKConcatenator {
  static concat(prefix, uuid) {
    return `${prefix}#${uuid}`;
  }
}

module.exports = PKConcatenator.concat;
