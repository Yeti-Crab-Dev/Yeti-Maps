const express = require('express');

const pinController = require('../controllers/pinController');
const commentController = require('../controllers/commentController');
const userController = require('../controllers/userController')

const router = express.Router();

router.get('/comments',
    commentController.getAllComments,
    (req, res) => {
        res.status(200).json(res.locals.comments)
    }
)

router.post('/comments',
    commentController.postComment,
    (req, res) => {
        res.status(200).json(res.locals.comment)
    }
)

router.get('/comments',
    commentController.getAllComments,
    (req, res) => {
        res.status(200).json(res.locals.comments)
    }
)


// router.post('/pins',
//     pinController.postPin,
//     (req, res) => {
//         res.status(200).json(res.locals.pin)
//     }
// )

router.get('/pins',
    pinController.getAllpins,
    (req, res) => {
        res.status(200).json(res.locals.pins);
    }
)


// router.post('/', 
//     commentController.postComment, 
//     (req, res) => {
//         res.status(200).json(res.locals.comment)
//     }
// )


module.exports = router;