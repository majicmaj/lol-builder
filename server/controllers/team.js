const Team = require('../models/Team')

module.exports = {
    show: (req, res) => Team.find({})
        .then(team => res.json(team)),

    showByName: (req, res) => Team.find({ name: req.params.name })
        .then(team => res.json(team)),

    showById: (req, res) => Team.findById({ _id: req.params.id })
        .then(team => res.json(team)),

    showByChampion: (req, res) => Team.find({ champion: { $in: req.params.tags } })
        .then(team => res.json(team))
}