// import the model we created from the models file that has
// what we want
const flightModel = require('../models/flight')

//Set up the export so that the router will have access to it
module.exports = {
    new: newFlight,
    create,
    index
}

// create each of the functions that are being exported


// function to show all of the flights & their info
async function index(req, res) {
    // get the data from the model we want, use .find
    // with an empty {}, which says to grab all the data and
    // dont bother filtering it. BUT also 'await' doing anything
    // else until you're done grabbing all the data
    const flightsData = await flightModel.find({});
    // Once you're done grabbing all the data, show a page
    // that we're calling index.ejs and pass into it
    // all the data that was just pulled aka: {flightsData}
    res.render('flightsFolder/index', {flightsData});
    // go to views/flightsFolder/index.ejs to see what happens next
}


// function for what happens once 'Add Flight' nav link is clicked
function newFlight (req,res) {
    // when you get this request, show the page new.ejs,
    // also provide to that template an empty error message that
    // it can use dynamically
    res.render('flightsFolder/new', {errorMsg: ''});
}


// function for what happens once 'add flight' button is clicked on flights/new
async function create(req, res) {
    try {
        // take the data that is being typed into the form (aka: 'req.body')
        // and create a new record in the database, using the Mongoose
        // model we made in models/flight.js
        await flightModel.create(req.body);
        // after thats done ('await'), then send the user to the page with
        // the list of all the flights in the database (/flights)
        res.redirect('/flights');
    } catch (err) {
        // if there's something wrong then send the error message
        console.log(err);
    }
}