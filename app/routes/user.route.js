const express = require('express');
const {getUsers, createUser} = require('../controllers/user.controller')
const validateUser = require('../utils/validateUser')
const router = express.Router();
router.get('/',getUsers);
router.post('/',...validateUser(), createUser);
module.exports = router;