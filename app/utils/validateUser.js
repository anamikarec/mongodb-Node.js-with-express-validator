const {body} = require("express-validator");
const validateUser = () => ([
    body("first_name")
    .not().isEmpty().withMessage("First name is required")
    .isString().withMessage("first_name should be string."),
    body("last_name")
    .not().isEmpty().withMessage("Last name is required")
    .isString().withMessage("last_name should be string."),
    body("age")
    .not().isEmpty().withMessage("Age is required")
    .isNumeric().withMessage("age should be number."),
    body("email")
    .not().isEmpty().withMessage("email is required")
    .isString().withMessage("email should be string.")
])

module.exports = validateUser;