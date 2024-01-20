// modules
const router = require('express').Router();

// endpoint
router.get('/health', (req, res, next) => {
    try {
        return res.status(200).json({
            status: true,
            message: 'API is healthy',
            data: null,
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;