const express = require("express");
const router = express.Router();
const User = require("../models/users");
const userValidator = require("./user.validator");
const controller = require("./user.controller");
const validator = require("express-joi-validation").createValidator({});


router.post(
    "/user",
    validator.body(userValidator.addUserSchema),
    controller.postUser
);

router.get(
    "/users",
    controller.getUsers
);

router.get(
    "/users/:id",
    validator.params(userValidator.getSpecificUser),
    controller.getSpecificUser
);

router.get(
    "/country",
    controller.country
);

router.get(
    "/state/:countryId",
    validator.params(userValidator.getState),
    controller.getState
);

router.get(
    "/city/:cityId",
    validator.params(userValidator.getState),
    controller.getCity
);



module.exports = router;