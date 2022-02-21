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
        })
    }
}


// pinController.postPin = async (req, res, next) => {
//     try {
//         const { lat, long } = req.body;
//         const newPin = await db.query("INSERT INTO pins (lat, long) VALUES($1, $2) RETURNING *", [lat, long]);
//         res.locals.pin = newPin.rows[0];
//     } catch (err) {
//         console.log(err.message)
//     }
// };

module.exports = pinController;