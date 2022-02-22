const db = require('../models/dbModel');


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
            message: { err: 'Error occured in commentController.getAllComments. Check server log for more detail' }
        })
    }

};

commentController.deleteComment = (req, res, next) => {
  
    const { id } = req.params;
    // const queryString = `SELECT * FROM  comments WHERE comment_id=$1`
    const queryString = `
    DELETE FROM pins WHERE pins.comment_id=$1;
    `

    //DELETE COMMENT FROM TABLE THAT MATCHES ID IN REQ.PARAMS
    
    db.query(queryString, [id], (err, result) => {
        
        if(err){
            console.log('error')
            return next({
                log: `commentController.deleteComment: ERROR: ${err}`,
                message: { err: 'Error occured in commentController.getAllComments. Check server log for more detail'}
            })
        } 
        console.log(result.rows)
        res.locals.comment = 'Deleted';
        return next();
    })
}



commentController.postComment = async (req, res, next) => {
    // NOTE: $1 = comment, $2 = city, $3 = country, etc.
    // NOTE: Inserting comment, city, country, and user_id into "comments" table, returning the created comment_id
    // NOTE: The returned comment_id is used to be inserted into "pins" table as value, together with  lat, long, and user_id
    const queryString = 'WITH commentInsert AS (INSERT INTO comments(comment, city, country, user_id) VALUES ($1, $2, $3, $4) RETURNING comment_id) INSERT INTO pins (lat, long, comment_id, user_id) VALUES ($5, $6, (SELECT comment_id FROM commentInsert), $4);'

    try {
        const { comment, city, country, user_id, lat, lng } = req.body;
        const params = [comment, city, country, user_id, lat, lng];
        const newComment = await db.query(queryString, params);
        // NOTE: inserting the created comment as a row in our comment table
        res.locals.comment = newComment.rows[0];
        next();
    } catch (err) {
        console.log(err.message)
    }
}

commentController.getFilteredComments = async (req, res, next) => {
    const query = 'SELECT pins.comment_id FROM pins WHERE lat = $1 AND long = $2';
    const query2 = 'SELECT * FROM comments WHERE comment_id = $1';
    try {
        const { lat, lng } = req.params;
        const result = await db.query(query, [lat, lng]);
        res.locals.comments = [];
        for (let i = 0; i < result.rows.length; i++) {
            const comment = await db.query(query2,[result.rows[i].comment_id]);
            res.locals.comments.push(comment.rows[0]);
        }
        next();
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = commentController;
