const express = require('express');
const usersController = require('./../controllers/users.controller');

const router = express.Router();

router
    .route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createUser);

router
    .route('/:id')
    .get(usersController.getOneUser)
    .delete(usersController.deleteUser)
    .patch(usersController.updateUser);

module.exports = router;