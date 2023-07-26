const Joi = require("@hapi/joi");

exports.addUserSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().max(300).email().required(),
    // country: Joi.string().required(),
    // state: Joi.string().required(),
    // city: Joi.string().required(),
    // gender: Joi.string().required(),
    // dateOfBirth: Joi.string().required(),
    // age: Joi.number().required().min(15)
});

exports.getSpecificUser = Joi.object({
    id: Joi.string().required()
});

exports.getState = Joi.object({
    countryId: Joi.string().required()
});

exports.getState = Joi.object({
    cityId: Joi.string().required()
});


