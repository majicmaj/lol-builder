const mongoose = require('../db/connection')

const ChampionSchema = new mongoose.Schema({
    name: String,
    title: String,
    blurb: String,
    icon: String,
    screen: String,
    full: String,
    attack: Number,
    defense: Number,
    magic: Number,
    tags: [
        String
    ]
})

module.exports = mongoose.model("Champion", ChampionSchema)