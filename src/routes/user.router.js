const userRouter = require('express').Router();
const UserController = require('../app/controllers/UserController');

userRouter.post('/', UserController.create);

module.exports = userRouter;
