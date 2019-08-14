const Team = require('../models/Team')

module.exports = {
    create: (req, res) => Team.create(req.body)
        .then(team => res.json(team)),

    show: (req, res) => Team.find({})
        .then(team => res.json(team)),

    showByName: (req, res) => Team.find({ name: req.params.name })
        .then(team => res.json(team)),

    showById: (req, res) => Team.findById({ _id: req.params.id })
        .then(team => res.json(team)),

    showByChampion: (req, res) => Team.find({ champions: { $in: req.params.champions } })
        .then(team => res.json(team)),

    editByName: (req, res) => Team.findOneAndUpdate({ name: req.params.name }, req.body)
        .then(team => res.json(team)),

    editById: (req, res) => Team.findByIdAndDelete({ _id: req.params.id }, req.body)
        .then(team => res.json(team)),

    deleteByName: (req, res) => Team.findOneAndDelete({ name: req.params.name })
        .then(team => res.json(team)),

    deleteById: (req, res) => Team.findByIdAndDelete({ _id: req.params.id })
        .then(team => res.json(team))
}