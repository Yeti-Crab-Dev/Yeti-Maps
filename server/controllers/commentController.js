const db = require('../models/dbModel');
const { response } = require('../server');

const commentController = {};

commentController.getAllComments = async (req, res, next) => {
    const queryString = 'SELECT p.*, u.username AS users, c.comment AS comment, c.city AS city, c.country AS country FROM pins p LEFT OUTER JOIN comments c ON p.comment_id = c.comment_id LEFT OUTER JOIN users u ON u.user_id = p.user_id;'
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




commentController.postComment = async (req, res, next) => {
    const queryString = 'WITH ins1 AS (INSERT INTO comments(comment, city, country, user_id) VALUES ($1, $2, $3, $4) RETURNING comment_id) INSERT INTO pins (lat, long, comment_id, user_id) VALUES ($5, $6, (SELECT comment_id FROM ins1), $4);'
    
    try {
        const {comment, city, country, user_id, lat, lng}  = req.body;
        const params = [comment, city, country, user_id, lat, lng];
        const newComment = await db.query(queryString, params);
        res.locals.comment = newComment.rows[0];
    } catch(err) {
        console.log(err.message)
    }
}

module.exports = commentController;