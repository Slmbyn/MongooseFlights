const ticketModel = require('../models/ticket');

module.exports = {
    create
}

async function create(req, res) {
    try {
    const ticket = await ticketModel.create(req.body);
    res.redirect(`flights/${req.params.id}`)
    } catch (err){
        console.log(err);
    }
}