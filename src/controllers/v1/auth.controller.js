// modules
const bcrypt = require('bcrypt');

// validation
const basicValidationSchema = require("../../utils/validations/register.schema");

// lib
const { generateToken } = require('../../utils/lib/jwt.lib');

// controllers 
module.exports = {
    register: async (req, res, next) => {
        try {
            const { error, value } = basicValidationSchema.validate(req.body);

            // check if error
            if (error) {
                return res.status(400).json({
                    status: false,
                    message: error.details[0].message,
                    data: null,
                });
            }

            // Use the validated data (value) for further processing
            const { email, password } = value;

            // check user data in database

            // hash password
            const hashPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));

            // create token for verified otp (10 minutes)
            const tokenJWt = generateToken({ email }, '10m');

            return res.status(201).json({
                status: true,
                message: 'user created!',
                data: {
                    email,
                    password,
                    hashPassword,
                    token: tokenJWt
                }
            });
        } catch (error) {
            next(error);
        }
    }
}