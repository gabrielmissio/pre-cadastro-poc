const UserService = require('../services/UserService');

class UserController {
  async getById(req, res, next) {
    try {
      const response = await UserService.getById(req.params);
      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }
}

module.exports = new UserController();
