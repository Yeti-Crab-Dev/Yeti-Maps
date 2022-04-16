const db = require('../models/dbModel');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const userController = {};

userController.hasher = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPW = await bcrypt.hash(req.body.password, salt);
        res.locals.password = hashPW
        res.locals.username = req.body.username
        res.locals.name = req.body.name
        next();
    } catch (err) {
        return console.log(err)
    }
}

userController.createUser = async (req, res, next) => {
    console.log('In create user')
    try {
        const { name, username, password } = res.locals;
        console.log('res.locals in create user', res.locals);

        const queryA = `INSERT INTO users (name, username, password) VALUES ($1,$2,$3) RETURNING *`;
        console.log('insert yeah?')
        const result = await db.query(queryA, [name, username, password]);
        // res.json(result.rows[0]);

        console.log('number 2')

        const queryGetUser = 'SELECT * FROM users WHERE username = $1';

        console.log('number 3')

        const result2 = await db.query(queryGetUser, [username]);

        console.log('hello', result2.rows[0]);

        res.locals.id = result2.rows[0].user_id;

        return next();
    }
    catch (err) {
        return next({
            log: 'Error in userController.createUser',
            message: 'Cant create user!'
        });
    }
};

userController.getUserWithLogin = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const query = `SELECT * from users WHERE username = $1 AND password = $2`;
        const response = await db.query(query, [username, password]);
        res.locals.status = {};

        if (!response.rows.length) {
            res.locals.status.OK = false;
        } else {
            res.locals.status.OK = true;
            res.locals.status.user = response.rows[0];
        }
        next();
    }
    catch (err) {
        return next({
            log: `Error in userController.getUser : ${err.message}`,
            message: 'Cant get user!'
        });
    }
};

userController.getUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const query = `SELECT * from users WHERE user_id = $1`;
        const response = await db.query(query, [id]);
        if (!response.rows.length) throw new Error('no user detected');
        res.locals.user = response.rows[0];
        next();
    }
    catch (err) {
        return next({
            log: 'Error in userController.getUser',
            message: 'Cant get user!'
        });
    }
};

userController.getAllUsers = async (req, res, next) => {
    try {
        const { id } = req.params;
        const query = `SELECT * from users`;
        const response = await db.query(query);
        res.locals.users = response.rows;
        next();
    }
    catch (err) {
        return next({
            log: 'Error in userController.getUser',
            message: 'Cant get user!'
        });
    }
};

userController.updateUser = async (req, res, next) => {
    try {
        const { name, username, password } = req.body;
        const query = "UPDATE users SET name = $1, password = $2  WHERE username = $3"
        const result = await db.query(query, [name, password, username]);
        console.log(result);
        next();
    }
    catch (err) {
        return next({
            log: 'Error in userController.updateUser',
            message: 'Cant update user!'
        });
    }
};

module.exports = userController;