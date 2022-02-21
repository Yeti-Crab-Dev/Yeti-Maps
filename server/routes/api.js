const express = require('express');

const pinController = require('../controllers/pinController');
const commentController = require('../controllers/commentController');
const userController = require('../controllers/userController')

const router = express.Router();

router.get('/', 
    commentController.getAllComments, 
    (req, res) => {
        res.status(200).json(res.locals.comments)
    }
);

router.post('/createuser', userController.createUser,(req,res)=>{
    return res.status(200).json('User created!');
});

router.post('/updateuser', userController.updateUser,(req,res)=>{
    return res.status(200).json('User updated!');
});

router.get('/user/:id', userController.getUser,(req,res)=>{
    return res.status(200).json(res.locals.user);
});

router.get('/users', userController.getAllUsers,(req,res)=>{
    return res.status(200).json(res.locals.users);
});

// router.post('/', 
//     commentController.postComment, 
//     (req, res) => {
//         res.status(200).json(res.locals.comment)
//     }
// )


module.exports = router;