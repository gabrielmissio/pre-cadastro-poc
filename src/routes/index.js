const router = require('express').Router();
const userRouter = require('./user.router');

router.use('/api/v1/user', userRouter);

module.exports = router;
