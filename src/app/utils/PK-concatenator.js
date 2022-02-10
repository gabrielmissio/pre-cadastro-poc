class PKConcatenator {
  concat(prefix, uuid) {
    return `${prefix}#${uuid}`;
  }
}

module.exports = new PKConcatenator();
