const db = require('../models/dbModel');
const { response } = require('../server');

const commentController = {};

commentController.getAllComments = async (req, res, next) => {
    const queryString = 'SELECT c.*, u.name AS users FROM comments c LEFT OUTER JOIN users u ON u.user_id = c.user_id;'
    const comments = [];
    try {
        const result = await db.query(queryString);
    
        for (let i = 0; i < result.rows.length; i++) {
            const comment = result.rows[i];
            comments.push(comment)
        }
        res.locals.comments = comments;
        return next();
    } catch (err) {
        return next({
            log: `commentController.getAllComments: ERROR: ${err}`,
            message: { err: 'Error occured in commentController.getAllComments. Check server log for more detail'}
        })
    }
    
};

module.exports = commentController;