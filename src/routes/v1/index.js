// module
const router = require('express').Router();

// router
const healthRouter = require('./health.route');
const authRouter = require('./auth.route');

// endpoint
router.use(healthRouter);
router.use('/auth', authRouter);

module.exports = router;