const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontrollers');
const validateUserBody=require('../middlewares/validate')
const validateId=require('../middlewares/idvalidate');

router.post('/users',validateUserBody ,userController.createUser);
router.get('/users/:id',validateId, userController.findById);
router.get('/users', userController.getUsers);
router.put('/users/:id',validateId,userController.updateUser);
router.delete('/users/:id',validateId,userController.deleteUser);

module.exports = router;