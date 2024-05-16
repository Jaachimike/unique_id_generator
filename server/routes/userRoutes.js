const express = require('express');
const { createUser, getAllUsers, deleteUserById } = require('../controllers/userController');

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getAllUsers);
router.delete('/users/:uniqueId', deleteUserById);

module.exports = router;