const Joi = require('joi');

const basicValidationSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'any.required': 'Email is required',
        'string.empty': 'Email must not be empty',
        'string.email': 'Email must be in a valid format',
    }),
    password: Joi.string().min(8).required().messages({
        'any.required': 'Password is required',
        'string.empty': 'Password must not be empty',
        'string.min': 'Password must have at least {#limit} characters',
    }),
});

module.exports = basicValidationSchema;
