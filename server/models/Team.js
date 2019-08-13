const mongoose = require('../db/connection')

const TeamSchema = new mongoose.Schema({
    top: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Champion'
    },
    mid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Champion'
    },
    jun: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Champion'
    },
    bot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Champion'
    }, 
    sup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Champion'
    },
})

module.exports = mongoose.model("Team", TeamSchema)