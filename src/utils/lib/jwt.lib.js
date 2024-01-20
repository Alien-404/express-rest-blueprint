const jwt = require('jsonwebtoken');

// environments
const { SECRET_APP } = process.env;

module.exports = {
    generateToken: (payload, expiresIn, secret = SECRET_APP) => {
        return jwt.sign(payload, secret, { expiresIn });
    },
    verifyToken: (token, secret = SECRET_APP) => {
        try {
            const decoded = jwt.verify(token, secret);

            return decoded;
        } catch (error) {
            return { error: true };
        }
    },
};