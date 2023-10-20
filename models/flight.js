const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SFO', 'OAK'],
        default: 'OAK'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function () {
            return Date.now() + 365*24*60*60000
        }
    }
})

module.exports = mongoose.model('Flight', flightSchema)
