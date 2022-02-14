class SuccessfulResponseSerialize {
  static serialize({ PK, fullname, email, cpf, cellphone, createdAt }) {
    const [, id] = PK.split('#');

    return { id, fullname, email, cpf, cellphone, createdAt };
  }
}

module.exports = SuccessfulResponseSerialize.serialize;
