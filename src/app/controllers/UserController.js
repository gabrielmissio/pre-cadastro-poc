const UserService = require('../services/UserService');
const serialize = require('../serialize/SuccessfulResponseSerialize');

class UserController {
  async getById(req, res, next) {
    try {
      const response = await UserService.getById(req.params);
      const { Item } = response;

      return res.status(200).json(serialize(Item));
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }
}

module.exports = new UserController();
