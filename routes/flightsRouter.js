const express = require('express');
const router = express.Router();

// import the functions from flightsController
const flightsCtrl = require('../controllers/flightsController')

// Because of the path defined on server.js when
// we mounted this flightsRouter file,
// all of the following start with /flights
// see line 32 in server.js (app.use('/flights', flightsRouter);)


// when you recieve a GET request that wants
// to go to flights/, then pull up what is 
// being exported by flightsController.js and
// run it's 'index' function.
router.get('/', flightsCtrl.index)


// when you recieve a GET request that wants
// to go to flights/new (Add Flight nav link is pressed), 
// then pull up what is being exported by 
// flightsController.js and run it's 'new' function.
router.get('/new', flightsCtrl.new);


// when the 'Add flight' button is pressed, go
// get the create function and run it
router.post('/', flightsCtrl.create);

// when 'detail' link is clicked, run the show function
router.get('/show/:id', flightsCtrl.show);

//make everything in this file availabe for import
module.exports = router;

//will be imported by the server.js file
