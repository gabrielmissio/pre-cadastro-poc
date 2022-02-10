const UserService = require('../services/UserService');

class UserController {
  async create(req, res, next) {
    try {
      const user = await UserService.create(req.body);
      return res.status(200).json(user);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new UserController();
