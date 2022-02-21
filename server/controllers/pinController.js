<<<<<<< HEAD
const express = require('express');
const db = require('../models/dbModel')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


//https://maps.googleapis.com/maps/api/geocode/json?latlng=46.49639813020755,-80.99861117865834&key=AIzaSyAjEu5jgZ4h62ka6lKGEx6cGJSX2FxettY

const pinController = {};

pinController.getAllPins = async (req, res, next) => {
    // NOTE: make query more specific to only include location (long, latt)
    const queryString = 'SELECT location FROM pins';
    try {
       const result = await db.query(queryString);
       res.locals.pins = result.rows;
       next();
    }
    catch (err) {
        return next({
            log: 'Error occurred in pinController.getAllPins',
            message: `Error in pinController.getAllPins: ${err}. See server log for more detail`
=======
 const db = require('../models/dbModel');
 

const pinController = {};

pinController.getAllpins = async (req, res, next) => {
    const queryString = 'SELECT * FROM pins';
    const pins = [];
    try {
        const result = await db.query(queryString);
    
        for (let i = 0; i < result.rows.length; i++) {
            const pin = result.rows[i];
            pins.push(pin)
        }
        res.locals.pins = pins;
        return next();
    } catch (err) {
        return next({
            log: `pinController.getAllpins: ERROR: ${err}`,
            message: { err: 'Error occured in pinController.getAllPins. Check server log for more detail'}
>>>>>>> 5c9b021291022b600985012257c5abe4062807b9
        })
    }
}

<<<<<<< HEAD
// pin drops and we fetch the data from the longitude and lattitude



=======

// pinController.postPin = async (req, res, next) => {
//     try {
//         const { lat, long } = req.body;
//         const newPin = await db.query("INSERT INTO pins (lat, long) VALUES($1, $2) RETURNING *", [lat, long]);
//         res.locals.pin = newPin.rows[0];
//     } catch (err) {
//         console.log(err.message)
//     }
// };
>>>>>>> 5c9b021291022b600985012257c5abe4062807b9

module.exports = pinController;