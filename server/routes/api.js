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
)

// router.post('/', 
//     commentController.postComment, 
//     (req, res) => {
//         res.status(200).json(res.locals.comment)
//     }
// )


module.exports = router;