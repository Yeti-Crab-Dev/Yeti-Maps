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
        })
    }
}

// pin drops and we fetch the data from the longitude and lattitude




module.exports = pinController;