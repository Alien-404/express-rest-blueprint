const rateLimit = require('express-rate-limit');

const limiterConfig = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 menit
    max: 50, // Maksimum 100 permintaan per windowMs
    message: {
        status: false,
        message: 'to many request from this IP, try again later.',
        data: null
    },
});

module.exports = limiterConfig;