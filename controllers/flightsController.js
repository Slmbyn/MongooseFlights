// import the model we created from the models file that has
// what we want
const flightModel = require('../models/flight')

//Set up the export so that the router will have access to it
module.exports = {
    new: newFlight,
    create,
    index,
    show
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

// when the 'detail' link is clicked on the 'all flights page'
// the user is routed to the show.ejs page
// where they will see all of the properties for that flight
// async function show(req, res) {
//     // get the data for the flight clicked
//     const flightData = await flightModel.findById(req.params.id);
//     console.log('Flight Data:', flightData)
//     // render that data on the show.ejs page
//     res.render('flightsFolder/show', { title: 'Flight Detail', flightData });
// }

async function show(req, res) {
    try {
        // Attempt to get the data for the flight clicked
        const flightData = await flightModel.findById(req.params.id);

        // Check if flightData is null
        if (!flightData) {
            // Handle the case where no data is found
            return res.status(404).send('Flight not found');
        }

        // Render the data on the show.ejs page
        res.render('flightsFolder/show', { title: 'Flight Detail', flightData });
    } catch (error) {
        // Handle any other errors that might occur during the database query
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
