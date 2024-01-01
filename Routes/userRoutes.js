const express = require('express');
const userController = require('../controller/userControll');
const postController=require("../controller/postController")
const router = express.Router();

router.get('/getall', userController.findAll);
router.post('/create', userController.createUser);
router.get('/find',userController.findUser)
// router.put('/update', userController.updateUser);
router.delete('/remove', userController.removeUser);

router.post("/newpost",postController.createPost)

module.exports = router;
