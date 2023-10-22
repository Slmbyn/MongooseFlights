const flightModel = require('../models/flight')

module.exports = {
    create
}

async function create(req, res) {
    const arrivalData = await flightModel.findById(req.params.id);
    arrivalData.destinations.push(req.body);
    console.log('arrival: ', arrivalData)
    try {
        await arrivalData.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flightsFolder/${arrivalData._id}`)
}