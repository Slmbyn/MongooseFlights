const flightModel = require('../models/flight')

module.exports = {
    create
}

async function create(req, res) {
    console.log('this function is running')
    const flightData = await flightModel.findById(req.params.id);
    flightData.destinations.push(req.body);
    console.log('arrival: ', flightData)
    try {
        await flightData.save();
    } catch (err) {
        console.log(err);
    }
    res.render('flightsFolder/show', { flightData });
    // res.redirect(`/flightsFolder/show/${arrivalData._id}`)
}

